import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import {
  showHeartMsg,
  removeHeartMsg,
} from "./Update";

const {
  div,
  p,
  h1,
  i,
  pre,
} = hh(h);

function addHeart(dispatch) {
  return function(e) {
    console.log("click");
    dispatch(showHeartMsg(e.offsetX, e.offsetY));
    setTimeout(() => dispatch(removeHeartMsg()), 1000);
  }
}

function displayHeart(dispatch) {
  return function (heart) {
    const { x, y } = heart;
    return div({
      className: "red heart",
      style: `
      top: ${y}px; 
      left: ${x}px;
      `,
    }, i({ className: "fas fa-heart f1" })
    )
  }
}

function imageView (dispatch, model) {
  const { hearts,heartcounter } = model;
  return div({ className: "relative bg-red w-90 vh-50", }, [
    
    div({ 
      src: "https://source.unsplash.com/random/400x600",
      className: "cover w-100 h-100",
      style: "background: url(https://source.unsplash.com/random/400x600) center;   z-index: 1",
      onclick: addHeart(dispatch),
     }),
    
    div({ 
      className: "absolute bottom--1 right--1 bg-dark-pink washed-red br-pill pv2 ph3 f4 b", 
      style: "z-index: 5",
    }, [i({ className: "fas fa-heart mr2" }), heartcounter]),
    ...hearts.map(displayHeart(dispatch)),

  ])
}



function view(dispatch, model) {
  return div({ className: 'mw6 center flex flex-column items-center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Heart Animation'),
    imageView(dispatch,model),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
