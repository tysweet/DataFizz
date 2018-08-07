const puppeteer = require('puppeteer');
const fs = require('fs');

// Main Web Crawler Function
function crawlPage() {
  // Get Product IDs
  let id = ue_id;
  // Get Product Names
  let name = document.querySelector('#productTitle').innerText;
  // Get Product Pricing
  let listPrice = document.querySelector('.offer-price').textContent;
  // Get Product Descriptions
  let iframe = document.getElementById('bookDesc_iframe');
  let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  let description = innerDoc.querySelector('#iframeContent').innerText;
  // Get Product Dimensions and Trim
  let product_dimension = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').textContent;
  product_dimension = product_dimension.substring(product_dimension.lastIndexOf(":") + 1).trim();
  // Get Product Images
  let imageURLs = document.getElementById('imgBlkFront').src;
  // Get Product Weight and Trim
  let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').textContent;
  weight = weight.substring(weight.lastIndexOf(":") + 1);
  weight = weight.substring(0, weight.indexOf("(")).trim();
  // Get Product Page URL
  let sourceURL = window.location.href;
  // Return Variables Created Above
  return {id, name, listPrice, description, product_dimension, imageURLs, weight, sourceURL};
};

// Launch Puppeteer Library and Navigate Amazon Website (browser opens because headless: false - to run without browser change headless: true)
puppeteer.launch({headless: false}).then(async browser => {
  // New Browser Tab and Amazon Web Page Navigation
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/');
  // Hover over Amazon Departments Dropdown
  await page.hover('#nav-link-shopall > span.nav-line-2'),
  await page.waitFor(500),
  // Hover Over Books & Audible Section
  await page.hover('#nav-flyout-shopAll > div.nav-template.nav-flyout-content.nav-tpl-itemList > span:nth-child(9) > span'),
  await page.waitFor(500),
  // Click to Books Section on Main Amazon Page
  await page.click('#nav-flyout-shopAll > div.nav-subcats > div:nth-child(8) > div:nth-child(4) > a:nth-child(1) > span'),
  await page.waitFor(3000),
  // Click to Arts & Photography Section within Amazon Books Section
  await page.click('#leftNav > ul:nth-child(6) > ul > div > li:nth-child(1) > span > a'),
  await page.waitFor(3000),
  // First Result Detail Page in Best Sellers List for Arts & Photo Section
  await page.click('#result_0 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-right > div.a-row.a-spacing-small'),
  await page.waitFor(3000);
  // First Product Data Saved to Variable
  firstResult = await page.evaluate(crawlPage),
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Second Result Detail Page
  await page.click('#result_1 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Second Product Data Saved to Variable
  secondResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Third Result Detail Page
  await page.click('#result_2 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Third Product Data Saved to Variable
  thirdResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Fourth Result Detail Page
  await page.click('#result_3 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Fourth Product Data Saved to Variable
  fourthResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Fifth Result Detail Page
  await page.click('#result_4 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Fifth Product Data Saved to Variable
  fifthResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Sixth Result Detail Page
  await page.click('#result_5 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Sixth Product Data Saved to Variable
  sixthResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Seventh Result Detail Page
  await page.click('#result_6 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Seventh Product Data Saved to Variable
  seventhResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Eighth Result Detail Page
  await page.click('#result_7 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Eighth Product Data Saved to Variable
  eighthResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Ninth Result Detail Page
  await page.click('#result_8 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Ninth Product Data Saved to Variable
  ninthResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Tenth Result Detail Page
  await page.click('#result_9 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Tenth Product Data Saved to Variable
  tenthResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Eleventh Result Detail Page
  await page.click('#result_10 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Eleventh Product Data Saved to Variable
  eleventhResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),
  await page.waitFor(3000),
  // Twelfth Result Detail Page
  await page.click('#result_11 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
  await page.waitFor(3000);
  // Twelfth Product Data Saved to Variable
  twelfthResult = await page.evaluate(crawlPage)
  await page.waitFor(3000),
  await page.goBack(),

  // Close Browser Window
  await browser.close();

  //Write results.json File With Object Data Collected Above
  let obj = {
    product: []
  };

  obj.product.push(firstResult, secondResult, thirdResult, fourthResult, fifthResult, sixthResult, seventhResult, eighthResult, ninthResult, tenthResult, eleventhResult, twelfthResult);

  let json = JSON.stringify(obj, null, "\t");
  fs.writeFile('results.json', json, 'utf8');
  console.log('File written successfully!');

});
