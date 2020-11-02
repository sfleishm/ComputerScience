// JS For Week 5's stuff

var createTable = document.createElement("table");
for(var i = 0; i < 3; i++){
    var newItem = document.createElement("tr");
    newItem.textContent = "I am item " + i + ".";
    createTable.appendChild(newItem);
}
document.body.appendChild(createTable);