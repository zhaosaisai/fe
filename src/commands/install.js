const { spawnSync } = require('child_process')
const { hasNpm } = require('yarn-or-npm')

const command = hasNpm() ? 'npm' : 'yarn'

module.exports = install

function install(pkgs = []) {
  spawnSync(command, ['install', ...pkgs], { stdio: 'inherit' })
}
