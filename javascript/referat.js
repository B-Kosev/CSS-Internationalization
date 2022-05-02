$(document).ready(function () {
	// $(".select-lang").select2();

	$(".select-lang").select2({
		templateResult: function (item) {
			return format(item);
		},
	});

	$(".select-lang").on("select2:select", function (e) {
		var data = e.params.data;
		document.documentElement.setAttribute("lang", data.id);
		console.log("Language changed to " + data.text);
	});
});

function format(item) {
	if (!item.id) {
		return item.text;
	}
	var url = "https://hatscripts.github.io/circle-flags/flags/";
	var img = $("<img>", {
		class: "img-flag",
		width: 20,
		src: url + item.element.id.toLowerCase() + ".svg",
	});
	var span = $("<span>", {
		text: " " + item.text,
	});
	span.prepend(img);
	return span;
}
