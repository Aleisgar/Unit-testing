// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (valueInDollar) => {
    let euros = valueInDollar * 1.2;
    let euroToYen = euros * 127.9;
    return euroToYen;
}
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromYanToPound = (valueInYan) => {
    let euros = valueInYan / 127.9;
    let euroToPound = euros * 0.8;
    return euroToPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };
