<?php
$str = 'abc';
$ending = 'bc';

function endsWith( $haystack, $needle ) {
    $length = strlen( $needle );
    if( !$length ) {
        return true;
    }
    // return substr( $haystack, -$length ) === $needle;
    var_dump(substr( $haystack, -$length ));
}

endsWith($str, $ending);