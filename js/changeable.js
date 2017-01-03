/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*/

/*
* TASK 2: switch to classes and a flexible event handler
*/

/* Wrap code in self-calling function to keep global scope clean*/
(function(){

	var paragraphs = document.querySelectorAll('.changeable');

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
		/* Loop through our paragraphs */
		for (var i = 0; i < paragraphs.length; i++) {
			/* We'll need this for insertBefore() */
			var row = paragraphs[i].parentElement;

			/* create a container div so we can isolate each p and button pair */
			var container = document.createElement('div');
			container.classList.add('changeable__container');

			/* insert our container right before the paragraph it's replacing */
			row.insertBefore(container, paragraphs[i]);
			/* move the paragraph into the container */
			container.appendChild(paragraphs[i]);

			/*
			* set height of containers to 0px so they default to closed
			*/
			container.style.height = '0px';
			
			/* create the button */
			var button = createButton("Read more");
			button.addEventListener('click', clickListener);
			/* add our button to the container */
			row.insertBefore(button, container);
		}
	}

	function clickListener(event){
		/*
		* Becuase we're using a single event listener
		* we need to find out which button was clicked
		* 
		* click event
		* https://developer.mozilla.org/en/docs/Web/Events/click
		*/
		event.preventDefault();

		button = event.target;

		container = button.nextSibling;

		paragraph = container.querySelector('.changeable');
		
		/*
		* check the current height of container
		*
		* scrollHeight only calcs height + padding + border (not margin)
		* https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
		*/

		if(container.style.height !== '0px'){
			/* container is open, close it */
			container.style.height = '0px';
		} else {
			/* container is closed, open it */
			var height = paragraph.scrollHeight
			container.style.height = height + 'px';
		}

	}

	function createButton(label){

		/* create the button */
		var button = document.createElement('button');
		/*
		* Set it's label
		*/
		button.textContent = label;

		/* Return it so we can insert */
		return button;
	}

})();