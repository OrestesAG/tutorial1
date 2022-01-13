/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["accenture/tutorial1/ui5/tutorial1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
