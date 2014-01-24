'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function projectClick(e) {
	console.log("Project Clicked!");
	e.preventDefault();
	   var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       description.fadeOut();
    }
}
function initializePage() {

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript in progress");
		$('#testjs').text("It Works!");
		$(".jumbotron p").addClass("active");
		
	});
	$('#submitBtn').click(updateProject);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$('a.thumbnail').click(projectClick);
}


function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}