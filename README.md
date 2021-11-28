simple app for playing with json server in react.  has GET and POST requests.  new user is rendered immediately after being submitted.

## Start the project using Docker

In the project root directory, you can run:

```docker build . -t derrickholleman/json-server-react```

then execute the command:

```docker run -p 3000:3000 -p 5000:5000 derrickholleman/json-server-react```

afterwards visit http://localhost:3000/ to view the project

## Start the project without Docker

In the project root directory, you can run:

### `npm install`

then:

### `npm start`
