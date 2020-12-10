/**
 * This file contains the test cases for the BundleSizeTests
 * Run all tests by running `npm run test:size`
 */

import importFromDist from "./utils/stringGenerators/importFromDist";
import importFromBase from "./utils/stringGenerators/importFromBase";
import {ITestCase} from "./interfaces/ITestCase";

/**
 * @description - Each test case is built using an array of imports  (importsArray)
 *                Each element in the array is string, an import statement: `import resize from '...'; console.log(resize)`
 *                Before we export, we combine all those strings into one long string, contained within importString;
 */
const bundleSizeTestCases:ITestCase[] = [
  {
    name: 'Tests CloudinaryImage with Resize',
    sizeLimitInKB: 20,
    importsArray: [
      importFromDist('assets/CloudinaryImage'),
      importFromDist('instance/Cloudinary'),
      importFromDist('actions/resize')
    ]
  },
  {
    name: 'Tests CloudinaryImage with Resize and Adjust',
    sizeLimitInKB: 30,
    importsArray: [
      importFromDist('assets/CloudinaryImage'),
      importFromDist('instance/Cloudinary'),
      importFromDist('actions/resize'),
      importFromDist('actions/adjust')
    ]
  },
  {
    name: 'Tests CloudinaryImage with Resize, Adjust and Border',
    sizeLimitInKB: 30,
    importsArray: [
      importFromDist('assets/CloudinaryImage'),
      importFromDist('instance/Cloudinary'),
      importFromDist('actions/resize'),
      importFromDist('actions/adjust'),
      importFromDist('actions/border')
    ]
  },
  {
    name: 'Tests CloudinaryImage image with Resize, adjust and delivery',
    sizeLimitInKB: 32,
    importsArray: [
      importFromDist('assets/CloudinaryImage'),
      importFromDist('instance/Cloudinary'),
      importFromDist('actions/resize'),
      importFromDist('actions/adjust'),
      importFromDist('actions/delivery')
    ]
  },
  {
    name: 'Import all of the SDK',
    sizeLimitInKB: 110,
    importsArray: [
      importFromBase('cloudinary')
    ]
  }
];

/**
 * Each case is an array of strings,
 * Before we export, we make sure we combine them so that `importString` contains a single long string
 */
export default <ITestCase[]> bundleSizeTestCases.map((testCase): ITestCase => {
  // Join all the strings into one long string, so we can write it to a file
  testCase.importString = testCase.importsArray.join('');
  return testCase;
});
