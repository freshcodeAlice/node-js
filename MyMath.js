class MyMath{
    static sum(a,b) {
        return a+b;
    }
    static sub(a,b){
        return a-b;
    }
    static mult(a,b){
        return a*b;
    }
    static div(a,b){
        return a/b;
    }
}

console.log('MyMath console');

exports.MyMath = MyMath;