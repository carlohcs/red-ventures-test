/**
 * Get a page and
 *
 * @returns {Promise}
 */
async function getHomePage() {
  const page = global.page

  await page.goto(global.config.baseUrl)
  await page.waitForSelector('.page--home')
  console.log(page)
  return page
}

/**
 * Get a page and evaluate a function
 *
 * @param   {Function} fn
 * @returns {Promise}
 */
async function getHomePageAndEvaluate(fn) {
  const page = global.page

  await page.goto(global.config.baseUrl)
  await page.waitForSelector('.page--home')
  return await page.evaluate(fn)
}

jest.setTimeout(global.TEST.TIMEOUT)

describe('Home', () => {
  beforeAll(async () => global.TEST.beforeAll(), global.TEST.TIMEOUT)
  afterAll(async () => global.TEST.afterAll(), global.TEST.TIMEOUT)

  it('Should render home', async () => {
    expect.assertions(1)
    const html = await getHomePageAndEvaluate(
      () => document.querySelector('.page--home').innerHTML
    )

    expect(html).toMatchSnapshot()
  })

  it('Should render server valid results when user change select', async () => {
    const page = await global.page

    // Select the valid options
    await page.select('select[data-step="sun"]', 'low')
    await page.select('select[data-step="water"]', 'rarely')
    await page.select('select[data-step="pets"]', 'true')

    // Wait for server response
    await page.waitForSelector('.page__results__found--active')

    // Get items
    const results = await page.$$('.result__item')

    expect(results.length).toBeGreaterThan(0)
  })

  it('Should render not found results when user change select', async () => {
    const page = await global.page

    // Select the valid options
    await page.select('select[data-step="sun"]')

    // Wait a time for server response
    await page.waitForTimeout(2000)

    // Get non existent items
    const isNotFoundElementActive = await getHomePageAndEvaluate(() =>
      document
        .querySelector('.page__results__not-found')
        .classList.contains('page__results__not-found--active')
    )

    expect(isNotFoundElementActive).toBeFalsy()
  })
})
