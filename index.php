<?php
$str = 'abc';
$ending = 'bc';

function endsWith( $haystack, $needle ) {
    $length = strlen( $needle );
    if( !$length ) {
        return true;
    }
    // return substr( $haystack, -$length ) === $needle;
    //var_dump(substr( $haystack, -$length ));
}

endsWith($str, $ending);

// Find the missing term in an Arithmetic Progression
// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

function findMissing($list) {

    $difference_main = ($list[count($list) - 1] - $list[0]) / count($list);
    $difference_each = 0;
    $missing_int = 0;

    for ($i = 0; $i < count($list) - 1; $i++){

        $difference_each = $list[$i + 1] - $list[$i];
        if($difference_main != $difference_each){
            $missing_int = $list[$i] + $difference_main;

            return $missing_int;
        }

    }
}

findMissing([1, 2, 3, 5]);