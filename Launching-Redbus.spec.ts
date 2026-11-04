

import { chromium, test, webkit } from "@playwright/test";

test("Launching Redbus in Edge", async () => {

    //I used chromium here because MS edge is built on chromium got error with msedge.launch
    let browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.redbus.in/");

    let url = page.url();
    console.log("Without using page fixture the url of redbus is:", url);

    let title = await page.title();
    console.log("Without using page fixture the title of redbus is:", title);

})

//**************************************************************************** 

test("Launching Redbus in Edge by using page fixture", async ({ page }) => {

    await page.goto("https://www.redbus.in/");

    let url2 = page.url();
    console.log("Using page fixture the url of redbus is:", url2);

    let title2 = await page.title();
    console.log("Using page fixture the title of redbus is:", title2);
})


/* O/P: Without using page fixture the url of redbus is: https://www.redbus.in/
Without using page fixture the title of redbus is: Bus Booking Online and Train Tickets at Lowest Price - redBus
Using page fixture the url of redbus is: https://www.redbus.in/
Using page fixture the title of redbus is: Bus Booking Online and Train Tickets at Lowest Price - redBus */

//**************************************************************************************