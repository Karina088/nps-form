const form = document.querySelector('.nps-form')
const formBtn = form.querySelector('.nps-form__button')
const programGradeInput = document.querySelectorAll('.nps_program')
const managerGradeInput = document.querySelectorAll('.nps_manager')
const engineerGradeInput = document.querySelectorAll('.nps_engineer')
const recommendGradeInput = document.querySelectorAll('.nps_recommend')

// grade
const programEl = document.querySelector('._program')
const managerEl = document.querySelector('._manager')
const engineerEl = document.querySelector('._engineer')
const recommendEl = document.querySelector('._recommend')

// modal
const modal = document.querySelector('.nps-modal__basic')
const btnEl = document.querySelector('.nps-modal__btn')
const modalClose = document.querySelector('.nps-modal__img')


form.addEventListener('submit', function (event) {
    // event.preventDefault()

    let errorRadio = document.querySelectorAll('.errorRadio')

    for (let i = 0; i < errorRadio.length; i++) {
        errorRadio[i].classList.remove('errorRadio')
    }

    if (!Array.from(programGradeInput).some(i => i.checked)) {
        programEl.classList.add('errorRadio')
    }

    if (!Array.from(managerGradeInput).some(i => i.checked)) {
        managerEl.classList.add('errorRadio')
    }

    if (!Array.from(engineerGradeInput).some(i => i.checked)) {
        engineerEl.classList.add('errorRadio')
    }

    if (!Array.from(recommendGradeInput).some(i => i.checked)) {
        recommendEl.classList.add('errorRadio')
    }

    // if (document.querySelectorAll('.errorRadio').length == 0) {
    //     modal.style.display = 'block'
    // }
    // else {
    //     event.preventDefault()
    // }

    // if (document.querySelectorAll('.errorRadio').length == 0) {
    //     setTimeout(function () {
    //         modal.style.display = 'block'
    //         location.reload()
    //     }, 3000)
    //     return false
    // }

    if (document.querySelectorAll('.errorRadio').length == 0) {
    } else {
        event.preventDefault()
    }

})

programEl.querySelectorAll('label')
    .forEach(el => {
        if (el.getAttribute('for') !== 'nps-disabled') {
            el.addEventListener('click',
                () => {
                    programEl.classList.remove('errorRadio')
                })
        }
    })


managerEl.querySelectorAll('label')
    .forEach(el => {
        if (el.getAttribute('for') !== 'nps-disabled') {
            el.addEventListener('click',
                () => {
                    managerEl.classList.remove('errorRadio')
                })
        }
    })


engineerEl.querySelectorAll('label')
    .forEach(el => {
        if (el.getAttribute('for') !== 'nps-disabled') {
            el.addEventListener('click',
                () => {
                    engineerEl.classList.remove('errorRadio')
                })
        }
    })


recommendEl.querySelectorAll('label')
    .forEach(el => {
        if (el.getAttribute('for') !== 'nps-disabled') {
            el.addEventListener('click',
                () => {
                    recommendEl.classList.remove('errorRadio')
                })
        }
    })


btnEl.addEventListener('click', () => {
    modal.style.display = "none"
})

modalClose.addEventListener('click', () => {
    modal.style.display = "none"
})
