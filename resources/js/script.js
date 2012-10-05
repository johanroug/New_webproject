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



    	/*var grid = $('.grid');
    	var wrapper = $('.wrapper').width();

		$(grid).each(function () {
			var gridWidth = $(this).width();
			var percentage = (gridWidth / wrapper)*100;
			
			
			console.log(percentage);
	    });*/


	});	

	//****************************************************************************************************************
    //Functions
	//****************************************************************************************************************
	
	
	//Add line break selectors
	function clearContext(){
		$('.grid').addLineBreak();		
	}
	// ADD LINE BREAK
	//Plugin
	(function($) {
		$.fn.addLineBreak = function() {
			var $this = this,
				minLeft = 0;
			if (!this.length == 0){
				console.log('1');
				//clear
				$('.lineBrk').remove();

				minLeft = $this.first().position().left;
				
				$this.each(function() {
					var $elm = $(this),
						position = $elm.position();

					if (position.left > minLeft &&
						$elm.prev().position().left >= position.left
					) {	
						console.log('3');
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