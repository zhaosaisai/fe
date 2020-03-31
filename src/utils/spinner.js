const ora = require('ora')

let spinner = null

module.exports = {
  start(text = '') {
    spinner = ora(text).start()
  },
  success(text = '') {
    if (!spinner) return

    spinner.succeed(text)
    spinner = null
  },
  error(text = '') {
    if (!spinner) return

    spinner.fail(text)
    spinner = null
  }
}
