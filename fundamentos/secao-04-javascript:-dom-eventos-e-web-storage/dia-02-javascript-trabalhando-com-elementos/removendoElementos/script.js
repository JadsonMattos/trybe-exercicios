// Remova a tag h2, filha do elemento where-are-you. 

const parent = document.getElementById('parent');
const children = parent.childNodes;
for (let i = children.length - 1; i >= 0; i -= 1) {
  const currentChild = children[i];
  if (currentChild.id === 'where-are-you') {
    currentChild.removeChild(currentChild.firstElementChild);
  }
}