$(document).ready(function(){

	// Affect action to menu
	$("#sidebar ul li").click(function(){
		// Remove menu- prefix from the id attribute
		var tplName = this.id.substring(5);
		window.location.href = '#' + tplName;
	});
});