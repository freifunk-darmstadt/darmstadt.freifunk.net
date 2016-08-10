function netstate_init() {
	// this is just a proxy against http://gw04.ffda/webstats.json
	// because we do not have a valid cert for that yet.
	// TODO: wait for letsencrypt
	$.getJSON('https://map.darmstadt.freifunk.net/data/ffapi.json',
					  function (data) {
		// hide loading state
		$('#net_state_loading').hide();

		$('#net_state_nodes').text(data.state.nodes);

		/* API EOL
		$('#net_state_clients').text(data['clients']);

		rx = data['traffic']['rx']
		tx = data['traffic']['tx']

		rx = Math.round(rx / 1024 / 1024)
		tx = Math.round(tx / 1024 / 1024)
		total = (rx + tx)

		$('#net_state_traffic').text(total + ' GB / Tag').attr('title', 'RX: ' + rx + ' GB / TX: ' + tx + ' GB');
		*/
	});

}
