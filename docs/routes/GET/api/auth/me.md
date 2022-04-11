# GET /api/auth/me

Returns profile information for the currently authenticated user.

## Access Requirements

- Client must be an authenticated user with an active session.

## Request Input Requirements

### Headers

|Header|Type|Value Description|Optional|
|-|-|-|-|
|Authorization|String|JWT access token.|No|

### Params

N/A

### Query

N/A

### Body

N/A

## Responses

### 200 OK

The request has been processed sucessfully.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|id|Integer|Database identifier of the currently authenticated user.|
|username|String|Username of the currently authenticated user.|
|role|String|Role of the currently authenticated user.|
|rank|String|Rank of the currently authenticated user.|
|firstName|String|First name of the currently authenticated user.|
|lastName|String|Last name of the currently authenticated user.|
|phone|String|Contact phone number of the currently authenticated user.|
|email|String|Contact email address of the currently authenticated user.|

### 401 Unauthorized

The request could not be processed.  The response body will contain a stringified JSON object with the following key-value pairs:

|Key|Type|Value Description|
|-|-|-|
|errorType|String|The string identifier which specifies the type of error that occured.|

The following types of errors are possible with this response:

|Error Type|Description|
|-|-|
|CLIENT_NOT_AUTHENTICATED|The client is not an authenticated user and/or does not have an active session.  The client may have also failed to present a valid access token.|