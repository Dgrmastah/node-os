const os = require('os');


const sistema = {
    Nombre: os.platform(),
    Tipo: os.type(),
    Versión: os.release(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB',
    MemoriaLibre: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB'
};


console.log(sistema);
