const fs = require('fs')

module.exports = function (dest) {
  return fs.existsSync(dest) && fs.statSync(dest).isDirectory()
}
