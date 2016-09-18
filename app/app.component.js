"use strict";

(function(app) {

    app.AppComponent = ng.core.Component({
        selector: 'my-app',
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
        constructor: [function() {
            // This is wrong as stated https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
            // We would replace with DI
            this.heroService = new app.HeroService();
            this.title = "Hero Detail";
            this.heroes = [];
            this.selectedHero = {};
        }],

        getHeroes: function() {
            this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        },

        ngOnInit: function() {
              this.getHeroes();
        },

        onSelect: function(hero) {
            this.selectedHero = hero;
        }
    });

})(window.app || (window.app = {}));
