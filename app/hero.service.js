"use strict";

(function(app) {

	function HeroService() {
	}

	HeroService.prototype.getHeroes = function() {
		return new Promise(function(resolve, reject) {
			if (app.HEROES) {
				resolve(app.HEROES);
			}
			else {
				reject("Could not get Heroes");
			}
		});
	};

	app.HeroService = HeroService;

})(window.app || (window.app = {}));
