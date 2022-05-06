const card = document.querySelector('.card')
const ratingInput = document.querySelector('.rating-input')
const ratings = document.querySelectorAll('.point')
const submitRating = document.querySelector('.submit')
let ratingPoint = 0;

for (const rating of ratings) {
    rating.addEventListener('click', setPoint = () => {
        ratingPoint = rating.innerText
        activeState()
    })
}

function activeState() {
    for (const rating of ratings) {
        if (rating.innerText == ratingPoint) {
            rating.classList.add('active')
        } else {
            rating.classList.remove('active')
        }
    }
}

submitRating.addEventListener('click', onSubmit);
function onSubmit() {
    ratingInput.remove()
    const x = document.createElement('div')
    const image = document.createElement('img')
    const rating = document.createElement('h5')
    const title = document.createElement('h1')
    const copy = document.createElement('p')
    x.classList.add('text-center')
    rating.classList.add('output-rating', 'my-1')
    image.classList.add('my-1')
    title.classList.add('my-1')
    image.src = './illustration-thank-you.svg'
    rating.innerText = `You selected ${ratingPoint} out of 5`
    title.innerText = 'Thank you!'
    copy.innerText = 'We appreciate you taking the time give a rating. If you ever need more support, don\'t hesitate to get in touch!'

    x.appendChild(image)
    x.appendChild(rating)
    x.appendChild(title)
    x.appendChild(copy)


    card.appendChild(x)
}