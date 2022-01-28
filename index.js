import puppeteer from 'puppeteer';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to homepage')
})

const port = 8080;
app.listen(port, ()=> {
    console.log('Wazzzaaap');
})

// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://ynet.co.il');
//     page.click(selector, clickOptions)
//     // const title = await page.title()
//     // console.log(title)
//     await browser.close();
// })();