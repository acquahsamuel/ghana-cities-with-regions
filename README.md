## Ghana cities with regions API
Ghana cities and regions api. for your project. Updated with the new regions

This API uses `POST && GET` request to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. All requests must include a `content-type` of `application/json` and the body must be valid JSON.


#### Request Endpoints

| Data        | URL Endpoint                                          |
|-------------|-------------------------------------------------------|
| Get Cities  | https://ghana-cities-api.herokuapp.com/api/v1/cities  |
| Get Regions | https://ghana-cities-api.herokuapp.com/api/v1/regions |



### Response Codes
```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity 
50X: Server Error
```