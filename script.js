const one = document.querySelector('.position0');
const two = document.querySelector('.position1');
const three = document.querySelector('.position2');
const four = document.querySelector('.position3');
const five = document.querySelector('.position4');
const six = document.querySelector('.position5');
const seven = document.querySelector('.position6');
const eight = document.querySelector('.position7');
const nine = document.querySelector('.position8');

const pointsPlayer = document.querySelector('.PointsX');
const pointsBot = document.querySelector('.PointsO');
const pointsTies = document.querySelector('.PointsTies');

const repeat = document.querySelector('.repeat');

function escolherLugar(e){
    const nameClass = document.querySelector(`.${e}`);
    if(nameClass.innerHTML == ''){
        nameClass.innerHTML = `<label class="x"></label>`;
        nameClass.id = 'player';
        winAndLoser('player', pointsPlayer);
        ties()
        escolherBot();
    } else {
        console.log('clica em outro')
    }
}

repeat.addEventListener('click', () => {
    clear();
    pointsPlayer.innerHTML = '0';
    pointsBot.innerHTML = '0';
    pointsTies.innerHTML = '0';
})


function clear(){
    one.innerHTML = '';
    two.innerHTML = '';
    three.innerHTML = '';
    four.innerHTML = '';
    five.innerHTML = '';
    six.innerHTML = '';
    seven.innerHTML = '';
    eight.innerHTML = '';
    nine.innerHTML = '';

    one.removeAttribute('id');
    two.removeAttribute('id');
    three.removeAttribute('id');
    four.removeAttribute('id');
    five.removeAttribute('id');
    six.removeAttribute('id');
    seven.removeAttribute('id');
    eight.removeAttribute('id');
    nine.removeAttribute('id');
}

function ties(){
    if(one.innerHTML != '' 
    && two.innerHTML != '' 
    && three.innerHTML != ''
    && four.innerHTML != ''
    && five.innerHTML != ''
    && six.innerHTML != ''
    && seven.innerHTML != ''
    && eight.innerHTML != ''
    && nine.innerHTML != ''){
        const number = parseInt(pointsTies.innerHTML);
        pointsTies.innerHTML = number + 1;
        clear();
    }
}

function winAndLoser(win, addPoints){
    if(one.id == win && two.id == win && three.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }

    if(one.id == win && four.id == win && seven.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }

    if(one.id == win && five.id == win && nine.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }

    if(two.id == win && five.id == win && eight.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }
    
    if(three.id == win && six.id == win && nine.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }

    if(three.id == win && five.id == win && seven.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }

    if(four.id == win && five.id == win && six.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }

    if(seven.id == win&& eight.id == win && nine.id == win){
        const number = parseInt(addPoints.innerHTML);
        addPoints.innerHTML = number + 1;
        clear();
    }
}

function numberRandom(){
    const number = Math.floor(Math.random() * 9);
    const nameClass = document.querySelector(`.position` + number);
    if(nameClass.innerHTML == ''){
        nameClass.innerHTML = `<label class="o"></label>`;
        console.log(`.position` + number + " vazio");
        nameClass.id = 'bot';
        winAndLoser('bot', pointsBot);
        ties()
    } else {
        escolherBot();
    }
}

function escolherBot(){
    const number = Math.floor(Math.random() * 9);
    const nameClass = document.querySelector(`.position` + number);
    if(nameClass.innerHTML == ''){
        nameClass.innerHTML = `<label class="o"></label>`;
        console.log(`.position` + number + " vazio");
        nameClass.id = 'bot';
        winAndLoser('bot', pointsBot);
        ties()
    } else {
        numberRandom();
    }
}


