// Step 1, Implement an If . Else to test if two parameters are the same value and type - DONE
// Step 2, 

let obj1 =      {   here: {is: "an"},
                    object: 2};

let objTest =   {   here: {is: "an"},
                    object: 3};

// function deepEqual(first_pass, second_pass, i = 0) {
//     // Most Simplistic If Then 
//     // console.log(first_pass, second_pass)
//     // Check if they are both values 
//     if (typeof(first_pass) == 'object' & second_pass != null) {
//         if ((Object.keys(first_pass).length) != (Object.keys(second_pass).length)) {
//             console.log('Objects but not same length')
//             return false;
//         }

//         else {
//             deepEqual(first_pass[Object.keys(first_pass)[i]], second_pass[Object.keys(second_pass)[i]], i += 1);
//         };
        
//     };

//     if (first_pass === second_pass) {
//         // console.log('Same')
//         return true;
//     };

// };

function deepEqual(first_pass, second_pass) {
    if (first_pass === second_pass) {
        return true;
    }

    else if (typeof(first_pass) == 'object' & second_pass != null) {
        if ((Object.keys(first_pass).length) != (Object.keys(second_pass).length)) {
            console.log('Objects but not same length')
            return false;
        };
    }

    else {
        return false;
    };
};

console.log(deepEqual(4, '4'));