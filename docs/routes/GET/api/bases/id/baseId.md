# GET /api/bases/id/:baseId

Get information for a single base, given the base ID.

## Access Requirements

- Client must be an authenticated user with an active session.

## Request Input Requirements

### Headers

|Header|Type|Value Description|Optional|
|-|-|-|-|
|Authorization|String|JWT access token.|No|

### Params

|Param|Type|Value Description|
|-|-|-|
|baseId|Integer|Unique identifier of the requested base.|

### Query

N/A

### Body

N/A

## Responses

### 200 OK

The request has been processed sucessfully.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|id|Integer|Unique identifier for the requested base.|
|name|String|Name of the base.|

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

The requested base could not be found.  The reponse body will be blank.