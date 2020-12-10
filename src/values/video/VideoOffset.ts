import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace VideoRange
 * @memberOf Values
 */


/**
 * VideoRange
 */
class VideoOffset extends Action {

  constructor(offset:number=null) {
    super();
    if (offset) {
      this.startOffset(offset);
    }
  }

  //TODO: consider changing type of startOffset to be VideoOffset, like in php2
  startOffset(startOffset: VideoOffset|number): this {
    return this.addQualifier(new Qualifier("so", `${startOffset}`));
  }

  endOffset(endOffset: VideoOffset|number): this {
    //TODO: add EndOffset
    return this.addQualifier(new Qualifier("eo", `${endOffset}`));
  }
}

export {
  VideoOffset
};
