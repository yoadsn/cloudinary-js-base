import {Action} from "../../../internal/Action";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../../internal/qualifier/Qualifier";

/**
 * @class SimpleEffectAction
 * @augments Action
 * @description A class that defines a simple effect of the type e_{effectName}
 */
class SimpleEffectAction extends Action {
  constructor(effectType?: string, level?: number|string) {
    super();
    const qualifierEffect = this.createEffectQualifier(effectType, level);
    this.addQualifier(qualifierEffect);
  }

  protected createEffectQualifier(effectType: string, level?: number|string):Qualifier {
    let qualifierValue;
    if(level) {
      qualifierValue = new QualifierValue([effectType, `${level}`]).setDelimiter(':');
    } else {
      qualifierValue = new QualifierValue(effectType);
    }
    return new Qualifier('e', qualifierValue);
  }
}

export {SimpleEffectAction};
