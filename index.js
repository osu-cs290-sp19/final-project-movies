
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


/***************************************************/
/********implement state button*********************/
/***************************************************/

var map = document.getElementById("data:image/jpeg;base64,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");

map.addEventListener("click", function(event){
  console.log("the map was clicked", event.target);
}); 
