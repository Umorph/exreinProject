let headingCollection = document.querySelectorAll('.heading');

function addShadowText(element) {
  let mainText = element.querySelector('.heading__main-text'),
    shadowText = element.querySelector('.heading__shadow-text');

  shadowText.innerText = mainText.innerText;
}

headingCollection.forEach(heading => addShadowText(heading));
