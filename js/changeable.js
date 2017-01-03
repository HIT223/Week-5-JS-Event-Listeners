/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*/

/*
* TASK 3: Toggle heights instead of colours
*/

/* Wrap code in self-calling function to keep global scope clean*/
(function(){


	/*
	* Check for addEventListner function attached to the Element class
	*/
	if(Element.prototype.addEventListener){
		var items = document.querySelectorAll('.changeable');
		addToggleFunctionality(items);
	}

	/*
	* Add event listener to button click
	*/
	function addToggleFunctionality(items){
		/* Loop through our paragraphs */
		for (var i = 0; i < items.length; i++) {
			/* We'll need this for insertBefore() */
			var parent = items[i].parentElement;

			/* create a container div so we can animate to a specific height */
			var container = document.createElement('div');
			container.classList.add('changeable__container');

			/* insert our container right before the item it's replacing */
			parent.insertBefore(container, items[i]);
			/* move the item into the container */
			container.appendChild(items[i]);

			/*
			* set height of containers to 0px so they default to closed
			*/
			container.style.height = '0px';
			
			/* create the button */
			var button = createButton("Read more");
			button.addEventListener('click', clickListener);
			/* add our button to the container */
			parent.insertBefore(button, container);
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