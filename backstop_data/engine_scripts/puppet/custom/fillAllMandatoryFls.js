module.exports = async page => {
    await page.type("#first-name", "João")
    await page.type("#last-name", "Silva")
    await page.type("#email", "joao-silva@email.com")
    await page.click("#agree")
}