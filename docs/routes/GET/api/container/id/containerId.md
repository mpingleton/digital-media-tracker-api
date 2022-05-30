# GET /api/container/id/:containerId

Get a single container, given its ID.

## Access Requirements

- Authenticated client must present a valid access token, and must be an `ADMIN` or `USER` role.

## Middleware

1. middleware/session.verifySessionAndRole(["ADMIN", "USER"])
2. middleware/validator(validators/container.getContainerById)
3. handlers/container.getContainerById

## Request

Note: Inputs listed here pertain to this route's handler function only; additional inputs may be necessary for the middleware functions.

### Headers

|Header|Value|Optional|
|-|-|-|
|Content-Type|"application/json"|No|

### Params

|Param|Type|Value|
|-|-|-|
|containerId|Integer|Id of the requested container.|

### Query

N/A

### Body

N/A

## Response

Note: Responses listed here pertain to this route's handler function only; additional responses may be generated by the middleware functions.

### 200 OK

A `200 OK` is sent when the requested media is found.  The response body will contain a JSON object with the following keys:

|Key|Type|Value|
|-|-|-|
|id|Integer|Database ID of the container.|
|facilityId|Integer|Id of the facility in which this container is located.|
|description|String|Description or name of the container.|