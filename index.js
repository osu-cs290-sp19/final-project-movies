
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
    alert("You have an empty field.  Please try again!");
  }
  else{
    createNewPost(attributionText, insertText, urlInput);
  }

  //make sure that the input fields are cleared.
  insertAuthor.value = "";
  insertText.value = "";
  urlInput.value = "";

})


//NEW POST IMPLEMENTATION
function createNewPost(attributionText, insertText, urlInput){

  //make sure it's hidden again
  modal.classList.add('hidden');
  modalBackground.classList.add('hidden');

  //CONTAINER IMPLEMENTATION
  var postContainer = document.getElementsByClassName('Western-page')[0];

  //create article and twit
  var newPost = document.createElement('article');
  newPost.classList.add('post');
  debugger;
  postContainer.appendChild(newPost);

  //BULLHORN ICON IMPLEMENTATION
  var newIcon = document.createElement('div');
  var film = document.createElement('i');
  newIcon.classList.add('post-icon');
  film.classList.add('fas fa-film');

  newIcon.appendChild(film);
  newPost.appendChild(newIcon);

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

  var newURL = document.createElement('p');
  newURL.classList.add('post-url');
  newPost.appendChild(newURL);

  var urlText = document.createElement('a');
  urlText.textContent = urlInput.value
  newURL = appendChild(urlText);

  //append this as a appendChild
  newContent.appendChild(newURL);

  //AUTHOR TEXT IMPLEMENTATION
  var newAuth = document.createElement('p');
  newAuth.classList.add('post-author');
  newPost.appendChild(newAuth);

  var authorText = document.createElement('a');
  //authorText.href = "#";
  authorText.textContent = attributionText.value;
  newAuth.appendChild(authorText);

  newContent.appendChild('newAuth');

}

//initial setup
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

/*var modal = document.getElementById('create-twit-modal');

var background = document.getElementById('modal-backdrop');

var createModal = document.getElementById('create-post-modal');

var btn = document.getElementById('add-post-button');

var close = document.getElementsByClassName('modal-close-button')[0];

var cancel = document.getElementsByClassName('modal-cancel-button');

var contribute = document.getElementsByClassName('modal-accept-button');

var input = document.getElementsByClassName('post-input-element');

var post = document.getElementsByClassName('post')[0];
*/



/*function handleNewWordsEntered(text, author) {
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
		allWords = author.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
			.toLowerCase().split(' ');
  currentWord = 0;
}

function checkFields(text, author) {
  var word = allWords[currentWord];
  if(!text || !author){
    alert("If you want to participate you have to follow the rulez. You must have something to say and sign that s***")
      document.getElementById('post-text-input').value = "";
      document.getElementById('post-attribution-input').value = "";
  }
  else{
    createPost(text, author, url);
  }
}

function wordSearched(searching){
  looking = searching.toUpperCase();
  var mainValue = document.getElementsByClassName('post-container')[0];
  var articles = mainValue.getElementsByClassName('post');

  for(i=0; i < articles.length; i++){
    var text = articles[i].getElementsByClassName('post-text')[0].textContent;
    var url = articles[i].getElementsByClassName('post-url')[0].textContent;
    var author = articles[i].getElementsByClassName('post-author')[0].textContent;

    textValue = text.toUpperCase();
    urlValue = url.toUpperCase();
    authorValue = author.toUpperCase();

    if(text.Value.indexOf(looking) > -1 || url.Value.indexOf(looking) > -1 || author.Value.indexOf(looking) > -1){
    }
    else{
      mainValue.removeChild(articles[i]);
      wordSearched(searching);
    }
  }
}

function createTwit() {
  var createArticle = document.createElement("article");
  createArticle.setAttribute('class', 'post');

  var newDivOne = document.createElement("div");
  createArticle.appendChild(newDivOne);
  newDivOne.setAttribute('class', 'post-icon fas fa-film');

  var newDivTwo = document.createElement("div");
  createArticle.appendChild(newDivTwo);
  newDivTwo.setAttribute('class', 'post-content');

  var newPOne = document.createElement("p");
  newDivTwo.appendChild(newPOne);
  newPOne.setAttribute('class', post-text);
  newPOne.textContent = text;

  var newPTwo = document.createElement("p");
  newDivTwo.appendChild(newPTwo);
  newPTwo.setAttribute('class', 'post-url');
  newPTwo.textContent = url;

  var newPThree = document.createElement("p");
  newDivTwo.appendChild(newPThree);
  newPThree.setAttribute('class', 'twit-author');
  newPThree.textContent = author;

  var main = document.getElementsByClassName('post-container');
  main[0].appendChild(createArticle);
});



close.addEventListener('click', function(event) {
  modal.style.display = "none";
  background.style.display = "none";

  document.getElementById('post-text-input').value = "";
  document.getElementById('post-url-input').value = "";
  document.getElementById('twit-attribution-input').value = "";
});

cancel[0].addEventListener('click', function(event) {
  modal.style.display = "none";
  background.style.display = "none";

  document.getElementById('post-text-input').value = "";
  document.getElementById('post-url-input').value = "";
  document.getElementById('twit-attribution-input').value = "";
});

accept[0].addEventListener('click', function(event) {
  event.preventDefault();

  document.getElementById('post-text-input').value;
  document.getElementById('post-url-input').value;
  document.getElementById('twit-attribution-input').value;

  handleNewWordsEntered(text, author, url);
  checkFields(text, author, url);

  modal.style.display = "none";
  background.style.display = "none";

  document.getElementById('post-text-input').value = "";
  document.getElementById('post-url-input').value = "";
  document.getElementById('twit-attribution-input').value = "";
});

searchBar.addEventListener('change', function(event){
	searching = searchBar.value;

	console.log(searching);
	wordSearched(searching);
});
*/
