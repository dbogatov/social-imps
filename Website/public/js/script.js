$('a').each(function () {
	var a = new RegExp('/' + window.location.host + '/');
	if (!a.test(this.href)) {
		$(this).attr("target", "_blank");
	}
});

$('a').each(function () {

	var text = $(this).text().trim();

	if (text === "#") {
		$(this).text($(this).attr("href"));
	}
});