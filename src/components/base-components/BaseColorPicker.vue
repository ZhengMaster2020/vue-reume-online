<template>
  <div
    class="zs-color-picker"
    ref="colorPicker"
    v-click="closePanel"
    @click="e => e.stopPropagation()"
  >
    <!-- 颜色选择入口 -->
    <div
      class="zs-color-picker-btn"
      :style="{ backgroundColor: showColor, ...btnStyle }"
      @click="openPanel"
    />

    <!-- 颜色选择面板 -->
    <div :class="['zs-color-picker-panel', visible ? 'zs-color-picker-panel__visible' : '']">
      <div class="panel-header">
        <div class="color-view" :style="`background-color: ${showPanelColor}`" />
        <div
          class="default-color"
          @mouseover="hoveColor = defaultColor"
          @mouseout="hoveColor = null"
          @click="handleDefaultColor"
        >
          默认颜色
        </div>
      </div>

      <div class="panel-main">
        <h3>主题颜色</h3>
        <ul class="theme-color">
          <li
            v-for="(color, index) of tColor"
            :key="index"
            :style="{ backgroundColor: color }"
            @mouseover="hoveColor = color"
            @mouseout="hoveColor = null"
            @click="updataValue(color)"
          />
        </ul>
        <ul class="standard-color">
          <li v-for="(item, index) of colorPanel" :key="index">
            <ul>
              <li
                v-for="(color, cindex) of item"
                :key="cindex"
                :style="{ backgroundColor: color }"
                @mouseover="hoveColor = color"
                @mouseout="hoveColor = null"
                @click="updataValue(color)"
              />
            </ul>
          </li>
        </ul>

        <h3>标准颜色</h3>
        <ul class="theme-color">
          <li
            v-for="(color, index) of bColor"
            :key="index"
            :style="{ backgroundColor: color }"
            @mouseover="hoveColor = color"
            @mouseout="hoveColor = null"
            @click="updataValue(color)"
          />
        </ul>

        <h3 @click="triggerHtml5Color" style="cursor: pointer;">更多颜色...</h3>

        <!-- HTML DOM Color 对象 -->
        <input
          type="color"
          ref="html5Color"
          v-model="html5Color"
          @change="updataValue(html5Color)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import click from '../../utils/utils'

