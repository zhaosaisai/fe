const { spawnSync } = require('child_process')
const { hasNpm } = require('yarn-or-npm')

const npm = hasNpm()

module.exports = install

function install(pkgs = []) {
  spawnSync(npm ? 'npm' : 'yarn', [npm ? 'install' : 'add', ...pkgs], { stdio: 'inherit' })
}
