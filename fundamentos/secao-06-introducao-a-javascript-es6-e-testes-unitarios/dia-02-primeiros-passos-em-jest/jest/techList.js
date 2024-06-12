const techList = (arrayTech, name) => {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  } 
  const sortedArray = arrayTech.sort();
  const listTech = [];
  for (let element of sortedArray) {
    listTech.push({
      tech: element,
      name,
    })
  }
  return listTech;
}

module.exports = techList;