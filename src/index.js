module.exports = function longestConsecutiveLength(array) {
    let max = 0;
    let temp = 1;
    for(let i =0; i < array.length; i++){
        if (array[i] - array[i - 1] == 1){
            temp += 1;
        }
        if (array[i] - array[i - 1] ==0){
            continue;
        }
        if (array[i] - array[i - 1] > 1){
            if (temp > max){
                max = temp;
            }
            temp = 1;
        }
     }
     return max;
 }