export default {
  name: 'color-picker',

  // 自定义 v-click命令
  directives: { click },

  props: {
    // 当前选中的颜色值
    value: {
      type: [String, undefined]
    },

    // 默认颜色
    defaultColor: {
      type: String,
      default: '#000'
    },

    // 入口按钮样式
    btnStyle: {
      type: [String, Object]
    }
  },

  data() {
    return {
      // 颜色面板显隐
      visible: false,

      // 鼠标经过的颜色块
      hoveColor: null,

      // 用户输入的颜色值
      html5Color: this.value,

      // 主题颜色
      tColor: [
        '#000000',
        '#ffffff',
        '#eeece1',
        '#1e497b',
        '#4e81bb',
        '#e2534d',
        '#9aba60',
        '#8165a0',
        '#47acc5',
        '#f9974c'
      ],

      // 颜色面板
      colorConfig: [
        ['#7f7f7f', '#f2f2f2'],
        ['#0d0d0d', '#808080'],
        ['#1c1a10', '#ddd8c3'],
        ['#0e243d', '#c6d9f0'],
        ['#233f5e', '#dae5f0'],
        ['#632623', '#f2dbdb'],
        ['#4d602c', '#eaf1de'],
        ['#3f3150', '#e6e0ec'],
        ['#1e5867', '#d9eef3'],
        ['#99490f', '#fee9da']
      ],

      // 标准颜色
      bColor: [
        '#c21401',
        '#ff1e02',
        '#ffc12a',
        '#ffff3a',
        '#90cf5b',
        '#00af57',
        '#00afee',
        '#0071be',
        '#00215f',
        '#72349d'
      ]
    }
  },

  computed: {
    // 显示面板颜色
    showPanelColor() {
      if (this.hoveColor) {
        return this.hoveColor
      } else {
        return this.showColor
      }
    },

    // 展示当前选中的颜色值
    showColor() {
      if (this.value) return this.value
      return this.defaultColor
    },

    // 颜色面板
    colorPanel() {
      const colorArr = []
      for (let color of this.colorConfig) {
        colorArr.push(this.gradientValue(color[1], color[0], 5))
      }
      return colorArr
    }
  },

  methods: {
    openPanel() {
      this.visible = !this.visible
    },

    closePanel() {
      this.visible = false
    },

    triggerHtml5Color() {
      this.$refs.html5Color.click()
    },

    // 设置默认颜色
    handleDefaultColor() {
      this.updataValue(this.defaultColor)
    },

    // 更新组件的值 value
    updataValue(value) {
      this.$emit('input', value)
      this.$emit('change', value)
      this.visible = false
    },

    // 计算渐变过渡颜色
    gradientValue(startColor, endColor, step) {
      // 讲 hex 转换为 rgb
      const sColor = this.hexToRgb(startColor)
      const eColor = this.hexToRgb(endColor)

      // 计算R\G\B每一步的差值
      const rStep = (eColor[0] - sColor[0]) / step
      const gStep = (eColor[1] - sColor[1]) / step
      const bStep = (eColor[2] - sColor[2]) / step

      const gradientColorArr = []
      // 计算每一步的hex值
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(
          this.rgbToHex(
            parseInt(rStep * i + sColor[0]),
            parseInt(gStep * i + sColor[1]),
            parseInt(bStep * i + sColor[2])
          )
        )
      }
      return gradientColorArr
    },

    // RGB 颜色 转 HEX 颜色
    rgbToHex(r, g, b) {
      const hex = ((r << 16) | (g << 8) | b).toString(16)
      return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
    },

    // HEX 转 RGB 颜色
    hexToRgb(hex) {
      hex = this.parseColor(hex)
      const rgb = []
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
      }
      return rgb
    },

    // 格式化 hex 颜色值
    parseColor(hexStr) {
      if (hexStr.length === 4) {
        hexStr = '#' + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3]
      } else {
        return hexStr
      }
    }
  }
}
</script>

<style lang="less" scoped>
.zs-color-picker {
  position: relative;
  text-align: left;
  font-size: 14px;
  display: inline-block;
  outline: none;

  ul,
  li,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  // 入口按钮， 默认宽高位15px
  &-btn {
    width: 15px;
    height: 15px;
    background-color: #000;
    cursor: pointer;
    border: 1px solid #eee;
  }

  // 颜色面板 初始状态隐藏
  &-panel {
    position: absolute;
    width: 190px;
    background: #fff;
    border: 1px solid #ddd;
    visibility: hidden;
    border-radius: 2px;
    margin-top: 2px;
    padding: 10px;
    padding-bottom: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: all 0.3s ease;
    box-sizing: content-box;

    h3 {
      margin: 0;
      font-size: 14px;
      font-weight: normal;
      margin-top: 10px;
      margin-bottom: 5px;
      line-height: 1;
      color: #333;
    }

    input {
      visibility: hidden;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .panel-header {
      overflow: hidden;
      line-height: 29px;
      .color-view {
        width: 100px;
        height: 30px;
        float: left;
        transition: background-color 0.3s ease;
      }

      .default-color {
        width: 80px;
        float: right;
        text-align: center;
        border: 1px solid #ddd;
        cursor: pointer;
        color: #333;
      }
    }

    .panel-main {
      .theme-color {
        li {
          width: 15px;
          height: 15px;
          display: inline-block;
          margin: 0 2px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        li:hover {
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
          transform: scale(1.3);
        }
      }

      .standard-color {
        li {
          width: 15px;
          display: inline-block;
          margin: 0 2px;
          li {
            display: block;
            width: 15px;
            height: 15px;
            transition: all 0.3s ease;
            margin: 0;
          }
          li:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
            transform: scale(1.3);
          }
        }
      }
    }
  }

  // 颜色面板显示状态
  &-panel__visible {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }
}
</style>
