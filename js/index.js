$(document).ready(function () {
	$(".select-lang").select2();

	$(".select-lang").on("select2:select", function (e) {
		var data = e.params.data;
		document.documentElement.setAttribute("lang", data.id);
		console.log("Language changed to " + data.text);
	});
});
