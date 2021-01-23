const refs = {
    header: document.querySelector('.header'), 
}

refs.header.addEventListener('click', evt => {
    if (evt.target.tagName === 'A') {
        evt.preventDefault();
    }
})