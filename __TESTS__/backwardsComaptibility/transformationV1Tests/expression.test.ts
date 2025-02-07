import {stringOrNumber} from "../../../src/backwards/types";
import {v1NormalizeExpression} from "../../../src/backwards/utils/v1NormalizeExpression";

describe("Expression normalization", function () {
  const cases: Record<string, [stringOrNumber, string]> = {
    'null is not affected': [null, null],
    'number replaced with a string value': [10, '10'],
    'empty string is not affected': ['', ''],
    'single space is replaced with a single underscore': [' ', '_'],
    'blank string is replaced with a single underscore': ['   ', '_'],
    'underscore is not affected': ['_', '_'],
    'sequence of underscores and spaces is replaced with a single underscore': [' _ __  _', '_'],
    'arbitrary text is not affected': ['foobar', 'foobar'],
    'double ampersand replaced with and operator': ['foo && bar', 'foo_and_bar'],
    'double ampersand with no space at the end is not affected': ['foo&&bar', 'foo&&bar'],
    'width recognized as variable and replaced with w': ['width', 'w'],
    'initial aspect ratio recognized as variable and replaced with iar': ['initial_aspect_ratio', 'iar'],
    '$width recognized as user variable and not affected': ['$width', '$width'],
    '$initial_aspect_ratio recognized as user variable followed by aspect_ratio variable': [
      '$initial_aspect_ratio',
      '$initial_ar'
    ],
    '$mywidth recognized as user variable and not affected': ['$mywidth', '$mywidth'],
    '$widthwidth recognized as user variable and not affected': ['$widthwidth', '$widthwidth'],
    '$_width recognized as user variable and not affected': ['$_width', '$_width'],
    '$__width recognized as user variable and not affected': ['$__width', '$_width'],
    '$$width recognized as user variable and not affected': ['$$width', '$$width'],
    '$height recognized as user variable and not affected': ['$height_100', '$height_100'],
    '$heightt_100 recognized as user variable and not affected': ['$heightt_100', '$heightt_100'],
    '$$height_100 recognized as user variable and not affected': ['$$height_100', '$$height_100'],
    '$heightmy_100 recognized as user variable and not affected': ['$heightmy_100', '$heightmy_100'],
    '$myheight_100 recognized as user variable and not affected': ['$myheight_100', '$myheight_100'],
    '$heightheight_100 recognized as user variable and not affected': [
      '$heightheight_100',
      '$heightheight_100'
    ],
    '$theheight_100 recognized as user variable and not affected': ['$theheight_100', '$theheight_100'],
    '$__height_100 recognized as user variable and not affected': ['$__height_100', '$_height_100']
  };

  Object.keys(cases).forEach(function (testDescription) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [input, expected] = cases[testDescription];
    // eslint-disable-next-line max-nested-callbacks
    it(testDescription, function () {
      expect(v1NormalizeExpression(input)).toEqual(expected);
    });
  });
});
