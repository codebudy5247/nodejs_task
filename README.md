### Setup

> Install npm dependencies using npm install

```shell
$ npm install 
```

> Set up a MongoDB database 

> Create a .env file in the root directory

> Set up required environment variables

```javascript
PORT = 
MONGO_URI_PROD = 
MONGO_URI_DEV= // mongodb://localhost:27017/my-db
JWT_SECRET =  // xyz
```
# API Usage & Endpoints

## Login a User [POST /api/users/signup]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

    ```
    {
    "name":"mark2",
    "email":"mark2@example.com",
    "password":"123456",
    "phoneNumber":"6200460089",
    "Class":"5",
    "grade":"a",
    "month":"jan",
    "year":"2000",
    "date":"23"

    }

    ```

- Response: 200 (application/json)

  - Body

  ```
  "result": {
    "_id": "60e8574fcb1d653a1c8248a1",
    "name": "mark2",
    "email": "mark2@example.com",
    "password": "$2a$12$hUUwwj.wGuJmnyD4k4R.GuY2uloiUomqunuLBXmSgGif3OXy1p0UC",
    "phoneNumber": 6200460089,
    "Class": 5,
    "grade": "a",
    "dob": {
      "month": "jan",
      "year": 2000,
      "date": 23
    },
    "createdAt": "2021-07-09T14:03:59.915Z",
    "updatedAt": "2021-07-09T14:03:59.915Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmsyQGV4YW1wbGUuY29tIiwicGhvbmVOdW1iZXIiOjYyMDA0NjAwODksImlkIjoiNjBlODU3NGZjYjFkNjUzYTFjODI0OGExIiwiaWF0IjoxNjI1ODM5NDM5LCJleHAiOjE2MjU4NDMwMzl9.hbO24EzbOhaQAArboteUuPBoVhTkdzMeasVHvXoXZX8"
  ```

## Signin a User [POST /api/users/signin]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

    ```
           {
    "email":"mark2@example.com",
    "password":"123456",
    "phoneNumber":"6200460089",

       }
    ```

- Response: 200 (application/json)

  - Body

  
        {
  "result": {
    "_id": "60e8574fcb1d653a1c8248a1",
    "name": "mark2",
    "email": "mark2@example.com",
    "password": "$2a$12$hUUwwj.wGuJmnyD4k4R.GuY2uloiUomqunuLBXmSgGif3OXy1p0UC",
    "phoneNumber": 6200460089,
    "Class": 5,
    "grade": "a",
    "dob": {
      "month": "jan",
      "year": 2000,
      "date": 23
    },
    "createdAt": "2021-07-09T14:03:59.915Z",
    "updatedAt": "2021-07-09T14:03:59.915Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmsyQGV4YW1wbGUuY29tIiwicGhvbmVOdW1iZXIiOjYyMDA0NjAwODksImlkIjoiNjBlODU3NGZjYjFkNjUzYTFjODI0OGExIiwiaWF0IjoxNjI1ODM5NDM5LCJleHAiOjE2MjU4NDMwMzl9.hbO24EzbOhaQAArboteUuPBoVhTkdzMeasVHvXoXZX8"
  
## Google signup [POST /api/users/auth/google/signup]
  - Response: 201 (application/json)

  - Body

  {
    "email":"xyz@example.com",
    "name":"xyz"
  }
## Google signin [POST /api/users/auth/google/signin]
   - Response: 200 (application/json)

  - Body
     {
  "result": {
    "_id": "60e8574fcb1d653a1c8248a1",
    "name": "mark2",
    "email": "mark2@example.com",
    "password": "$2a$12$hUUwwj.wGuJmnyD4k4R.GuY2uloiUomqunuLBXmSgGif3OXy1p0UC",
    "phoneNumber": 6200460089,
    "Class": 5,
    "grade": "a",
    "dob": {
      "month": "jan",
      "year": 2000,
      "date": 23
    },
    "createdAt": "2021-07-09T14:03:59.915Z",
    "updatedAt": "2021-07-09T14:03:59.915Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmsyQGV4YW1wbGUuY29tIiwicGhvbmVOdW1iZXIiOjYyMDA0NjAwODksImlkIjoiNjBlODU3NGZjYjFkNjUzYTFjODI0OGExIiwiaWF0IjoxNjI1ODM5NDM5LCJleHAiOjE2MjU4NDMwMzl9.hbO24EzbOhaQAArboteUuPBoVhTkdzMeasVHvXoXZX8"
## Facebook signup [POST /api/users/auth/google/signup]
   - Response: 201 (application/json)

  - Body

  {
    "email":"xyz@example.com",
    "name":"xyz"
  }
## Facebook signin [POST /api/users/auth/google/signin]
   - Body
        {
  "result": {
    "_id": "60e8574fcb1d653a1c8248a1",
    "name": "mark2",
    "email": "mark2@example.com",
    "password": "$2a$12$hUUwwj.wGuJmnyD4k4R.GuY2uloiUomqunuLBXmSgGif3OXy1p0UC",
    "phoneNumber": 6200460089,
    "Class": 5,
    "grade": "a",
    "dob": {
      "month": "jan",
      "year": 2000,
      "date": 23
    },
    "createdAt": "2021-07-09T14:03:59.915Z",
    "updatedAt": "2021-07-09T14:03:59.915Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmsyQGV4YW1wbGUuY29tIiwicGhvbmVOdW1iZXIiOjYyMDA0NjAwODksImlkIjoiNjBlODU3NGZjYjFkNjUzYTFjODI0OGExIiwiaWF0IjoxNjI1ODM5NDM5LCJleHAiOjE2MjU4NDMwMzl9.hbO24EzbOhaQAArboteUuPBoVhTkdzMeasVHvXoXZX8"