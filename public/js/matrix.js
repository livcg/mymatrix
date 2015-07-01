
$(document).ready(function() {
    // Dynamically set column group labels based on row group labels
    //*** ...

    // Dynamically set column labels based on row labels
    for (groupIndex = 1; groupIndex <= 5; groupIndex++) {
    
	var val;
	for (itemIndex = 1; itemIndex <= 5; itemIndex++) {
	    val = $("input.label.g" + groupIndex + "i" + itemIndex).attr("value");
	    $("td.label.g" + groupIndex + "i" + itemIndex).html(val);

	    $("input.label.g" + groupIndex + "i" + itemIndex).change( function() {
		var val = $(this).val()
		$("td.label." + this.classList[0]).html(val); // TODO: Check for relevant class
	    });
	}
    }

    // Toggle cells between 'X', 'O', 'X?', 'O?', and ''
    var symbols = [ 'X', 'O', 'X?', 'O?', '' ]
    $("td.cell").click( function() {
	current = $(this).text();
	for (i = 0; i < symbols.length; i++) {
	    if (current == symbols[i]) {
		$(this).html(symbols[(i+1)%symbols.length]);
	    }
	}
    });
});
