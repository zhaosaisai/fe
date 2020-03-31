const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { download, spinner, exists } = require('../utils')

module.exports = init

function updatePkgName(target, name) {
  const dest = path.resolve(target, 'package.json')
  const pkg = require(dest)

  pkg.name = name

  fs.writeFileSync(dest, JSON.stringify(pkg, null, 2), {
    encoding: 'utf8'
  })
}

async function init(target, project) {
  const dest = path.resolve(process.cwd(), target)
  const { name, description, template, branch } = project

  if (exists(dest)) {
    console.log(chalk.red('>> 当前目录已经存在同名目录'))
    process.exit(1)
  }

  spinner.start(`正在下载模版[${name}]<${description}>`)

  try {
    await download({
      dest,
      branch,
      url: template
    })
    updatePkgName(dest, target)
    spinner.success('模版下载成功')
  } catch(e) {
    console.error(e)
    spinner.error('模版下载失败')
  }
}

