//import puppeteer
const puppeteer = require('puppeteer');


(async () => {
  const width=1024, height=1600;
  //start browser
  const browser = await puppeteer.launch({ 
    headless: false, 
    defaultViewport: { width, height } 
  });

  //this function will do all the posting later

  const makePost = async() =>{
    //get the new tab as postpage

    let pages = await browser.pages()
    let postPage = pages[pages.length-1]

    //this wait for selector method postpones code until the element appears/loads

    await postPage.waitForSelector('#email')
    await postPage.waitForSelector('#pass')

    //the type method takes 2 params, tha first one is the element(has to be an input), the second one is the data you want to pass
     
    await postPage.type('#email', "<your facebook email>")
    await postPage.type("#pass", "<your facebook password>")
    await postPage.click('[name="login"]')

    // we wait for the comment input after logging in

    await postPage.waitForSelector('[name="xhpc_message_text"]')
    await postPage.type('[name="xhpc_message_text"]', "<your comment>")

    // 👍 feel good about yourself , this is the last step

    await postPage.click('[name="__CONFIRM__"]')
  }
  const page = await browser.newPage();
  await page.setViewport( { 'width' : width, 'height' : height } );

  //you can add your tuko link here 

  await page.goto('https://www.tuko.co.ke/408501-usher-gets-roasted-online-allegedly-giving-stripper-fake-money.html');
  await page.evaluate(() => {
    let elements = document.getElementsByClassName('social-sharing__item');
    elements[0].click()
  }) 

  // here we wait abit for the new tab before we start posting
  setTimeout(()=>{
    makePost()
  },2000)
  
  await browser.close();
})();