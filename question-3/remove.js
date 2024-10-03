const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function removeLogs() {
    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log(`Deleted file: ${filePath}`);
        });
        
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

removeLogs();
