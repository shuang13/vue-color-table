<template>
  <div class="vct">
    <div class="vct_trigger" :style="{...triggerStyle, background: parseBgcolorTemplate(value)}" @click="handleTrigger">
    </div>
    <el-dialog class="vct_dialog" title="颜色方案" :visible.sync="dialogVisible" width="780px" height="550px">
      <div class="vct_dialog_content">
        <div class="vct_dialog_content_left">
          <div class="vct_dialog_content_left_table">
            <el-table ref="leftTable" height="100%" fixed highlight-current-row :data="lutData" border
              :header-cell-style="{padding: 0}" :cell-style="{padding: 0}" @row-click="handleRowClick">
              <el-table-column prop="name" label="方案名称">
              </el-table-column>
              <el-table-column label="色表">
                <template slot-scope="scope">
                  <div :style="setBgStyleByColorArr(scope.$index)"></div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="vct_dialog_content_left_handle">
            <div class="vct_dialog_content_left_handle_input-box  ui-vct-ib">
              <span class="vct_dialog_content_left_handle_input-box_text">名称：</span>
              <input class="vct_dialog_content_left_handle_input-box_value" type="text" v-model="currentName">
            </div>
            <div class="vct_dialog_content_left_handle_btn  ui-vct-ib">
              <button class="vct_dialog_content_left_handle_btn_save ui-vct-btn" @click="handleBtnSave">保存</button>
              <button class="vct_dialog_content_left_handle_btn_delete ui-vct-btn" @click="handleBtnDelete">删除</button>
            </div>
          </div>
        </div>
        <div class="vct_dialog_content_mid">
          <div class="vct_dialog_content_mid_opacity-chart" @mouseup="parseOpacityToLutItem"
            >
            <canvas class="vct_dialog_content_mid_opacity-chart_canvas" width="360px" height="170px"></canvas>
          </div>
          <div class="vct_dialog_content_mid_lut-color-table">
            <el-table :data="lutItem" height="100%" fixed border :header-cell-style="{padding: 0}"
              :cell-style="{padding: 0}" @select="handleSelectionChange">
              <el-table-column type="selection" label="状态" width="55">
              </el-table-column>
              <el-table-column label="颜色">
                <template slot-scope="scope">
                  <el-color-picker class="vct_dialog_content_mid_lut-color-table_color-picker"
                    v-model="lutItem[scope.$index].color" show-alpha @change="handleColorPickerChange">
                  </el-color-picker>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="真实值" :formatter="colorValueformatter">
              </el-table-column>
            </el-table>
          </div>
          <div class="vct_dialog_content_mid_handle">
            <input v-model="ipNum" class="vct_dialog_content_mid_handle_input-interpolation" type="number" value="1"
              oninput="if(value<1)value=1">
            <div class="vct_dialog_content_mid_handle_btn ui-vct-ib">
              <button class="vct_dialog_content_mid_handle_btn_interpolation ui-vct-btn"
                @click="handleBtnInterpolation">插值</button>
              <button class="vct_dialog_content_mid_handle_btn_delete ui-vct-btn" @click="handleBtnRemove">删除</button>
            </div>
          </div>
        </div>
        <div class="vct_dialog_content_right" >
          <canvas class="vct_dialog_content_right_color-bar" width="67px" height="500px">

          </canvas>
        </div>
      </div>
      <div slot="footer" class="vct_dialog_footer">
        <button class="vct_dialog_footer_btn-cancel ui-vct-btn" @click="handleBtnCancel">取 消</button>
        <button class="vct_dialog_footer_btn-ok ui-vct-btn" @click="handleBtnOk">确 定</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ColorBar from './js/colorBar.js'
  import OpacityChart from './js/opacityChart.js'
  import utils from './js/utils.js'
  const COLOR_TABLE_CONFIG = {
    'rainbow': [[0.0, 'rgba(0, 0, 255, 1.0)'], [0.2, 'rgba(0, 255, 255, 1.0)'], [0.5, 'rgba(0, 255, 0, 0.5)'], [0.8, 'rgba(255, 255, 0, 1.0)'], [1.0, 'rgba(255, 0, 0, 1.0)']],
    'cooltowarm': [[0.0, '#3C4EC2'], [0.2, '#9BBCFF'], [0.5, '#DCDCDC'], [0.8, '#F6A385'], [1.0, '#B40426']],
    'blackbody': [[0.0, '#000000'], [0.2, '#780000'], [0.5, '#E63200'], [0.8, '#FFFF00'], [1.0, '#FFFFFF']],
    'grayscale': [[0.0, '#000000'], [0.2, '#404040'], [0.5, '#7F7F80'], [0.8, '#BFBFBF'], [1.0, '#FFFFFF']],
    'rainbow2': [[0.0, '#000000'], [0.2, '#404040'], [0.5, '#7F7F80'], [1, '#BFBFBF']]

  }
  export default {
    props: {
      value: {
        type: Object,
        default: function () {
          return {
            name: 'rainbow',
            colors: COLOR_TABLE_CONFIG['rainbow']
          }
        }
      },
      minMax: {
        type: Array,
        default: function () {
          return [0, 1]
        }
      }
    },
    watch: {
      dialogVisible(val) {
        if(!val) {
          this.destroyColorBar();
          this.destroyOpacityChart();
        }
      }
    },
    computed: {
      newVal: {
        get: function () {
          return this.value;
        },
        set: function (val) {
          this.$emit('input', val);
        }
      }
    },
    data() {
      return {

        currentName: this.value.name,
        currentIndex: Number,
        ipNum: 1,
        dialogVisible: false,
        triggerStyle: {
          width: '100px',
          height: '25px',

        },
        tableHeaderStyle: {
          padding: 0,
        },

        tableCellStyle: {
          padding: 0,
        },
        lutData: this.parseTableData(COLOR_TABLE_CONFIG),
        lutItem: null,
        selectIndex: [],
        cb: null,
        oc: null
      };
    },
    created() {
      if (!this.value.name) {
        this.value['name'] = 'rainbow';
        this.value['colors'] = COLOR_TABLE_CONFIG['rainbow'];
        this.currentName = 'rainbow';
      }
    },
    destroyed () {
    },
    mounted() {
      
    },
    methods: {
      colorValueformatter(row) {
        return row.value * (this.minMax[1] - this.minMax[0]) + this.minMax[0];
      },
      setBgStyleByColor(index) {
        return {
          width: '100%',
          height: '25px',
          background: this.lutItem[index].color
        }
      },
      setBgStyleByColorArr(index) {
        return {
          width: '100%',
          height: '25px',
          background: this.parseBgcolorTemplate(this.lutData[index])
        }
      },
      parseTableData(obj) {
        let arr = [];
        for (let key in obj) {
          arr.push({
            name: key,
            colors: obj[key]
          })
        }
        return arr;
      },
      parseBgcolorTemplate(val) {
        let str = '';
        val.colors.forEach((item) => {
          str += ',' + item[1] + ' ' + item[0] * 100 + '%';
        })
        return `linear-gradient(to right ${str})`;
      },

      setLutTableActive(index) {
        if (this.lutData.length == 0 || index >= this.lutData.length) {
          this.lutItem = [];
        } else {
          this.lutItem = this.parseLutItem(this.lutData[index].colors);
          this.$refs.leftTable.setCurrentRow(this.lutData[index]);

        }

      },
      parseLutItem(colors) {
        let lutItem = [];
        let color;
        colors.forEach((item) => {

          if (utils.isHex(item[1])) {
            color = utils.rgbaArrToString(utils.hexToRgba(item[1], 1));
          } else if (utils.isRgb(item[1])) {
            color = item[1];
          } else {
            this.$message({
              showClose: true,
              message: '颜色设置错误！',
              type: 'error'
            });
          }
          lutItem.push({
            value: item[0],
            color: color,
          })
        })
        return lutItem;
      },
      addLutItem(items) {
        this.currentIndex = this.lutData.length;
        this.modifyLutItem(this.currentIndex, items);
        this.setLutTableActive(this.currentIndex);
        this.$message({
          showClose: true,
          message: '保存成功！',
          type: 'success'
        });
      },
      deleteLutItem(index) {
        if (this.lutData.length == 0) {
          return this.$message({
            showClose: true,
            message: '当前颜色方案为空！',
            type: 'warning'
          });
        }
        this.lutData.splice(index, 1)
      },
      modifyLutItem(index, items) {
        let colors = [];
        items.forEach((item) => {
          colors.push([item.value, item.color])
        })
        this.$set(this.lutData, index, {
          name: this.currentName,
          colors: colors
        });
        this.$message({
          showClose: true,
          message: '保存成功！',
          type: 'success'
        });
      },
      deleteColorItem(indexArr) {
        for (let i = indexArr.length - 1; i >= 0; i--) {
          this.lutItem.splice(indexArr[i], 1);
        }
      },
      addColorItem(newList) {
        this.lutItem.splice(this.selectIndex[0] + 1, this.selectIndex[1] - this.selectIndex[0] - 1);
        this.selectIndex[1] = this.selectIndex[0] + 1;
        for (let i = newList.length - 1; i >= 0; i--) {
          this.lutItem.splice(this.selectIndex[0] + 1, 0, newList[i]);
          this.selectIndex[1]++
        }
      },
      modifyColorItem(index, items) {
        let colors = [];
        items.forEach((item) => {
          colors.push([item.value, item.color])
        })
        this.$set(this.lutData, index, {
          name: this.currentName,
          colors: colors
        });
      },
      handleTrigger() {
        this.dialogVisible = true;
        this.currentIndex = utils.getIndexByObjName(this.lutData, this.value.name);
        this.$nextTick(() => {
          this.setLutTableActive(this.currentIndex);
          this.initColorBar();
          this.initOpacityChart();
        })

      },
      handleRowClick(row) {
        this.currentIndex = utils.getIndexByObjName(this.lutData, row.name);
        this.currentName = this.lutData[this.currentIndex].name;
        this.setLutTableActive(this.currentIndex);
        this.refreshColorBar();
        this.refreshOpacityChart();
      },
      parseOpacityToLutItem() {
        for (let i = 0; i < this.lutItem.length; i++) {
          let splitArr = this.lutItem[i].color.split(',');
          splitArr[3] = `${this.oc.opacityList[i]})`;
          this.lutItem[i].color = splitArr.join(',');

        }
        this.handleColorPickerChange();
      },
      handleBtnSave() {
        if (!this.currentName) {
          return this.$message({
            showClose: true,
            message: '名称为空！',
            type: 'warning'
          });
        }
        let index = utils.getIndexByObjName(this.lutData, this.currentName);


        index < 0 ? this.addLutItem(this.lutItem) : this.modifyLutItem(index, this.lutItem);
      },
      handleBtnDelete() {
        this.deleteLutItem(this.currentIndex);
        this.setLutTableActive(0);

      },

      handleBtnOk() {
        this.dialogVisible = false;
        this.newVal = this.lutData[this.currentIndex];
      },
      handleBtnCancel() {
        this.dialogVisible = false;
      },
      handleSelectionChange(selections) {
        let indexs = [];
        selections.forEach((val) => {
          this.lutItem.forEach((v, i) => {
            if (val.value == v.value) {
              indexs.push(i);
            }
          })
        })
        this.selectIndex = indexs.sort();

      },
      handleBtnInterpolation() {
        if (this.selectIndex.length != 2) {
          return this.$message({
            showClose: true,
            message: '只能在两个颜色滑块之间插值！',
            type: 'warning'
          });
        }
        let newList = [];
        let newCount = parseInt(this.ipNum);
        let step = newCount + 1;
        let startValue = this.lutItem[this.selectIndex[0]].value;
        let endValue = this.lutItem[this.selectIndex[1]].value
        let range = endValue - startValue;
        let newColorList = utils.gradient(this.lutItem[this.selectIndex[0]].color, this.lutItem[this.selectIndex[1]].color, step);
        for (let i = 1; i < step; i++) {
          newList.push({
            value: (startValue + range * i / step).toFixed(2),
            color: utils.rgbaArrToString(utils.hexToRgba(newColorList[i], 1)),

          });
        }
        this.addColorItem(newList);
        this.refreshColorBar();
        this.refreshOpacityChart();
      },
      handleBtnRemove() {
        if (this.selectIndex.length == 0 || this.selectIndex[0] === 0 || this.selectIndex.indexOf(this.lutItem.length - 1) != -1) {
          return this.$message({
            showClose: true,
            message: '首尾颜色滑块不能移除！',
            type: 'warning'
          });
        }
        this.deleteColorItem(this.selectIndex);
        this.refreshColorBar();
        this.refreshOpacityChart();
      },
      handleColorPickerChange() {
        this.refreshColorBar();
        this.refreshOpacityChart();
      },

      initColorBar() {
        let opts = {
          data: this.lutItem,
          minMax: this.minMax
        }
        this.cb = new ColorBar(document.querySelector('.vct_dialog_content_right_color-bar'), opts);
        this.cb.init();
      },
      refreshColorBar() {
        let opts = {
          data: this.lutItem,
          minMax: this.minMax
        }
        this.cb.refresh(opts);
      },
      destroyColorBar () {
        this.cb.destroyed();
        this.cb = null;
      },
      initOpacityChart() {
        let opts = {
          data: this.lutItem,
          minMax: [0, 1],
          drawLineByMouse: true
        }
        this.oc = new OpacityChart(document.querySelector('.vct_dialog_content_mid_opacity-chart_canvas'), opts);
        this.oc.init();
      },
      
      refreshOpacityChart() {
        let opts = {
          data: this.lutItem,
          minMax: [0.0, 1.0]
        }
        this.oc.refresh(opts);
      },
      destroyOpacityChart() {
        this.oc.destroy();
        this.oc = null;
      }
    }
  };
</script>
<style src="./style.scss" lang="scss"></style>

