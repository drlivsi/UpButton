	(function() {        
		if ( window.addEventListener) {
			window.addEventListener("scroll", onScrollEvent, false); 
		} else if (window.attachEvent) {
			window.attachEvent("scroll", onScrollEvent);
		}
			
		var upbutton = null;

		function onScrollEvent(e) {
			var scrollTop  = null;
			if (document.body.scrollTop) {
				scrollTop = document.body.scrollTop;
			}
			else if (document.documentElement.scrollTop) {
				scrollTop = document.documentElement.scrollTop;
			}

			if(scrollTop) {
				scrollTop > 150 ? showButton() : hideButton();
			}
			
			if (!e) {
				e = window.event;
			}
			
			if (e.stopPropagation) {
				e.stopPropagation();
			} 
			else if (e.cancelBubble) {
				e.cancelBubble = false;
			}
		}
		
		function scrollTopClick() {
			if (document.body.scrollTop) {
			    document.body.scrollTop = 0;
			    hideButton();
			}
			else if (document.documentElement.scrollTop) {
			    document.documentElement.scrollTop = 0;
			    hideButton();
			}				
		}

		function createButton() {                    
			var btn = document.createElement("div");
			btn.id = "UpButton";
			
			if ( btn.addEventListener) {
				btn.addEventListener("click", scrollTopClick, false); 
			} else if (btn.attachEvent) {
				btn.attachEvent("click", scrollTopClick);
			}
			
			return btn;                   
		}

		function showButton() {
			if (!upbutton) {
				upbutton = createButton();
				document.body.appendChild(upbutton);
			}

			upbutton.style.visibility = "visible";
		}

		function hideButton() {
			if (upbutton) {
				upbutton.style.visibility = "hidden";
			}
		}
	})();