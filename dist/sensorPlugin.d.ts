/** @module sensorPlugin */
import { Sensor } from './sensor';
/** Class used to setup the GRPC server and host the sensor service. */
declare class SensorPlugin {
    private server;
    private sensor;
    private broker;
    /**
     * Create a SensorPlugin.
     *
     * @param {Sensor} impl - The implementation of the sensor.
     * @example
     * SensorPlugin(mySensor);
     */
    constructor(impl: Sensor);
    /**
     * Run the GRPC server and write connection information to stdout.
     *
     * @async
     * @returns {void}
     */
    serve(): Promise<unknown>;
}
export default SensorPlugin;
