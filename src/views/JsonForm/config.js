export default [
  {
    title: '名字',
    key: 'name',
    component: 'Input',
    DefaultValue: 123,
    attrs: {
      placeholder: '请输入我的名字',
      style: 'width:300px;'
    }
  },
  {
    title: '性别',
    key: 'sex',
    component: 'Select',
    DefaultValue: undefined,
    isShow: false,
    props: {
      options: [{ value: 'man', label: '男' }, { value: 'woman', label: '女' }]
    },
    beforeInserted() {}
  },
  {
    title: '年龄',
    key: 'age',
    component: 'Input',
    attrs: {
      placeholder: '请输入我的年龄',
      style: 'width:300px;'
    }
  }
]
