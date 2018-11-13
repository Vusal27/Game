const elemHidden = document.querySelectorAll('.game__hidden-pic');
const elemNames = document.querySelectorAll('.tutorials__item');
const games = document.querySelectorAll('.game');
const gameEnds = document.querySelectorAll('.game-end');
const plays = document.querySelectorAll('.play');
const btns = document.querySelectorAll('.game-end__btn');

// Переключение на следующую игру 
for (var btn of btns) {
    btn.addEventListener('click', nextGame);
}
for (var p of plays) {
    plays[p]
}
function nextGame() {
    var target = event.target;
    var data = target.getAttribute("data");
    var next = data + 1;
    if (data == 2) {
        plays[data].classList.remove('play_active');
        plays[0].classList.add('play_active');
    }
    else {
        plays[data].classList.remove('play_active');
        plays[data].nextElementSibling.classList.add('play_active');
    }
}

// Исчезновения объектов и названий
for (var g of games) {
    games[g]
}
for (var end of gameEnds) {
    gameEnds[end]
}
for (var elem of elemHidden) {
    elem.addEventListener('click', hiddenElem);
}
function hiddenElem() {
    var target = event.target;
    var e = target.getAttribute("data");
    for (var i of elemNames) {
        elemNames[i]
    }
    if (e == 3) {
        target.classList.add('hidden');
        elemNames[e].parentNode.removeChild(elemNames[e]);
        function finish() {
            games[0].classList.remove('active');
            gameEnds[0].classList.add('active');
        }
        setTimeout(finish, 2000);
    }
    if (e == 7) {
        target.classList.add('hidden');
        elemNames[e].parentNode.removeChild(elemNames[e]);
        function finish() {
            games[1].classList.remove('active');
            gameEnds[1].classList.add('active');
        }
        setTimeout(finish, 2000);
    }
    if (e == 11) {
        target.classList.add('hidden');
        elemNames[e].parentNode.removeChild(elemNames[e]);
        function finish() {
            games[2].classList.remove('active');
            gameEnds[2].classList.add('active');
        }
        setTimeout(finish, 2000);
    }
    else {
        target.classList.add('hidden');
        elemNames[e].parentNode.removeChild(elemNames[e]);
    }
}