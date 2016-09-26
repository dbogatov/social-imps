if ($("#topics").length) {

	var topics = function () {

		var $container = $("#topics-container");

		var urlSnippet = "title.trim().toLowerCase().replace(/ /g, \"-\").replace(/[^0-9a-z-]/gi, \"\")";

		var cardTemplate = _.template(" \
			<div class=\"col-md-6\"> \
				<!-- UI Item --> \
				<div class=\"ui-item bg-<%= color %>\"> \
					<!-- Heading --> \
					<h5><a href=\"/topics/<%= " + urlSnippet + " %>\"><%= title %></a></h5> \
					<!-- Paragraph --> \
					<p><%= preview %></p> \
					<!-- Tags --> \
					<div class=\"tags\"> \
						<% _.each(tags, function(tag){ %> \
							<span><%= tag %></span> \
						<% }); %> \
					</div> \
				</div> \
				<!-- UI Details --> \
				<div class=\"ui-details\"> \
					<!-- Images --> \
					<div class=\"ui-img\"> \
						<a href=\"/topics/<%= " + urlSnippet + " %>\"><img src=\"/img/icons/1.png\" alt=\"read\" class=\"img-responsive\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Read\"/></a>&nbsp; \
					</div> \
					<!-- Heading --> \
					<h4><a href=\"/topics/<%= " + urlSnippet + " %>\"><%= title %></a></h4> \
					<!-- Para --> \
					<p>Topic on <%= title %></p> \
				</div> \
			</div> \
		");

		[{
			color: "green",
			title: "Ethics",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			]
		}, {
			color: "red",
			title: "Freedom of Speech",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			]
		}, {
			color: "brown",
			title: "Intellectual Property",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			]
		}, {
			color: "purple",
			title: "Privacy",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			]
		},
		{
			color: "red",
			title: "Crime",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			],
			description: "Topic on Ethiccs"
		},
		{
			color: "brown",	
			title: "Errors Failures Risks",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			]
		},
		{
			color: "green",		
			title: "Professional Ethics",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			]
		},
		{
			color: "blue",		
			title: "Work",
			preview: "The innovative idea of an e-currency is has gained a lot of traction in recent times, and will likely play a major financial role in the future. Cryptocurrencies are bringing many new innovative solutions to the current financial situation.",
			tags: [
				"Isamu",
				"Dmytro"
			]
		}]
		.forEach(function (element, index, array) {
			$container.append(cardTemplate(element));
		});

		$(".ui-img img").tooltip();
	};

	$(document).ready(topics);
}