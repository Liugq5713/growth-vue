# json-form

通过 JSON 生成表单

## 思路

生成表单的配置和表单的值应该分开

Q：如果封装了一些表单元素组件，比如文章的搜索框，那么自动生成呢？
A：表单的动态渲染是基于 vue 的动态组件，即你把 type 改为你自定义的组件名称即可。

Q：如何自定义表单的样式，element-ui 组件上的属性
A：表单配置项 有一个 `attrs`属性，将这些属性的内容传入到动态组建上。并且每一个表单元素组件都应该有 `v-bind=$attrs`，从而继承这些属性

且通过 [v-bind 指令](https://vuejs.org/v2/api/#v-bind)，将这些属性全部加到表单元素组件上

```js
<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
```

Q：如何给表单添加默认值
A：

- 如何解决表单的联动
