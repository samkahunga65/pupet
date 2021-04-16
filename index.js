const puppeteer = require('puppeteer');
const sharePage = async() =>{
    let pages = await browser.pages();
    console.log({pages})
}

(async () => {
    const width=1024, height=1600;
  const browser = await puppeteer.launch({ 
    headless: false, 
    defaultViewport: { width, height } 
});
  const page = await browser.newPage();
  await page.setViewport( { 'width' : width, 'height' : height } );
  await page.goto('https://www.tuko.co.ke/408501-usher-gets-roasted-online-allegedly-giving-stripper-fake-money.html');
  await page.evaluate(() => {
    let elements = document.getElementsByClassName('social-sharing__item');
    elements[0].click()}) 
    let pages2 = await browser.pages()
    console.log(pages2.length)
    let postPage = pages2[2]
    await postPage.$eval('input[name=xhpc_message_text]', el => el.value = 'Adenosine triphosphate');

//   await browser.close();
})();