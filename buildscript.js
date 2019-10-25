const shell = require('shelljs');
const jsonfile = require('jsonfile');
const buildNumFile = 'otaBuildNum.json';
const appFile = 'app.json';

const buildNumData = jsonfile.readFileSync(buildNumFile);
buildNumData.otaBuildNum += 1;

const appData = jsonfile.readFileSync(appFile);
let version = appData.expo.version;
let patchNum = version.charAt(version.length-1);
let patchNumInt = parseInt(patchNum, 10);
patchNumInt += 1;
let newVersion = version.slice(0, -2);
newVersion = newVersion + "." + patchNumInt.toString();

appData.expo.version = newVersion;

jsonfile.writeFileSync(buildNumFile, buildNumData, { spaces: 2, EOL: '\r\n' });
jsonfile.writeFileSync(appFile, appData, { spaces: 2, EOL: '\r\n' });

var args = process.argv.slice(2);
shell.exec(`git config --global user.email "cnhtech.software@gmail.com"`);
shell.exec(`git config --global user.name "CNH Software Team"`);
//shell.exec(`git config --global user.password "${args}"`);

shell.exec("git checkout master_ci_pipeline");
shell.exec("git add .");
shell.exec(`git commit --message "[Auto] Release version: ${appData.expo.version}; otaBuildNum: ${buildNumData.otaBuildNum}"`);

shell.exec("git remote rm origin");
shell.exec(`git remote add origin https://cnhtech-software:${args}@github.com/CNHCircleK/CNH-Mobile-App.git > /dev/null 2>&1`);
shell.exec("git push origin master_ci_pipeline");
