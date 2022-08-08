function verificar() {
    let text = document.querySelector('#email')
    let senha = document.querySelector('#senha')
    if (text.value.length == 0 || senha.value.length == 0) {
        alert("erro")
    } else {
        alert("okay")
    }
    text.addEventListener('focus', () => {
        text.style.borderColor = "#A45F6A"
    })
    text.addEventListener('blur', () => {
        text.style.borderColor = "#ccc"
    })
    senha.addEventListener('focus', () => {
        senha.style.borderColor = "#A45F6A"
    })
    senha.addEventListener('blur', () => {
        senha.style.borderColor = "#ccc"
    })
}