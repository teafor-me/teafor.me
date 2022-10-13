import * as puppeteer from "puppeteer";
import { Cluster } from "puppeteer-cluster";
import { ProductData } from ".";

/*  
    This code is provided as an example to help you write your scraping code,
    but there's no one-size-fits-all approach here. If you need help, feel free
    to reach out via email or GitHub.
*/

/**
 * add documentation here if necessary
 * @returns {Promise<Array<ProductData>>} vendor product data
 */
export default async function scrapeExampleVendor(): Promise<
  Array<ProductData>
> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const urls = await getPageUrls(page);
  const productData = await scrapeProductPages(urls);
  await browser.close();
  return productData;
}
/**
 * Goes through the vendor's site and retrieve the URL for each product.
 * @param  {puppeteer.Page} page puppeteer page
 * @returns {Promise<Array<string>>} list of product URLs
 */
async function getPageUrls(page: puppeteer.Page): Promise<Array<string>> {
  const urls: Array<string> = [];
  /* the code to get the product pages varies widely between vendors.
    it's generally advisable to use page.evaluate to grab what you need.*/
  return urls;
}
/**
 * Navigates to each product page and scrapes their data one by one.
 * @param  {Array<string>} productUrls
 * @returns {Promise<Array<ProductData>>}
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
    // ignoring styling is optional, but can significantly improve performance
    await ignoreStyling(page);
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
 * Scrapes the product data from the page and return it as ProductData.
 * @param  {puppeteer.Page} page
 * @returns {Promise<ProductData>}
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
  // note that request interception might interfere with pagination in some cases
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
