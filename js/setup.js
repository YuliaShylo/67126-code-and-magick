// Показываем окно настроек, удаляя у элемента соотв. класс
document.querySelector('.setup').classList.remove('hidden');

// заводим переменную, в которой будем шаблон
var similarPlayerTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Объявляем переменные с массивом значений
var PLAYER_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var PLAYER_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(, 46, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES = ['black', 'red', 'blue', 'yellow', 'green'];

// Создаем массив из объектов, описывающих персонажей.
// ВОПРОС! Это принципиально? Зачем здесь массив из объектов, почему не завести объект с массивами?
var otherPlayers = [
  {
  name: PLAYER_NAMES
  },
  {
  surname: PLAYER_SURNAMES
  },
  {
  coatColor: COATS
  },
  {
  eyeColor: EYES
  }
];

// функция, выбирающая случайный элемент массива
var getRandomNumber = function(min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
};

// Задание: создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива
// ВОПРОС. Не очень понимаю какие у функции должны быть параметры, что она должна принимать на вход и откуда брать это
var renderPlayer = function(player) {
  var playerElement = similarPlayerTemplate.cloneNode(true);

  //ВОПРОС. Можно ли так запустить функцию нахождения случайного числа getRandomNumber и получить случайный элемент?
  playerElement.querySelector('.wizard-coat').style.fill = player.COATS[getRandomNumber(COATS.length[0], COATS.length-1)];

  return playerElement;
};

var fragment = document.CreateDocumentFragment();

// цикл, заполняющий блок сгенерированными элементами.
// ВОПРОС. Сколько должно отрисовываться персонажей?
for (var i = 0; i < PLAYER_NAMES.length; i++) {

  fragment.appendChild(renderPlayer())
  // ВОПРОС. что должно быть в скобках?

};

// Отрисовываем персонажей всех сразу на странице
document.querySelector('.setup-similar-list').appendChild(fragment)

// Удаляем класс hidden у блока с новыми персонажами
document.querySelector('.setup-similar').classList.remove('hidden')







// Черновики


  // playerElement.querySelector('.setup-similar-label').textContent = 'player.PLAYER_NAMES[randomNumber]' + 'player.PLAYER_SURNAMES[randomNumber]';

    // playerElement.querySelector('.wizard-eyes').style.fill = player.EYES[randomNumber]

    // Заводим переменную, в которой будут все персонажи вместе
