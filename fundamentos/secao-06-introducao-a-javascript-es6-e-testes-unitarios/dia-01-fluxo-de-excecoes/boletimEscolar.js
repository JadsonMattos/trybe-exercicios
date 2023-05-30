const verifyRate = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('Atenção! Os valores devem ser numéricos');
  }  
}

const calculateRate = (n1, n2, n3, n4) => {
  try {
    verifyRate(n1, n2, n3, n4);
    let sum = n1 + n2 + n3 + n4;
    let media = sum / 4;
    return media;
  } catch (error) {
    return error.message;
  }
}
console.log(calculateRate(7, 9, 9, '8'));