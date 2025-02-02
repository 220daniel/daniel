import readline from 'readline'

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('請輸入你的名字: ', name => {
  console.log(`你好, ${name}!`)
  rl.close()
})