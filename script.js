const MyTitle = document.getElementById("MyTitle");
const MyImage = document.getElementById("MyImage");
const myinput = document.getElementById("myInput");


let directionButtons = {
    "noord" : document.getElementById("knopNoord"),
    "oost" : document.getElementById("knopOost"),
    "zuid" : document.getElementById("knopZuid"),
    "west" : document.getElementById("knopWest")

}

let current_index = 0;

let locaties =
[
    {
    "titel":"de ingang",
    "image":"img/0.jpg",
    "directions": {
        "zuid": 1

    }
    },

    {
    "titel":"docenten kamer",
    "image":"img/1.jpg",
    "directions": {
        "west": 2,
        "zuid": 4,
        "oost": 5,
        "noord": 0

    }
    },


    {
    "titel":"gang voor de trap",
    "image":"img/2.jpg",
    "directions": {
        "zuid": 3,
        "oost": 1

    }
    },

    {
    "titel":"c0.95",
    "image":"img/3.jpg",
    "directions": {
        "noord": 2,
        


    }
    },

    {
    "titel":" c0.91",
    "image":"img/4.jpg",
    "directions": {
        "noord": 1,

    }
    },

    {
    "titel":"gang langs alle lokaalen",
    "image":"img/5.jpg",
    "directions": {
        "west": 1,
        "zuid": 4,
        "oost": 6

    }
    },
    {
     "titel":"toiletten",
    "image":"img/6.jpg",
    "directions": {
        "west": 5,
        "zuid": 11,
        "oost": 7

    }
    },
    {
    "titel":"ingang c0.93",
    "image":"img/7.jpg",
    "directions": {
        "west": 6,
        "zuid": 8,
        "noord":9 

    }
    },
    {
    "titel":"c0.93",
    "image":"img/8.jpg",
    "directions": {
        "noord": 7

    }
    },
    {
    "titel":"c0.92",
    "image":"img/9.jpg",
    "directions": {
        "west": 10,
        "zuid": 7,

    }
    },
    {
    "titel":"c0.90",
    "image":"img/10.jpg",
    "directions": {
        "zuid": 5,
        "oost": 9

    }
    },
    {
    "titel":"toiletten",
    "image":"img/11.jpg",
    "directions": {
        "noord": 6,

    }
    },
     

]
 

function show(index){
    MyTitle.innerHTML = locaties[index].titel;
    MyImage.src = locaties[index].image;
    current_index = index;

    updateDirections()
}

function updateDirections(){
    let possible = locaties[current_index].directions;

    let possible_keys = Object.keys(possible);


    let button_keys = Object.keys(directionButtons);
        console.log(button_keys);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible"

    }

}


function getInput(){
    show(myinput.value);
    //console.log(myInput.value)
    myinput.value = "";
    myinput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index);
    console.log(punt_index)


}


show(0);