const { pid } = process;

const logLevels = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

const LogContext = class {
  constructor(level, name) {
    if (!Object.values(logLevels).includes(level)) {
      throw new Error(`Invalid logger level: ${level}`);
    }

    if (!name) {
      throw new Error('Invalid logger name');
    }

    this.level = level;
    this.name = name;
    this.fields = {};
  }

  with(key, value) {
    this.fields[key] = value;
    return this;
  }

  withObj(obj) {
    this.fields = {
      ...this.fields,
      ...obj,
    };
    return this;
  }

  msg(str) {
    const json = {
      ...this.fields,
      '@timestamp': new Date().toISOString(),
      '@pid': pid,
      '@level': this.level,
      '@module': this.name,
      '@message': str,
    };

    const stringifyOrder = [
      '@timestamp',
      '@pid',
      '@level',
      '@module',
      '@message',
      ...Object.keys(this.fields).sort(),
    ];

    process.stdout.write(JSON.stringify(json, stringifyOrder));
  }
};

const Logger = class {
  constructor(name) {
    if (!name) {
      throw new Error('Invalid logger name');
    }

    this.name = name;
  }

  trace() {
    return new LogContext(logLevels.TRACE, this.name);
  }

  debug() {
    return new LogContext(logLevels.DEBUG, this.name);
  }

  info() {
    return new LogContext(logLevels.INFO, this.name);
  }

  warn() {
    return new LogContext(logLevels.WARN, this.name);
  }

  error() {
    return new LogContext(logLevels.ERROR, this.name);
  }
};

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
    consoleLog(`[INFO] ${msg}`, ...args);
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
  Logger,
  prepareLogging,
};
