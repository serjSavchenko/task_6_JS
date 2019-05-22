document.body.onload = function() {
    let main_div = document.getElementById("mainframe");
    let cells = [], tiles = [], counterItems;
    let createCells = document.getElementById("createCells");
    let createTiles = document.getElementById("createTiles");


    inputItemsCount();
    function inputItemsCount() {
	    try {
	        counterItems = parseInt(prompt("How many kinds of pizzas does we have?", 21));
	    } catch (e) {
	        alert("We have this exception for some reason :" + e.message);
	    }
	    if (isNaN(counterItems) || counterItems < 1 || counterItems > 1000)
	    {
	    		alert("Value, that you enter isn't correct! Try again.");
	        inputItemsCount();     
	    }
  	};

    createCells.addEventListener("click", function() {

        cells = main_div.querySelectorAll(".element-cell");
        tiles = main_div.querySelectorAll(".element-list");

        if (tiles.length != 0 && cells.length != 0)
        {
            tiles.forEach(tile => {
                tile.style.display = "none";
            });
            cells.forEach(cell => {
                cell.style.display = "flex";
            });
            main_div.style.flexDirection = "row";
        }
        if (tiles.length != 0 && cells.length == 0)
        {
            tiles.forEach(tile => {
                tile.style.display = "none";
            });
            for (var i = 0; i < counterItems; i++)
            {
                main_div.style.flexDirection = "row";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-cell"><img src="img\\pizza.svg" alt="pizza"><h3>Tasty pizza</h3><h4>No calories yet</h4><strong>Priceless</strong></div>')
            }
        }
        if (tiles.length == 0 && cells.length == 0)
        {
            for (var i = 0; i < counterItems; i++)
            {
                main_div.style.flexDirection = "row";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-cell"><img src="img\\pizza.svg" alt="pizza"><h3>Tasty pizza</h3><h4>No calories yet</h4><strong>Priceless</strong></div>')
            }
        }
    });

    createTiles.addEventListener("click", function() {

        cells = main_div.querySelectorAll(".element-cell");
        tiles = main_div.querySelectorAll(".element-list");

        if (tiles.length != 0 && cells.length != 0)
        {
            tiles.forEach(tile => {
                tile.style.display = "flex";
            });
            cells.forEach(cell => {
                cell.style.display = "none";
            });
            main_div.style.flexDirection = "column";
        }
        if (cells.length != 0 && tiles.length == 0)
        {
            cells.forEach(cell => {
                cell.style.display = "none";
            });
            for (var i = 0; i < counterItems; i++)
            {
                main_div.style.flexDirection = "column";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-list"><img src="img\\pizza.svg" alt="pizza"><h3>Tasty pizza</h3><h4>No calories yet</h4><strong>Priceless</strong></div>')
            }
        }
        if (tiles.length == 0 && cells.length == 0)
        {
            for (var i = 0; i < counterItems; i++)
            {
                main_div.style.flexDirection = "column";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-list"><img src="img\\pizza.svg" alt="pizza"><h3>Tasty pizza</h3><h4>No calories yet</h4><strong>Priceless</strong></div>')
            }
        }
    });
};