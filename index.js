// My job was to create a function which returns facebook type of information about likes on some post.

function likes(names) {
    switch (names.length) {
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

function tribonacci(signature, n) {

    if (n > 3) {
        for (let i = 0; i < n - 3; i++) {
            var sum = 0;

            for (let k = signature.length; k > signature.length - 3; k--) {
                sum += signature[k - 1];
            }
            signature[signature.length] = sum;
        }

        return signature;
    } else if (n <= 3 && n > 0) {

        var newArray = [];

        for (let j = 0; j < n; j++) {
            newArray[newArray.length] = signature[j];
        }

        return newArray;
    }
    else {
        return [];
    }
}

// tribonacci([1, 2, 3], 5);

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    var numLength = value.toString().length;
    var valueString = value.toString();
    var newValue = 0;

    for (let i = 0; i < numLength; i++) {
        newValue += Math.pow(valueString[i], numLength);
    }
    if (newValue == value) {
        return true;
    } else {
        return false;
    }

}

// narcissistic(153);

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
    var arr = [];

    for (let i = 0; i < str.length; i += 2) {
        if (str.length % 2 == 0) {
            arr.push(str[i] + str[i + 1]);
        } else {
            if (str[i + 1] != null) {
                arr.push(str[i] + str[i + 1]);
            } else {
                arr.push(str[i] + '_');
            }
        }
    }
    return arr;
}

// solution('test1fsdfgsfgdfgfdd');

//Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

function solution1(number) {
    var number_str = number.toString();
    var Rnumber;
    var zero_counter = '';
    var number_str_iteration = '';

    for (let i = number_str.length - 1; i >= 0; i--) {

        if (i == number_str.length - 1) {

            if (number_str[number_str.length - 1] < 5) {

                if (number_str[number_str.length - 1] == 4) {
                    Rnumber = 'IV';
                }
                else {
                    Rnumber = 'I'.repeat(number_str[number_str.length - 1]);
                }
            }
            else if (number_str[number_str.length - 1] > 4 && number_str[number_str.length - 1] < 10) {

                if (number_str[number_str.length - 1] == 9) {
                    Rnumber = 'IX';
                }
                else {
                    Rnumber = 'V' + 'I'.repeat(number_str[number_str.length - 1] - 5);
                }
            }
        }
        else if (i == number_str.length - 2) {
            number_str_iteration = number_str[number_str.length - 2] + zero_counter;

            if (number_str_iteration > 9 && number_str_iteration < 50) {

                if (number_str_iteration == 40) {
                    Rnumber = 'XL' + Rnumber;
                }
                else {
                    Rnumber = 'X'.repeat(number_str[number_str.length - 2]) + Rnumber;
                }
            }
            else if (number_str_iteration > 49 && number_str_iteration < 100) {

                if (number_str_iteration == 90) {
                    Rnumber = 'XC' + Rnumber;
                }
                else {
                    Rnumber = 'L' + 'X'.repeat(number_str[number_str.length - 2] - 5) + Rnumber;
                }
            }
        }
        else if (i == number_str.length - 3) {
            number_str_iteration = number_str[number_str.length - 3] + zero_counter;

            if (number_str_iteration > 99 && number_str_iteration < 500) {

                if (number_str_iteration == 400) {
                    Rnumber = 'CD' + Rnumber;
                }
                else {
                    Rnumber = 'C'.repeat(number_str[number_str.length - 3]) + Rnumber;
                }
            }
            else if (number_str_iteration > 499 && number_str_iteration < 1000) {

                if (number_str_iteration == 900) {
                    Rnumber = 'CM' + Rnumber;
                }
                else {
                    Rnumber = 'D' + 'C'.repeat(number_str[number_str.length - 3] - 5) + Rnumber;
                }
            }
        }
        else {
            Rnumber = 'M'.repeat(number_str[number_str.length - 4]) + Rnumber;
        }

        zero_counter += '0';
    }

    return Rnumber;
}

// solution1(1997);

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '_' || str[i] == '-') {
            str = str.replace(str[i], '');
            str = str.replace(str[i], str[i].toUpperCase());
        }
    }
    return str;
}

// toCamelCase('The-stealth-Warrior');

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    var arr_even = [];
    var arr_odd = [];

    for (var i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 0) {
            arr_even.push(integers[i]);
        }else{
            arr_odd.push(integers[i]);
        }
    }

    if(arr_even.length >= 2){
        return arr_odd[0];
    }else{
        return arr_even[0];
    }
}

// findOutlier([6, 8, 2, 44, 10, 13, 12]);
// findOutlier([1, 3, 7, 33, 10, 13, 17]);

//  The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine){
    var yes_no = 'YES';
    var cash_register = {
        25: 0,
        50: 0,
        100: 0
    };
    
    peopleInLine.forEach((item) => {
        if(item == 25){
            cash_register[25] += 1;
        }else if(item == 50){
            cash_register[50] += 1;
            cash_register[25] -= 1;
        }else{
            cash_register[100] += 1;
            if(cash_register[25] > 2 && cash_register[50] < 1){
                cash_register[25] -= 3;
            }else{
                cash_register[25] -= 1;
                cash_register[50] -= 1;    
            }
        }

        if(cash_register[25] < 0 || cash_register[50] < 0 || cash_register[100] < 0){
            yes_no = 'NO';
        }
    })

    console.log(yes_no);
    console.log(cash_register)
}

tickets([25,50,25,100,25,25,25,100,25,25,50,100]);