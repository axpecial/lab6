'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	console.log("User clicked on project " + idNumber);

	var projectUrl = "http://localhost:3000/project/" + idNumber
	$.get(projectUrl, extractProjectDetails)
	console.log("GET request sent to " + projectUrl)
}

function extractProjectDetails(result) {
	console.log(result)

	var title = result.title
	var titleHTML = "<p>" + title + "</p>"

	var date = result.date
	var dateHTML = "<p>" + date + "</p>"

	var image = result.image
	var imageHTML = "<img class='detailsImage' src=" + image + " />"

	var summary = result.summary
	var summaryHTML = "<p>" + summary + "</p>"

	$("#project" + result.id + " .details").html(titleHTML + dateHTML + imageHTML + summaryHTML)

}
