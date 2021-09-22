

const openCloseModal = () => {
    const div = document.getElementById('modal-ficha')
    div.className == '' ? div.className = 'invisivel-mobile' : div.className = ''
    document.getElementById('ficha-campo').stopPropagation()
}