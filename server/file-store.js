const fs = require('fs');

const FILENAME = `${process.cwd()}/data.json`;

function get() {
    try {
        const content = fs.readFileSync(FILENAME, 'utf8');
        return JSON.parse(content);
    } catch (e) {
        return {};
    }
}

function store(data) {
    const content = JSON.stringify(data);
    fs.writeFileSync(FILENAME, content);
}

module.exports = { get, store };

