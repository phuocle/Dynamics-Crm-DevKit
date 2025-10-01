import { devKit } from './lib/devkit.mjs';

(async () => {
  const util = devKit.LoadUtility();
  const result = util.CurrentAppName();
  console.log('Constructor:', result.constructor.name);
})();
