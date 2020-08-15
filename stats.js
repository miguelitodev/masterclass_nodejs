const os = require("os");
// -> Dados do sistema
// console.log(os);

setInterval(() => {
	// -> Log para limpar antes de mostrar novamente
	console.clear();

	const { freemem, totalmem } = os;
	const freeMemory = parseInt(freemem() / 1024 / 1024);
	const totalMemory = parseInt(totalmem() / 1024 / 1024);
	const usedMemory = totalMemory - freeMemory;
	const percentMemoryFree = parseInt((freeMemory / totalMemory) * 100);
	const percentMemoryUsed = 100 - percentMemoryFree;

	// -> Dados de memória livre e total do sistema
	// console.log(
	// 	`
	//     Free Memory: ${freeMemory}MB
	//     Used Memory: ${usedMemory}MB
	//     Total Memory: ${totalMemory}MB
	//     Percent Memory Free: ${percentMemoryFree}%
	//     Percent Memory Used: ${percentMemoryUsed}%
	//     `
	// );

	const stats = {
		free: `Free Memory: ${freeMemory}MB - ${percentMemoryFree}%`,
		used: `Used Memory: ${usedMemory}MB - ${percentMemoryUsed}%`,
		total: `Percent Memory Free: ${percentMemoryFree}% - 100%`,
	};

	// --> Log normal do objeto
	// console.log(stats);

	// --> Log em formato de tabela
	console.table(stats);
}, 1000);
