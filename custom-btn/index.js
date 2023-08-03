const btn = document.querySelector('.click')

btn.addEventListener('click', () => {
    btn.classList.add('btn-active')
    btn.classList.remove('btn')
})