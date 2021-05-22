// My job was to create a function which returns facebook type of information about likes on some post.

function likes(names) {
    switch(names.length){
        case 0:
            return ('no one likes this');
        case 1:
            return (names[0] + ' likes this');
        case 2:
            return (names[0] + ' and ' + names[1] + ' like this');
        case 3:
            return (names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this');
        default:
            return (names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this');
    }
}

// In this challenge I need to simulate fibonacci sequance, except I need to add last three numbers of the array and this should go on as much time as specified in the second argument of the function.

function tribonacci(signature, n){

        if(n > 3){
            for(let i = 0; i < n - 3; i++){
                var sum = 0;
        
                for(let k = signature.length; k > signature.length - 3; k--){
                    sum += signature[k - 1];
                }
                signature[signature.length] = sum;
            }

            return signature;
        }else if(n <= 3 && n > 0){

            var newArray = [];

            for(let j = 0; j < n; j++){
                newArray[newArray.length] = signature[j];
            }

            return newArray;
        }
        else{
            return [];
        }
    }

tribonacci([1, 2, 3], 5);

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    var numLength = value.toString().length;
    var valueString = value.toString();
    var newValue = 0;

    for(let i = 0; i < numLength; i++){
        newValue += Math.pow(valueString[i], numLength);
    }      
    if(newValue == value){
        return true;
    }else{
        return false;
    }

}

narcissistic(153);