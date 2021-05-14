import zp from './zbbPlot'
function OpacityChart(dom, opts) {
  this.zp = new zp(dom);
  this.canvas = dom;
  this.opts = opts;
  this.scaleCount = 5;
  this.axisTextInterval = 0.2;
  this.drawLineByMouseFlag = opts.drawLineByMouse;
  this.opacityList = [];
  this.opacityPointY = [];
  this.colorPostion = [];
  this.Boundary = {
    x: 10,
    y: 10,
    width: 340,
    height: 150,
  };
  this.axisBoundary = {
    x: this.Boundary.x + 10,
    y: this.Boundary.y,
    width: 30,
    height: this.Boundary.height,
  };
  // 坐标文字盒子
  this.axisTextBoundary = {
    x: this.axisBoundary.x,
    y: this.axisBoundary.y,
    width: 20,
    height: this.axisBoundary.height,
    marginLeft: 0,
    marginRight: 0
  }
  // 坐标刻度线盒子
  this.axisScaleBoundary = {
    x: this.axisTextBoundary.x,
    y: this.axisTextBoundary.y,
    width: 10,
    height: this.axisBoundary.height,
    marginLeft: 10,
    marginRight: 0
  }
  this.gridBoundary = {
    x: this.axisBoundary.x + this.axisBoundary.width,
    y: this.Boundary.y,
    width: this.Boundary.width - this.axisBoundary.width,
    height: this.Boundary.height,
  };
}
OpacityChart.prototype = {
  drawAxis: function () {
    this.drawAxisScale();
    this.drawAxisText();
  },

  drawGrid: function () {
    this.zp.drawRect({
      x: this.gridBoundary.x,
      y: this.gridBoundary.y,
      width: this.gridBoundary.width,
      height: this.gridBoundary.height,
      style: {
        lineWidth: 1
      }
    })
    let postionX = 0;
    for (let i = 0; i < this.opts.data.length - 1; i++) {
      let step = parseInt((this.opts.data[i + 1].value - this.opts.data[i].value) * 100);
      let colorList = this.zp.utils.gradient(this.opts.data[i].color, this.opts.data[i + 1].color, step);
      for (let j = 0; j < step; j++) {

        let grd = this.zp.createLinearGradient(this.gridBoundary.x, this.gridBoundary.y, this.gridBoundary.x, this.gridBoundary.y + this.gridBoundary.height);
        grd.addColorStop(1, this.zp.utils.rgbaArrToString(this.zp.utils.hexToRgba(colorList[j], 0)));
        grd.addColorStop(0, this.zp.utils.rgbaArrToString(this.zp.utils.hexToRgba(colorList[j], 1)));


        this.zp.drawRect({
          x: this.gridBoundary.x + postionX,
          y: this.gridBoundary.y,
          width: this.gridBoundary.width / 100,
          height: this.gridBoundary.height,
          style: {
            lineWidth: 0,
            fillStyle: grd
          }
        })
        postionX += this.gridBoundary.width / 100;
        if (i == this.opts.data.length - 2 && j == step - 1) {
          this.zp.drawRect({
            x: this.gridBoundary.x + postionX,
            y: this.gridBoundary.y,
            width: this.gridBoundary.width / 100,
            height: this.gridBoundary.height,
            style: {
              lineWidth: 0,
              fillStyle: grd
            }
          })
        }
      }
    }


  },
  initDrawOpacityLine() {

    this.opacityList = [];
    this.opacityPointY = [];
    this.colorPostion = [];
    for (let i = 0; i < this.opts.data.length; i++) {
      if (this.zp.utils.isRgb(this.opts.data[i].color) && !isNaN(this.zp.utils.rgbStringToArr(this.opts.data[i].color)[3])) {
        this.opacityList.push(this.zp.utils.rgbStringToArr(this.opts.data[i].color)[3]);
      } else if (this.zp.utils.isHex(this.opts.data[i].color) || (this.zp.utils.isRgb(this.opts.data[i].color) && isNaN(this.zp.utils.rgbStringToArr(this.opts.data[i].color)[3]))) {
        this.opacityList.push(1);

      }
    }
    for (let i = 0; i < this.opts.data.length - 1; i++) {
      let step = parseInt(((this.opts.data[i + 1].value - this.opts.data[i].value) * 100).toFixed(0));
      for (let j = 0; j < step; j++) {
        if (j == 0) {
          this.colorPostion.push(this.opacityPointY.length);

          this.opacityPointY.push(this.opacityList[i]);

        } else {
          this.opacityPointY.push(1);
        }

      }
    }
    this.colorPostion.push(this.opacityPointY.length - 1)
    this.opacityPointY[this.opacityPointY.length - 1] = this.opacityList[this.opts.data.length - 1];
    this.drawOpacityLine();
  },
  drawOpacityLine() {
    for (let i = 0; i < this.opacityPointY.length; i++) {
      let pointX = this.dataToPoint(i, [0, 100], [this.gridBoundary.x + 2, this.gridBoundary.x + 2 + this.gridBoundary.width]);
      let pointY = this.dataToPoint(this.opacityPointY[i], [1, 0], [this.gridBoundary.y, this.gridBoundary.y + this.gridBoundary.height]);
      this.zp.addClick(pointX, pointY, true);
      this.zp.reDrawLineByMouse();
    }
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
        str: (max - i * this.axisTextInterval).toFixed(1),
        style: {
          fillStyle: 'red'
        }
      });
    }
  },
  // 画坐标刻度
  drawAxisScale: function () {
    let [min, max] = this.opts.minMax;
    let range = max - min;
    let textCount = range / this.axisTextInterval;
    let [orginX, orginY] = [this.gridBoundary.x, this.gridBoundary.y];
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
  drawLineByMouse: function () {
    let paintFlag = false;
    let left = this.canvas.getBoundingClientRect().left;
    let top = this.canvas.getBoundingClientRect().top + 20;
    this.canvas.addEventListener('mousedown', (e) => {
      let mouseX = e.pageX - left;
      let mouseY = e.pageY - top;
      if (mouseX > this.gridBoundary.x && mouseY > this.gridBoundary.y && mouseX < this.gridBoundary.x + this.gridBoundary.width && mouseY < this.gridBoundary.y + this.gridBoundary.height) {
        paintFlag = true;
        this.zp.addClick(mouseX, mouseY, false);
        this.zp.reDrawLineByMouse();
      }


    }, false);
    this.canvas.addEventListener('mousemove', (e) => {
      e.preventDefault();
      let mouseX = e.pageX - left;
      let mouseY = e.pageY - top;
      if (paintFlag) {
        if (mouseX > this.gridBoundary.x && mouseY > this.gridBoundary.y && mouseX < this.gridBoundary.x + this.gridBoundary.width && mouseY < this.gridBoundary.y + this.gridBoundary.height) {
          this.zp.addClick(mouseX, mouseY, true);
          this.zp.reDrawLineByMouse();
        }
      }
    }, false);
    this.canvas.addEventListener('mouseup', () => {

      for (let i = 99; i < this.zp.clickX.length; i++) {
        let dataX = parseInt(this.pointToData(this.zp.clickX[i], [this.gridBoundary.x, this.gridBoundary.x + this.gridBoundary.width], [0, 100]));
        let dataY = Number(this.pointToData(this.zp.clickY[i], [this.gridBoundary.y, this.gridBoundary.y + this.gridBoundary.height], [1, 0]).toFixed(2));
        for (let j = 0; j < this.colorPostion.length; j++) {

          if (dataX >= this.colorPostion[j] && dataX < this.colorPostion[j] + 5) {
            this.opacityPointY[this.colorPostion[j]] = dataY;

          }

        }
      }
      for (let i = 0; i < this.colorPostion.length; i++) {
        this.opacityList[i] = this.opacityPointY[this.colorPostion[i]];
      }
      this.clear();
      this.drawGrid();
      this.drawAxis();
      this.drawOpacityLine();
      paintFlag = false;
    }, false);
    this.canvas.addEventListener('mouseleave', () => {
      for (let i = 99; i < this.zp.clickX.length; i++) {
        let dataX = parseInt(this.pointToData(this.zp.clickX[i], [this.gridBoundary.x, this.gridBoundary.x + this.gridBoundary.width], [0, 100]));
        let dataY = Number(this.pointToData(this.zp.clickY[i], [this.gridBoundary.y, this.gridBoundary.y + this.gridBoundary.height], [1, 0]).toFixed(2));
        for (let j = 0; j < this.colorPostion.length; j++) {

          if (dataX >= this.colorPostion[j] && dataX < this.colorPostion[j] + 5) {
            this.opacityPointY[this.colorPostion[j]] = dataY;

          }

        }
      }
      for (let i = 0; i < this.colorPostion.length; i++) {
        this.opacityList[i] = this.opacityPointY[this.colorPostion[i]];
      }
      this.clear();
      this.drawGrid();
      this.drawAxis();
      this.drawOpacityLine();
      paintFlag = false;
    }, false);


  },
  addEvent: function () {
    if (this.drawLineByMouseFlag) {
      this.drawLineByMouse();
    }
  },
  // 数据转为像素坐标
  dataToPoint: function (data, domain, range) {
    return this.zp.utils.linearMap(data, domain, range);
  },
  // 像素坐标转数据
  pointToData: function (point, domain, range) {
    return this.zp.utils.linearMap(point, domain, range);
  },
  render: function () {
    this.drawGrid();
    this.drawAxis();
    this.initDrawOpacityLine();

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
    this.addEvent();

  }
}
export default OpacityChart;