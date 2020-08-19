# Loop Development Kit (LDK) for NodeJS
## Developing
### Setup
#### Setting Up Your Plugin
Sidekick expects your library to start its Controller or Sensor GRPC server when launched. The LDK takes care of most of that for you, what you need to do is:

- Create your `package.json` file.
- Import the LDK.
- Create your `main` script (usually `index.js` or `src/index.js`):
  - Create an implementation object that satisfies the [[Controller]] or [[Sensor]] contracts/interfaces.
  - Initialize the appropriate plugin with your implementation and call `.serve` on it.
  
#### Install the package
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

##### Example Controller
Here's an example main script for a Controller plugin:

```javascript
const { serveControllerPlugin, Logger } = require('ldk');
const Controller = require('./controller'); // Constructor that generates objects meeting the Controller interface.

const logger = new Logger('example-loop');
const impl = new Controller(logger);
serveControllerPlugin(impl);
```

##### Example Sensor
Here's an example main script for a Sensor plugin:

```javascript
const { serveSensorPlugin, Logger } = require('ldk');
const Sensor = require('./sensor'); // Constructor that generates objects meeting the Sensor interface.

const logger = new Logger('example-loop');
const impl = new Sensor(logger);
serveSensorPlugin(impl);
```

### Running Locally
#### Local Plugin Command (Recommended)

Sidekick lets you add a local command as Local Plugins:

1. Open Sidekick.
2. Open the Loop Library:
  - Click the Hamburger icon.
  - Click Loop Library.
3. Click the Install Local Plugin button:
4. Select whether it's a Controller or Sensor.
5. Select the working directory for the command.
6. Enter the command to be executed, including any arguments.
7. Click Install.

The command will be installed as a plugin. If you need to change the command or its arguments you'll need remove it and then add the new commands.

#### Packaged Command

Instructions to come! We're always working on improving the LDK developer experience and this section is empty while we're making some dramatic improvements to make your life easier.  

### Troubleshooting and Debugging

Sidekick logs are available in the following directories for your OS:
```shell
~/Library/Logs/Sidekick # MacOS
/var/log/Sidekick # Linux
%AppData%/Logs # Windows
```

`tail` the log file (usually `Sidekick-X.Y.Z.log`) to watch things happen!

## Concepts
## Plugins
The LDK is a plugin system for Sidekick. The LDK is built with [go-plugin](https://github.com/hashicorp/go-plugin), a HashiCorp plugin system used in several of their projects.

Plugins developed with this library are executed by Sidekick as separate processes. This ensures that crashes or instability in the plugin will not destabilize the Sidekick process.

Communication between Sidekick and the plugin is first initialized over stdio and then performed using [GRPC](https://grpc.io/). On mac and linux the GRPC communication is sent over unix domain socket and on windows over local TCP socket.
>NOTE: Currently, communication from Sidekick to the plugin, takes place over local TCP socket on mac and linux. Communication from the plugin back to Sidekick still takes place over unix domain socket. This is due to a limitation of the GRPC libraries for NodeJS and will hopefully be fixed in the future.

### Controllers
This LDK can be used to write controllers for Sidekick. More detail about controllers is available on the {@page Controllers} page.

* [Basic Controller Example](https://github.com/open-olive/sidekick-controller-examplenode) - Recommend using as a starting point for new Controllers.

### Sensors
This LDK can be used to write sensors for Sidekick. More detail about sensors is available on the {@page Sensors} page.

* [Basic Sensor Example](https://github.com/open-olive/sidekick-sensor-examplenode) - Recommend using as a starting point for new Sensors.
