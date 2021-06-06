import * as R from 'ramda';

const MSGS = {
  SHOW_HEART: "SHOW_HEART",
  REMOVE_HEART: "REMOVE_HEART"
}

export function showHeartMsg(x,y) {
  return {
    type: MSGS.SHOW_HEART,
    x,
    y,
  }
}
export function removeHeartMsg() {
  return {
    type: MSGS.REMOVE_HEART,
  }
}
function update (msg, model) {
  switch (msg.type) {
    case MSGS.SHOW_HEART: {
      const { x, y } = msg;
      return {
        ...model,
        hearts: [
          ...model.hearts,
          {
            x,
            y,
          }
        ],
        heartcounter: model.heartcounter + 1,
      }
    }
    case MSGS.REMOVE_HEART: {
      const [ removeMe, ...hearts ] = model.hearts;
      return {
        ...model,
        hearts
      }
    }
    default: 
      return model;
  }
}


function parseNum(str) {
  return R.pipe(
    parseFloat,
    R.defaultTo(0),
  )(str);
}

export default update;
