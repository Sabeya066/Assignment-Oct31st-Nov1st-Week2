
import { test, webkit } from "@playwright/test";

test("Launching Flipkart in Webkit", async () => {

    let browser2 = await webkit.launch({ headless: false });
    let context2 = await browser2.newContext();
    let page2 = await context2.newPage();

    await page2.goto("https://www.flipkart.com/");

    let url3 = page2.url();
    console.log("Without using page fixture the url of flipkart is:", url3);

    let title3 = await page2.title();
    console.log("Without using page fixture the title of flipkart is:", title3);

})

test("Launching Flipkart in Webkit by using pagefixture", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    let url4 = page.url();
    console.log("Using page fixture the url of flipkart is:", url4);

    let title4 = await page.title();
    console.log("Using page fixture the title of flipkart is:", title4);

})

/* O/P: Without using page fixture the url of flipkart is: https://www.flipkart.com/
Without using page fixture the title of flipkart is: Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!
Using page fixture the url of flipkart is: https://www.flipkart.com/
Using page fixture the title of flipkart is: Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers! */