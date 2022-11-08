const Cal = require("./Cal")



test ("Testing Sum", ()=>{

expect(Cal.Sum(1,2)).toBe(3);

} );



test("Testing Divison ",()=>{
    expect(Cal.Div(1,0)).toBe(Infinity);
});

test("Testing Divison ",()=>{
    expect(Cal.Div(1,1)).toBe(1);
});


test("Testing Multiply ", ()=>{
    expect(Cal.Mul(1,2)).toBe(2);
});


test("Testing Subtraction ", ()=>{

     expect(Cal.Sub(2,1)).toBe(1);
});