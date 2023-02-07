$(function() {

	$('#reg-btn-0').prop('disabled', true);
	$('#reg-btn-1').prop('disabled', true);
	$('#reg-btn-2').prop('disabled', true);
});


$(function() {

	$('.confirm').blur(function() { 

		var form = $(this).closest('.reg-form');
		 var password = form.find('.password');
		 var error = form.find('.err');

		if($(this).val() !=="" && password.val() !== $(this).val()) {
			error.addClass('show');
		} else {
			error.removeClass('show');
		}
}); 

	$('.password').blur(function() { 

		var form = $(this).closest('.reg-form');
		 var errorLength = form.find('.err-length');

		 if($(this).val() !== '' && $(this).val().length < 6) {
	      	errorLength.addClass('show');
		} else {
			errorLength.removeClass('show');
		}
}); 

	$('.js-inn').blur(function() { 

		var form = $(this).closest('.reg-form');
		var regexp = /^[0-9]{10,12}$/; 
		var errorInn = form.find('.err-inn');

		 if($(this).val() !== '' && !regexp.test($(this).val())) {
	      	errorInn.addClass('show');
		} else {
			errorInn.removeClass('show');
		}
}); 

	$('.js-email').blur(function() { 

		var form = $(this).closest('.reg-form');
		var regexp = /.@./;
		var errorMail = form.find('.err-mail');

		 if($(this).val() !== '' && !regexp.test($(this).val())) {
	      	errorMail.addClass('show');
		} else {
			errorMail.removeClass('show');
		}
}); 

	$(function() {
		$('.reg-btn').click(function () {

			submitError = $('.js-success-error');
			submitError.toggleClass("success-error");
			submitError.toggleClass("success");

			
		 var form = $(this).closest('.reg-form');
	     var field = [];
		 var password = form.find('.password');
		 var error = form.find('.err');
		 var errorLength = form.find('.err-length');
		 var errorEmpty = form.find('.err-rfield');
		 var confirm = form.find('.confirm');

		if(password.val() !== confirm.val() && confirm.val() !== '') {
			error.addClass('show');
		} else {
			error.removeClass('show');
		}

		 if(password.val() !== '' && password.val().length < 6) {
	      	errorLength.addClass('show');
		} else {
			errorLength.removeClass('show');
		}



	    form.find('input[data-validate]').each(function () {
	      field.push('input[data-validate]');
	      var value = $(this).val();
	      var password = form.find('.password');
	 
	      for(var i=0;i<field.length;i++) {
	        if( !value ) {
	          $(this).addClass('rfield');
	        }
	         else {
	         	$(this).removeClass('rfield');
	         }
	      }
	    });
  });

});

});


$(function() {

	$('input[data-validate]').blur(function() { 

		if($(this).val() !== "") {
			$(this).removeClass('rfield');
		} 
}); 
});


$(function() {

	$("#as-dealer").click(function(){
 		if ($(this).is(':checked')) {
 			$('#for-dealer').removeClass('hide');
			$('#for-dealer').show();

			$('.js-address').show();
			$('.js-region-select-wr').hide(); 
			$('.js-address').removeClass('.hide');

        	return;

			 }

			else
			{	$('.js-region-select-wr').show(); 
			    $('.js-address').hide();   

			    $('#for-dealer').hide();
			}
  });

			$("#agreement-0").click(function(){

 		if ($(this).is(':checked')) {

 			$('#reg-btn-0').prop('disabled', false);
 			$('#reg-btn-0').addClass('enabled');
        	return;
			 }
			else
			{
				$('#reg-btn-0').prop('disabled', true);
			    $('#reg-btn-0').removeClass('enabled');
			}
	});

			$("#agreement-1").click(function(){
			
 		if ($(this).is(':checked')) {

 			$('#reg-btn-1').prop('disabled', false);
 			$('#reg-btn-1').addClass('enabled');
        	return;
			 }
			else
			{
				$('#reg-btn-1').prop('disabled', true);
			      $('#reg-btn-1').removeClass('enabled');
			}
	});

			$("#agreement-2").click(function(){

 		if ($(this).is(':checked')) {
 			$('#reg-btn-2').prop('disabled', false);
 			$('#reg-btn-2').addClass('enabled');

        	return;
			 }
			else
					$('#reg-btn-0').prop('disabled', true);
			      $('#reg-btn-2').removeClass('enabled');

	});
}); 


$(function() {
	$('.reg-form').submit(function () {

		return false;


	});
});


