var size = document.getElementById("sizePicker");
size.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    var table = document.getElementById("pixelCanvas");
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    for (var x = 0; x < height; x++) {
        var newRow = document.createElement('tr');
        for (var y = 0; y < width; y++) {
            var newCell = document.createElement('td');
            newRow.appendChild(newCell);
            newCell.addEventListener('click', function(event) {
                var color = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = color;
            })
        }
    table.appendChild(newRow);
    }
};
