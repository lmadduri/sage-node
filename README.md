
# SAGE Assessment Server

## Dependencies
- [MongoDB](#mongodb)
- [Node](#node)

## Installation - Windows
### MongoDB
* Follow these steps to install MongoDB: https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-windows/
* Create a data folder for MongoDB. Recommendation:
* Navigate to the MongoDB folder
* Create a new folder "data"
* Create a new folder "db"
* Set permission for "db" folder to be read/write
* Set the DB path in MongoDB config file, for example by executing: mongod.exe --port 27017 --dbpath "c:\MongoDB\data\db"
### Node.js
* Follow the instructions here to install Node.js and NPM: http://blog.teamtreehouse.com/install-node-js-npm-windows
* Use Git to clone the SAGE Assessment Server: https://github.com/cu-sage/sage-node
* Go to the local directory containing cu-sage/sage-node and run: 
* npm install
* npm install sass
### Starting the Server - Windows
### MongoDB
* Consult these steps to install MongoDB: https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/
* Open a new window in Terminal.
* Start the daemon process: "C:\Program Files\MongoDB\Server\3.4\bin\mongod --port 27017 --dbpath "c:\MongoDB\data\db"

### Node.js
* Use Git to clone the SAGE Assessment Server: https://github.com/cu-sage/sage-node to a local folder of your choice
* Checkout the appropriate branch you would like to use. The recommended branch is 'development'
* Starting the Node.js server: $ npm run start
* Running gulp: npm run gulp

## Installation - Mac
### MongoDB
1. Install [Homebrew](http://brew.sh/).
2. Use Homebrew to install MongoDB: `brew install mongodb`.

### Node
1. Install [Homebrew](http://brew.sh/).
2. Use Homebrew to install Node: `brew install node`.

$ brew install npm
To install all the library and requirements specific for this repo, you can run the command:
$ npm install

This command will find and install all the requirement noted in the package.json file under the folder node_modules.
Then, you need to enter the AWS accessKeyId and secretAccessKey in the file aws-config.json inside the config folder.
Then run 
$ npm run start

## Importing Mock Data
You can run this command to get mock data in your database:

`npm run mocks`.

## Starting the Server
1. Start the MongoDB server. You'll need to leave the terminal window running.

  `mongod --config /usr/local/etc/mongod.conf`
  
2. Install the dependencies.

  `npm install`

3. Start the server.

  `npm run gulp`

### Integration
SAGE Assessment Server interfaces with the following components:
* Visual Assessment Editor
* Scratch Editor (After integration into flash object)
