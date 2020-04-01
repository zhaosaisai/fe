#!/usr/bin/env node
const { resolve } = require('path')
const { program } = require('commander')
const chalk = require('chalk')

const { io } = require('../src/utils')
const pkg = require('../package.json')
const { init, install, dev, publish } = require('../src')

program.version(pkg.version)

program
  .command('init <name>')
  .description('Download a template to initalize project')
  .action(async (name) => {
    await init(name, await io.selectProject())
    if (await io.autoInstall()) {
      const project = resolve(process.cwd(), name)
      try {
        // change path
        process.chdir(project)
        install()
      } catch(e) {
        console.log(chalk.red('>> 自动安装依赖失败，请执行如下命令自行安装'))
        console.log(chalk.green(`>> cd ./${name}`))
        console.log(chalk.green('>> fe install'))
      }
    }
  })

program
  .command('install [dependencies...]')
  .description('Install project dependency')
  .action((dependencies) => {
    install(dependencies)
  })

program
  .command('dev')
  .description('Run development environment')
  .action(dev)

program
  .command('publish <target>')
  .description('Publish application')
  .action(async (target) => {
    if (!target || !(['dev', 'prod'].includes(target))) {
      console.log(chalk.red('>> 目标服务器不正确'))
      process.exit(1)
    }

    await publish(target)
  })

program.parse(process.argv)
