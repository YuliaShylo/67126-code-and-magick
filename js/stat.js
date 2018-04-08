
// Константы

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var SHADOW_SHIFT = 10;
var TEXT_CONG =  'Ура вы победили!';
var TEXT_RESULT = 'Список результатов:';
var TEXT_STYLE = '16px PT Mono';
var TEXT_COLOR = '#000';
var TEXT_GAP = 20;
var TEXL_LINE = 20;
var MAX_COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var COLUMN_GAP_LEFT = 100;
var COLUNM_GAP_TOP = 20;
var min = 10;
var max = 100;
// Можно переменные использовать как параметры для функции?
var columnColorYou = 'rgba(255, 0, 0, 1)'


// Функции и переменные

var columnHeight = (MAX_COLUMN_HEIGHT * times[i]) / getMaxTime;

var drawRect = function(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var drawText = function(ctx, text, x, y, textStyle, color) {
  ctx.font = textStyle;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var getMaxTime = function(times) {
  var maxTime = times[0];
  for (var i = 1; i < times.lenght; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

  var randomNumberFromInterval = function(min, max) {
    var randomNumber = min + Math.random() * (max + 1 - min);
      randomNumber = Math.floor(randomNumber);
      return randomNumber;
  }
};

window.renderStatistics = function(ctx, names, times) {
// Рисует облако
  drawRect(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_SHADOW);
  drawRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
  drawText(ctx, TEXT_CONG, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP, TEXT_STYLE, TEXT_COLOR);
  drawText(ctx, TEXT_RESULT, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + TEXL_LINE, TEXT_STYLE, TEXT_COLOR);

   for (var i = 0; i < names.lenght; i++) {
    // Я не поняла, почему у тебя в примере
    //"рисовать столбцы
    // for (var i = 0; i < COL_SIZE; i++)''
    // https://codepen.io/sashasushko/pen/MVzQpp?editors=0010

// рисует столбики
      drawRect(ctx, CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + COLUNM_GAP_TOP + (columnHeight - MAX_COLUMN_HEIGHT) + columnHeight, COLUMN_WIDTH, columnHeight, columnColorPlayer);
      drawText(ctx, names[i], CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + COLUNM_GAP_TOP + (columnHeight - MAX_COLUMN_HEIGHT) + columnHeight + TEXL_LINE, TEXT_STYLE, TEXT_COLOR);
      drawText(ctx, Math.floor(times[i]), CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + COLUNM_GAP_TOP + (columnHeight - MAX_COLUMN_HEIGHT) - TEXL_LINE, TEXT_STYLE, TEXT_COLOR);

      if (names[i] === 'Вы') {
        columnColorPlayer = columnColorYou;
      } else {
        columnColorPlayer = "hsl(240, 100%," + randomNumberFromInterval + "%)";
      }
   }
};
