import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Applies a gradient fade effect from one edge of the image.
 * @class GradientFadeEffectAction
 * @augments Action
 */
class GradientFadeEffectAction extends Action {
  private _strength: number;
  private _type: string;

  /**
   * @description Sets the strength of the fade effect.
   * @param {number} strength The strength of the fade effect. (Range: 0 to 100, Server default: 20)
   */
  strength(strength:number): this {
    this._strength = strength;
    return this;
  }

  /**
   * @description Sets the mode of gradient fade.
   * @param {string | Values.GradientFade} type The mode of gradient fade.
   */
  type(type:string): this {
    this._type = type;
    return this;
  }

  /**
   * @description Sets the x dimension of the start point.
   * @param {number} x The x dimension of the start point.
   */
  horizontalStartPoint(x:number): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Sets the y dimension of the start point.
   * @param {number} y The y dimension of the start point.
   */
  verticalStartPoint(y:number): this {
    return this.addQualifier(new Qualifier('y', y));
  }

  protected prepareQualifiers(): void {
    let str = 'gradient_fade';
    if (this._type) {
      str += `:${this._type}`;
    }

    if (this._strength) {
      str += `:${this._strength}`;
    }

    this.addQualifier(new Qualifier('e', str));
  }
}

export {GradientFadeEffectAction};
