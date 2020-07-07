class Controller {
  constructor() {
    this.config = {
      foo: 'bar',
    };
    this.style = {
      backgroundColor: '#333',
      highlightColor: '#651fff',
      primaryColor: '#eee',
    };
  }

  start(host) {
    this.host = host;
  }

  stop() {
  }

  config() {
    return this.config;
  }

  setConfig(config) {
    this.config = config;
  }

  onEvent(event) {
    if (event.data.text) {
      this.host.emitWhisper({
        icon: 'announcement',
        label: 'Javascript Controller',
        markdown: `# FROM JAVASCRIPT\n\n${event.data.text}`,
        style: this.style,
      });
    }
  }
}

module.exports = Controller;
