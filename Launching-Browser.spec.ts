
import { chromium, test } from "@playwright/test";

test("Launching the browser for leaftap", async () => {

    let browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://leaftaps.com/opentaps/");

    let url = page.url();
    console.log("The url opened is:", url);

    let title = await page.title();
    console.log("The title of page is:", title);

    await page.waitForLoadState("load");
    await page.waitForLoadState("domcontentloaded");

    //await page.waitForTimeout(3000);
    //await page.pause();

    await browser.close();

})

//Used the page fixture here not checking any browser in specific

test("launching the browser using page fixture", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/");

    let url2 = page.url();
    console.log("The url used in page fixture is:", url2);

    let title2 = await page.title();
    console.log("The title from page fixture is:", title2);

    await page.waitForLoadState("load");
    await page.waitForLoadState("domcontentloaded");

})

/* O/P: 
The url opened is: https://leaftaps.com/opentaps/control/main
The title of page is: Leaftaps - TestLeaf Automation Platform

The url used in page fixture is: https://leaftaps.com/opentaps/control/main
The title from page fixture is: Leaftaps - TestLeaf Automation Platform */
