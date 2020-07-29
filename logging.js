const prepareLogging = () => {
  const consoleDebug = console.debug.bind(console);
  const consoleError = console.error.bind(console);
  const consoleInfo = console.info.bind(console);
  const consoleLog = console.log.bind(console);
  const consoleTrace = console.trace.bind(console);
  const consoleWarn = console.warn.bind(console);

  console.debug = (msg, ...args) => {
    consoleDebug(`[DEBUG] ${msg}`, ...args);
  };

  console.error = (msg, ...args) => {
    consoleError(`[ERROR] ${msg}`, ...args);
  };

  console.info = (msg, ...args) => {
    consoleInfo(`[INFO] ${msg}`, ...args);
  };

  console.log = (msg, ...args) => {
    consoleLog(`[DEBUG] ${msg}`, ...args);
  };

  console.trace = (msg, ...args) => {
    consoleTrace(`[TRACE] ${msg}`, ...args);
  };

  console.warn = (msg, ...args) => {
    consoleWarn(`[WARN] ${msg}`, ...args);
  };

  process.stdout.write = (...args) => {
    process.stderr.write(...args);
  };
};

module.exports = {
  prepareLogging,
};
