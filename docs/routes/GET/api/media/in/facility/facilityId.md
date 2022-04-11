# GET /api/media/in/facility/:facilityId

Get a list of media stored inside all of the containers inside of the specified facility.

## Access Requirements

- Client must be an authenticated user with an active session.

## Request Input Requirements

### Headers

|Header|Type|Value Description|Optional|
|-|-|-|-|
|Authorization|String|JWT access token.|No|
|Content-Type|String|"application/json"|No|

### Params

|Param|Type|Value Description|
|-|-|-|
|facilityId|Integer|Unique identifier for the requested facility.|

### Query

N/A

### Body

N/A

## Responses

### 200 OK

The request has been processed sucessfully.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|numberMedia|Integer|Number of media entries.|
|listMedia|[Object]|Array of media objects.|

The `listMedia` key will be an array of objects with the following keys:

|Key|Type|Value Description|
|-|-|-|
|id|Integer|Unique identifier of the media.|
|containerId|Integer|Unique identifier of the container where this media is stored.|
|controlNumber|String|Control number of the media.|
|title|String|Media title.|
|type|String|Describes the media's type. (i.e.: "CD", "DVD", "FLASH_DRIVE")|
|classification|String|Media classification.|
|status|String|Media's lifecycle status.|

### 400 Bad Request

The request could not be processed.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|errorType|String|The string identifier which specifies the type of error that occured.|

The following types of errors are possible with this response:

|Error Type|Description|
|-|-|
|INPUT_VALIDATION_FAILED|The request provided by the client failed the input validation.|

### 401 Unauthorized

The request could not be processed.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|errorType|String|The string identifier which specifies the type of error that occured.|

The following types of errors are possible with this response:

|Error Type|Description|
|-|-|
|CLIENT_NOT_AUTHENTICATED|The client is not an authenticated user and/or does not have an active session.  The client may have also failed to present a valid access token.|

### 404 Not Found

The specified container could not be found.  The response body will be blank. 