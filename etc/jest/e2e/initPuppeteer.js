import puppeteer from 'puppeteer'

async function initPuppeteer() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  return browser
}

export default initPuppeteer
