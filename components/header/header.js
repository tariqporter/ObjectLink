import template from './header.html'

export default angular.module('cc.header', [])
    .controller('HeaderController', HeaderController)
    .directive('ccHeader', HeaderDirective);

function HeaderDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: template,
        controller: HeaderController
    };
}

function HeaderController() {
    var self = this;

    self.leftMenus = [
        { title: 'Search', subMenus: [] },
        { title: 'Manage Links', subMenus: [] },
        { title: 'James Map', subMenus: [] },
        {
            title: 'Databases',
            subMenus: [
                { title: 'CAMS' },
                { title: 'COS' },
                { title: 'JDE' }
            ]
        },
        { title: 'Help', subMenus: [] }
    ];

    self.modal = function (menu) {
        //console.log(menu);
        console.log(self);
    };

    self.rightMenus = [
        {
            title: 'Manage My Pick Lists',
            subMenus: [
                { title: 'Pick List 1', action: self.modal },
                { title: 'Pick List 2' }
            ]
        },
        {
            title: 'Saved Searches',
            subMenus: [
                { title: 'Search 1' },
                { title: 'Search 2' }
            ]
        },
        {
            title: 'User Preferences',
            subMenus: [
                { title: 'Settings' },
                { title: 'Preferences' }
            ]
        }
    ];
}