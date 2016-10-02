var timeline = function () {

	// we are on a timeline page	
	if ($("#timeline").length > 0) {

		var $container = $("#timeline");

		var template = _.template(" \
			<!-- Timeline item starts --> \
			<div class=\"timeline-item\"> \
				<!-- Timeline circle --> \
				<div class=\"timeline-circle bg-blue\"> \
					<!-- Date --> \
					<span><%= month %></span><%= year %> \
				</div> \
				<!-- Content --> \
				<div class=\"timeline-content\"> \
					<h4><%= content %></h4> \
					<p><%= reference %></p> \
				</div> \
				<div class=\"clearfix\"></div> \
			</div> \
			<!-- Timeline item ends --> \
		");

		var noref = "<br />";

		[{
			month: "Jan",
			year: 2007,
			content: "Satoshi Nakamoto is believed to have started initial work on bitcoin.",
			reference: noref
		}, {
			month: "Aug",
			year: 2008,
			content: "<a href=\"bitcoin.org\">Bitcoin.org</a> is registered anonymously.",
			reference: noref
		}, {
			month: "Oct",
			year: 2008,
			content: "Whitepaper <em>Bitcoin: A Peer-to-Peer Electronic Cash System is published on a cryptography mailing list</em>",
			reference: noref
		}, {
			month: "Jan",
			year: 2009,
			content: "First bitcoin block is mined",
			reference: noref
		}, {
			month: "Jan",
			year: 2009,
			content: "First bitcoin transaction occurs",
			reference: noref
		}, {
			month: "Oct",
			year: 2009,
			content: "First exchange rate of bitcoin is established. It uses an equation that takes into account the cost of electricity needed to mine a block.",
			reference: noref
		}, {
			month: "Dec",
			year: 2010,
			content: "Slush Pool, the first bitcoin mining pool, begins operation",
			reference: noref
		}, {
			month: "Jan",
			year: 2011,
			content: "Silkroad begins operating",
			reference: noref
		}, {
			month: "Feb",
			year: 2011,
			content: "Bitcoin reaches parity with US dollar. (1 BTC = 1$)",
			reference: noref
		}, {
			month: "Mar",
			year: 2013,
			content: "Total market cap of bitcoin surpasses $1B",
			reference: noref
		}, {
			month: "May",
			year: 2013,
			content: "Gaming company ESEA caught using its clients’ computers to mine bitcoins",
			reference: "<a target=\"_blank\" href=\"http://www.networkworld.com/article/2225927/security/gaming-company-caught-building-bitcoin-mining-botnet-from-users--computers-gets-off-light.html\">Reference</a>"
		}, {
			month: "May",
			year: 2013,
			content: "U.S. Homeland Security seizes and freezes fund at biggest bitcoin exchange for \"failing to register as a money transmitting business\"",
			reference: "<a target=\"_blank\" href=\"http://www.theverge.com/2013/5/15/4332698/dwolla-payments-mtgox-halted-by-homeland-security-seizure-warrant\">Reference</a>"
		}, {
			month: "Oct",
			year: 2013,
			content: "FBI shuts down Silkroad",
			reference: noref
		}, {
			month: "Nov",
			year: 2013,
			content: "Bitcoin reaches a value of $1000",
			reference: noref
		}, {
			month: "Sep",
			year: 2016,
			content: "Our team started working on the Bitcoin project",
			reference: noref
		}]
		.forEach(function (element, index, array) {
			$container.append(template(element));
		});

	}

};

$(document).ready(timeline);