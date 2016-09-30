if ($("#popular-media").length) {

	var media = function () {

		var $container = $("#movies");

		var movie = _.template(" \
			<!-- UI - X Starts --> \
			<div class=\"ui-313\"> \
				<div class=\"container-fluid\"> \
					<!-- Item --> \
					<div class=\"ui-item\"> \
						<!-- Head --> \
						<div class=\"ui-head\"> \
							<!-- Background Image --> \
							<img src=\"/img/media/<%= bgImage %>\" alt=\"\" class=\"img-responsive bg-img\" /> \
							<!-- Transparent Background --> \
							<div class=\"ui-trans clearfix\"> \
								<!-- Image --> \
								<img src=\"/img/media/<%= titleImage %>\" alt=\"\" class=\"img-responsive\" /> \
								<!-- Details --> \
								<div class=\"ui-details clearfix\"> \
									<!-- Movie Name --> \
									<h2><a href=\"<%= url %>\"><%= title %></a></h2> \
									<!-- Labels --> \
									<% _.each(labels, function(label){ %> \
										<a href=\"<%= url %>\" class=\"label\"><%= label %></a> \
									<% }); %> \
									<!-- Paragraph --> \
									<p><%= description %></p> \
									<% _.each(actors, function(actor){ %> \
										<!-- Heading --> \
										<h4><span><%= actor.title %></span>:</h4> \
										<!-- Director Name --> \
										<h5><a href=\"<%= url %>\"><%= actor.name %></a></h5> \
										<!-- Heading --> \
									<% }); %> \
								</div> \
							</div> \
						</div> \
						<!-- Review --> \
						<div class=\"ui-review\"> \
							<!-- Heading --> \
							<h3><%= title %></h3> \
							<!-- Paragraph --> \
							<p><%= description %></p> \
							<!-- Buttons --> \
							<a href=\"<%= url %>\" class=\"ui-btn bg-red\"><i class=\"fa fa-ticket\"></i> View on IMDB</a> \
						</div> \
					</div>	\
				</div> \
			</div> \
			<!-- UI - X Ends --> \
		");

		[{
			bgImage: "b1.png",
			titleImage: "1.jpg",
			title: "The Avangers",
			url: "http://www.imdb.com/title/tt4422900/?ref_=fn_tt_tt_2",
			labels: [
				"2104",
				"143 min",
				"Documentary"
			],
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			actors: [
				{
					title: "Director",
					name: "Joss Whedon"
				},
				{
					title: "Writers",
					name: "Joss Whedon (screenplay), Zak Penn (story)"
				},
				{
					title: "Stars",
					name: "Robert Downey Jr. , Chris Evans , Scarlett Johansson"
				}
			]
		}]
		.forEach(function (element, index, array) {
			$container.append(movie(element));
		});

	};

	$(document).ready(media);
}