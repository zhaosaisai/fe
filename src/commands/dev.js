const path = require('path')
const { spawnSync } = require('child_process')
const { hasNpm } = require('yarn-or-npm')
const chalk = require('chalk')

module.exports = dev

function dev(script = 'dev') {
  const pkg = require(path.resolve(process.cwd(), 'package.json'))

  if (!pkg.scripts || !(script in pkg.scripts)) {
    console.log(chalk.red(`>> 在package.json中不存在${script}命令`))
    process.exit(1)
  }

  spawnSync( hasNpm() ? 'npm' : 'yarn', ['run', script], { stdio: 'inherit' })
}
