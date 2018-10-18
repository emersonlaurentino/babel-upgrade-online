import upgradeDeps from 'babel-upgrade/lib/upgradeDeps';
import sortKeys from 'sort-keys';

export const updatePackageJSON = pkg => {
  if (pkg.devDependencies) {
    pkg.devDependencies = sortKeys(upgradeDeps(pkg.devDependencies, '^7.0.0'));
  }

  if (pkg.dependencies) {
    pkg.dependencies = sortKeys(upgradeDeps(pkg.dependencies, '^7.0.0'));
  }

  return pkg;
};
