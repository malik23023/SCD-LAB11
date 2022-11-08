function Sum(a,b){
    return a+b;
}

function Div(a,b){
    if(b==0){
        return "Infinity";
    }
    
    return a/b;
}

function Mul(a,b){
    return a*b;
}

function Sub(a,b){
    return a-b;
}

module.exports.Sum=Sum;
module.exports.Mul=Mul;
module.exports.Div=Div;
module.exports.Sub=Sub;