$(document).ready(function() {
	console.log('Setting up eBook provider array');
	var ebookProvs = ["ACLS Humanities E-Book Project","African American Experience","American Indian Experience","Cambridge Companions","Cambridge Histories Online","Daily Life Through History","Early English Books Online (EEBO)","Ebooks at Ebscohost","Ebrary","EditLib Digital Library","Eighteenth Century Collections Online","Knovel","Latino American Experience","Oxford Scholarship Online","Pop Culture Universe","Safari Books Online","StarWalk KidsMedia","Stat!Ref","World Folklore and Folklife"];

	function isInArray(value, array) {
	  return array.indexOf(value) > -1;
	}

	setTimeout(function() {
		if($('#s-lg-az-cols').length > 0) {

		console.log('This is a database page');

		// Database list

		$('.s-lg-az-result-title').each(function() {

			var linkText = $(this).find('a').text();
			if(isInArray(linkText, ebookProvs)) {

				console.log('Adding click handler to databases...');
				$(this).find('a').click(function() {

					var ebookProvider = $(this).text();
					console.log(linkText);
					var eBookTracker = document.createElement('img');
					eBookTracker.src = '//labs.library.gvsu.edu/labs/ebooks/?source=databases&prov=' + encodeURIComponent(linkText.trim());
					document.body.appendChild(eBookTracker);
				});
			}
		});	
	}
	}, 500);
	
});