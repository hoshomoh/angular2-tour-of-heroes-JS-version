/**
 * Created by oshomo.oforomeh on 16/09/2016.
 */
(function(app) {

    const HEROES = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        template:
            '<h1>{{ title }}: {{getName()}}</h1>' +
            '<ul class="heroes">' +
                '<li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">' +
                    '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
                '</li>' +
            '</ul>' +
            '<div *ngIf="selectedHero">' +
                '<h2>{{selectedHero.name}} details!</h2>' +
                '<div><label>id: </label>{{selectedHero.id}}</div>' +
                '<div>' +
                    '<label>name: </label>' +
                    '<input [(ngModel)]="selectedHero.name" placeholder="name"/>' +
                '</div>' +
            '</div>'
    })
    .Class({
        constructor: function() {
            this.title = "Hero Detail";
            this.heroes = HEROES;
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
