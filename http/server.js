const http = require("http");
const fs = require("fs");
const path = require("path");

http
	.createServer((req, res) => {
		const file = req.url === "/" ? "index.html" : req.url;
		const filePath = path.join(__dirname, "public", file);
		const extname = path.extname(filePath);

		const allowedFileTypes = [".html", ".css", ".js"];
		const allowed = allowedFileTypes.find((item) => item === extname);

		fs.readFile(filePath, (error, content) => {
			if (error) throw error;
			res.end(content);
		});
		if (req.url === "/contato") return res.end("<h1>Contato</h1>");
	})
	.listen(5000, () => console.log("Server is runing..."));
