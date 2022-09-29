// Regex
const regex = () =>{
    // i used for removing case sensitivity
    //g use for counting all outcomes
    //. is wildcard for searching uncompleted chars eg /m./ will find mug
    ///b[aiu]g/ - [] for matching characters
    // stringvar.match(regexformula)
    // regexformula.test(stringvar)
    // [a-z]: match lowercase chars with range, [A-Z]:uppercase
    //^negated character set eg [^aeiou]
    //[a-z0-9] possible 
    // a/+/g will find where a occurs atleast once
    // For example, /a+/g would find one match in abc and return ["a"].
    // Because of the +, it would also find a single match in aabc and return ["aa"].
    // counts combinations as one
    //lazy matching
    // You can apply the regex /t[a-z]*i/ to the string "titanic". 
    // This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

let stringtoberegexed = "Hello world, can you regex me you"
let regOrder = /[o]/ig
return stringtoberegexed.match(regOrder)

}

export {regex}