import * as puppeteer from "puppeteer";
import { Cluster } from "puppeteer-cluster";
import { ProductData } from ".";
/**
 *
 */
export default async function scrapeExampleVendor() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const urls = await getPageUrls(page);
  const productData = await scrapeProductPages(urls);
  await browser.close();
  return productData;
}
/**
 * @param  {puppeteer.Page} page
 * @returns Promise
 */
async function getPageUrls(page: puppeteer.Page): Promise<Array<string>> {
  const urls: Array<string> = [];
  /* the code to get the product pages varies widely between vendors.
    it's generally advisable to use page.evaluate to grab what you need.*/
  return urls;
}
/**
 * @param  {Array<string>} productUrls
 * @returns Promise
 */
async function scrapeProductPages(
  productUrls: Array<string>
): Promise<Array<ProductData>> {
  const data: Array<ProductData> = [];
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    // you can change this, but make sure you have enough memory
    maxConcurrency: 2,
    timeout: 48000,
  });
  await cluster.task(async ({ page, data: url }) => {
    // optional, but can significantly improve performance
    await ignoreStyling(page);
    console.log(`Awaiting: ${url}`);
    await page.goto(url);
    // add whichever selector you need for scraping the data
    await page.waitForSelector(".placeholder");
    const product = await scrapePage(page);
    data.push(product);
  });
  for (let i = 0; i < productUrls.length; i++) {
    cluster.queue(productUrls[i]);
  }
  await cluster.idle();
  await cluster.close();
  return data;
}
/**
 * @param  {puppeteer.Page} page
 * @returns Promise
 */
async function scrapePage(page: puppeteer.Page): Promise<ProductData> {
  const url = page.url();
  const product = await page.evaluate(() => {
    // (your code here)
    return {
      // edit based on your code
      url: url,
      title: "",
      type: "",
      price: 0,
      description: "",
      imgSrc: "",
      vendor: "",
      updatedAt: Date.now(), // don't change this
      variants: [],
    };
  });
  return product;
}
/**
 * Auxiliary function to avoid loading images, styles and fonts.
 * @param  {puppeteer.Page} page
 */
async function ignoreStyling(page: puppeteer.Page) {
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (
      req.resourceType() == "stylesheet" ||
      req.resourceType() == "font" ||
      req.resourceType() == "image"
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });
}
