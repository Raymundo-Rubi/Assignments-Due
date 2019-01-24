var cities = ["New York City","San Francisco","Los Angeles","Austin","Sydney"];

$(document).ready(function(){
	for(i = 0; i < cities.length; i++){
		$('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
	}

$('form').on('change', '#city-type', function(){
	var city = $('#city-type').val();
	if(city == 'New York City'){
		$('body').attr('class', 'nyc');
	} else if (city == 'San Francisco'){
		$('body').attr('class', 'sf').hide(2000).show(1000);
	} else if (city == 'Los Angeles'){
		$('body').attr('class', 'la');
	} else if (city == 'Austin'){
		$('body').attr('class', 'austin');
	} else if (city == 'Sydney'){
		$('body').attr('class', 'sydney');
	}
})

}); 

// (.ready) basically waits for the document to load before executing