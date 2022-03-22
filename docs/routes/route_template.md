# METHOD /api/this/example/route/:value

Provide a simple description explaining what this route does.

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
|value|Integer|This is a test description of what type of value should go here.|

### Query

|Key|Type|Value Description|Optional|
|-|-|-|-|
|test|Integer|This is a test description.|Yes|

### Body

The request body should be a stringified JSON object, which should contain the following key-value paris:

|Key|Type|Value Description|Optional|
|-|-|-|-|
|testString|String|This is a test string.|No|
|testObject|Object|This is a test object.|Yes|

The "testObject" object listed above should contain the following key-value pairs:

|Key|Type|Value Description|Optional|
|-|-|-|-|
|testInt|Integer|This is a test integer.|No|

## Responses

### 200 OK

The request has been processed sucessfully.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|responseString|String|This is a value included in the response.|

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