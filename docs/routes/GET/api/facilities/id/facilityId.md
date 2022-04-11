# METHOD /api/facilities/id/:facilityId

Get information for a specific facility.

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
|id|Integer|The unique identifier for the facility.|
|baseId|Integer|The unique identifer for the base in which this facility is located.|
|description|String|Description for the facility.|
|buildingAddress|String|Address of the facility building.|
|buildingNumber|String|Building number for the facility.|
|roomNumber|String|Room number of the facility.|

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

The requested facility could not be found.  The request body will be blank.