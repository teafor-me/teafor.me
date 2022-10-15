<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/teafor-me/teafor.me">
    <img src="public/icon.png" alt="teaforme icon" width="80" height="80">
  </a>

<h3 align="center">teafor.me</h3>

  <p align="center">
    the new way to browse tea
  </p>
</div>

## About

[![screenshot of teafor.me][product-screenshot]](https://teafor.me/)

teafor.me makes browsing quality tea from your favorite vendors lightning fast, fun, and effortless. Easily sort and filter products by whatever matters most to you, from type to vendor to price. Use the search to find exactly what you’re looking for, or shuffle the products to discover something new. teafor.me’s lightweight responsive user interface shows you everything you need to know about a product at a glance, no matter what device you use. With thousands of products from leading vendors and data updated daily, teafor.me streamlines exploring quality premium tea like never before.

**teafor.me is a non-commercial passion project developed and maintained for the benefit of the tea community. Its creation was motivated by a personal desire to make finding great tea simple, no matter your location, taste or budget by cooperating with highly reputable vendors of (mostly) unflavored tea from around the world.**

### Built with

[![Typescript][typescript]][typescript-url] [![Next][next.js]][next-url] [![React][react.js]][react-url] [![Firebase][firebase]][firebase-url] [![Node.js][node]][node-url] [![Puppeteer][puppeteer]][puppeteer-url] [![Google Cloud Platform][gcp]][gcp-url] [![Sass][sass]][sass-url] [![Framer Motion][framer]][framer-url] [![GraphQL][graphql]][graphql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

teafor.me was created for the tea community, and we’re always aiming to improve how it meets the community’s needs. Contributions by members of the community are encouraged!

**Unfortunately, fully open-sourcing teafor.me is not possible for the time being.** It’s important to protect the intellectual property of the vendors with whom teafor.me is partnered. If made public, much of teafor.me’s code could enable bad actors to misuse data or intellectual property that should only be used with the express permission of vendors. In addition to the demo code in this repository, contributors may be given private access to certain parts of teafor.me‘s code to the extent required for their contribution. Furthermore, frontend contributions submitted via pull requests will be public.

**_Please note that contributions are subject to [teafor.me's terms of use](https://teafor.me/terms)._**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Help add a vendor to teafor.me

**_(If you are associated with a vendor and would like to request that your products be added to teafor.me, please contact copyright@teafor.me.)_**

Is there a premium tea vendor you’d like to see added to teafor.me? We’re always open to consider expanding teafor.me’s catalog.

Start by opening an issue using the `Vendor Request` template.
In order to maintain a high standard of quality and trustworthiness on teafor.me, vendor requests need to be accompanied by proof of community support and must receive admin approval before being processed.
Once a requested vendor is approved, please email the vendor to ask for their permission to display their products on teafor.me and CC copyright@teafor.me. You are welcome to use [the email template in this repository](/templates/email.txt) to do so. Once permission is granted, you can start working to integrate the vendor’s products. The process depends on the type of online shop the vendor has:

- For vendors using **Shopify**, no additional steps are required on your part.
- For vendors using **other e-commerce platforms** (such as BigCommerce, WooCommerce, or Spree Commerce), please contact teafor.me’s admin to determine what steps need to be taken depending on the specific platform.
- For vendors **not using any e-commerce platform**, it may be necessary to use Puppeteer to scrape product data. You can find an example [here](/templates/backend/src/example.ts). If it is decided that the data from the requested vendor needs to be scraped, please use [this template](/templates/backend/src/index.ts).

Due to intellectual property and privacy concerns, please **do not** submit code related to vendor requests via pull requests! Instead, push your code to a new repository. If you create a private repository (preferable), add `@jhyahav` as a collaborator. Otherwise, send a link to your repository to contribute@teafor.me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Contribute to the frontend by creating a React component or a Next.js page

Do you think teafor.me's frontend is missing something? New pages and components that expand what teafor.me has to offer are always welcome.

Start by opening an issue using the `Feature Request` template describing what you'd like to add, and make sure to state that you'll be able to implement it. Please note that not all pages and components can be added to teafor.me for various reasons, so it's best to wait for confirmation that your page/component can be added before starting work on it.

To contribute to the frontend, fork this repository and add your custom page(s) or component(s) in the [`templates/frontend`](/templates/frontend/) folder, then submit your code via a pull request. **Please stick to TSX and try to keep the number of dependencies beyond those already in `package.json` to a minimum.** If your contribution includes new styles, please add them as a Sass module in the [`styles`](/templates/frontend/styles/) folder.

If you need access to parts of teafor.me's frontend code for your contribution, make sure to mention this in your feature request and to be in touch with teafor.me's administrator.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Help with new features

If you’d like to help add features (preferably ones you can help implement), you can open a feature request issue to suggest a new one. You can also offer your assistance in adding features suggested by other community members under the `help wanted` tag.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Report and help solve bugs

If you encounter a bug or an error while using teafor.me, it would be very helpful if you could report it. You can do this by opening an issue using the `Bug Report` template. Please provide as much information as you can.
Additional input on unsolved bugs, be it adding information to existing reports or suggesting possible solutions, is also appreciated, as is your help with bugs tagged `help wanted`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### If you are interested in contributing to teafor.me in a way that is not listed above, please contact contribute@teafor.me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Please see [teafor.me's contact page](https://teafor.me/contact) for general contact information. For inquiries related to contributions, please email contribute@teafor.me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: public/screenshot.jpg
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[firebase]: https://img.shields.io/badge/Firebase-0396E5?style=for-the-badge&logo=firebase&logoColor=FFCA28
[firebase-url]: https://firebase.google.com/
[puppeteer]: https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=FFFFFF
[puppeteer-url]: https://pptr.dev/
[sass]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=FFFFFF
[sass-url]: https://sass-lang.com/
[framer]: https://img.shields.io/badge/Framer--motion-black?style=for-the-badge&logo=framer&logoColor=blue
[framer-url]: https://www.framer.com/motion/
[node]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/
[gcp]: https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[gcp-url]: https://cloud.google.com/
[graphql]: https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white
[graphql-url]: https://graphql.org/
