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

	HeroService.prototype.getHeroesSlowly = function() {
		return new Promise(function(resolve, reject) {
			if (app.HEROES) {
				setTimeout(resolve(app.HEROES), 2000);
			}
			else {
				reject("Could not get Heroes");
			}
		});
	};

	app.HeroService = HeroService;

})(window.app || (window.app = {}));
