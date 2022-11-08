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

    module.exports.Natural=Natural;