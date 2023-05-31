const hydrate = (string) => {
  const split = string.split('');
  let glasses = 0;
  for ( let element of split) {
    const parsed = parseInt(element);
    if (parsed) {
      glasses += parsed;
    }
  }
  let glass = 'copo';
  if (glasses > 1) {
    glass = 'copos';
  }
  return `${glasses} ${glass} de água`;
}

module.exports = hydrate;