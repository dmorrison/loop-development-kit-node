import * as commander from 'commander';
import * as childProcess from 'child_process';

jest.mock('child_process');

describe('commands', () => {
  let program: commander.Command;
  beforeEach(function () {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    program = require('./commands').default;
    // Stop Jest from exiting if it fails.
    program.exitOverride();
  });
  afterEach(function () {
    jest.resetAllMocks();
  });
  describe('build', function () {
    it('should child_process.exec the correct command', () => {
      program.parse(['command', 'build', 'build']);
      expect(childProcess.exec).toHaveBeenCalledWith(
        './node_modules/.bin/pkg index.js -t node12-darwin-x64 --output build/plugin && cp plugin.json build/plugin.json && cp storage.json build/storage.json',
      );
    });
    it('should child_process.exec the correct command when target is provided', () => {
      program.parse(['command', 'build', 'build', '-t', 'buildTarget']);
      expect(childProcess.exec).toHaveBeenCalledWith(
        './node_modules/.bin/pkg index.js -t node12-darwin-x64 --output buildTarget/plugin && cp plugin.json buildTarget/plugin.json && cp storage.json buildTarget/storage.json',
      );
    });
  });
  describe('deploy', () => {
    it('should child_process.exec the correct command', () => {
      program.parse(['command', 'deploy', 'deploy']);
      expect(childProcess.exec).toHaveBeenCalledWith(
        'npm run build && mkdir -p "$HOME/Library/Application Support/SideKick/plugins/controllers/$npm_package_name" && cp build/* "$HOME/Library/Application Support/SideKick/plugins/controllers/$npm_package_name/"',
      );
    });
  });
});
