/*
nums=[1,5,9]
i=0
j=0
0+0;
1+5?=10no
1+9? =10
*/

// O(n^2)
// var twoSum = function(nums, target) {
//     for(var i=0;i<nums.length;i++){
//         for( var j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return[i,j]
//             }
//         }

//     }
// };


var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var targertComplementpair = target - value;
        if (map[targertComplementpair] !== undefined) {
            return [map[targertComplementpair], i];
        }
        else {
            map[value] = i;
        }
    }
}