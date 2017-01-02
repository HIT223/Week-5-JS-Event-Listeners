/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*/

/*
* TASK 1: Toggle "large_font" class on #changeable when #toggle_button clicked
*
* addEventListener
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*
* preventDefault
* https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/

/* Wrap code in self-calling function to keep global scope clean*/
(function(){
	var button = document.querySelector('#toggle_button');

	var paragraph = document.querySelector('#changeable');

	/*
	* Check for addEventListner function attached to the Element class
	*/
	if(Element.prototype.addEventListener){
		addToggleFunctionality();
	} else {
		removeButton();
	}

	/*
	* addEventListener not supported
	* remove the toggle button
	*/
	function removeButton(){
		button.remove();
	}

	/*
	* Add event listener to button click
	*/
	function addToggleFunctionality(){
		/* Our event listener */
		var toggleFontSize = function(event){
			event.preventDefault();
			paragraph.classList.toggle('large_font');
		}
		/* Attach to the click event occuring on our button*/
		button.addEventListener('click', toggleFontSize);
	}

})();