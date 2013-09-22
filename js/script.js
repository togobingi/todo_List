	//onload is used when we have to wait for all the elements(eg images) on a page to be loaded
	//while document.ready is used when the html elements are loaded. This is used so as to allow th jquery functionality to be available asap
	
	window.onload = function() {
	
	//funtion creates a new todo list item each time
	$("#add_todo").click(function() {
		var value = $('#todo_name').val();
		$(".todo_list").prepend(
		'<div class="todo">' +
		'<div>' +
			'<input class="check_todo" name=check_todo" type="checkbox"/>' +
			'<div class="todo_description">' + value 
			+ '</div>'
			+ '</div>'
			+ '</div>');
			
			$('#todo_form')[0].reset();
	
	$('.check_todo').unbind('click'); 
	$('.check_todo').click( function() {
		var todo = $(this).parent().parent();    
		todo.toggleClass('checked'); 
	}); 
	
	return false;
});
	
	//this code calls the strike through css code
	$(document).on("click", function(event) {
	
		$(event.target).closest(".todo_description").toggleClass("highlight");
	});
	

	

}




