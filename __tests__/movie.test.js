const { Builder, Capabilities, By } = require("selenium-webdriver")
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5501/movie-list/index.html')
})


test('add a movie', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))
    const searchTerm ="Lion King"
    await theInput.sendKeys(searchTerm)

    const theButton = await driver.findElement(By.css('button'))
    
    await theButton.click();
    const theResult = await driver.findElement(By.xpath('//li/span')).getText()

    expect(theResult).toBe(searchTerm)
    await driver.sleep(3000)
})

test("crossing movie off list", async () => {
    const theInput = await driver.findElement(By.xpath('//input'))
    const searchTerm ="Lion King"
    await theInput.sendKeys(searchTerm)

    const theButton = await driver.findElement(By.css('button'))
    
    await theButton.click();
    const theResult = await driver.findElement(By.xpath('//li/span'))
    await theResult.click()
await driver.sleep(3000)
})
test("Delete a movie", async () => {
    const theInput = await driver.findElement(By.xpath('//input'))
    const searchTerm ="Lion King"
    await theInput.sendKeys(searchTerm)

    const theButton = await driver.findElement(By.css('button'))
    
    await theButton.click();
    const theResult = await driver.findElement(By.xpath('//li/span'))
    await theResult.click()
    let deleteButton = await driver.findElement(By.xpath("(//button[text()='x'])[1]"))
    await deleteButton.click();
  
    await driver.sleep(5000)
  })

afterAll(async () => {
    await (await driver).quit()
})