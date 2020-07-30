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

## Terminology

**Loop** - A concept that describes how Intelligences, Sensors, and Controllers work together to provide useful information to the user.

**Intelligence** - A concept describing a source of information. This includes json files, databases, APIs, and more.

**Sensor** - A Sidekick plugin that emits events. For example, the clipboard sensor emits an event every time the clipboard contents change.

**Controller** - A Sidekick plugin that receives events from Sensors and emits whispers.

**Whisper** - A notification emitted by controllers and displayed in the Sidekick sidebar.

## Sensors

A Sensor is a type of plugin that generates events.  Events can be as simple as a chunk of text but allow for complicated information. Sensors do not choose which controllers get their events. They are simply emitting the events. The decision about which events to use is left to the controller.

### Sensor Examples

Bitbucket examples are currently private and only viewable by Olive employees.

* [Basic Sensor Example](https://github.com/open-olive/sidekick-sensor-examplenode) - Recommend using as a starting point for new Sensors.
* [Filesystem Watch Sensor](https://bitbucket.org/crosschx/sidekick-sensor-watchfolder)

### Sensor Class

Writing a Sensor plugin boils down to writing a class with the following methods.

```javascript
class Sensor {
  start(host, metadata) {}
  stop() {}
  config() {
  setConfig(config) {
  onEvent() {
}
```

**Config** - The Sensor should return any configuration used by the plugin.

**SetConfig** - The Sensor should update the plugin configuration with the given values.

**Start** - The Sensor should wait to start operating until this is called. The provided `SensorHost` should be stored in memory for continued use.

**Stop** - The Sensor should stop operating when this is called.

**OnEvent** - The sensor can use this to handle events from the Sidekick UI. Many sensors will not care about UI events, and in that case the function should just return `nil`.

### Sensor Lifecycle

1. Sidekick executes plugin process
1. Sidekick calls `Start`, sending the host connection information to the plugin. This connection information is used to create the `SensorHost`. The `SensorHost` interface allows the plugin to emit events.
1. On Sensor wanting to emit an event, the Sensor calls the `EmitEvent` method on the host interface.
1. On Sidekick UI event, Sidekick calls `OnEvent`, passing the event to the Sensor. These events can be ignore or used at the Sensor's choice.
1. On User disabling the Sensor, Sidekick calls `Stop` then sends `sigterm` to the process.
1. On Sidekick shutdown, Sidekick calls `Stop` then sends `sigterm` to the process.

## Controllers

Controllers receive events and use them to generate relevant whispers. Controllers choose which events they want to use and which they want to ignore.

### Controller Examples

Bitbucket examples are currently private and only viewable by Olive employees.

* [Basic Controller Example](https://github.com/open-olive/sidekick-controller-examplenode) - Recommend using as a starting point for new Controllers.
* [Giphy Controller](https://bitbucket.org/crosschx/sidekick-controller-giphy)

### Controller Class

Writing a Controller plugin boils down to writing a class with the following methods.

```javascript
class Controller {
  start(host, metadata) {}
  stop() {}
  config() {
  setConfig(config) {
  onEvent() {
}
```

**Config** - The Controller should return any configuration used by the plugin.

**SetConfig** - The Controller should update the plugin configuration with the given values.

**Start** - The Controller should wait to start operating until this is called. The provided `ControllerHost` should be stored in memory for continued use.

**Stop** - The Controller should stop operating when this is called.

**OnEvent** - The controller can use this to handle events that are broadcast by Sensors. Controllers do not need to emit events in a 1:1 relationship with events. Controllers may not use events at all. Controllers may only use some events. Controllers may keep a history of events and only emit whispers when several conditions are met.

### Controller Lifecycle

1. Sidekick executes plugin process
1. Sidekick calls `Start`, sending the host connection information to the plugin. This connection information is used to create the `ControllerHost`. The `ControllerHost` interface allows the plugin to emit whispers.
1. On Controller wanting to emit a whisper, the Controller calls the `EmitWhisper` method on the host interface.
1. On Sensor event, Sidekick calls `OnEvent`, passing the event from the Sensor to the Controller. These events can be ignored or used at the Controller's choice.
1. On User disabling the Controller, Sidekick calls `Stop` then sends `sigterm` to the process.
1. On Sidekick shutdown, Sidekick calls `Stop` then sends `sigterm` to the process.

## Logging

To make it easier to integrate with Sidekick's logger, a `Logger` class is provided to you in this library.

Example usage:

```javascript
const { Logger } = require('ldk');

const logger = new Logger('my-plugin-name');

...

logger.info('Some message');
// {"@timestamp":"2020-07-30T14:58:21.057Z","@pid":1234,"@level":"INFO","@module":"my-plugin-name","@message":"Some message"}

logger.info('Another message', 'someKey', 'someValue', 'anotherKey', 'anotherValue');
// {"@timestamp":"2020-07-30T14:58:21.057Z","@pid":1234,"@level":"INFO","@module":"my-plugin-name","@message":"Another message","anotherKey":"anotherValue","someKey":"someValue"}

const logger2 = logger.with('persistentKey', 'persistentValue');
logger2.info('Yet another message', 'yetAnotherKey', 'yetAnotherValue');
// {"@timestamp":"2020-07-30T14:58:21.057Z","@pid":1234,"@level":"INFO","@module":"my-plugin-name","@message":"Yet another message","persistentKey":"persistentValue","yetAnotherKey":"yetAnotherValue"}
```
