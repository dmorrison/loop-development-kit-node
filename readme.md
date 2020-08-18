# Loop Development Kit (LDK) for NodeJS

The LDK is a plugin system for Sidekick. The LDK is built with [go-plugin](https://github.com/hashicorp/go-plugin), a HashiCorp plugin system used in several of their projects.

Plugins developed with this library are executed by Sidekick as separate processes. This ensures that crashes or instability in the plugin will not destabilize the Sidekick process.

Communication between Sidekick and the plugin is first initialized over stdio and then performed using [GRPC](https://grpc.io/). On mac and linux the GRPC communication is sent over unix domain socket and on windows over local TCP socket.
>NOTE: Currently, communication from Sidekick to the plugin, takes place over local TCP socket on mac and linux. Communication from the plugin back to Sidekick still takes place over unix domain socket. This is due to a limitation of the GRPC libraries for NodeJS and will hopefully be fixed in the future.

In order for Sidekick to use a plugin, it must be compiled. Sidekick does not compile or interpret source code at runtime. A consequence of this is that plugins will need to be compiled for each operating system that they want to support. We recommend using [PKG](https://www.npmjs.com/package/pkg) to compile NodeJS plugins into an executable.

## Installation

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

## Usage

To launch a Controller:

```javascript
import { launchControllerPlugin } from 'ldk';
import Controller from './controller'; // Your controller class.

launchControllerPlugin(new Controller());
```

To launch a Sensor:

```javascript
import { launchSensorPlugin } from 'ldk';
import Sensor from './sensor'; // Your sensor class.

launchSensorPlugin(new Sensor());
```



Full documentation available on [here](https://open-olive.github.io/loop-development-kit-node).

### Controllers
This LDK can be used to write controllers for Sidekick. More detail about controllers is available [here](docs/controller.md).

* [Basic Controller Example](https://github.com/open-olive/sidekick-controller-examplenode) - Recommend using as a starting point for new Controllers.

### Sensors
This LDK can be used to write sensors for Sidekick. More detail about sensors is available [here](docs/sensor.md).

* [Basic Sensor Example](https://github.com/open-olive/sidekick-sensor-examplenode) - Recommend using as a starting point for new Sensors.
