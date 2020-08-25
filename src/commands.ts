import { Command } from 'commander';
import { exec } from 'child_process';

const program = new Command();
program
  .command('build')
  .description('builds the project using PKG')
  .option('-t --target <target>', 'build target', 'build')
  .option(
    '-p --plugin <plugin>',
    'plugin configuration file location',
    'plugin.json',
  )
  .option(
    '-s --storage <storage>',
    'storage configuration file location',
    'storage.json',
  )
  .option('-e --entry <entry>', 'entry file location', 'index.js')
  .option('-d --dryRun', 'output commands to be executed')
  .action((options) => {
    const buildCommand = `./node_modules/.bin/pkg ${options.entry} -t node12-darwin-x64 --output ${options.target}/plugin && cp ${options.plugin} ${options.target}/plugin.json && cp ${options.storage} ${options.target}/storage.json`;
    if (options.dryRun) {
      console.log(buildCommand);
      return;
    }
    exec(buildCommand);
  });

program
  .command('deploy')
  .description('deploys the project to your local Application Support folder')
  .option('-s --source <sourceFile>', 'source location of the build', 'build')
  .option(
    '-d --destination <destinationFolder>',
    'destination folder',
    '$npm_package_name',
  )
  .option('-b --buildCommand <command>', 'build command', 'build')
  .option(
    '--sensor',
    'select if your plugin is a sensor (assumes controller by default)',
  )
  .option('-d --dryRun', 'output commands to be executed')
  .action((options) => {
    const subFolder = options.sensor ? 'sensors' : 'controllers';
    const deployCommand = `npm run build && mkdir -p "$HOME/Library/Application Support/SideKick/plugins/${subFolder}/$npm_package_name" && cp build/* "$HOME/Library/Application Support/SideKick/plugins/${subFolder}/$npm_package_name/"`;
    if (options.dryRun) {
      console.log(deployCommand);
      return;
    }
    exec(deployCommand);
  });

export default program;
