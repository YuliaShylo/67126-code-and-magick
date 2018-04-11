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
var COLUMN_GAP_LEFT = 20;
var COLUNM_GAP_TOP = 20;
var COLUMN_COLOR_YOU = 'rgba(255, 0, 0, 1)'

var drawRect = function(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var drawText = function(ctx, text, x, y, textStyle, color) {
  ctx.font = textStyle;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var getMaxTime = function(arr) {
  var maxTime = arr[0];
  for (var i = 1; i < arr.lenght; i++) {
    if (arr[i] > maxTime) {
      maxTime = arr[i];
    }
  }
  return maxTime;
};

var randomNumberFromInterval = function(min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
};

window.renderStatistics = function(ctx, names, times) {

  drawRect(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_SHADOW);
  drawRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
  drawText(ctx, TEXT_CONG, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP, TEXT_STYLE, TEXT_COLOR);
  drawText(ctx, TEXT_RESULT, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + TEXL_LINE, TEXT_STYLE, TEXT_COLOR);


   for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      var COLUMN_COLOR_PLAYER = COLUMN_COLOR_YOU;
    } else {
      COLUMN_COLOR_PLAYER = "hsl(240, 100%," + randomNumberFromInterval(2, 100) + "%)";
  }

      var columnHeight = (MAX_COLUMN_HEIGHT * times[i]) / getMaxTime(times);

      drawRect(ctx, CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - columnHeight - TEXL_LINE, COLUMN_WIDTH, columnHeight, COLUMN_COLOR_PLAYER);
      drawText(ctx, names[i], CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT, TEXT_STYLE, TEXT_COLOR);
      drawText(ctx, Math.floor(times[i]), CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - columnHeight - TEXL_LINE*2, TEXT_STYLE, TEXT_COLOR);
  }
};
