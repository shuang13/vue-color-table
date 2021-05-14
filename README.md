# vue-color-table

[![npm](https://img.shields.io/npm/v/vue-color-table.svg)](https://www.npmjs.com/package/vue-color-table) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![language](https://img.shields.io/badge/language-Vue2-brightgreen.svg)](https://www.npmjs.com/package/v-viewer)

> a colorpicker component for Vue.js.

[DEMO](https://shuang13.github.io/vue-color-table/demo/index.html)
# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.6.11`
- [element-ui](https://github.com/ElemeFE/element) `^2.15.1`

# Instllation

## npm 
``` bash
$ npm install vue-color-table
```

# Usage
``` html
<template>
    <VueColorTable v-model="colors" :minMax="range"></VueColorTable>
</template>

<script>
  import VueColorTable from 'vue-color-table'

  export default {
    name: 'App',
    components: {
      VueColorTable
    },
    data() {
      return {
        range: [-500, 500],
        colors: Object
      }
    }
  }
</script>
```
# Config
``` js
COLOR_TABLE_CONFIG = {
    'rainbow': [[0.0, 'rgba(0, 0, 255, 1.0)'], [0.2, 'rgba(0, 255, 255, 1.0)'], [0.5, 'rgba(0, 255, 0, 0.5)'], [0.8, 'rgba(255, 255, 0, 1.0)'], [1.0, 'rgba(255, 0, 0, 1.0)']],
    'cooltowarm': [[0.0, '#3C4EC2'], [0.2, '#9BBCFF'], [0.5, '#DCDCDC'], [0.8, '#F6A385'], [1.0, '#B40426']],
    'blackbody': [[0.0, '#000000'], [0.2, '#780000'], [0.5, '#E63200'], [0.8, '#FFFF00'], [1.0, '#FFFFFF']],
    'grayscale': [[0.0, '#000000'], [0.2, '#404040'], [0.5, '#7F7F80'], [0.8, '#BFBFBF'], [1.0, '#FFFFFF']],
    'rainbow2': [[0.0, '#000000'], [0.2, '#404040'], [0.5, '#7F7F80'], [1, '#BFBFBF']]
}
``` 
# Props

| Props               | Type      | Default                                         | Description  |
| --------------------|:----------| ------------------------------------------------|--------------|
| v-model    |  Object     | { name: 'rainbow', colors: COLOR_TABLE_CONFIG['rainbow'] } | the name of the color scheme and the color array of the color scheme
| minMax   |  Array     | [0, 1] | numerical range of visual mapping for color schemes


# License

[The MIT License](http://opensource.org/licenses/MIT)
