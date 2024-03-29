# GET /api/facility/in/me

Get all of the facilities in which the user is assigned to.

## Access Requirements

- Authenticated client must present a valid access token, and must be an `ADMIN` or `USER` role.

## Middleware

1. middleware/session.verifySessionAndRole(["ADMIN", "USER"])
2. handlers/facility.getFacilitiesInMe

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

A `200 OK` is sent when the requested media is found.  The response body will contain a JSON object with the following keys:

|Key|Type|Value|
|-|-|-|
|numberFacilities|Integer|The number of facilities that have been returned.|
|facilities|[Object]|Array of facility data objects.|

The `facilities` key will be an array of objects containing the following keys:

|Key|Type|Value|
|-|-|-|
|id|Integer|Database ID of the facility.|
|baseId|Integer|Base at which this facility is located.|
|description|String|Description or name of the facility.|
|buildingAddress|String|Address of the facility.|
|buildingNumber|String|Building number for the facility.|
|roomNumber|String|Room number for the facility.|