let contentContainer = document.querySelector('#content-container')

function loadContent(idParam, photoParam, descriptionParam, likesParam){
    // let randomContent = contentArray[Math.floor(Math.random() * contentArray.length)]
    let image = contentContainer.querySelector('img')
    let description = contentContainer.querySelectorAll('p')[0]
    let likes = contentContainer.querySelectorAll('p')[1]
    

    // if(image.src === randomContent.photo || description.innerText === randomContent.description || likes.innerText === `${randomContent.likes} Likes`){
    //     loadContent()
    // }else{
    image.src = photoParam
    description.innerText = descriptionParam
    likes.innerText = `${likesParam} Likes`
    contentContainer.className = idParam
    
}



function loadRandom(){
    let randomContent = contentArray[Math.floor(Math.random() * contentArray.length)]
    loadContent(randomContent.id, randomContent.photo, randomContent.description, randomContent.likes)
    
}

loadRandom()

contentContainer.addEventListener('click', function(e){
    if (e.target.id === "showRandom"){
        loadRandom()
    }else if(e.target.id === "like"){
        let div = e.target.closest('div')
        let likes = div.querySelectorAll('p')[1]
        let newLikesNum = parseInt(likes.innerText) + 1
        likes.innerText = `${newLikesNum} Likes`
        contentArray.find(x => x.id == div.className).likes++
        
        
    
        console.log(contentArray)
    }
})

let addForm = document.querySelector('#addForm')
addForm.addEventListener('submit', function(e){
    e.preventDefault()
    let photo = e.target[0].value
    let description = e.target[1].value
    let likes
    if(e.target[2].checked){
        
        likes = 10
    }else{
        likes = 0
    }
    // let likes = 10
    let newContent = {id: 7, photo, description, likes}
    contentArray.push(newContent)
    loadContent(newContent.id, newContent.photo, newContent.description, newContent.likes)
    console.log(contentArray)


})

let editForm = document.querySelector('#editForm')

editForm.addEventListener('submit', e => {
    e.preventDefault()
    let photo = e.target[0].value
    let description = e.target[1].value
    let div = document.querySelector('#content-container')
    let currentElement = contentArray.find(x => x.id == div.className)

    currentElement.photo = photo
    currentElement.description = description

    loadContent(currentElement.id, currentElement.photo, currentElement.description, currentElement.likes)

    console.log(currentElement)





})