const Path = require("path");

require("./utils/methods/Globals");

const Logger = pocketnode("logger/Logger");
const Server = pocketnode("Server");

function PocketNode(paths){
	this.START_TIME = Date.now();
	this.NAME = "PocketNode";
	this.CODENAME = "[BEGINNINGS]";
	this.VERSION = "0.0.6";
	this.API_VERSION = "1.0.0";

    let logger = new Logger("Server");
    let path = {
        file: Path.normalize(__dirname + "/../"),
        data: Path.normalize(__dirname + "/../../"),
        plugins: Path.normalize(__dirname + "/../../plugins/")
    };

    for(let i in paths) if(typeof path[i] !== "undefined") path[i] = paths[i];

    logger.info("Starting PocketNode "+this.version);

    let server = new Server(this, logger, path);
    if(TRAVIS_BUILD === true){
        server.shutdown();
    }

    return server;
}

module.exports = PocketNode;
