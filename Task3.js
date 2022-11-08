function Power(a,b){
    for(var i=1;i<=b;i++){
       a=a*i;
    }

    return a;

}

function Round(a){
   let x= Math.round(a);
   return x;
}

function Ceil(a){
   let x= Math.ceil(a);
   return x;
}

module.exports.Power=Power;
module.exports.Round=Round;
module.exports.Ceil=Ceil;