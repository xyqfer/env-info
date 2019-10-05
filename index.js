const os = require('os');
const process = require('process');
const bytes = require('bytes');

module.exports = () => {
    const bytesConfig = {
        unitSeparator: ' ',
    };
    const processMemoryUsage = Object.entries(process.memoryUsage()).map(([ name, value, ]) => {
        return {
            [name]: bytes(value, bytesConfig),
        };
    });

    return {
        os: {
            arch: os.arch(),
            platform: os.platform(),
            release: os.release(),
            type: os.type(),
            cpus: os.cpus(),
            LEANCLOUD_AVAILABLE_CPUS: process.env.LEANCLOUD_AVAILABLE_CPUS,
            endianness: os.endianness(),
            totalmem: bytes(os.totalmem(), bytesConfig),
            freemem: bytes(os.freemem(), bytesConfig),
            homedir: os.homedir(),
            tmpdir: os.tmpdir(),
            hostname: os.hostname(),
            loadavg: os.loadavg(),
            uptime: os.uptime(),
            networkInterfaces: os.networkInterfaces(),
        },
        process: {
            arch: process.arch,
            platform: process.platform,
            release: process.release,
            argv: process.argv,
            execArgv: process.execArgv,
            execPath: process.execPath,
            cwd: process.cwd(),
            config: process.config,
            cpuUsage: process.cpuUsage(),
            memoryUsage: processMemoryUsage,
        },
    };
};