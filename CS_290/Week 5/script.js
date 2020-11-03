// JS For Week 5's stuff
// At first I thought that I had to start out at the top left corner where the header is, some old code that is there that was checking for those conditions. 
// had to change at the last minute to fix and left it in. 
// https://www.w3schools.com/jsref/met_table_createthead.asp

// Create

var createTable = document.createElement("table");

var headerRow = createTable.createTHead("th")

var row = headerRow.insertRow(0);

// Create 4 Header Items 
for (var i = 1; i < 5; i ++) {
    var cell = row.insertCell(i-1)
    cell.appendChild(create_text_node('Header ' + i));
    cell.style.border = '1px solid black';
}

createTable.appendChild(headerRow)

// Create our non header col / rows 
for (var i = 1; i < 4; i++){
    var newItem = document.createElement("tr");
    
    for (var j = 1; j < 5; j++) {
        var cell = newItem.insertCell(j-1);
        cell.appendChild(create_text_node(i + ', ' + j ));
        cell.style.border = '1px solid black';
    }
    createTable.appendChild(newItem)

}


/*
Create a function to help with adding text 
*/

function create_text_node(text) {
    return document.createTextNode(text);
};

// Create our directional buttons and mark up button 

var button_up = document.createElement("button");
button_up.appendChild(create_text_node('Go Up'));
button_up.addEventListener("click", move_up);

var button_down = document.createElement("button");
button_down.appendChild(create_text_node('Go Down'));
button_down.addEventListener("click", move_down);

var button_left = document.createElement("button");
button_left.appendChild(create_text_node('Go Left'));
button_left.addEventListener("click", move_left);

var button_right = document.createElement("button");
button_right.appendChild(create_text_node('Go Right'));
button_right.addEventListener("click", move_right);

var mark_cell = document.createElement("button");
mark_cell.appendChild(create_text_node('Mark Cell'));
mark_cell.addEventListener("click", mark_yellow);

createTable.style.border = '1px solid black';

document.body.appendChild(createTable);
document.body.appendChild(button_up);
document.body.appendChild(button_down);
document.body.appendChild(button_left);
document.body.appendChild(button_right);
document.body.appendChild(mark_cell);


// https://stackoverflow.com/questions/13763111/javascript-get-all-table-tr-values 
// Was having a problem finding the table, adding [0] allowed the table to be found
var current_cell = document.getElementsByTagName("table")[0];
var current_column = 1
var row = 1

current_cell = current_cell.firstElementChild;
current_cell = current_cell.nextElementSibling;
current_cell = current_cell.firstElementChild;

// Make the current cell different so you can distinguish 
current_cell.style.border = '3px solid black';


function move_right() {
    // var content = current_cell.textContent;

    if (current_column == 4) {
        return current_cell;
    }
    else {
        on_this_cell = current_cell;
        right_cell = on_this_cell.nextElementSibling;
        on_this_cell.style.border = '1px solid black';
        current_cell = right_cell;
        current_cell.style.border = '3px solid black'
        console.log(current_cell)
        current_column += 1
        console.log(current_column)
        return current_cell;
    };
    
    
};

function move_left() {
    // var content = current_cell.textContent;

    if (current_column == 1) {
        return current_cell;
    }
    else {
        on_this_cell = current_cell;
        left_cell = on_this_cell.previousElementSibling;
        on_this_cell.style.border = '1px solid black';
        current_cell = left_cell;
        current_cell.style.border = '3px solid black'
        current_column -= 1
        console.log(current_column)
        return current_cell
    };
}

function move_down() {
    // var content = current_cell.textContent;
    
    if (row == 3) {
        return current_cell;
    }

    if (row == 0) {
        on_this_cell = current_cell;
        on_this_cell.style.border = '1px solid black';
        current_cell = current_cell.parentNode;
        current_cell = current_cell.parentNode;
        current_cell = current_cell.nextElementSibling;
        // console.log(current_cell)
        current_cell = current_cell.firstElementChild;
        // console.log(current_cell)
        for (var i = 1; i < current_column; i ++ ) {
            current_cell = current_cell.nextElementSibling;
        }
        current_cell.style.border = '3px solid black' 
        row += 1
        return current_cell
    }
    else if (row != 0) {
        on_this_cell = current_cell;
        on_this_cell.style.border = '1px solid black';
        current_cell = current_cell.parentNode;
        current_cell = current_cell.nextElementSibling;
        // console.log(current_cell)
        current_cell = current_cell.firstElementChild;
        // console.log(current_cell)
        for (var i = 1; i < current_column; i ++ ) {
            current_cell = current_cell.nextElementSibling;
        }
        current_cell.style.border = '3px solid black' 
        row += 1
        console.log(row)
        return current_cell
    };
     
};

function move_up() {
    if (row == 0) {
        return current_cell;
    };

    if (row == 1) {
        return current_cell;
    } 

    else if (row > 1) {
        console.log(current_cell);
        on_this_cell = current_cell;
        on_this_cell.style.border = '1px solid black';
        current_cell = current_cell.parentNode;
        current_cell = current_cell.previousElementSibling;
        console.log(current_cell);
        current_cell = current_cell.firstElementChild;
        console.log(current_cell);
        for (var i = 1; i < current_column; i ++ ) {
            current_cell = current_cell.nextElementSibling;
        }
        current_cell.style.border = '3px solid black';
        row -= 1;
        return current_cell;
    } 
};

function mark_yellow() {
    current_cell.style.backgroundColor = 'yellow'
}



console.log(current_cell);


