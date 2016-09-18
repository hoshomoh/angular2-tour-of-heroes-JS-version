"use strict";

(function(app) {

    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        template:
            '<h1>{{ title }}: {{getName()}}</h1>' +
            '<ul class="heroes">' +
                '<li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">' +
                    '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
                '</li>' +
            '</ul>' +
            '<my-hero-detail [hero]="selectedHero"></my-hero-detail>'
    })
    .Class({
        constructor: function() {
            this.title = "Hero Detail";
            this.heroes = new app.Hero().heroes;
            this.selectedHero = {};
        },

        getName: function() {
            return 'Windstorm';
        },

        onSelect: function(hero) {
            this.selectedHero = hero;
        }
    });
})(window.app || (window.app = {}));
