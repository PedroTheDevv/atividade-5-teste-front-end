// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test3', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test3', async function() {
    await driver.get("https://cadastrocars.vercel.app/")
    await driver.manage().window().setRect({ width: 1051, height: 797 })
    await driver.findElement(By.css(".carItem:nth-child(1) .pointButton")).click()
    await driver.findElement(By.css(".pointWindowBtn:nth-child(2)")).click()
    assert(await driver.switchTo().alert().getText() == "Tem certeza que deseja excluir?")
    await driver.switchTo().alert().accept()
    //Verificar se o primeiro carro da lista foi excluido
  })
})
