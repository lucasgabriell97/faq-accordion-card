let question = document.querySelectorAll('.question')
let questionBold = document.querySelectorAll('.question h3')
let addAnswer = document.querySelectorAll('.answer')

for (let elem of question) {
    elem.addEventListener('click', function() {  
        if (elem.classList.contains('active')) {
            elem.nextElementSibling.classList.remove('active')
            elem.firstElementChild.classList.remove('question-bold')
            elem.lastElementChild.classList.remove('icon-rotate')
        } else {
            elem.nextElementSibling.classList.toggle('active')
            elem.firstElementChild.classList.toggle('question-bold')
            elem.lastElementChild.classList.toggle('icon-rotate')
        } 
    }
)}