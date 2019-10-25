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

var args = process.argv.slice(2);
shell.exec(`git config --global user.email "cnhtech.software@gmail.com"`);
shell.exec(`git config --global user.name "CNH Software Team"`);

//shell.exec("git checkout -b master_ci_pipeline");
shell.exec("git add .");
shell.exec(`git commit --message "Release version: "` + appData.expo.version);

shell.exec(`git remote add master_ci_pipeline https://${args}@github.com/CNHCircleK/CNH-Mobile-App.git > /dev/null 2>&1`);
shell.exec("git push --quiet --set-upstream master_ci_pipeline master_ci_pipeline");
