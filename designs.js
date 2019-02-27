var size = document.getElementById("sizePicker");
size.addEventListener("submit", function(event) {
    event.preventDefault();     //Prevents page from being refreshed
    makeGrid();     //Make grid when submit button is clicked
});

function makeGrid() {
    var table = document.getElementById("pixelCanvas");
    table.innerHTML = "";   //Table starts off as a blank canvas
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    for (var x = 0; x < height; x++) {
        var newRow = document.createElement('tr');      //Create new row
        for (var y = 0; y < width; y++) {
            var newCell = document.createElement('td');     //Create new columns for each row
            newRow.appendChild(newCell);
            newCell.addEventListener('click', function(event) {     //Change color of cell when clickd on
                var color = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = color;
            })
        }
    table.appendChild(newRow);      //Displays rows and columns in browser
    }
};
