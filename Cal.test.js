const Cal = require("./Cal")



test ("Testing Sum", ()=>{

expect(Cal.Sum(1,2)).toBe(3);

} );



test("Testing Divison ",()=>{
    expect(Cal.Div(1,1)).toBe(1);
});


test("Testing Multiply ", ()=>{
    expect(Cal.Mul(1,2)).toBe(2);
});


test("Testing Subtraction ", ()=>{

     expect(Cal.Sub(2,1)).toBe(1);
});


test("Testing NAtural Fun ",()=>{
    expect(Cal.Natural(3,5,10)).toBe(23);
});

test("Testing Function Power ",()=>{
   expect(Cal.Power(2,2)).toBe(4);
});

test(" Testing Function Round ",()=>{
    expect(Cal.Round(2.6)).toBe(3);
})

test(" Testing Function Ceiling ",()=>{

     expect(Cal.Ceil(2.4)).toBe(3);
});
test(" Testing Function Reverse ",()=>{
     
    expect(Cal.Reverse("hello")).toBe("olleh");
});

test(" Testing Search Fun ",()=>{
 expect(Cal.Search(5)).toBe(true);
      
});