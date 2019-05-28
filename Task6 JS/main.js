class Topping {
    constructor(name, price, calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.priceAcum = 0;
        this.caloriesAcum = 0;
    };
    updatePrice(){
        if(parseInt(this.price) == 0)
        {
            this.price = this.priceAcum;
            this.priceAcum = 0;
        }
        else
        {
            this.priceAcum = this.price;
            this.price = 0;
        }
    }
    updateCalories(){
        if(parseInt(this.calories) == 0)
        {
            this.calories = this.caloriesAcum;
            this.caloriesAcum = 0;
        }
        else
        {
            this.caloriesAcum = this.calories;
            this.calories = 0;
        }
    }
};

class Pizza {
    constructor(name, composition, src){
        this.name = name;
        this.composition = composition;
        this.price = 100;
        composition.forEach(elem => {
            this.price += elem.price;
        });
        this.calories = 0;
        composition.forEach(elem => {
            this.calories += elem.calories;
        });
        this.src = src;
    }; 
    updatePizza(newComposition){
        this.composition = newComposition;
        this.price = 100;
        newComposition.forEach(elem => {
            this.price += elem.price;
        });
        this.calories = 0;
        newComposition.forEach(elem => {
            this.calories += elem.calories;
        });
    } 
};

let pizzas = [
    new Pizza(
        "Pepperoni",
        [new Topping("Mozzarella", 10, 100), new Topping("Pepperoni", 20, 250), new Topping("Blue Cheese", 20, 150), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\Pepperoni.png"
    ),
    new Pizza(
        "Big Maybelle",
        [new Topping("Mozzarella", 10, 100), new Topping("Chicken", 24, 210), new Topping("Fresh Vegatable", 8, 100), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\BigMaybelle.png"
    ),
    new Pizza(
        "Calexico",
        [new Topping("Mozzarella", 10, 100), new Topping("Sausages", 18, 230), new Topping("Pepers Pret", 21, 50), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\Calexico.png"
    ),
    new Pizza(
        "Capricciosa",
        [new Topping("Mozzarella", 10, 100), new Topping("Salami", 20, 200), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\Capricciosa.png"
    ),
    new Pizza(
        "Chicken Fakita",
        [new Topping("Mozzarella", 10, 100), new Topping("Chicken", 24, 150), new Topping("Fakita", 21, 100), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\ChickenFakita.png"
    ),
    new Pizza(
        "Halves",
        [new Topping("Mozzarella", 10, 100), new Topping("Peanapple", 10, 250), new Topping("Russian Cheese", 15, 150), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\HalvesPizza.jpg"
    ),
    new Pizza(
        "Margarita",
        [new Topping("Mozzarella", 10, 100), new Topping("Tommatos", 15, 200), new Topping("Crops", 10, 75), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\Margarita.jpg"
    ),
    new Pizza(
        "Meat&Mets",
        [new Topping("Mozzarella", 10, 100), new Topping("Sausage", 18, 450), new Topping("Meatballs", 20, 350), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\MeatTheMets.png"
    ),
    new Pizza(
        "Pepperoni for Mans",
        [new Topping("Mozzarella", 10, 100), new Topping("Pepperoni", 30, 550), new Topping("Blue Cheese", 40, 450), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\PepperoniMans.png"
    ),
    new Pizza(
        "Salami",
        [new Topping("Mozzarella", 10, 100), new Topping("Salami slice", 40, 320), new Topping("Green Pepper", 20, 150), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\Salami.jpg"
    ),
    new Pizza(
        "Shutter Stock",
        [new Topping("Mozzarella", 10, 100), new Topping("Meat", 40, 500), new Topping("Blue Cheese", 20, 150), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\ShutterStock.png"
    ),
    new Pizza(
        "SuperMAN",
        [new Topping("Mozzarella", 10, 100), new Topping("'MansBals'", 27, 210), new Topping("Russian Cheese", 25, 110), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\SuperNewman.png"
    ),
    new Pizza(
        "The Bird",
        [new Topping("Mozzarella", 10, 100), new Topping("Bird Meat Assorti", 50, 600), new Topping("Vegetables", 8, 100), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\TheBird.png"
    ),
    new Pizza(
        "Pepperoni",
        [new Topping("Mozzarella", 10, 100), new Topping("Vegetables", 8, 100), new Topping("Sauce", 5, 100)],
        "img\\pizzas\\Vegetarian.png"
    )
];




document.body.onload = function() {
    let main_div = document.getElementById("mainframe");
    let cells = [], tiles = [], flag = false;
    let createCells = document.getElementById("createCells");
    let createTiles = document.getElementById("createTiles");
    let comboBox = document.getElementById("selectSort");

    function reload(flag) {
        cells = main_div.querySelectorAll(".element-cell");
        tiles = main_div.querySelectorAll(".element-list");
    
        if (tiles.length != 0 && cells.length != 0)
        {
            cells.forEach(elem => {
                main_div.removeChild(elem);
            });
            tiles.forEach(elem => {
                main_div.removeChild(elem);
            });
            var event = new Event("click");
            if(flag)
            {
                createCells.dispatchEvent(event);
            }
            else
            {
                createTiles.dispatchEvent(event);
            }
        }
        else if (tiles.length != 0)
        {
            tiles.forEach(elem => {
                main_div.removeChild(elem);
            });
            var event = new Event("click");
            if(!flag)
            {
                createTiles.dispatchEvent(event);
            }
        }
        else {
            cells.forEach(elem => {
                main_div.removeChild(elem);
            });
            var event = new Event("click");
            if(flag)
            {
                createCells.dispatchEvent(event);
            }
        }
    }
      
    comboBox.onchange = function() {
        switch (comboBox.value) {
            case "1":
                pizzas.sort(function (a, b) {
                    if (a.price > b.price) {
                      return 1;
                    }
                    if (a.price < b.price) {
                      return -1;
                    }
                    return 0;
                });
                reload(flag);
                break;
            case "2":
                pizzas.sort(function (a, b) {
                    if (a.price < b.price) {
                      return 1;
                    }
                    if (a.price > b.price) {
                      return -1;
                    }
                    return 0;
                });
                reload(flag);
                break;
            case "3":
                pizzas.sort(function (a, b) {
                    if (a.calories > b.calories) {
                      return 1;
                    }
                    if (a.calories < b.calories) {
                      return -1;
                    }
                    return 0;
                });
                reload(flag);
                break;
            case "4":
                pizzas.sort(function (a, b) {
                    if (a.calories < b.calories) {
                      return 1;
                    }
                    if (a.calories > b.calories) {
                      return -1;
                    }
                    return 0;
                });
                reload(flag);
                break;
            default:
                break;
        }
    };

    createCells.addEventListener("click", function() {

        cells = main_div.querySelectorAll(".element-cell");
        tiles = main_div.querySelectorAll(".element-list");
        flag = true;

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


            for (var i = 0; i < pizzas.length; i++)
            {

                let compose = "";
                let div_compose = document.createElement('div');

                pizzas[i].composition.forEach(elem => {
                    let paragraph = document.createElement('p');
                    paragraph.setAttribute("id", pizzas[i].name +"_"+ elem.name);
                    paragraph.insertAdjacentText('afterbegin', elem.name);

                    paragraph.addEventListener('click', function(){
                        
                        let id_parag = paragraph.getAttribute("id");
                        let attr = id_parag.split('_');
                        let temp_index = 0;

                        if (this.classList) {
                            this.classList.toggle("active");
                        }
                        console.log(this);

                        for (let i = 0; i < pizzas.length; i++) {
                            if(pizzas[i].name == attr[0]){
                                temp_index = i;
                            }    
                        }

                        pizzas[temp_index].composition.forEach(topp => {
                            if (topp.name == attr[1])
                            {
                                topp.updatePrice();
                                topp.updateCalories();
                            }
                        });
                        pizzas[temp_index].updatePizza(pizzas[temp_index].composition);
                        reload(flag);
                    });

                    div_compose.insertAdjacentElement('afterbegin', paragraph);
                });


                main_div.style.flexDirection = "row";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-cell"><img src="'+pizzas[i].src+'" alt="pizza">'+
                '<h2><i>'+ pizzas[i].name +'</i></h2>'+
                '<h4 id="composition"></h4>'+
                '<h3>'+ pizzas[i].calories +' kkal</h3>'+
                '<strong>'+ pizzas[i].price +' &#8372;</strong></div>');
                let headerCompose = document.getElementById("composition");
                headerCompose.insertAdjacentElement("afterbegin", div_compose);
            }
        }
        if (tiles.length == 0 && cells.length == 0)
        {
            for (var i = 0; i < pizzas.length; i++)
            {

                let compose = "";
                let div_compose = document.createElement('div');

                pizzas[i].composition.forEach(elem => {
                    let paragraph = document.createElement('p');
                    paragraph.setAttribute("id", pizzas[i].name +"_"+ elem.name);
                    paragraph.insertAdjacentText('afterbegin', elem.name);

                    paragraph.addEventListener('click', function(){

                        let id_parag = paragraph.getAttribute("id");
                        let attr = id_parag.split('_');
                        let temp_index = 0;
                        
                        for (let i = 0; i < pizzas.length; i++) {
                            if(pizzas[i].name == attr[0]){
                                temp_index = i;
                            }    
                        }

                        pizzas[temp_index].composition.forEach(topp => {
                            if (topp.name == attr[1])
                            {
                                topp.updatePrice();
                                topp.updateCalories();
                            }
                        });
                        pizzas[temp_index].updatePizza(pizzas[temp_index].composition);
                        reload(flag);
                    });
                    div_compose.insertAdjacentElement('afterbegin', paragraph);
                });


                main_div.style.flexDirection = "row";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-cell"><img src="'+pizzas[i].src+'" alt="pizza">'+
                '<h2><i>'+ pizzas[i].name +'</i></h2>'+
                '<h4 id="composition"></h4>'+
                '<h3>'+ pizzas[i].calories +' kkal</h3>'+
                '<strong>'+ pizzas[i].price +' &#8372;</strong></div>');
                let headerCompose = document.getElementById("composition");
                headerCompose.insertAdjacentElement("afterbegin", div_compose);
            }
        }
    });

    createTiles.addEventListener("click", function() {

        cells = main_div.querySelectorAll(".element-cell");
        tiles = main_div.querySelectorAll(".element-list");
        flag = false;

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
            for (var i = 0; i < pizzas.length; i++)
            {
                main_div.style.flexDirection = "column";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-list"><img src="img\\pizza.svg" alt="pizza">'+
                '<h2>'+ pizzas[i].name +'</h2>'+
                '<h4>'+ pizzas[i].calories +' kkal</h4>'+
                '<strong>'+ pizzas[i].price +' &#8372;</strong></div>')
            }
        }
        if (tiles.length == 0 && cells.length == 0)
        {
            for (var i = 0; i < pizzas.length; i++)
            {
                main_div.style.flexDirection = "column";
                main_div.insertAdjacentHTML('afterbegin', '<div class="element-list"><img src="img\\pizza.svg" alt="pizza">'+
                '<h2>'+ pizzas[i].name +'</h2>'+
                '<h4>'+ pizzas[i].calories +' kkal</h4>'+
                '<strong>'+ pizzas[i].price +' &#8372;</strong></div>')
            }
        }
    });
};