// Показываем окно настроек, удаляя у элемента соотв. класс
document.querySelector('.setup').classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

// переменная, в которой будет блок с персонажем.
var similarListElement = document.querySelector('.setup-similar-list');

var similarPlayerTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var PLAYER_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var PLAYER_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(, 46, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES = ['black', 'red', 'blue', 'yellow', 'green'];



// 1) Не понимаю вот этого: состоящий из 4 сгенерированных из JS объектов, дальше написала цикл, но не уверена что правильно
// 2) а также зачем нам вообще нужны эти объекты, все это можно брать из переменных выше

// массив из объектов.
var players = [
  {
  name: 'PLAYER_NAMES, PLAYER_SURNAMES',
  coatColor: COATS,
  eyeColor: EYES,
  }
];

// цикл, который создает объект и закидывает объект в массив
for (i = 0; i < 4; i++) {
  players++;
}

var getRandomNumber = function(min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
};

// 3) не понимаю, как написать функцию, которая будет создавать DOM-элементы, соответствующие случайно сгенерированным волшебникам.
// Не очень понимаю какие у функции должны быть параметры, что она должна принимать на вход и откуда брать это

// 4) Не понимаю, куда подставить случайное число.
// Я собиралась вместо индекса вставиь функцию, которая как раз и будет возвращать случайное число, выбирающее элемент массива имен. Вот так:
 playerElement.querySelector('.wizard-coat').style.fill = player.COATS[getRandomNumber(1, COATS.length-1)];


// отрисуем четырех похожих персонажей
for (var i = 0; i < players.length; i++) {
  var playerElement = similarPlayerTemplate.cloneNode(true);

  playerElement.querySelector('.setup-similar-label').textContent = PLAYER_NAMES[i] + PLAYER_SURNAMES[i];

  playerElement.querySelector('.wizard-coat').style.fill = COATS[i];

  playerElement.querySelector('.wizard-eyes').style.fill = EYES[i]

  similarListElement.appendChild(playerElement);
};

