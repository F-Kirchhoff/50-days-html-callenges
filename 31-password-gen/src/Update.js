import * as R from 'ramda';

const MSGS = {
  UPDATE_INPUTS:"UPDATE_INPUTS",
  CREATE_PW: "CREATE_PW",
}
const LETTERS = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['!', '#', '$', '%', '&', '(', ')', '*', '+'],
]
export const INPUTS = {
  LENGTH: "LENGTH",
  UL: "UL",
  LL: "LL",
  NUM: "NUM",
  SYM: "SYM",
}

export const updateInputsMsg = (input,value) => {
return {
  type: MSGS.UPDATE_INPUTS,
  input,
  value
  }
}
export const createPWMsg = () => {
return {
  type: MSGS.CREATE_PW,
  }
}

function update (msg, model) {
  switch (msg.type) {

    case MSGS.UPDATE_INPUTS:

      switch (msg.input) {
        case INPUTS.LENGTH:
          const length = R.pipe(
            parseInt,
            R.defaultTo(0)
          )(msg.value);
          return {
            ...model,
            length,
          }
        case INPUTS.LL:
          const ll = msg.value === "on" ? !model.ll : false;
          return {
            ...model,
            ll,
          }

        case INPUTS.UL:
          const ul = msg.value === "on" ? !model.ul : false;
          return {
            ...model,
            ul,
          }

        case INPUTS.NUM:
          const num = msg.value === "on" ? !model.num : false;
          return {
            ...model,
            num,
          }

        case INPUTS.SYM:
          const sym = msg.value === "on" ? !model.sym : false;
          return {
            ...model,
            sym,
          }
      }

    case MSGS.CREATE_PW: {
      const generatePW = getPWGenerator(model);
      const pw = generatePW(model.length);
      return {
        ...model,
        pw,
      };
    }

    default: 
      return model;
  }
}

function getPWGenerator(model) {
  const { ll, ul, num, sym } = model;
  const choices = [ ll,ul,num,sym, ];

  const pwletters = LETTERS.reduce((acc,letterset,idx) => choices[idx] ? [...acc,...letterset] : acc ,[]); 

  function generatePW(N, acc = "", count = 0) {
    if (count === N) { 
      return acc 
    }
    return generatePW(N, acc + pwletters[Math.floor(Math.random()*pwletters.length)], count + 1);
  }

  return generatePW;
}


export default update;
