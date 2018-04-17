var WIZARD_NAMES = [
'Иван',
'Хуан',
'Себастьян',
'Мария',
'Кристоф',
'Виктор',
'Юлия',
'Люпита',
'Вашингтон'
];

var WIZARD_SURNAMES = [
'да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'
];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(, 46, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARD_NUMBER = 4;

var getRandomNumberFromInterval = function(min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
};

var getRandomArrayItem = function(array) {
    var index = getRandomNumberFromInterval(0, array.length - 1);
    return array[index];
};

var generateWizards = function() {
  var wizards = [];
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    var newWizard = {};
    newWizard.name = getRandomArrayItem(WIZARD_NAMES) + ' ' + getRandomArrayItem(WIZARD_SURNAMES);
    newWizard.coatColor = getRandomArrayItem(COAT_COLORS);
    newWizard.eyeColor = getRandomArrayItem(EYES_COLORS);
    wizards.push(newWizard);
  }
  return wizards;
};

// Задаем переменную с шаблоном, т.е. находим шаблон в DOM
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Создаем функцию для наполения шаблона данными
var generateMarkup = function(wizards) {

  // задаем переменную, с помощью которой будем записывать данные в шаблон и затем клонировать его
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  //Мы можем через имя массива обратиться к ключу объекта? Я это пропустила в теории
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyeColor;
  return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');

// Эээ... Перменную, которая массив, мы заполняем разметкой с данными? Тот же массив, что использовали в функции генерации объектов? Так можно?
var wizards = generateWizards();

// Объявляем переменную, в которой будем хранить фрагмент с данными
var fragment = document.createDocumentFragment();

// Отображаем элементы на странице
document.querySelector('.setup').classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

//
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    // Задаем переменную, в которой будут записываться элементы разметки,
    // Это массив и элементы этого массива - разметка с данными
    var wizardMarkup = generateMarkup(wizards[i])
    fragment.appendChild(wizardMarkup);
  }

similarListElement.appendChild(fragment);



