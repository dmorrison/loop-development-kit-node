# Loop Development Kit (LDK) for NodeJS

The LDK is a plugin system for Sidekick. The LDK is built with [go-plugin](https://github.com/hashicorp/go-plugin), a HashiCorp plugin system used in several of their projects.

Plugins developed with this library are executed by Sidekick as separate processes. This ensures that crashes or instability in the plugin will not destabilize the Sidekick process.

Communication between Sidekick and the plugin is first initialized over stdio and then performed using [GRPC](https://grpc.io/). On mac and linux the GRPC communication is sent over unix domain socket and on windows over local TCP socket.
>NOTE: Currently, communication from Sidekick to the plugin, takes place over local TCP socket on mac and linux. Communication from the plugin back to Sidekick still takes place over unix domain socket. This is due to a limitation of the GRPC libraries for NodeJS and will hopefully be fixed in the future.

In order for Sidekick to use a plugin, it must be compiled. Sidekick does not compile or interpret source code at runtime. A consequence of this is that plugins will need to be compiled for each operating system that they want to support. We recommend using [PKG](https://www.npmjs.com/package/pkg) to compile NodeJS plugins into an executable.

## Setup
### Install the package
Add the dependency to your package.json under the dependencies:

```json
"dependencies": {
  "ldk": "git+https://github.com/open-olive/loop-development-kit-node.git"
}
```

Install using NPM

```shell
npm i
```

### Setting Up Your Plugin
Sidekick expects your library to start its Controller or Sensor GRPC server when launched. The LDK takes care of most of that for you, what you need to do is:

- Create your `package.json` file.
- Import the LDK.
- Create your `main` script (usually `index.js` or `src/index.js`):
  - Create an implementation object that satisfies the [[Controller]] or [[Sensor]] contracts/interfaces.
  - Initialize the appropriate plugin with your implementation and call `.serve` on it.

#### Example Controller
Here's an example main script for a Controller plugin:

```javascript
const { ControllerPlugin, Logger } = require('ldk');
const Controller = require('./controller');

const logger = new Logger('example-loop');
const impl = new Controller(logger);
const controllerPlugin = new ControllerPlugin(impl);
controllerPlugin.serve();
```

#### Example Sensor
Here's an example main script for a Sensor plugin:

```javascript
const { SensorPlugin, Logger } = require('ldk');
const Sensor = require('./sensor');

const logger = new Logger('example-loop');
const impl = new Sensor(logger);
const sensorPlugin = new SensorPlugin(impl);
sensorPlugin.serve();
```


### Controllers
This LDK can be used to write controllers for Sidekick. More detail about controllers is available on the {@page Controllers} page.

* [Basic Controller Example](https://github.com/open-olive/sidekick-controller-examplenode) - Recommend using as a starting point for new Controllers.

### Sensors
This LDK can be used to write sensors for Sidekick. More detail about sensors is available on the {@page Sensors} page.

* [Basic Sensor Example](https://github.com/open-olive/sidekick-sensor-examplenode) - Recommend using as a starting point for new Sensors.
