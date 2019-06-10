
/************************************************************/
/*First step: making the modal show up when you click button*/
/************************************************************/
var createPostButton = document.getElementById('add-post-button');
var modal = document.getElementById('create-post-modal');
var modalBackground = document.getElementById('modal-backdrop');

createPostButton.addEventListener("click", function(event){
  console.log("create post button was clicked", event.target)

  //what to do once it is clicked
  //remove the hidden class
  modal.classList.remove('hidden');
  modalBackground.classList.remove('hidden');
})

/*************************************************************/
/*Second step: make sure you can cancel out of modal*/
/*************************************************************/
var insertText = document.getElementById('post-text-input');
var attributionText = document.getElementById('post-attribution-input');
var urlInput = document.getElementById('post-url-input');

var cancelButton = document.getElementsByClassName('modal-cancel-button');
cancelButton[0].addEventListener("click", function(event){
  console.log("the cancel button was clicked", event.target);

  //hide the modal if the user cancels there thing
  modal.classList.add('hidden');
  modalBackground.classList.add('hidden');

  //make sure that the input fields are cleared.
  attributionText.value = "";
  insertText.value = "";
  urlInput.value = "";
})

var xButton = document.getElementsByClassName('modal-close-button');
xButton[0].addEventListener("click", function(event){
  console.log("the close button was clicked", event.target);

  //hide the modal if the user cancels there thing
  modal.classList.add('hidden');
  modalBackground.classList.add('hidden');

  //make sure that the input fields are cleared.
  attributionText.value = "";
  insertText.value = "";
  urlInput.value = "";
})



/*************************************************************/
/*step 3: accept button working, place movie in container.****/
/*make sure all required fields have input********************/
/*************************************************************/

var acceptButton = document.getElementsByClassName('modal-accept-button');
acceptButton[0].addEventListener("click", function(event){
  console.log("the accept button was clicked", event.target);

  //BOTH of the fields have to have input
  if(attributionText.value.length == 0 || insertText.value.length == 0){

    //have an error message come up on the screen
    alert("If you have nothing to say then don't try to say something! If you want to say something then sign that s***!");
  }
  else{
    createNewPost(attributionText, insertText, urlInput);
  }

  //make sure that the input fields are cleared.
  attributionText.value = "";
  insertText.value = "";
  urlInput.value = "";

})


//NEW POST IMPLEMENTATION
function createNewPost(attributionText, insertText, urlInput){

  //make sure it's hidden again
  modal.classList.add('hidden');
  modalBackground.classList.add('hidden');

  //CONTAINER IMPLEMENTATION
  var postContainer = document.getElementsByClassName('post-container')[0];

  var newPost = document.createElement('article');
  newPost.classList.add('post');

  postContainer.appendChild(newPost);

  var newIcon = document.createElement('div');
  var film = document.createElement('i');
  newIcon.classList.add('post-icon');
  film.classList.add('fas');
  film.classList.add('fa-film');
  newIcon.appendChild(film);
  newPost.appendChild(newIcon);

  var starHtml = '<div class="stars" data-rating=" ">'+
  '<span class="star">&nbsp;</span>'+
  '<span class="star">&nbsp;</span>'+
  '<span class="star">&nbsp;</span>'+
  '<span class="star">&nbsp;</span>'+
  '<span class="star">&nbsp;</span>'+
  '</div>'

  var stars = newPost.insertAdjacentHTML('beforeend', starHtml)

  //create the content
  var newContent = document.createElement('div');
  newContent.classList.add('post-content');

  //append this as a appendChild
  newPost.appendChild(newContent);

  //CONTENT TEXT IMPLEMENTATION
  var newText = document.createElement('p');
  newText.classList.add('post-text');
  newText.textContent = insertText.value;

  //append this as a appendChild
  newContent.appendChild(newText);


  /*var newURL = document.createElement('p');
  newURL.classList.add('post-url');
  newPost.appendChild(newURL);

  var urlText = document.createElement('a');

  urlText.textContent = newURL.value;
  newURL.appendChild(urlText);

  //append this as a appendChild
  newContent.appendChild(newURL);

*/


  //AUTHOR TEXT IMPLEMENTATION
  var newAuth = document.createElement('p');
  newAuth.classList.add('post-author');
  newPost.appendChild(newAuth);

  var authorText = document.createElement('a');
  //authorText.href = "#";
  authorText.textContent = attributionText.value;
  newAuth.appendChild(authorText);

  newContent.appendChild(newAuth);

}


/********************************************/
/*Rating system*/
/********************************************/
document.addEventListener('DOMContentLoaded', function(){
  addListeners();
  setRating(); //based on value inside the div
});

function addListeners(){
  var stars = document.querySelectorAll('.star');
  [].forEach.call(stars, function(star, index){
    star.addEventListener('click', (function(idx){
      console.log('adding rating on', index);
      document.querySelector('.stars').setAttribute('data-rating',  idx + 1);
      console.log('Rating is now', idx+1);
      setRating();
    }).bind(window,index) );
  });

}

function setRating(){
  var stars = document.querySelectorAll('.star');
  var rating = parseInt( document.querySelector('.stars').getAttribute('data-rating') );
  [].forEach.call(stars, function(star, index){
    if(rating > index){
      star.classList.add('rated');
      console.log('added rated on', index );
    }else{
      star.classList.remove('rated');
      console.log('removed rated on', index );
    }
  });
}


/************************************/
/*Dice roll*/
/************************************/
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
  var genreOutput = document.getElementById('genre-output-placeholder');
  if(number == '1'){
    genreOutput.innerHTML = 'Action & Adventure';
  }
  else if(number == '2'){
    genreOutput.innerHTML = 'Animated & Remakes';
  }
  else if(number == '3'){
    genreOutput.innerHTML = 'Horror';
  }
  else if(number == '4'){
    genreOutput.innerHTML = 'Romance & RomCom';
  }
  else if(number == '5'){
    genreOutput.innerHTML = 'Superhero';
  }
  else if(number == '6'){
    genreOutput.innerHTML = 'Western';
  }
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

/**************************************************************/
/*IMPLEMENT THE SEARCH BAR*/
/**************************************************************/

var searchBar = document.getElementById('navbar-search-input');

searchBar.addEventListener('change', function(event){
	searching = searchBar.value;

	console.log(searching);
	wordSearched(searching);
});

function wordSearched(searching){
  var looking = searching.toUpperCase();
  var mainValue = document.getElementsByClassName('post-container')[0];
  var articles = mainValue.getElementsByClassName('post');

  for(i=0; i < articles.length; i++){
    var text = articles[i].getElementsByClassName('post-text')[0].textContent;
    var url = articles[i].getElementsByClassName('post-url')[0].textContent;
    var author = articles[i].getElementsByClassName('post-author')[0].textContent;

    var textValue = text.toUpperCase();
    var urlValue = url.toUpperCase();
    var authorValue = author.toUpperCase();

    if(text.value.indexOf(looking) > -1 || url.value.indexOf(looking) > -1 || author.value.indexOf(looking) > -1){
    }
    else{
      mainValue.removeChild(articles[i]);
      wordSearched(searching);
    }
  }
}
