# GET /api/user/self

Get profile information about the currently authenticated user.

## Access Requirements

- Any authenticated client presenting a valid access token may access this route.

## Middleware

1. middleware/session.verifySessionAndRole()
2. handlers/user.getSelf

## Request

Note: Inputs listed here pertain to this route's handler function only; additional inputs may be necessary for the middleware functions.

### Headers

|Header|Value|Optional|
|-|-|-|
|Content-Type|"application/json"|No|

### Params

N/A

### Query

N/A

### Body

N/A

## Response

Note: Responses listed here pertain to this route's handler function only; additional responses may be generated by the middleware functions.

### 200 OK

A `200 OK` is sent when the controller has successfully found the user account.  The response body will contain a JSON object with the collowing keys:

|Key|Type|Value|
|-|-|-|
|userId|Integer|Database identifier of the user account.|
|username|String|Username used to log into the account.|
|role|String|User role.|
|rank|String|User's rank.|
|firstName|String|User's first name.|
|lastName|String|User's last name.|
