const download = require('download-git-repo')
const chalk = require('chalk')

module.exports = function ({
  url,
  branch,
  dest
}) {
  if (!url) {
    console.log(chalk.red('>> 对不起，模版地址不能为空!!'))
    process.exit(1)
  }

  return new Promise((resolve, reject) => {
    const template = `direct:${url}#${branch}`
    download(template, dest, { clone: true }, (err) => {
      if (err) {
        reject(err)
      }

      resolve()
    })
  })
}
