# GET /api/auth/login

Authenticates a user using provided login credentials, then creates a session and generates an access token.

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
|username|String|Username of the requested user.|No|
|passphrase|String|Passphrase used to authenticate the user.|No|

## Responses

### 200 OK

The request has been processed sucessfully.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|accessToken|String|The JWT access token which was generated after successful authentication.  This is the access token that the client will present for each subsequent request during the session.|

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
|USER_NOT_FOUND|The user account matching the given username was not found.|
|INCORRECT_PASSPHRASE|The passphrase that was supplied by the client was incorrect.|