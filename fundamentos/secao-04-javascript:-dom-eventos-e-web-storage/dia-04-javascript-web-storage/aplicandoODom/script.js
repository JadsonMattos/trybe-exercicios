window.onload = () => {
  const changeBackgroundColor = (color) => {
    let content = document.querySelector('.content');
    content.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }
  const changeFontColor = (color) => {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (const element of paragraphs) {
      element.style.color = color;
    }
    localStorage.setItem('fontColor', color);
  }
  const changeFontSize = (size) => {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (const element of paragraphs) {
      element.style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
  }
  const changeLineHeight = (height) => {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (const element of paragraphs) {
      element.style.lineHeight = height;
    }
    localStorage.setItem('lineHeight', height);
  }
  const changeFontFamily = (family) => {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (const element of paragraphs) {
      element.style.fontFamily = family;
    }
    localStorage.setItem('fontFamily', family);
  }

  let buttonsBackgroundColor = document.querySelectorAll('#background-color>button');
  for (const element of buttonsBackgroundColor) {
    element.addEventListener('click', (event) => {
      changeBackgroundColor(event.target.innerHTML);
    })
  }
  let buttonsFontColor = document.querySelectorAll('#font-color>button');
  for (const element of buttonsFontColor) {
    element.addEventListener('click', (event) => {
      changeFontColor(event.target.innerHTML);
    })
  }
  let buttonsFontSize = document.querySelectorAll('#font-size>button');
  for (const element of buttonsFontSize) {
    element.addEventListener('click', (event) => {
      changeFontSize(event.target.innerHTML);
    })
  }
  let buttonsLineHeight = document.querySelectorAll('#line-height>button');
  for (const element of buttonsLineHeight) {
    element.addEventListener('click', (event) => {
      changeLineHeight(event.target.innerHTML);
    })
  }
  let buttonsFontFamily = document.querySelectorAll('#font-family>button');
  for (const element of buttonsFontFamily) {
    element.addEventListener('click', (event) => {
      changeFontFamily(event.target.innerHTML);
    })
  }
  const initialize = () => {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) changeBackgroundColor(backgroundColor);
    let fontColor = localStorage.getItem('fontColor');
    if (fontColor) changeFontColor(fontColor);
    let fontSize = localStorage.getItem('fontSize');
    if (fontSize) changeFontSize(fontSize);
    let lineHeight = localStorage.getItem('lineHeight');
    if (lineHeight) changeLineHeight(lineHeight);
    let fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily) changeFontFamily(fontFamily);
  }
  initialize();
}