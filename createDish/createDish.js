//start screen and the two buttons
const startDisp = document.getElementById('startDisp');
const startBTN = document.getElementById('startBTN');
const viewBTN = document.getElementById('viewBTN');

//Inputs
const inputDiv = document.getElementById('inputDiv');
const nameDiv = document.getElementById('nameDiv');

const nameDish = document.getElementById('nameDish');
const mainDish = document.getElementById('mainDish');
const sideDish = document.getElementById('sideDish');
const drinkDish = document.getElementById('drinkDish');
const dessertDish = document.getElementById('dessertDish');

//Add to array button
const unShiftDiv = document.getElementById('unShiftDiv');
const unShiftBTN = document.getElementById('unShift');

//View dishes display
const viewDisp = document.getElementById('viewDisp');
const ul = document.getElementById('firstList');
const h2 = document.getElementById('foodName');

// Empty inputs on reload
window.addEventListener('load', () => {
    mainDish.value = "";
    sideDish.value = "";
    drinkDish.value = "";
    dessertDish.value = "";
    nameDish.value = "";
});

// Show inputs of start is clicked
startBTN.addEventListener('click', () => {
    startDisp.style.display = 'none';
    startBTN.style.display = 'none';

    inputDiv.classList.remove('none');
    inputDiv.classList.add('inputDisp');
    nameDiv.classList.remove('none');
    nameDiv.classList.add('dishName');
});

//Show dishes if made
// viewBTN.addEventListener('click', () => {
//     startDisp.style.display = 'none';
//     viewBTN.style.display = 'none';

//     viewDisp.classList.remove('none');
//     viewDisp.classList.add('viewDisp');

//     inputDiv.classList.add('none');
//     inputDiv.classList.remove('inputDisp');
//     nameDiv.classList.add('none');
//     nameDiv.classList.remove('dishName');
// });


//Checks if inputs are empty or not
setInterval(() => {
    if(mainDish.value !== "" && sideDish.value !== "" && drinkDish.value!== "" && dessertDish.value!== "" && nameDish.value !== "") {
        unShiftDiv.classList.remove('none');
        unShiftDiv.classList.add('unShiftDiv');
    }else if(mainDish.value == "" || sideDish.value == "" || drinkDish.value== "" || dessertDish.value== "" || nameDish.value== ""){
        unShiftDiv.classList.add('none');
        unShiftDiv.classList.remove('unShiftDiv');
    };
}),10000;

//Show dishes and prints the new ones
let matRettArray = [];
unShiftBTN.addEventListener('click', () => {
    matRettArray.push(mainDish.value, sideDish.value, drinkDish.value, dessertDish.value);
//  window.localStorage.setItem.JSON.stringify('Matrett', matRettArray)
    h2.innerHTML = nameDish.value;
    for(i = 0; i < matRettArray.length; i++) {
        let li = document.createElement('li');
        li.innerText = matRettArray[i];
        console.log(li);
        ul.appendChild(li);
    }

    viewDisp.classList.remove('none');
    viewDisp.classList.add('viewDisp');

    unShiftDiv.style.display = 'none';
    inputDiv.classList.add('none');
    inputDiv.classList.remove('inputDisp');
    nameDiv.classList.add('none');
    nameDiv.classList.remove('dishName');
});

// window.localStorage.clear();
