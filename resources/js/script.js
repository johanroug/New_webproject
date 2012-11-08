(function($){ 

	//Documen ready
	$(function(){ 
		
	});

	//Window resize
	$(window).resize(function () {
		cleargrid();
	});
  
	//Window load
	$(window).load(function (){
    	cleargrid();
    	inputFocus();
	});	

	//****************************************************************************************************************
    //Functions
	//****************************************************************************************************************
	
	//Clear grid
	function cleargrid(){
		$('.cleargrid').remove();
		var section = $('.section');
		$(section).each(function() {
		    var rowPixels = 0;
		    $(this).children('.grid').each(function () {

		        var gridWidth = $(this).width();
		        rowPixels += gridWidth;

		        if (rowPixels >= $(section).width() - 1) { //I use - 1 because new and old browsers use different dec numbers

		            if($(this).parent().is('ul')){
						$(this).after('<li class="clear cleargrid"></li>');
					}else{
						$(this).after('<div class="clear cleargrid"></div>');
					}	
		            rowPixels = 0;
		        }
		    });
		}); 		
	}

	//Input focus
	function inputFocus(){
		 $('.input').on('focus', function() {
	        // On first focus, check to see if we have the default text saved
	        // If not, save current value to data()
	        if (!$(this).data('defaultText')) $(this).data('defaultText', $(this).val());

	        // check to see if the input currently equals the default before clearing it
	        if ($(this).val()==$(this).data('defaultText')) $(this).val('');
	    });
	    $('.input').on('blur', function() {
	        // on blur, if there is no value, set the defaultText
	        if ($(this).val()=='') $(this).val($(this).data('defaultText')); 
	    });
	}
	
	
})( jQuery );