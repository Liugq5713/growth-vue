// 给数据添加额外的几个属性
// __leavel 层级
export default function formatData(
  data,
  parent = null,
  leavel = 0,
  expand = false
) {
  console.log('data', data)
  data.forEach(item => {
    item.__leavel = leavel
    item.__expand = expand
    item.__parent = parent
    if (item.children) {
      formatData(item.children, item, leavel + 1)
    }
  })
  return data
}

// 扁平化数组
export const flatten = arr => {
  let tmp = []
  arr.forEach(item => {
    tmp.push(item)
    if (item.children && item.children.__zlength > 0) {
      const children = flatten(item.children)
      tmp = tmp.concat(children)
    }
  })
  return tmp
}
