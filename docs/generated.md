## Modules

<dl>
<dt><a href="#module_wotd">wotd</a> : <code>string</code></dt>
<dd><p>Module representing the word of the day.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#BrokerGrpcServer">BrokerGrpcServer</a></dt>
<dd><p>Class used to interact with the BrokerGrpcService.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#connInfo">connInfo</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="module_wotd"></a>

## wotd : <code>string</code>
Module representing the word of the day.

<a name="BrokerGrpcServer"></a>

## BrokerGrpcServer
Class used to interact with the BrokerGrpcService.

**Kind**: global class  

* [BrokerGrpcServer](#BrokerGrpcServer)
    * [new BrokerGrpcServer(server)](#new_BrokerGrpcServer_new)
    * _instance_
        * [.startStream(connInfoCallback)](#BrokerGrpcServer+startStream) ⇒ <code>void</code>
        * [.getConnInfo()](#BrokerGrpcServer+getConnInfo) ⇒ [<code>Promise.&lt;connInfo&gt;</code>](#connInfo)
    * _inner_
        * [~connInfoCallback](#BrokerGrpcServer..connInfoCallback) : <code>function</code>

<a name="new_BrokerGrpcServer_new"></a>

### new BrokerGrpcServer(server)
Create a BrokerGrpcServer.


| Param | Type | Description |
| --- | --- | --- |
| server | <code>object</code> | The GRPC server instance. |

**Example**  
```js
BrokerGrpcServer(server);
```
<a name="BrokerGrpcServer+startStream"></a>

### brokerGrpcServer.startStream(connInfoCallback) ⇒ <code>void</code>
Start a connection info stream from the parent process.

**Kind**: instance method of [<code>BrokerGrpcServer</code>](#BrokerGrpcServer)  

| Param | Type | Description |
| --- | --- | --- |
| connInfoCallback | [<code>connInfoCallback</code>](#BrokerGrpcServer..connInfoCallback) | - The callback that handles receiving connection info. |

<a name="BrokerGrpcServer+getConnInfo"></a>

### brokerGrpcServer.getConnInfo() ⇒ [<code>Promise.&lt;connInfo&gt;</code>](#connInfo)
Returns a promise which resolves to the connection information for the parent process.

**Kind**: instance method of [<code>BrokerGrpcServer</code>](#BrokerGrpcServer)  
**Returns**: [<code>Promise.&lt;connInfo&gt;</code>](#connInfo) - - Promise object represents connection information  
<a name="BrokerGrpcServer..connInfoCallback"></a>

### BrokerGrpcServer~connInfoCallback : <code>function</code>
This callback is called when connection info is received from the parent process.

**Kind**: inner typedef of [<code>BrokerGrpcServer</code>](#BrokerGrpcServer)  

| Param | Type |
| --- | --- |
| connInfo | [<code>connInfo</code>](#connInfo) | 

<a name="connInfo"></a>

## connInfo : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | The server or socket address. |
| serviceId | <code>string</code> | An identifier for the service. |
| network | <code>string</code> | The network type. |

