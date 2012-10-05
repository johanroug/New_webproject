(function($){ 

	//Documen ready
	$(function(){ 
		
	});

	//Window resize
	$(window).resize(function () {
		clearContext(); //add clear class after elements
		cleargrid();
	});
  
	//Window load
	$(window).load(function (){
    	clearContext(); //add clear class after elements
    	cleargrid();
	});	

	//****************************************************************************************************************
    //Functions
	//****************************************************************************************************************
	
	//Clear grid
	function cleargrid(){
		var percentage = 0;
	    var total = 0;
	    $('.cleargrid').remove();
	    $(".grid").each(function () {
	        percentage =($(this).width() / $(".wrapper").width()) * 100;
	        total = total + percentage;	        
	        if (total <= 101 && total > 90) {
	            if($(this).parent('ul')){
					$(this).after('<li class="clear cleargrid"></li>');
				}else{
					$(this).after('<div class="clear cleargrid"></div>');
				}		            
	            total = 0;
	        }
	    });	
	}
	//Add line break selectors
	function clearContext(){
		$('.test').addLineBreak();		
	}
	// ADD LINE BREAK
	//Plugin
	(function($) {
		$.fn.addLineBreak = function() {
			var $this = this,
				minLeft = 0;
			if (!this.length == 0){
				//clear
				$('.lineBrk').remove();

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