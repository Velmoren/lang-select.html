const langSelect = () => {
    const select = document.querySelector('.lang-select')
    const listItems = select.querySelectorAll('li')

    select.addEventListener('click', () => {
        select.classList.toggle('open')
    })

    listItems.forEach((item) => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang
            
            listItems.forEach((i) => {
                i.classList.remove('active')

                if (i.dataset.lang === lang) {
                    i.classList.add('active')
                }
            })
        })
    })
}

langSelect()