var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(, 46, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARD_NUMBER = 4;

document.querySelector('.setup').classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var getRandomNumberFromInterval = function(min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
};

var getRandomArrayItem = function(array) {
    var index = getRandomNumberFromInterval(0, array.length - 1);
    return array[index];
};

var generateWizard = function() {
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

var generateMarkup = function(wizards) {
  var wizardElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  wizardElement.querySelector('.setup-similar-label').textContent = newWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = newWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = newWizard.eyeColor;
  return wizardElement;
};

// Начиная с этой части я не уверена что все правильно.

// находим блок для отрисовки персонажей
var similarListElement = document.querySelector('setup-similar-list');

// создадим функцию для отрисовки
var renderWizard = function(wizardElement) {
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(wizardElement);
  }
  return fragment
};

// Что поняла сделала.
//

similarListElement.appendChild(fragment);



