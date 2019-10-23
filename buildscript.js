const shell = require('shelljs');
const jsonfile = require('jsonfile');
const file = 'otaBuildNum.json';

const data = jsonfile.readFileSync(file);
data.otaBuildNum += 1;

jsonfile.writeFileSync(file, data, { spaces: 2, EOL: '\r\n' });
