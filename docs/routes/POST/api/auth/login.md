# POST /api/auth/login

Given a set of login credentials, authenticates a user and creates a session with a JWT access token.

## Access Requirements

N/A

## Request Input Requirements

### Headers

|Header|Type|Value Description|Optional|
|-|-|-|-|
|Content-Type|String|"application/json"|No|

### Params

N/A

### Query

N/A

### Body

The request body should be a stringified JSON object, which should contain the following key-value paris:

|Key|Type|Value Description|Optional|
|-|-|-|-|
|username|String|Username identifying the user account the client wants to log into.|No|
|passphrase|String|Passphrase used to authenticate the client.|No|

## Responses

### 200 OK

The request has been processed sucessfully.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|accessToken|String|Newly created JWT access token.  This token will be used to access other routes.|

### 400 Bad Request

The request could not be processed.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|errorType|String|The string identifier which specifies the type of error that occured.|

The following types of errors are possible with this response:

|Error Type|Description|
|-|-|
|INPUT_VALIDATION_FAILED|The request provided by the client failed the input validation.|

### 403 Forbidden

The request could not be processed.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|errorType|String|The string identifier which specifies the type of error that occured.|

The following types of errors are possible with this response:

|Error Type|Description|
|-|-|
|USER_NOT_FOUND|The account for the given username does not exist.|
|INCORRECT_PASSPHRASE|The passphrase given by the client is incorrect.|