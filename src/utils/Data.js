const DATA = []

class Placeholder {
  constructor(id) {
    this.id = id;
    this.src = require('../assets/LinkedIn_Profile.jpg');
  };
};

const createData = (numPics) => {
  var i = 1;
  while (i <= numPics) {
    const pic = new Placeholder(i);
    DATA.push(pic);
    i++;
  };
};

createData(10);

export { DATA };

