/**
 * @description Defines how the background gradient fade effect is applied.
 * @memberOf Qualifiers
 * @namespace GradientFade
 */

/**
 * @summary qualifier
 * @description Instructs the gradient fade to be applied symmetrically (to opposite edges of the image).
 * @memberOf Qualifiers.GradientFade
 * @return {string}
 */
function symmetric(): string {
  return 'symmetric';
}

/**
 * @summary qualifier
 * @description Instructs the gradient fade to be applied symmetrically (to opposite edges of the image) including background padding.
 * @memberOf Qualifiers.GradientFade
 * @return {string}
 */
function symmetricPad(): string {
  return 'symmetric_pad';
}


const GradientFade = {
  symmetric,
  symmetricPad
};

export {
  GradientFade,
  symmetricPad,
  symmetric
};
