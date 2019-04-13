# color-palette-picker
A flexible color palette picker

[Live demo and usage](https://escx.github.io/color-palette-picker/)

## Install
```shell
npm install color-palette-picker
```

## Usage
```js
// es5 import
import ColorPalettePicker from 'color-palette-picker';

// or by script
<script src="path/to/color-palette-picker.js"></script>
```

```js
// instantiation
const instance = new ColorPalettePicker(options);

// create panel element and bar element of palette
const panel = instance.create('panel');
const bar = instance.create('bar');

// append element to body
document.body.appendChild(panel);
document.body.appendChild(bar);
```

## Options
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| hsl | Object | {h:0, s:100, l:50} | 初始设置的颜色值，当前只支持 `hsl` 色彩模式的值 |
| panelName | String | panel-range | `panel` 元素的类名 |
| panelWidth | Number | 300 | `panel` 元素的宽度 |
| panelHeight | Number | 185 | `panel` 元素的高度 |
| panelPointRadius | Number | 6 | `panel` 元素中选色滑块的半径 |
| barName | String | bar-range | `bar` 元素的类名 |
| barWidth | Number | 200 | `bar` 元素的宽度 |
| barHeight | Number | 20 | `bar` 元素的高度 |
| barHorizontal | Boolean | true | `bar` 元素是否在水平方向上拖动滑块进行选色 |
| colorRange | Function | - | 钩子函数，拖动滑块进行选色时执行，提供一个 `hsl` 对象作为回调参数 |

## Methods
| Name | Params | Description |
| --- | --- | --- |
| create | 'panel' / 'bar' | 生成 `panel` 或者 `bar` 元素 |
| destory | - | 销毁实例以及元素节点 |
| get | - | 获取当前调色板选中的 `hsl` 颜色 |
| set | {h, s, l} | 设置 `hsl` 颜色值 |