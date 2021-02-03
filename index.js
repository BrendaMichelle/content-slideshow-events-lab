// Write your code here

// Write your code here

const img = document.querySelector('#content-container img')
const description = document.querySelector('#content-container :nth-child(2)')
const likes = document.querySelector('#content-container :nth-child(3)')
const likeButton = document.querySelector('#content-container :nth-child(4)')
const randomButton = document.querySelector('#content-container :nth-child(5)')


// Deliverable 1
let randomIndex = _ => {
  let randIndex = Math.floor(Math.random() * contentArray.length)
  while (randIndex === document.querySelector("#content-container").dataset.id -1) {
    randIndex = randomIndex()
  }
  return randIndex
}

let showImage = (index) => {
  img.parentElement.dataset.id = contentArray[index].id
  img.src = contentArray[index].photo
  img.alt = contentArray[index].description 
  description.textContent = contentArray[index].description 
  likes.textContent = contentArray[index].likes + ' Likes'
}

const randomImage = _ => {
  showImage(randomIndex())
}

window.addEventListener('load', randomImage)

// Deliverable 2
randomButton.addEventListener('click', randomImage)

// Deliverable 3

const addLike = _ => {
  let containerId = likes.parentElement.dataset.id
  let newLikes = ++contentArray[containerId-1].likes
  likes.textContent = `${newLikes} Likes`
}

likeButton.addEventListener('click', addLike)

// Deliverable 4
const addForm = document.querySelector("form:last-of-type")

const addContent = event => {
  event.preventDefault()
  let newImage = {
    id: contentArray[contentArray.length-1].id + 1,
    photo: event.target[0].value,
    description: event.target[1].value,
    likes: event.target[2].checked ? 10 : 0
  }
  contentArray.push(newImage)
  showImage(newImage.id - 1)
  event.target.reset()
}

addForm.addEventListener('submit', addContent)


// Deliverable 5
const editForm = document.querySelector("form:first-of-type")

const editContent = event => {
  event.preventDefault()
  currentIndex = event.target.parentElement.querySelector("#content-container").dataset.id - 1
  currentImage = contentArray[currentIndex]
  currentImage.photo = event.target[0].value || currentImage.photo
  currentImage.description = event.target[1].value || currentImage.description
  
  showImage(currentIndex)
  event.target.reset()
}
  
  editForm.addEventListener('submit', editContent)


