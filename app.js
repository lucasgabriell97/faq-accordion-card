const question = document.querySelectorAll('.question')

for (let elem of question) {
    elem.addEventListener('click', () => {  
        if (elem.nextElementSibling.classList.contains('active')) {
            elem.nextElementSibling.classList.toggle('active')
            elem.firstElementChild.classList.toggle('question-bold')
            elem.lastElementChild.classList.toggle('icon-rotate')
        } else {
            question.forEach(question => {
                question.nextElementSibling.classList.remove('active')
                question.firstElementChild.classList.remove('question-bold')
                question.lastElementChild.classList.remove('icon-rotate')
            })
            elem.nextElementSibling.classList.add('active')
            elem.firstElementChild.classList.add('question-bold')
            elem.lastElementChild.classList.add('icon-rotate')
            
        } 
    }
)}