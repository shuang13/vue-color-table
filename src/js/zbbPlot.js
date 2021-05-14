import utils from './utils'
let DEFAULT_STYLE_CONFIG = {
  LINE: {
    lineWidth: 1,
  },
  TEXT: {
    fillStyle: '#000',
    fontSize: '12px',
  },
  RECT: {

  },
  LINE_BY_MOUSE: {
    strokeStyle: "blue",
    lineJoin: "round",
    lineWidth: 1,
  }

}
function ZbbPlot(dom) {
  this.canvas = dom;
  this.ctx = dom.getContext('2d');
  this.halfPixel = 0.5;
  this.utils = utils;
  this.clickX = Array(100);
  this.clickY = Array(100);
  this.clickDrag = Array(100);
}
ZbbPlot.prototype = {
  // 画字体
  drawText: function (opts) {
    let maginLeft = 0;
    let maginTop = 6;
    let style = opts.style || {};
    this.ctx.beginPath();
    for (let key in DEFAULT_STYLE_CONFIG.TEXT) {
      this.ctx[key] = DEFAULT_STYLE_CONFIG.TEXT[key];
    }
    for (let key in style) {
      this.ctx[key] = style[key];
    }

    this.ctx.fillText(opts.str, opts.x + maginLeft, opts.y + maginTop);
    this.ctx.closePath();
  },
  // 画线
  drawLine: function (opts) {
    let style = opts.style || {};

    this.ctx.beginPath();
    for (let key in DEFAULT_STYLE_CONFIG.LINE) {
      this.ctx[key] = DEFAULT_STYLE_CONFIG.LINE[key];
    }
    for (let key in style) {
      this.ctx[key] = style[key];
    }
    this.subPixel(this.ctx.lineWidth);
    this.ctx.moveTo(opts.x1, opts.y1 + this.halfPixel);
    this.ctx.lineTo(opts.x2, opts.y2 + this.halfPixel);
    this.ctx.stroke();
    this.ctx.closePath();
  },
  // 画矩形
  drawRect: function (opts) {
    this.ctx.beginPath();
    this.subPixel(opts.style.lineWidth);
    if (opts.style.fillStyle) {
      this.ctx.fillStyle = opts.style.fillStyle;
      this.ctx.fillRect(opts.x + this.halfPixel, opts.y + this.halfPixel, opts.width, opts.height);
    }
    if (opts.style.lineWidth) {
      this.ctx.lineWidth = opts.style.lineWidth;
      this.ctx.strokeStyle = "#000";
      this.ctx.strokeRect(opts.x + this.halfPixel, opts.y + this.halfPixel, opts.width, opts.height);
    }
    this.ctx.closePath();
  },
  createLinearGradient: function (x, y, x2, y2) {
    return this.ctx.createLinearGradient(x, y, x2, y2);
  },
  // 线条像素优化
  subPixel: function (lineWidth) {
    if (lineWidth % 2 == 1) {
      this.halfPixel = 0.5;
    } else {
      this.halfPixel = 0;
    }
  },

  addClick: function (x, y, dragging) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);

  },
  reDrawLineByMouse: function (opts) {
    let option = opts || {};
    let style = option.style || {};

    for (let key in DEFAULT_STYLE_CONFIG.LINE_BY_MOUSE) {
      this.ctx[key] = DEFAULT_STYLE_CONFIG.LINE_BY_MOUSE[key];
    }
    for (let key in style) {
      this.ctx[key] = style[key];
    }
    for (var i = 0; i < this.clickX.length; i++) {
      this.ctx.beginPath();
      if (this.clickDrag[i] && i) {//当是拖动而且i!=0时，从上一个点开始画线。
        this.ctx.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
      } else {
        this.ctx.moveTo(this.clickX[i] - 1, this.clickY[i]);
      }

      this.ctx.lineTo(this.clickX[i], this.clickY[i]);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  },
  clearLineByMouse() {
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.clearLineByMouse();
  }
}
export default ZbbPlot;