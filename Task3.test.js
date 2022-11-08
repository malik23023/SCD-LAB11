const Cal = require("./Cal")
test("Testing Function Power ",()=>{
    expect(Cal.Power(2,2)).toBe(4);
 });
 
 test(" Testing Function Round ",()=>{
     expect(Cal.Round(2.6)).toBe(3);
 })
 
 test(" Testing Function Ceiling ",()=>{
 
      expect(Cal.Ceil(2.4)).toBe(3);
 });