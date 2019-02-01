export default [
  {
    id: 1,
    event: '第一个数据'
  },
  {
    id: 2,
    event: '第二个数据',
    children: [
      {
        id: 2.1,
        event: '事件2.1'
      },
      {
        id: 2.2,
        event: '事件2.2'
      }
    ]
  },
  {
    id: 3,
    event: '第三个数据',
    children: [
      {
        id: 3.1,
        event: '事件3.1',
        timeLine: 90,
        comment: '无',
        children: [
          {
            id: '3.1.1',
            event: '事件3.1.1',
            timeLine: 5,
            comment: '无'
          }
        ]
      }
    ]
  }
]
