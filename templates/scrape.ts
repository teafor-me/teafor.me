interface ProductData {
  title: string;
  price: number; // in cents
  imgSrc: string;
  url: string;
  vendor: string;
  updatedAt: number; // timestamp returned by Date.now()
  variants: Array<ProductVariants>;
  description?: string; // HTML, no need to parse
  tags?: Array<string>; // try to filter out uninformative tags
  type?: string; // must be lowercase!
}

// any product type that is not a TeaType is considered miscellaneous
type TeaType =
  | "green tea"
  | "oolong tea"
  | "black tea"
  | "white tea"
  | "ripe puer tea"
  | "raw puer tea"
  | "yellow tea";

interface ProductVariants {
  available: boolean;
  title: string;
  price: number; // in cents
  numericalAmount?: number; // in grams
}

/**
 * add documentation here if necessary
 * @return {Promise<Array<ProductData>>} [insert vendor here] product data
 */
export default async function scrape(): Promise<Array<ProductData>> {
  // your code here
  return [];
}
