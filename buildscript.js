const shell = require('shelljs');
const jsonfile = require('jsonfile');
const buildNumFile = 'otaBuildNum.json';
const appFile = 'app.json';

const buildNumData = jsonfile.readFileSync(buildNumFile);
buildNumData.otaBuildNum += 1;

const appData = jsonfile.readFileSync(appFile);
let version = appData.expo.version;
version = version.slice(0, -2);
version = version + "." + buildNumData.otaBuildNum.toString();

appData.expo.version = version;

jsonfile.writeFileSync(buildNumFile, buildNumData, { spaces: 2, EOL: '\r\n' });
jsonfile.writeFileSync(appFile, appData, { spaces: 2, EOL: '\r\n' });

shell.exec('./gitscript ' + version);
