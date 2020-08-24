import { program } from 'commander';
import { exec } from 'child_process';

const commands = {
  build:
    './node_modules/.bin/pkg index.js -t node12-darwin-x64 --output build/plugin && cp plugin.json build/plugin.json && cp storage.json build/storage.json',
  deploy:
    'npm run build && mkdir -p "$HOME/Library/Application Support/SideKick/plugins/controllers/$npm_package_name" && cp build/* "$HOME/Library/Application Support/SideKick/plugins/controllers/$npm_package_name/"',
};

program
  .command('build <target>')
  .description('builds the project using PKG')
  .option(
    '-p --plugin <location>',
    'plugin configuration file location',
    'plugin.json',
  )
  .option(
    '-s --storage <location>',
    'storage configuration file location',
    'storage.json',
  )
  .option('-e --entry <location>', 'entry file location', 'index.js')
  .action((target, options) => {
    const buildCommand = `./node_modules/.bin/pkg ${options.entry} -t node12-darwin-x64 --output ${target}/plugin && cp ${options.plugin} build/plugin.json && cp ${options.storage} build/storage.json`;
    exec(buildCommand);
  });

program.parse(process.argv);
