const colors = {
  greenGradient: ['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff'] 
}


const coords = {
  1: {
      start: {x: 1, y: 1},
      end: {x: 0, y: 0}
  },
  2: {
      start: {x: 0, y: 0},
      end: {x: 1, y: 1}
  },
  3: {
      start: {x: 0, y: 1},
      end: {x: 1, y: 0}
  },
  4: {
      start: {x: 1, y: 0},
      end: {x: 0, y: 1}
  },
  5: {
      start: {x: 0.8, y: 0.2},
      end: {x: 0.2, y: 0.8}
  },
  6: {
      start: {x: 0.2, y: 0.8},
      end: {x: 0.8, y: 0.2}
  },
  7: {
      start: {x: 0, y: 0.4},
      end: {x: 1, y: 0.6}
  },
  8: {
      start: {x: 0, y: 0.2},
      end: {x: 1, y: 0.8}
  },   
};


class GradientClass {
    constructor(color, num) {
      this.color = colors[color];
      this.start = coords[num].start;
      this.end = coords[num].end;
    }
};

export { GradientClass };

