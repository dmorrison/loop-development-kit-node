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
     * @param impl - The implementation of the sensor.
     * ```
     * new SensorPlugin(mySensor);
     * ```
     */
    constructor(impl: Sensor);
    /**
     * Run the GRPC server and write connection information to stdout.
     */
    serve(): Promise<void>;
}
export default SensorPlugin;
