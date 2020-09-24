const exp = require('express');
const app = exp();
const fs = require('fs')
const path = require('path')
app.listen(80, "176.18.4.232", () => {//修改local地址，局域网访问
  console.log('<----Link~Start!---->');
})
app.use(exp.static('public'))
//app.use('./public/', exp.static('./pubdwadalic/'))
app.get('/', (req, rep) => {
  rep.sendFile(__dirname + '/public/1.html')
  //rep.sendFile(__dirname + '/public/1.mp3')
  /*fs.readFile('./public/1.mp3', (err, data) => {
    rep.writeHead(200, { "Content-Type": "audio/mp3" })
    rep.write(data)
    rep.end()
  })*///等效sendFile 但sendfile 指定需为全路径


})
//路径分析
console.log('dir:' + __dirname)
console.log('fil:' + __filename)
console.log('pro:' + process.cwd())
//console.log(path.dirname('/dwad/dwadaw/daw'))//函数内字符串
console.log(path.resolve('./'))
console.log(path.resolve(''))
console.log(path.resolve('../'))
console.log(path.resolve('/'))
console.log(path.resolve('/.'))
console.log(path.resolve('./..'))
console.log(path.resolve('/..'))