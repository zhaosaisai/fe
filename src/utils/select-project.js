const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

module.exports = selectProject

function selectProject(choices = require('../config').project) {
  const name = '请选择需要创建的模版'
  return prompt({
    type: 'list',
    name,
    choices
  })
  .then(choice => {
    const project = choice[name]
    return choices.find(choice => choice.name === project)
  })
}
