const dir = require('node-dir')
const path = require('path')
const fs = require('fs')

// throw new Error(`请输入正确的权限备注格式:
//             /**
//              *  @roles admin - 我是不是特别帅
//              */`)

const tags = []

const genTags = new Promise((resolve, reject) => {
  dir.readFiles(
    path.resolve(__dirname, './src/views'),
    { match: /.vue$/, exclude: ['node_modules', 'test'] },
    function(err, content, filename, next) {
      if (err) reject(err)
      content.replace(
        /[ \t]*\/\*\*\s*\n([^*]*(\*[^/])?)*\*\//g,
        (comment, commentMetaData) => {
          if (/^@roles/.test(commentMetaData.trim())) {
            const arr = commentMetaData
              .trim()
              .split(/[@-]/)
              .map(item => {
                return item.trim()
              })
              .filter(item => item)
            const [roles, desc] = arr
            const [name, value] = roles.split(/\s+/)
            const tag = { name, value, desc, comment, src: filename }
            tags.push(tag)
          }
        }
      )
      next()
    },
    function(err) {
      if (err) reject(err)
      resolve(tags)
    }
  )
})

genTags.then(res => {
  fs.writeFile('data.json', JSON.stringify(res), err => {
    if (err) throw err
  })
})
