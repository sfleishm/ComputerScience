let obj =      {   here: {is: "an"},
                    object: 2};

let obj2 =      {   here: {is: "an"},
                    object: 3
                    };

function deepEqual(first_pass, second_pass) 
{
    // Simplest check. 
    if (first_pass === second_pass) {
        return true;
    };

    // Need to check if one is an object and the other IS NOT null and vice versa because of the bug where the first one could actually be null too
    if (((typeof(first_pass) == 'object' && second_pass != null)) && ((first_pass != null &&  typeof(second_pass) == 'object'))) 
    {
        if ((Object.keys(first_pass).length) != (Object.keys(second_pass).length)) 
        {
            // console.log('Objects but not same length')
            return false;
        }

        // Loop through the keys of the first_pass to see if keys match, if they dont return false 
        for (let key_var in first_pass) 
        {
            // Check to see if the second pass has a similar property name to first_pass, trying this from Mozilla's for in, not working properly   
            // If we do, recurse in to hopefully check and see if the insides are the same
            if (second_pass.hasOwnProperty(key_var)) 
            {
                return deepEqual(first_pass[key_var], second_pass[key_var]);                
            }
            else {
                return false;
            };
        
        };
    }

    else 
    {
        return false;
    };

    
};
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, obj2))
// console.log(deepEqual(obj, {here: 1, object: 2}))
// console.log(deepEqual(obj, {here: {is: "an" }, object:2 }))
// console.log(deepEqual(obj, {here: {is: "and" }, object:2 }))
// console.log(deepEqual(null, {here: {is: "an" }, object:2 }))
// console.log(deepEqual({here: {is: "an" }, object:2 }, null))
console.log(deepEqual(null, null))
console.log(deepEqual(1,2))
console.log(deepEqual(1, '1'))
console.log(deepEqual([3,5,5], [3,4,5]))