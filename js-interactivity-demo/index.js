let counter = document.querySelector('#counter')

let minusBtn = document.querySelector('#minus-btn')

let resetBtn = document.querySelector('#reset-btn')

let plusBtn = document.querySelector('#plus-btn')

const countDown = evt =>{
    let currentCount = parseInt(counter.textContent)
    currentCount--
    counter.textContent = currentCount
}

const countUp = evt =>{
    let currentCount = parseInt(counter.textContent)
    currentCount++
    counter.textContent = currentCount
}

const resetCount = evt => {
    counter.textContent = 0
}



minusBtn.addEventListener('click', countDown)

resetBtn.addEventListener('click', resetCount)

plusBtn.addEventListener('click', countUp)

//=====================================================
//============== Style Buttons========================


const themeButtons = document.querySelectorAll('.theme-buttons')


const changeTheme = evt =>{
    console.log(evt.target)
    
    
    let theme = evt.target.textContent
    console.log(theme)
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    const buttons = document.querySelector('button')

    body.className = theme
    main.className = theme

    for (i = 0; i < buttons.length; i++)
    buttons[i].className = theme
}


for (i = 0; i < themeButtons.length; i++){
    themeButtons[i].addEventListener('click', changeTheme)
}