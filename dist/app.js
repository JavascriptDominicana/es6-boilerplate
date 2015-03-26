System.register(["message"], function (_export) {
	var message, _classCallCheck, App, theApp;

	return {
		setters: [function (_message) {
			message = _message["default"];
		}],
		execute: function () {
			"use strict";

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			App = _export("App", function App() {
				_classCallCheck(this, App);

				console.log("MESSAGE: ", message);
			});
			theApp = new App();
		}
	};
});
//# sourceMappingURL=app.js.map