import upgradeDeps from "babel-upgrade/lib/upgradeDeps";
import upgradeConfig from "babel-upgrade/lib/upgradeConfig";
import sortKeys from "sort-keys";

const getLatestVersion = () => "^7.0.0";

const replaceMocha = str =>
  str
    .replace(
      /--compilers\s+js:babel-core\/register/,
      "--compilers js:@babel/register"
    )
    .replace(
      /--compilers\s+js:babel-register/,
      "--compilers js:@babel/register"
    )
    .replace(/--require\s+babel-register/, "--require @babel/register")
    .replace(/--require\s+babel-polyfill/, "--require @babel/polyfill");

const upgradeScripts = scripts => {
  for (const script of Object.keys(scripts)) {
    scripts[script] = replaceMocha(scripts[script]);
  }

  return scripts;
};

export const updatePackageJSON = pkg => {
  if (pkg.babel) {
    pkg.babel = upgradeConfig(pkg.babel);
  }

  if (pkg.scripts) {
    pkg.scripts = upgradeScripts(pkg.scripts);

    if (Object.values(pkg.scripts).some(s => s.includes("babel-node"))) {
      if (pkg.devDependencies) {
        pkg.devDependencies["@babel/node"] = getLatestVersion();
      }
    }
  }

  if (pkg.devDependencies) {
    pkg.devDependencies = sortKeys(
      upgradeDeps(pkg.devDependencies, getLatestVersion())
    );
  }

  if (pkg.dependencies) {
    pkg.dependencies = sortKeys(
      upgradeDeps(pkg.dependencies, getLatestVersion())
    );
  }

  return pkg;
};

export const updateBabelRC = upgradeConfig;
