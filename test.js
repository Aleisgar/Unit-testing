
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 1 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(1)).toBe(1.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 153.48 yens", function(){
   
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(1)
    const expected = 1 * 1.2 * 127.9; 
     expect(fromDollarToYen(1)).toBe(153.48); 
})

test("One yen should be 0.00625 yens", function(){
   
    const { fromYanToPound } = require('./app.js')
    const pounds = fromYanToPound(1)
    const expected = (1/127.9)*0.8; 
     expect(fromYanToPound(1)).toBe(0.006254886630179828); 
})