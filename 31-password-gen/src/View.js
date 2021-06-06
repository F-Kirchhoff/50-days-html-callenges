import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { create, h } from 'virtual-dom';

import {
  createPWMsg,
  INPUTS,
  updateInputsMsg,
} from "./Update";

const {
  div,
  p,
  h1,
  i,
  input,
  label,
  button,
  pre,
} = hh(h);

function passwordView(dispatch, pw) {
  return div({ 
    className: "flex w-100 mw5 mb3",
    style: "min-width: 300px"
   }, [
    input({ 
      className: "w-100 pa2 br2 br--left ba b--washed-red bg-transparent near-white overflow-hidden",
      id: "password",
      value: pw,
    }),
    button({
      className : `pv2 ph3 br2 br--right pointer navy ba b--washed-red bg-washed-red`,
      onclick: e => {
        document.getElementById("password").select();
        document.execCommand("copy");
      }
    }, i({className: "far fa-clipboard"})),
  ]);
}
function textInputView(inputlabel, value, oninput ) {
  return div({
    className: "flex justify-between items-center pv2 near-white",
  }, [
    label(inputlabel),
    input({
      className: "w-10 tr bg-dark-blue pv1 br2 bn near-white tc",
      type: "text",
      value,
      oninput,
    })
  ])
}

function inputView(inputlabel, oninput) {
  return div({
    className: "flex justify-between items-center pv2 near-white",
  }, [
    label(inputlabel),
    input({
      className: "w-10 tr bg-near-white bn br2",
      type: "checkbox",
      checked: "true",
      oninput,
    })
  ])
}

function generatorView(dispatch,model) {
  const { length, ll, ul, num, sym, pw } = model;
  return div({ className: 'white w-100 pa3 bg-navy center br2' }, [
    h1({ className: "ma0 mb3 tc center f3"}, "Password Generator"),
    passwordView(dispatch,pw),
    textInputView("Password Length",length, e => dispatch(updateInputsMsg(INPUTS.LENGTH, e.target.value))),
    inputView("Include Lowercase letters", e => dispatch(updateInputsMsg(INPUTS.LL, (e.target.value)))),
    inputView("Include Uppercase letters", e => dispatch(updateInputsMsg(INPUTS.UL, (e.target.value)))),
    inputView("Include Numbers", e => dispatch(updateInputsMsg(INPUTS.NUM, (e.target.value)))),
    inputView("Include Symbols", e => dispatch(updateInputsMsg(INPUTS.SYM, (e.target.value)))),
    button({
      className: "navy bg-washed-red w-100 bn br2 pa2 mt3 b pointer",
      onclick: () => dispatch(createPWMsg()),
    }, "Generate")
  ]);
}



function view(dispatch, model) {
  return div({ className: 'center' }, [
    generatorView(dispatch,model),
    // pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
