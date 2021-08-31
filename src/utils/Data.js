const DATA = []

class Placeholder {
  constructor(id, number) {
    this.id = id;
    this.number = number;
  };
};

const createData = (numPics) => {
  var i = 1;
  while (i <= numPics) {
    const j = i.toString();
    const pic = new Placeholder(i, j);
    DATA.push(pic);
    i++;
  };
};

createData(102);

export { DATA };

