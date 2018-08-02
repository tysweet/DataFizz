const puppeteer = require('puppeteer');

puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();
  const results = [];

  await page.goto('https://www.amazon.com/');
  const [response] = await Promise.all([
    await page.hover('#nav-link-shopall > span.nav-line-2'),
    await page.waitFor(500),
    await page.hover('#nav-flyout-shopAll > div.nav-template.nav-flyout-content.nav-tpl-itemList > span:nth-child(9) > span'),
    await page.waitFor(500),
    await page.click('#nav-flyout-shopAll > div.nav-subcats > div:nth-child(8) > div:nth-child(4) > a:nth-child(1) > span'),
    await page.waitFor(500),
    await page.goto('https://www.amazon.com/b/ref=gbpp_itr_m-3_0168_Arts&Pho?node=1&ie=UTF8'),
    await page.waitFor(1000),
    await page.click('#result_0 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-right > div.a-row.a-spacing-small'),
    await page.waitFor(2000),
    firstResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(4)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(firstResult),
    await page.waitFor(200000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_1 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
    await page.waitFor(2000),
    secondResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(secondResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_2 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left'),
    await page.waitFor(2000),
    thirdResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(thirdResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_3 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    fourthResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(fourthResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_4 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    fifthResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(fifthResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_5 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    sixthResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(sixthResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_6 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    seventhResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(seventhResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_7 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    eighthResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(eighthResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_8 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    ninthResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(ninthResult),
    await page.waitFor(200000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_9 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    tenthResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(tenthResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_10 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    eleventhResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(eleventhResult),
    await page.waitFor(2000),
    await page.goBack(),
    await page.waitFor(1000),
    await page.click('#result_11 > div > div.a-fixed-left-grid > div > div.a-fixed-left-grid-col.a-col-left > div > div'),
    await page.waitFor(2000),
    twelfthResult = await page.evaluate(() => {
      let id = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(5)').innerText;
      id = id.substring(id.lastIndexOf(":") + 1).trim();
      let imageURLs = document.querySelector('#imgBlkFront');
      let name = document.querySelector('#productTitle').innerText;
      let listPrice = document.querySelector('#buyNewSection > h5 > div > div.a-column.a-span8.a-text-right.a-span-last > div > span.a-size-medium.a-color-price.offer-price.a-text-normal').innerText;
      let iframe = document.getElementById('bookDesc_iframe');
      let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      let description = innerDoc.querySelector('#iframeContent').innerText;
      let dimensions = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(6)').innerText;
      dimensions = dimensions.substring(dimensions.lastIndexOf(":") + 1).trim();
      let weight = document.querySelector('#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(7)').innerText;
      weight = weight.substring(weight.lastIndexOf(":") + 1);
      weight = weight.substring(0, weight.indexOf("(")).trim();
      let sourceURL = window.location.href;
        return {id, imageURLs, name, listPrice, description, dimensions, weight, sourceURL};
    }),
    console.log(twelfthResult),
    await page.waitFor(2000),
    await page.goBack(),
  ]);

  
});