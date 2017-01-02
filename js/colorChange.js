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
	var paragraph = document.querySelector('#changeable');

	/*
	* Check for addEventListner function attached to the Element class
	*/
	if(Element.prototype.addEventListener){
		addToggleFunctionality();
	}

	/*
	* Add event listener to button click
	*/
	function addToggleFunctionality(){
		/* create the button */
		var button = document.createElement('button');
		/*
		* Set it's label
		*
		* textContent is the same as innerHTML only the value isn't parsed into html
		*/
		button.textContent = "Toggle font colour";

		/* Attach to the click event occuring on our button*/
		button.addEventListener('click', function(event){
			event.preventDefault();
			paragraph.classList.toggle('color_change');
		});

		/*
		* insert our button into the page, appending to the same element that our paragraph is in 
		*
		* parentElement
		* https://developer.mozilla.org/en/docs/Web/API/Node/parentElement
		**/
		var parentRow = paragraph.parentElement;
		parentRow.appendChild(button);
	}

})();