// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
    this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
    this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
    this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
    this.club = club; // string, (e.g. "Improv", "Art")
};
  
var students = [
    new Student("Pam", "Art", 2, "Art"),
    new Student("Michael", "Business", 4, "Improv"),
    new Student("Dwight", "Horticulture", 1, "Karate"),
    new Student("Jim", "Sports Science", 2, "Guitar"),
    new Student("Angela", "Accounting", 4, "Cat"),
    new Student("Toby", "Human Resources", 3, "Photography")
];

Student.prototype.logMe = function (clubin) {
    if (clubin == clubComparator) {
        console.log(this.name + ' - ' + this.major + ' - ' + this.yearInSchool + ' - ' + this.club)
    }
    else {
        console.log(this.name + ' - ' + this.major + ' - ' + this.yearInSchool)
    }
    
};

// students[1].logMe();
// console.log(students[1]);

/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {
    // your code here
    sortedArray = array

    arrayLength = students.length;

    // Using an insert sort method. For the i's keep incrementing through the array
    // The j's will start by checking index i which starts at 0 + 1, to index, and then decrementing to see if it needs to swap positions again, will break when it doesn't need to swap.
    for (let i = 1; i < arrayLength; i++) 
    {
        // Once it hits 0 we'll know to stop since thats the first index spot
        for (let j = i; j > 0; j--) 
        {
            // If this is true, AKA if the index spot is greater than index spot - 1, flip the positions
            if (comparator(sortedArray[j], sortedArray[j-1])) 
            {
                const flipPositions = sortedArray[j];
                sortedArray[j] = sortedArray[j-1];
                sortedArray[j-1] = flipPositions;
            }
            // If this is false, then the positions dont need to be swapped
            else {
                break;
            };
        };
    };

};

/* A comparator takes two arguments and uses some algorithm to compare them. If the first 
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator(int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
};

/* For all comparators if students are 'tied' according to the comparison rules then the order of 
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
    /*
    Within this function, we will compare the two students that get passed 
    to this function. Create an empty array that we will push students into, then return 
    that array.
    */
   if (student1.yearInSchool > student2.yearInSchool) 
   {
    return true;
   }
   else {
       return false;
   };
    

};

/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/
function majorComparator(student1, student2) {
    /*
    Convert the majors to lower case, then compare majors
    */

    if (student1.major.toLowerCase() < student2.major.toLowerCase()) {
        return true;
    }
    else {
        return false;
    };

};

/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
    /*
    improv > cat > art > guitar > etc.
    */
   if (student1.club.toLowerCase() == 'improv') {
       return true;
   }

   if (student1.club.toLowerCase() == 'cat' && student2.club.toLowerCase() != ('improv')) {
       return true;
   }
   
   if (student1.club.toLowerCase() == 'art' && student2.club.toLowerCase() != ('cat' || 'improv')) {
       return true;
   }

   if (student1.club.toLowerCase() == 'guitar' && student2.club.toLowerCase() != ('art' || 'cat' || 'improv')) {
       return true;
   }


   else {
       return false;
   }

};

console.log('**********')
console.log('The students sorted by year in school are:');
var yearArray = sortArr(yearComparator, students);
sortedArray.forEach(function (yearArray) {yearArray.logMe(yearComparator)});
console.log('**********')

console.log('The students sorted by major are:');
var majorArray = sortArr(majorComparator, students);
sortedArray.forEach(function (majorArray) {majorArray.logMe(majorComparator)});
console.log('**********')

console.log('The students sorted by club affiliation are:');
var clubArray = sortArr(clubComparator, students);
sortedArray.forEach(function (clubArray) {clubArray.logMe(clubComparator)});
console.log('**********')




/* Your program should output the following to the console.log, including each of the opening and closing 
stars. All values in parenthesis should be replaced with appropriate values. To accomplish this, you will 
have to sort the array of students using each comparator and then loop through the array and and call logMe
on each student of the now-sorted array. If the argument is 'true' then it prints the student's name, major, 
year in school, and club affiliation. If the argument is 'false' then the club affiliation is ommited and 
just the student's name, major and year in school is logged. Please carefully note which sorted results require
the club to be displayed and which do not.

**********
The students sorted by year in school are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by major are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by club affiliation are:
(Name - Major - Year - Club) // of the "greatest" student
...
(Name - Major - Year - Club) // of the "least" student

**********

As an example of what is expected to be printed to the console with logMe being sent True for a single student:
Jim - Sports Science - 2 - Guitar

*/



// students[1].logMe(clubComparator);