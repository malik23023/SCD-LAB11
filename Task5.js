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

module.exports.Search=Search;