function makeToken() {
	var cc = $("#cc").val(),
	csc = $("#cvc").val(),
	date = $.payment.cardExpiryVal($("#date").val()),
	card_exp_month = date.month,
	card_exp_year = date.year,
	card_owner_name = $("#name").val();
	
	cc = cc.replace(/\s+/g, '');

	paymentspring.generateToken(  "test_0b3ec0303553d0096dacbf966258a11689361b1eea80d618d13c11a7a9",
	                                cc,
	                                csc,
	                                card_owner_name,
	                                card_exp_month,
	                                card_exp_year,
	                                function (resp) {
	                    if (resp.errors) {
				card_errors_ul = $("#card_errors")
							card_errors_ul.empty();
							$.each(resp.errors, function(index, e) {
								$(card_errors_ul).append('<li>'+e.message+'</li>')
							})

	                    } else {
	                        $("#token").val(resp.id);
	                        $("#form").submit();
	                    }
	                });
}

$('#cc').payment('formatCardNumber');
$('#date').payment('formatCardExpiry');
$('#cvc').payment('formatCardCVC');