const cardsArray = [{
    'name': 'shell',
    'img': 'img/blueshell.png',
},
{
    'name': 'star',
    'img': 'img/star.png',
},
{
    'name': 'bobomb',
    'img': 'img/bobomb.png',
},
{
    'name': 'mario',
    'img': 'img/mario.png',
},
{
    'name': 'lugigi',
    'img': 'img/luigi.png',
},
{
    'name': 'peach',
    'img': 'img/peach.png',
},
{
    'name': '1up',
    'img': 'img/1up.png',
},
{
    'name': 'mushroom',
    'img': 'img/mushroom.png',
},
{
    'name': 'thwomp',
    'img': 'img/thwomp.png',
},
{
    'name': 'bulletbill',
    'img': 'img/bulletbill.png',
},
{
    'name': 'coin',
    'img': 'img/coin.png',
},
{
    'name': 'goomba',
    'img': 'img/goomba.png',
},

];

//clone image array
var gameGrid = cardsArray.concat(cardsArray);
//random image array
gameGrid.sort(function(a,b){
    return 0.5 - Math.random()
});


//create and add new card
var cardContainer = document.querySelector('#game');
var cardBox = document.createElement('section');
cardBox.classList.add('grid');
cardContainer.appendChild(cardBox);
var cardGrid = document.querySelector('.grid');

var firstGuess = '';
var secondGuess = '';
var previousTarget = null;
var count = 0;
var delay = 1200;

//loop trough image array
gameGrid.forEach(function(element){

    var cardItem = document.createElement('div');
    cardItem.classList.add('card');
    cardItem.setAttribute('data-name',element.name);

    var cardFront = document.createElement('div');
    cardFront.classList.add('front');

    var cardBack = document.createElement('div');
    cardBack.classList.add('back');
    cardBack.style.backgroundImage = 'url('+element.img+')';



    cardBox.appendChild(cardItem);
    cardItem.appendChild(cardFront);
    cardItem.appendChild(cardBack);
});


cardGrid.addEventListener('click', function(event){

    if(event.target && event.target.matches('div .front') && event.target !== previousTarget){
        console.log(event.target);
        var clickedItem = event.target.parentNode;
        if(count < 2){
            count++;
            if(count == 1) {
                //console.log(clickedItem.dataset.name);
                firstGuess = clickedItem.dataset.name;
                previousTarget = clickedItem;
                clickedItem.classList.add('selected');
            } else {
                //console.log(clickedItem.dataset.name);
                secondGuess = clickedItem.dataset.name;
                clickedItem.classList.add('selected');
            }
            if(firstGuess !== '' && secondGuess !==''){
                if(firstGuess === secondGuess){
                    setTimeout(match, delay);
                    setTimeout(resetGuess, delay);
                } else {

                    setTimeout(resetGuess, delay);
                }
            }
        }
    }
})

function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function(element) {
        element.classList.add('match');
    })
}

function resetGuess() {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(function(element) {
        element.classList.remove('selected')
    })

}

