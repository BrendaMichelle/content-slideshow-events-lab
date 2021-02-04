// Write your code here

const contentContainer = document.getElementById( "content-container" );
const editForm = document.getElementsByTagName( "form" )[ 0 ];
const addForm = document.getElementsByTagName( "form" )[ 1 ];
const likeButton = contentContainer.getElementsByTagName( "button" )[ 0 ];
const randomImageButton = contentContainer.getElementsByTagName( "button" )[ 1 ];

let currentImage = { id: null, photo: null, description: null, likes: null };

function renderImage() {
    contentContainer.querySelector( "img" ).alt = currentImage.description;
    contentContainer.querySelector( "img" ).src = currentImage.photo;
    contentContainer.getElementsByTagName( "p" )[ 0 ].textContent = currentImage.description;
    contentContainer.getElementsByTagName( "p" )[ 1 ].textContent = `${currentImage.likes} Likes`;
}

function loadRandomImage() {
    let possibleImages = contentArray.filter( image => { return image.id !== currentImage.id } );
    currentImage = possibleImages[ Math.floor( Math.random() * possibleImages.length ) ];
    renderImage();
}

function like() {
    currentImage.likes++;
    renderImage();
}

function editImage( submission ) {
    submission.preventDefault();
    currentImage.photo = editForm.getElementsByTagName("input")[ 0 ].value;
    currentImage.description = editForm.getElementsByTagName("input")[ 1 ].value;
    renderImage();
}

function addImage( submission ) {
    submission.preventDefault();
    let id = contentArray.length + 1;
    let photo = addForm.getElementsByTagName("input")[ 0 ].value;
    let description = addForm.getElementsByTagName("input")[ 1 ].value;
    let likes = addForm.getElementsByTagName("input")[ 2 ].checked ? 10 : 0;
    currentImage = { id, photo, description, likes };
    contentArray.push( currentImage );
    renderImage();
}

document.addEventListener( "DOMContentLoaded", function() {
    loadRandomImage();
    likeButton.addEventListener( "click", like );
    randomImageButton.addEventListener( "click", loadRandomImage );
    editForm.addEventListener( "submit", editImage );
    addForm.addEventListener( "submit", addImage );
} );
