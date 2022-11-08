function Sum(a,b){
    return a+b;
}

function Div(a,b){
    return a/b;
}

function Mul(a,b){
    return a*b;
}

function Sub(a,b){
    return a-b;
}

function Natural(a,b,z){
var sum=0;
    for(var i=0;i<z;i++){
        if(i%a==0){
            sum=sum+i;
        }

        if(i%b==0){
            sum=sum+i;
        }
    }
    return sum;

}

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

function Reverse(str){

     var newString = "";
 

     for (var i = str.length - 1; i >= 0; i--) { 
         newString += str[i]; 
     }

     return newString; 
}

function Search(a){

    var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var ans= false;
    for(var i=0;i<20;i++){
        if(a==arr[i]){
            ans=true
            break;
        }
    }

    return ans;

}

module.exports.Sum=Sum;
module.exports.Mul=Mul;
module.exports.Div=Div;
module.exports.Sub=Sub;
module.exports.Natural=Natural;
module.exports.Power=Power;
module.exports.Round=Round;
module.exports.Ceil=Ceil;
module.exports.Reverse=Reverse;
module.exports.Search=Search;