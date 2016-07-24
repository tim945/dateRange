# Datetimepicker 日历插件

> 适用于 brickplus、bootstrap 框架,可单独适用，低版本兼容性尚未测试

* 默认双月日历，单选日期
* 可配置单月日历
* 可配置区间模式，选择日期范围
* 支持 `UMD` 方式, 返回`DatePickerTimer`对象
* jQuery插件接口 `$(selector).datetimepicker(option)`

## 使用

在页面引入 `datetimepicker.css` 和 `datetimepicker.js`文件，别忘了需要`jQuery`支持。

在 `<input type="text" readonly />` 元素添加 `data-toggle="datetimepicker"` 属性即可绑定插件。

```
<input type="text" readonly data-toggle="datetimepicker" />
```

## 配置

为输入框增加 `data-option="{}"` 设置初始化配置参数

```
<input type="text" readonly data-toggle="datetimepicker" data-option="{calendars: 1}" />
```

### 配置参数

<table class="table">
    <thead>
        <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认参数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>period</td>
        <td>设置为区间日期</td>
        <td>Boolean</td>
        <td>false</td>
        </tr>
        <tr>
        <td>names</td>
        <td>设置为区间日期的开始时间和结束时间的name属性，当period为true时必须配置此属性。其中数组第一项为开始时间的 name，第二项为结束时间的 name 属性，其他忽略</td>
        <td>Array</td>
        <td>[]</td>
        </tr>
        <tr>
        <td>dayRangeMax</td>
        <td>设置日期区间最大的跨度天数，超出此数会提示并设置日期为今天。</td>
        <td>Number</td>
        <td>366</td>
        </tr>
        <tr>
        <td>defaultText</td>
        <td><code> 至 </code></td>
        <td>String</td>
        <td>区间日期拼接文字</td>
        </tr>
        <tr>
        <td>calendars</td>
        <td>显示几个月日历</td>
        <td>Number</td>
        <td>默认是显示2个月，最好最大2个月</td>
        </tr>
        <tr>
        <td>isTodayValid</td>
        <td>今天是否可選</td>
        <td>Boolean</td>
        <td>true</td>
        </tr>
        <tr>
        <td>min</td>
        <td>最小可用时间</td>
        <td>String</td>
        <td><code>1970-01-01</code></td>
        </tr>
        <tr>
        <td>max</td>
        <td>最大可用时间</td>
        <td>String</td>
        <td><code>''</code></td>
        </tr>
        <tr>
        <td>stopToday</td>
        <td>今天之后的日期是否不可选</td>
        <td>Boolean</td>
        <td>false</td>
        </tr>
        <tr>
        <td>weekendDis</td>
        <td>灰掉周末不可选</td>
        <td>Boolean</td>
        <td>false</td>
        </tr>
        <tr>
        <td>disCertainDay</td>
        <td>不可用的周日期设置数组，如：[1,3]是要周一， 周三 两天不可选，每个周的周一，周三都不可选择。</td>
        <td>Boolean</td>
        <td>[]</td>
        </tr>
        <tr>
        <td>disCertainDate</td>
        <td>不可用的日期设置数组，如:[1,3]是要1号，3号 // 两天不可选，特别的，[true,1,3]则反之，只有1，3可选，其余不可选。</td>
        <td>Boolean</td>
        <td>[]</td>
        </tr>
        <tr>
        <td>success(date)</td>
        <td>成功回调</td>
        <td>Function</td>
        <td>$.noop</td>
        </tr>
    </tbody>
</table>

## 事件监听

### 日历显示 `show.ui.datetimepicker`

```
$('[data-toggle]').on('show.ui.datetimepicker', function(e, date) {
  console.log('show')
})
```

### 日历隐藏 `hide.ui.datetimepicker`

```
$('[data-toggle]').on('hide.ui.datetimepicker', function(e, date) {
  console.log('hide')
})
```

### 选择日历 `choose.ui.datetimepicker`

```
// 带返回参数
// date 为开始日期，单选日期为选择日期
// end 日期区间模式时，返回结束日期
$('[data-toggle]').on('choose.ui.datetimepicker', function(e, date, end) {
  console.log(date, end)
  console.log($(this).val())
})
```

## 实例

1. 默认方式

```
<input type="text" data-toggle="datetimepicker" readonly  />
```

2. 配置一个月份

```
<input type="text" data-toggle="datetimepicker" data-option="{calendars: 1}" readonly />
```

3. 配置区间月份

```
<input type="text" data-toggle="datetimepicker" data-option="{period: true, names: ['start_date', 'end_date']}" readonly />
```

[http://tomieric.github.com/dateRange](http://tomieric.github.com/dateRange)


## 版权说明

`datetimepicker` 属于 `brickplus`的组件，版权归钱途互联所有。
