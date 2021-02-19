function leftSelect() {
    if (count > 0) {
        sections[count].classList.toggle('active');
        sections[count - 1].classList.toggle('active');
        count--;
    
    }
    else {
        sections[count].classList.toggle('active');
        sections[sections.length - 1].classList.toggle('active');
        count = sections.length - 1;
    }
}

function rightSelect() {
    if (count < sections.length - 1) {
        sections[count].classList.toggle('active');
        sections[count + 1].classList.toggle('active');
        count++;
    }
    else {
        sections[count].classList.toggle('active');
        sections[0].classList.toggle('active');
        count = 0;
    }
}

let count = 0;
const sections = document.querySelectorAll('section');
//let sectionsArr = Array.from(sections);
//sectionsArr = sectionsArr.map(section => section.id);
const leftButtons = document.querySelectorAll('.left-arrow');
leftButtons.forEach(button => button.addEventListener('click', leftSelect));

const rightButtons = document.querySelectorAll('.right-arrow');
rightButtons.forEach(button => button.addEventListener('click', rightSelect));