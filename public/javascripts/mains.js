$(function(){
var dataSource = $('#search-results').html();
var searchTemplate = Handlebars.compile(dataSource)
var $results = $('#results')

	$('#searchbar').on('keyup', function(e){
		if(e.keyCode === 13){
			var val = ($(this).val()).toLowerCase()
			var searchData;
			var progData

//need to get search case insensitive			
			$.get('/search', {search : val}, function(data){
				searchData = data['search engines'][val]
				progData = data['programming'][val]
				$results.fadeOut("slow", function(){
					if(progData){
						$results.html(searchTemplate(progData)).fadeIn()
					}
					else if(searchData){
						$results.html(searchTemplate(searchData)).fadeIn()
					}
					else {
						$results.text('No results').fadeIn()
					}
					
				});
			});
		};
	});

});