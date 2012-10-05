(function($){ 

	//Documen ready
	$(function(){ 
		
	});

	//Window resize
	$(window).resize(function () {
		clearContext(); //add clear class after elements
	});
  
	//Window load
	$(window).load(function (){
    	clearContext(); //add clear class after elements
	});	

	//****************************************************************************************************************
    //Functions
	//****************************************************************************************************************
	
	
	//Add line break selectors
	function clearContext(){
		$('.spotCon').addLineBreak();		
	}
	// ADD LINE BREAK
	//Plugin
	(function($) {
		$.fn.addLineBreak = function() {
			var $this = this,
				minLeft = 0;
			if (!this.length == 0){
				//clear
				$('lineBrk').remove();

				minLeft = $this.first().position().left;
				
				$this.each(function() {
					var $elm = $(this),
						position = $elm.position();

					if (position.left > minLeft &&
						$elm.prev().position().left >= position.left
					) {	
						if($elm.parent('ul')){
							$elm.before('<li class="clear lineBrk"></li>');
						}else{
							$elm.before('<div class="clear lineBrk"></div>');
						}
					}
				});

				return this;
			}
		}
	})(jQuery);
	
})( jQuery );