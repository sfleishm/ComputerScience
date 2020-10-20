// Showing how hoisting works. 
// Can hoist a function when function isn't tied to a variable

// Step 1 show how hoisting works 
console.log(f_name('Scott'));

function f_name(name) {
    return name;
};



// Step 2 show how setting a function to a variable does not allow you to hoist

console.log(wheres_last_name('Fleishman')); // This will not work

var wheres_last_name = function(last_name) {
    return last_name;
};

// console.log(wheres_last_name('Fleishman')) // This would work