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

function checkFields() {

}

function wordSearched(){


}

function createTwit() {

});

close.addEventListener('click', function(event) {

});

cancel[0].addEventListener('click', function(event) {

});

accept[0].addEventListener('click', function(event) {

});
© 2019 GitHub, Inc.
