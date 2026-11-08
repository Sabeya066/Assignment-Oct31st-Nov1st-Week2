
import { test, webkit } from "@playwright/test";

test("Launching Flipkart in Webkit", async () => {

    let browser = await webkit.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.flipkart.com/");

    let url = page.url();
    console.log("Without using page fixture the url of flipkart is:", url);

    let title = await page.title();
    console.log("Without using page fixture the title of flipkart is:", title);

})

test("Launching Flipkart in Webkit by using pagefixture", async ({ page, browserName }) => {

    test.skip(browserName !== "webkit", "This test runs only on webkit");
    await page.goto("https://www.flipkart.com/");

    let url = page.url();
    console.log("Using page fixture the url of flipkart is:", url);

    let title = await page.title();
    console.log("Using page fixture the title of flipkart is:", title);

})

/* O/P: Without using page fixture the url of flipkart is: https://www.flipkart.com/
Without using page fixture the title of flipkart is: Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!
Using page fixture the url of flipkart is: https://www.flipkart.com/
Using page fixture the title of flipkart is: Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers! */
