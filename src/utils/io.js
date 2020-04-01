const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

module.exports = {
  selectProject,
  autoInstall
}

function autoInstall() {
  return prompt({
    type: 'list',
    message: '模版下载成功，是否安装项目依赖？',
    name: 'install',
    choices: [
      'yes',
      'no'
    ]
  })
  .then(choice => {
    return choice.install === 'yes'
  })
}

function selectProject(choices = require('../config').project) {
  return prompt({
    type: 'list',
    name: 'project',
    message: '请选择需要创建的模版',
    choices
  })
  .then(choice => {
    const project = choice['project']
    return choices.find(choice => choice.name === project)
  })
}
