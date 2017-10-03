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
							<img src=\"/img/media/bg_placeholder.png\" alt=\"<%= title %>\" class=\"img-responsive bg-img\" /> \
							<!-- Transparent Background --> \
							<div class=\"ui-trans clearfix\"> \
								<!-- Image --> \
								<img src=\"/img/media/<%= titleImage %>\" alt=\"<%= title %>\" class=\"img-responsive\" /> \
								<!-- Details --> \
								<div class=\"ui-details clearfix\"> \
									<!-- Movie Name --> \
									<h2><a target=\"_blank\" href=\"<%= url %>\"><%= title %></a></h2> \
									<!-- Labels --> \
									<% _.each(labels, function(label){ %> \
										<a target=\"_blank\" href=\"<%= url %>\" class=\"label\"><%= label %></a> \
									<% }); %> \
									<!-- Paragraph --> \
									<p><%= description %></p> \
									<% _.each(actors, function(actor){ %> \
										<!-- Heading --> \
										<h4><span><%= actor.title %></span>:</h4> \
										<!-- Director Name --> \
										<h5><a target=\"_blank\" href=\"<%= url %>\"><%= actor.name %></a></h5> \
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
							<a target=\"_blank\" href=\"<%= url %>\" class=\"ui-btn bg-red\"><i class=\"fa fa-ticket\"></i> View on IMDB</a> \
						</div> \
					</div>	\
				</div> \
			</div> \
			<!-- UI - X Ends --> \
		");

		[{
			titleImage: "mango.jpg",
			title: "D'Mango Blockchained",
			url: "http://www.imdb.com/title/tt4422900/?ref_=fn_tt_tt_2",
			labels: [
				"2015",
				"S1E3",
				"21 min",
				"Documentary"
			],
			description: "Bradley explores a new and questionable technique for mining a new cryptocurrency. He also attempts to exchange some bitcoin on an exchange website for US Dollars.",
			actors: [{
				title: "Stars",
				name: "Bradley Laborman, Joe Henderson, Mikky Daub"
			}]
		}, {
			titleImage: "lob.jpg",
			title: "Life on Bitcoin",
			url: "http://www.imdb.com/title/tt3910512/?ref_=fn_tt_tt_8",
			labels: [
				"2014",
				"1h 36min",
				"Documentary"
			],
			description: "Can a newly married couple survive when every living necessity can only be purchased with 'cryptocurrency'? Married less than two weeks, and fresh off their honeymoon, Austin and Beccy Craig embark on an adventure to find out.",
			actors: [{
				title: "Directors",
				name: "Travis Pitcher, Joseph Lebaron"
			}, {
				title: "Writer",
				name: "Joseph Lebaron"
			}, {
				title: "Stars",
				name: "Beccy Bingham, Austin M. Craig"
			}]
		}, {
			titleImage: "end-of-money.jpg",
			title: "Bitcoin: The End of Money as We Know It",
			url: "http://www.imdb.com/title/tt4654844/?ref_=tt_rec_tt",
			labels: [
				"2015",
				"1h",
				"Documentary"
			],
			description: "For anyone who has not fully understood the controversial Bitcoin yet, this is a concise and informative crash course about Money and Crypto Currencies.",
			actors: [{
				title: "Directors",
				name: "Torsten Hoffmann, Michael Watchulonis"
			}, {
				title: "Writer",
				name: "Torsten Hoffmann"
			}, {
				title: "Stars",
				name: "John Barrett, Andreas M. Antonopoulos, Jeffrey A. Tucker"
			}]
		}, {
			titleImage: "rise.jpg",
			title: "The Rise and Rise of Bitcoin",
			url: "http://www.imdb.com/title/tt2821314/?ref_=tt_rec_tt",
			labels: [
				"2014",
				"1h 36min",
				"Documentary"
			],
			description: "A computer programmer becomes fascinated with the digital currency Bitcoin, and through his involvement in the Bitcoin community, we learn about the impending global impact of this amazing new technology.",
			actors: [{
				title: "Director",
				name: "Nicholas Mross"
			}, {
				title: "Writers",
				name: "Patrick Lope, Daniel Mross"
			}, {
				title: "Stars",
				name: "Gavin Andresen, Brian Armstrong, Margaux Avedisian"
			}]
		}]
		.forEach(function (element, index, array) {
			$container.append(movie(element));
		});

	};

	var literature = function () {

		var $container = $("#books");

		var book = _.template(" \
			<div class=\"col-md-4 col-sm-6\"> \
				<!-- UI Item --> \
				<div class=\"ui-item\"> \
					<!-- Image --> \
					<a target=\"_blank\" href=\"<%= url %>\"> \
						<img src=\"/img/media/<%= image %>\" alt=\"<%= title %>\" class=\"img-responsive book-img\" /> \
					</a> \
					<!-- Content --> \
					<div class=\"content\"> \
						<!-- Heading --> \
						<h3><a target=\"_blank\" href=\"<%= url %>\"><%= title %></a></h3> \
						<span>by <%= author %></span> \
						<!-- Paragraph --> \
						<p><%= description %></p> \
						<!-- Button --> \
						<a target=\"_blank\" href=\"<%= url %>\" class=\"btn btn-red\">Read More</a> \
					</div> \
				</div> \
			</div> \
		");

		[{
			image: "bitcoin-detective.jpeg",
			title: "Bitcoin Detective",
			author: "Marty Longson",
			url: "https://itunes.apple.com/us/book/bitcoin-detective/id803520963?mt=11",
			description: "The virtual world of Bitcoins tells many stories where fortunes are won or lost in the blink of an eye. Robert Dunhill, private investigator, likes to steal from rich criminals and give to their poor victims."
		}, {
			image: "war-stage.jpeg",
			title: "The War Stage",
			author: "Andrew Watts",
			url: "https://itunes.apple.com/us/book/the-war-stage/id1122332737?mt=11",
			description: "The origin of bitcoin, the world's first widely adopted digital currency, is shrouded in mystery. Its founder has not been heard from since 2011. Yet as global financial markets suffer, several nations agree ..."
		}, {
			image: "bitcoin-blockchain.jpeg",
			title: "The Bitcoin Blockchain",
			author: "P Carl Mullan",
			url: "https://itunes.apple.com/us/book/the-bitcoin-blockchain/id1132715358?mt=11",
			description: "This fictional book is a series of easy to read vignettes that illustrate modern uses of Bitcoin cryptocurrency. The characters and situations accurately portray who really uses Bitcoin around the world and ..."
		}, {
			image: "detective.jpeg",
			title: "The Sketching Detective and the Bitcoin Murders",
			author: "Jack McCormac",
			url: "https://itunes.apple.com/us/book/sketching-detective-bitcoin/id1054308055?mt=11",
			description: "Upon arriving at his university office one morning, Jack MacKay finds the body of a former boyfriend of his wife, Fiona, lying on his desk with a bullet hole in his back. The murdered man was Billy Bell, the ..."
		}, {
			image: "money-tree.jpeg",
			title: "The Money Tree",
			author: "Helen Yeomans",
			url: "https://itunes.apple.com/us/book/the-money-tree/id1037096938?mt=11",
			description: "The Frisbys have been growing money for ten years on their island farm, and George has nearly perfected the art. Only one tiny flaw remains: a faint smell, undetectable except to animals. Quite a few Frisby ..."
		}]
		.forEach(function (element, index, array) {
			$container.append(book(element));
		});

	};

	$(document).ready(media);
	$(document).ready(literature);
}