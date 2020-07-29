const prepareLogging = () => {
  const consoleDebug = console.debug.bind(console);
  const consoleDir = console.dir.bind(console);
  const consoleError = console.error.bind(console);
  const consoleInfo = console.info.bind(console);
  const consoleLog = console.log.bind(console);
  const consoleTime = console.time.bind(console);
  const consoleTimeEnd = console.timeEnd.bind(console);
  const consoleTimeLog = console.timeEnd.bind(console);
  const consoleTrace = console.trace.bind(console);
  const consoleWarn = console.warn.bind(console);

  console.debug = (...args) => {
    consoleDebug('[DEBUG]', ...args);
  };

  console.dir = (...args) => {
    consoleDir('[DEBUG]', ...args);
  };

  console.error = (...args) => {
    consoleError('[ERROR]', ...args);
  };

  console.info = (...args) => {
    consoleInfo('[INFO]', ...args);
  };

  console.log = (...args) => {
    consoleLog('[DEBUG]', ...args);
  };

  console.time = (...args) => {
    consoleTime('[DEBUG]', ...args);
  };

  console.timeEnd = (...args) => {
    consoleTimeEnd('[DEBUG]', ...args);
  };

  console.timeLog = (...args) => {
    consoleTimeLog('[DEBUG]', ...args);
  };

  console.trace = (...args) => {
    consoleTrace('[TRACE]', ...args);
  };

  console.warn = (...args) => {
    consoleWarn('[WARN]', ...args);
  };

  process.stdout.write = (...args) => {
    process.stderr.write(...args);
  };
};

module.exports = {
  prepareLogging,
};
