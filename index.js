var modal = document.getElementById('create-twit-modal');

var background = document.getElementById('modal-backdrop');

var btn = document.getElementById('create-twit-button');

var close = document.getElementsByClassName('modal-close-button')[0];

var cancel = document.getElementsByClassName('modal-cancel-button');

var contribute = document.getElementsByClassName('modal-accept-button');

var input = document.getElementsByClassName('post-input-element');

var post = document.getElementsByClassName('post')[0];

function handleNewWordsEntered(text, author) {
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
		allWords = author.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
			.toLowerCase().split(' ');
  currentWord = 0;
}

function checkFields(text, author) {
  var word = allWords[currentWord];
  if(!text || !author){
    alert("If you want to participate you have to follow the rulez. You must have something to say and sign that stuff")
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

btn.addEventListener('click', function(event) {
  modal.style.display = "block";
  background.style.display = "none";
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
