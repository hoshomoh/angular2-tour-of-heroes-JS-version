"use strict";

(function (app) {
    app.HeroesComponent = ng.core.Component({
        selector: 'my-heroes',
        providers: [app.HeroService],
        template:
            '<h1>{{ title }}</h1>' +
            '<ul class="heroes">' +
                '<li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">' +
                    '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
                '</li>' +
            '</ul>' +
            '<my-hero-detail [hero]="selectedHero"></my-hero-detail>'
    })
    .Class({
        constructor: [app.HeroService, function(service) {
            this.heroService = service;
            this.title = "Hero Detail";
            this.heroes = [];
            this.selectedHero = {};
        }],

        getHeroes: function() {
            this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        },

        ngOnInit: function() {
              this.getHeroes();
        },

        onSelect: function(hero) {
            this.selectedHero = hero;
        }
    });

})(window.app || (window.app = {}));
