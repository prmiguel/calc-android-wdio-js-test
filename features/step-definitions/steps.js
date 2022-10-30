import { Given, When, Then } from '@wdio/cucumber-framework'
import calculatorPage from '../pageobjects/calculator.page'

Given('I have a Calculator', async function() {
    await calculatorPage.buttonClear.click()
    await expect(calculatorPage.textInput).toHaveText('')
    
});

When('I add {word} and {word}', async function(num1, num2) {
    await calculatorPage.numberButton(num1).click()
    await calculatorPage.buttonAdd.click()
    await calculatorPage.numberButton(num2).click()
    await calculatorPage.buttonEquals.click()
});

Then('the sum should be {word}', async function(result) {
    await expect(calculatorPage.textInput).toHaveText(result)
});
