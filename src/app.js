const text = document.querySelector('textarea')
const btn = document.querySelector('button')

btn.addEventListener('click' , () => {
    text.select();
    let textvalue = text.value;

    navigator.clipboard.writeText(textvalue)
    btn.innerText = 'Copied'
    btn.style.backgroundColor = '#03a9f4'

    setTimeout(() => {
        btn.innerText = 'Copy'
        btn.style.backgroundColor = '#b3e5fc'
    }, 1500);
})