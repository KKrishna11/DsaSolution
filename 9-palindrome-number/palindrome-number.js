/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var s = x.toString()
    var t = s.split("").reverse().join("")
    return s === t

    // if(x<0)
    // {
    //     return false
    // }
    // let reverse = 0;
    // for(let i=x;i>=1;i=Math.floor(i/10))
    // {
    //     reverse=reverse*10+i%10
    // }
    // return reverse===x

};