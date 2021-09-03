
export function dynamicGradient (firstNodeArr,secondNodeArr,duration,target) {

  const RESOLUTION = 24 * duration / 1000;
  const firstNodeRGB = firstNodeArr.map ( hexToRGB );
  const secondNodeRGB = secondNodeArr.map ( hexToRGB );
  
  const ColorNum = firstNodeArr.length
  const inc = ColorNum / RESOLUTION;
  const timeStep = Math.floor(duration/RESOLUTION)

  function nextColor(firstNodeRGB,secondNodeRGB,count = 0,direction=135) {

    const firstNodeC1 = firstNodeRGB[Math.floor(count)%ColorNum];
    const firstNodeC2 = firstNodeRGB[Math.floor(count+1)%ColorNum];
    const secondNodeC1 = secondNodeRGB[Math.floor(count)%ColorNum];
    const secondNodeC2 = secondNodeRGB[Math.floor(count + 1)%ColorNum];

    const firstNode = interpolateColor(firstNodeC1,firstNodeC2, count%1);
    const secondNode = interpolateColor(secondNodeC1,secondNodeC2, count%1)

    const newDirection = direction + Math.floor(-2 + Math.random()*4)
    target.style.backgroundImage = `
      linear-gradient(${newDirection}deg, 
        rgb(${firstNode[0]},${firstNode[1]},${firstNode[2]}),
        rgb(${secondNode[0]},${secondNode[1]},${secondNode[2]})
      )`

    setTimeout( _ => nextColor(firstNodeRGB,secondNodeRGB,(count+inc)%(firstNodeArr.length),newDirection), timeStep)
  }
  console.log({firstNodeRGB,secondNodeRGB})
  nextColor(firstNodeRGB,secondNodeRGB);

}

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return [parseInt(r),parseInt(g),parseInt(b)];
}

function interpolateColor(color1,color2,per) {
  return [
    linScale(color1[0],color2[0],per),
    linScale(color1[1],color2[1],per),
    linScale(color1[2],color2[2],per),
  ]
}

function linScale(min,max,per) {
  return min * (1-per) + max * per
}
