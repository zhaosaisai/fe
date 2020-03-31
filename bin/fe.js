#!/usr/bin/env node
const { program } = require('commander')

const { selectProject } = require('../src/utils')
const pkg = require('../package.json')
const { init, install } = require('../src')

program.version(pkg.version)

program
  .command('init <name>')
  .description('Download a template to initalize project')
  .action(async (name) => {
    const project = await selectProject()
    await init(name, project)
  })

program
  .command('install')
  .description('Install project dependency')
  .action(() => {
    install()
  })

program.parse(process.argv)
