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
					<p> \
						<% if (reference !== \"#\") { %> \
							<a target=\"_blank\" href=\"<%= reference %>\">Reference</a> \
						<% } else { %> \
							<br /> \
						<% } %> \
					</p> \
				</div> \
				<div class=\"clearfix\"></div> \
			</div> \
			<!-- Timeline item ends --> \
		");

		var noref = "#";

		[{
			month: "Jan",
			year: 2007,
			content: "Satoshi Nakamoto is believed to have started initial work on bitcoin.",
			reference: noref
		}, {
			month: "Aug",
			year: 2008,
			content: "<a href=\"bitcoin.org\">Bitcoin.org</a> is registered.",
			reference: "http://whois.domaintools.com/bitcoin.org"
		}, {
			month: "Oct",
			year: 2008,
			content: "Whitepaper <em>Bitcoin: A Peer-to-Peer Electronic Cash System is published on a cryptography mailing list</em>",
			reference: "http://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html"
		}, {
			month: "Jan",
			year: 2009,
			content: "First bitcoin block is mined",
			reference: "https://en.bitcoin.it/wiki/Genesis_block"
		}, {
			month: "Jan",
			year: 2009,
			content: "First bitcoin transaction occurs",
			reference: "http://www.blockexplorer.com/b/170"
		}, {
			month: "Oct",
			year: 2009,
			content: "First exchange rate of bitcoin is established. It uses an equation that takes into account the cost of electricity needed to mine a block.",
			reference: "https://web.archive.org/web/20091229132610/http://newlibertystandard.wetpaint.com/page/Exchange+Rate"
		}, {
			month: "Dec",
			year: 2010,
			content: "Slush Pool, the first bitcoin mining pool, begins operation",
			reference: "https://slushpool.com/home/"
		}, {
			month: "Jan",
			year: 2011,
			content: "Silkroad begins operating",
			reference: "http://www.usatoday.com/story/news/nation/2013/10/21/fbi-cracks-silk-road/2984921/"
		}, {
			month: "Feb",
			year: 2011,
			content: "Bitcoin reaches parity with US dollar. (1 BTC = 1$)",
			reference: "https://news.slashdot.org/story/11/02/10/189246/online-only-currency-bitcoin-reaches-dollar-parity"
		}, {
			month: "Mar",
			year: 2013,
			content: "Total market cap of bitcoin surpasses $1B",
			reference: "https://bitcoinmagazine.com/articles/bitcoin-market-cap-hits-1-billion-1364511616"
		}, {
			month: "May",
			year: 2013,
			content: "Gaming company ESEA caught using its clients’ computers to mine bitcoins",
			reference: "http://www.networkworld.com/article/2225927/security/gaming-company-caught-building-bitcoin-mining-botnet-from-users--computers-gets-off-light.html"
		}, {
			month: "May",
			year: 2013,
			content: "U.S. Homeland Security seizes and freezes fund at biggest bitcoin exchange for \"failing to register as a money transmitting business\"",
			reference: "http://www.theverge.com/2013/5/15/4332698/dwolla-payments-mtgox-halted-by-homeland-security-seizure-warrant"
		}, {
			month: "Oct",
			year: 2013,
			content: "FBI shuts down Silkroad",
			reference: "http://www.usatoday.com/story/news/nation/2013/10/21/fbi-cracks-silk-road/2984921/"
		}, {
			month: "Nov",
			year: 2013,
			content: "Bitcoin reaches a value of $1000",
			reference: "http://www.theverge.com/2013/11/27/5151396/bitcoin-hits-1000"
		}, {
			month: "Dec",
			year: 2014,
			content: "Microsoft begins to accepts Bitcoin",
			reference: "https://blogs.microsoft.com/firehose/2014/12/11/now-you-can-exchange-bitcoins-to-buy-apps-games-and-more-for-windows-windows-phone-and-xbox/"
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