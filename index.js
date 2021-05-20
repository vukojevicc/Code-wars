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
    for(let i = 0; i < n; i++){
        var sum = 0;

        for(let k = 0; k < 3; k++){
            sum += signature[k];
        }
        signature[signature.length] = sum;
    }

    console.log(signature);
  }

  tribonacci([1, 2, 3], 1);