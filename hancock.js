$(document).ready(function() {

	//start with just financial showing
	$('.emotional').hide();
	$('.physical').hide();

	$('.test-bank').hide();
	// $('.dialog-body').hide();

	$('#financial').click(function() {
		//alert('financial clicked');
		$('#financial').addClass('active');
		$('#emotional').removeClass('active');		
		$('#physical').removeClass('active');

		$('.emotional').hide();
		$('.physical').hide();
		$('.financial').show();


	})

	$('#emotional').click(function() {
		// alert('emotional clicked');
		$('#emotional').addClass('active');
		$('#physical').removeClass('active');
		$('#financial').removeClass('active');

		$('.financial').hide();
		$('.physical').hide();
		$('.emotional').show();

	})

	$('#physical').click(function() {
		//alert('physical clicked');
		$('#physical').addClass('active');
		$('#financial').removeClass('active');
		$('#emotional').removeClass('active');

		$('.emotional').hide();
		$('.financial').hide();
		$('.physical').show();

	})

	//search bank institution click produces test bank link
	$('.go').click(function() {
		// $('.banks').append('<button>test bank</button>');
		// $('.banks > button').attr('id', 'test-bank')
		// 					.attr('class', 'btn btn-default')
		// 					.attr('type', 'button');

		$('.test-bank').show();
	})

	//clicking on test bank link
	$('.test-bank').click(function() {
		console.log('test bank clicked');
		var prompt_info = bootbox.dialog({
						  message: "Type of account:",
						  title: "Your financial information",
						  buttons: {
						    main: {
						      label: "Save Data",
						      className: "btn-primary",
						      
						    }
						  }
						});
		var account_type = '<select class="form-control account-type"><option value="checking">checking</option><option value="credit">credit</option><option value="investment">investment</option></select>';

		$('.bootbox-body').append(account_type);

		var info = '<div class="input-group info">';
		info += '<input type="text" class="form-control account-num" placeholder="Account Number"><br><br>';
		info += '<input type="text" class="form-control user" placeholder="Username"><br><br>';
		info += '<input type="text" class="form-control pass" placeholder="Password"></div>';
		$('.bootbox-body').append(info);
	})






})