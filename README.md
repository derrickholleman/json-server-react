## Start the project using Docker

In the project directory, you can run:

### `npm run docker:run`

Feel free to change the default ports, if you'd like the front-end to run on a port other than 3000, or the back-end port to run on something other than 5000.  

Changing the front-end port - if you'd like your front-end to run to run on port 3001 for example, change ```"docker:run": "docker run --rm -p 3000:3000 -p 5000:5000 derrickholleman/json-server-react"``` to ```"docker:run": "docker run --rm -p 3001:3000 -p 5000:5000 derrickholleman/json-server-react"```

Changing the back-end port - if you'd like your front-end to run to run on port 5001 for example, change ```"docker:run": "docker run --rm -p 3000:3000 -p 5000:5000 derrickholleman/json-server-react"``` to ```"docker:run": "docker run --rm -p 3000:3000 -p 5001:5000 derrickholleman/json-server-react"```

NOTE: when changing the back-end port, reflect that change in the ```start:server``` script as well.  If you choose port 5001 for your back-end port, change the ```start:server``` script to ```"start:server": "json-server --watch --host 0.0.0.0 --port=5001 data.json"```

## Start the project without Docker

In the project directory, you can run:

### `npm install`

then:

### `npm start`
