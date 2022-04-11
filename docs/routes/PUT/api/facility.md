# PUT /api/facility

Create a new facility.

## Access Requirements

- Client must be an authenticated user with an active session.
- Authenticated user must be `ADMIN` role.

## Request Input Requirements

### Headers

|Header|Type|Value Description|Optional|
|-|-|-|-|
|Authorization|String|JWT access token.|No|
|Content-Type|String|"application/json"|No|

### Params

N/A

### Query

N/A

### Body

The request body should be a stringified JSON object, which should contain the following key-value paris:

|Key|Type|Value Description|Optional|
|-|-|-|-|
|baseId|Integer|The unique identifer for the base in which this facility is located.|No|
|description|String|Description for the facility.|No|
|buildingAddress|String|Address of the facility building.|No|
|buildingNumber|String|Building number for the facility.|No|
|roomNumber|String|Room number of the facility.|No|

## Responses

### 200 OK

The request has been processed sucessfully.  The reponse body will be blank.

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

### 403 Forbidden

The request could not be processed.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|errorType|String|The string identifier which specifies the type of error that occured.|

The following types of errors are possible with this response:

|Error Type|Description|
|-|-|
|INSUFFICIENT_PERMISSION|The user does not have permission to access this route.|