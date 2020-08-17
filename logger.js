const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");

const emitter = new EventEmitter();
emitter.on("log", (message) => {
	fs.appendFile(path.join(__dirname, "log.txt"), message, (error) => {
		if (error) throw error;
	});
});

// emitter.emit("log", "menssagem que eu quero");

function log(message) {
	emitter.emit("log", message);
}

module.exports = log;
