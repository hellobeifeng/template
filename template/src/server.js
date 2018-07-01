var express = require('express')
var path = require('path')
var port = process.env.PORT || 9099
var axios = require('axios')

var app = express()
var apiRoutes = express.Router()

apiRoutes.get('/getlist', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

apiRoutes.get('/', function (req, res, next) {
  res.send('hello')
})
app.use('/api', apiRoutes) // /api/getlist

app.use(express.static('../dist'))
app.use('/self', express.static(path.resolve(__dirname, '../dist')))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

// 试一下下面的这套流程
// // js
// export function getDiscList() {
//   const url = '/api/getDiscList'

//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     hostUin: 0,
//     sin: 0,
//     ein: 29,
//     sortId: 5,
//     needNewCode: 0,
//     categoryId: 10000000,
//     rnd: Math.random(),
//     format: 'json'
//   })

//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }
// // vue
// getDiscList().then((res) => {
//   if (res.code === ERR_OK) {
//     this.discList = res.data.list
//   }
// })
// // webpack-dev
// proxy: {
//   '/api': {
//     target: 'http://localhost:9099',
//     pathRewrite: {
//       '^/api': '/static/mock'
//     }
//   }
// },
