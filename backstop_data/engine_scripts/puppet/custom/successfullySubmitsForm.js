const fillMandatoryFields = require("./fillAllMandatoryFls")

module.exports = async page => {
    await fillMandatoryFields(page)
    await page.click("button[type=\"submit\"]")
}