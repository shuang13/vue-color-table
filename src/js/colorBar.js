import zp from './zbbPlot'
function ColorBar(dom, opts) {
  this.zp = new zp(dom);

  this.opts = opts;
  this.Boundary = {
    x: 0,
    y: 10,
    width: 67,
    height: dom.height - 20,

  }

  this.scaleCount = 100;
  this.axisTextInterval = 100;

  // 刻度盒子
  this.axisBoundary = {
    x: this.Boundary.x,
    y: this.Boundary.y,
    width: 40,
    height: this.Boundary.height,

  };
  // 坐标文字盒子
  this.axisTextBoundary = {
    x: this.axisBoundary.x,
    y: this.axisBoundary.y,
    width: 20,
    height: this.axisBoundary.height,

  }
  // 坐标刻度线盒子
  this.axisScaleBoundary = {
    x: this.axisTextBoundary.x,
    y: this.axisTextBoundary.y,
    width: 10,
    height: this.axisBoundary.height,

  }
  // 渐变条盒子
  this.barBoundary = {
    x: this.axisBoundary.x + this.axisBoundary.width,
    y: this.axisBoundary.y,
    width: 20,
    height: this.Boundary.height,

  }

}
ColorBar.prototype = {
  drawAxis: function () {
    this.drawAxisScale();
    this.drawAxisText();
  },
  drawBar: function () {
    let grd = this.zp.createLinearGradient(this.barBoundary.x, this.barBoundary.y, this.barBoundary.x, this.barBoundary.y + this.barBoundary.height);
    this.opts.data.forEach((item) => {
      grd.addColorStop(item.value, item.color);

    })
    this.zp.drawRect({
      x: this.barBoundary.x,
      y: this.barBoundary.y,
      width: this.barBoundary.width,
      height: this.barBoundary.height,
      style: {
        lineWidth: 1,
        fillStyle: grd
      }

    })
  },
  // 画字体
  drawAxisText: function () {
    let [min, max] = this.opts.minMax;
    let range = max - min;
    let textCount = range / this.axisTextInterval;
    let [orginX, orginY] = [this.axisTextBoundary.x, this.axisTextBoundary.y];
    for (let i = 0; i <= textCount; i++) {
      this.zp.drawText({
        x: orginX,
        y: orginY + i * this.axisTextBoundary.height / textCount,
        str: parseInt(min + i * this.axisTextInterval)
      });
    }
  },
  // 画坐标刻度
  drawAxisScale: function () {
    let [min, max] = this.opts.minMax;
    let range = max - min;
    let textCount = range / this.axisTextInterval;
    let [orginX, orginY] = [this.barBoundary.x, this.barBoundary.y];
    let shortTick = 3;
    let longTick = 6;
    let tickLength;
    let scaleCount = this.scaleCount;
    for (let i = 0; i <= scaleCount; i++) {
      if (i % (scaleCount / textCount) == 0) {
        tickLength = longTick;

      } else {
        tickLength = shortTick;
      }
      this.zp.drawLine({
        x1: orginX,
        y1: orginY + i * this.axisScaleBoundary.height / scaleCount,
        x2: orginX - tickLength,
        y2: orginY + i * this.axisScaleBoundary.height / this.scaleCount
      });
    }

  },
  render: function () {
    this.drawBar();
    this.drawAxis();
  },
  refresh: function (opts) {
    this.opts = opts;
    this.clear();
    this.render();
  },
  clear: function () {
    this.zp.clear();
  },
  init: function () {
    this.clear();
    this.render();
  }
}
export default ColorBar;