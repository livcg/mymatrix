
$(document).ready(function() {
    // Dynamically set column group labels based on row group labels
    //*** ...

    // Dynamically set column labels based on row labels
    var val;
    for (i = 1; i <= 5; i++) {
	val = $("input.g5i" + i).attr("value");
	$("td.g5i" + i).html(val);

	$("input.g5i" + i).change( function() {
	    var val = $(this).val()
	    $("td." + this.classList[0]).html(val); // TODO: Check for missing class
	});	
    }

    // Toggle cells between 'X', 'O', 'X?', 'O?', and empty
    
});
