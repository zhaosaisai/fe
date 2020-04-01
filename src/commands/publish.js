const { execSync } = require('child_process')

module.exports = publish

/**
 * 本地发布一个项目的完成过程应该是
 * 1. 检查是否有相关更改未提交到仓库中
 * 2. 根据传入的目标环境触发相关机器上的构建
 * 3. 在相关机器上将项目构建完成后，同步到目标服务器中(可能会涉及到将一些打包后生成的静态资源同步到cdn上)
 * 4. 一个简单的发布过程完毕
 */

 /**
  * 这里的发布过程就简单点
  * 1. 代码本地构建
  * 2. scp到目标目录或者虚拟机目录
  * 3. publish完成
  */

function hasUncommitted() {
  return new Promise((resolve) => {
    try {
      console.log(execSync('git status --porcelain').toString())
    } catch(e) {
      console.log(e)
    }
  })
}

async function publish() {
  await hasUncommitted()
}


publish()
