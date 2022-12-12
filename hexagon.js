const x = 0;
const y = 0;
const a = 50; // Half the width of the hexagon

const theta = [0, 60, 120, 180, 240, 300]; // Angles of each vertex

// Floating point limitations cause non-zero results for certain operations
const checkForZero = (num) => (Math.abs(num) < 7e-15) ? 0 : num; 
const vertices = theta.map(t =>
  [
    x + checkForZero(a * Math.cos(t * Math.PI / 180)),
    y + checkForZero(a * Math.sin(t * Math.PI / 180)),
  ]
);

const polygonFormat = vertices => {
  let string = ''
  vertices.map(a => a.map(b => string += ` ${b}`))
  return string
}

console.log(polygonFormat(vertices));
