const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function createLogs() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i + 1}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i + 1}`);
        console.log(`Created file: ${fileName}`);
    }
}

createLogs();
