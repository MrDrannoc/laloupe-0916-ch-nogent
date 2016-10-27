class sidebarController {

    constructor(sessionFactory, $rootScope, $window, $location, categorieService) {
        this.categorieService = categorieService;
        this.isLogged = sessionFactory.isLogged;
        this.sessionFactory = sessionFactory;
        this.$rootScope = $rootScope;
        this.$location = $location;

        $(".button-collapse").sideNav();

        $rootScope.$on('loginStatusChanged', (event, isLogged) => {
            this.isLogged = isLogged;
            this.user = sessionFactory.user;
            $('#main').css({'padding-left':(this.isLogged?'300px':'0')});
        });


    }

    logout() {
        this.sessionFactory.isLogged = false;
        this.sessionFactory.user = {};
        this.sessionFactory.token = null;
        this.$rootScope.$emit('loginStatusChanged', false);
        this.isLogged = false;
        this.$location.path('/login');
    }


}
