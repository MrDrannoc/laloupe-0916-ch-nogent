angular.module('app', ['ngRoute'])
        .factory('sessionFactory', sessionFactory)
        .service('userService', userService)
        .service('todoService', todoService)
        .service('annuaireService', annuaireService)
        .service('categorieService', categorieService)
        .service('contactService', contactService)
        .service('aproposService', aproposService)
        .service('actualiteService', actualiteService)
        .service('statService', statService)
        .service('btn1Service', btn1Service)
        .service('btn2Service', btn2Service)
        .service('btn3Service', btn3Service)
        .service('btn4Service', btn4Service)
        .controller('annuaireController', annuaireController)
        .controller('actualiteController', actualiteController)
        .controller('categorieController', categorieController)
        .controller('contactController', contactController)
        .controller('loginController', loginController)
        .controller('mainController', mainController)
        .controller('aproposController', aproposController)
        .controller('navbarController', navbarController)
        .controller('btn1Controller', btn1Controller)
        .controller('btn2Controller', btn2Controller)
        .controller('btn3Controller', btn3Controller)
        .controller('btn4Controller', btn4Controller)
        .controller('statController', statController)
        .controller('admin/annuaireController', adminannuaireController)
        .controller('admin/actualiteController', adminactualiteController)
        .controller('admin/categorieController', admincategorieController)
        .controller('admin/contactController', admincontactController)
        .controller('admin/aproposController', aproposController)
        .controller('admin/btn1Controller', adminbtn1Controller)
        .controller('admin/btn2Controller', adminbtn2Controller)
        .controller('admin/btn3Controller', adminbtn3Controller)
        .controller('admin/btn4Controller', adminbtn4Controller)
        .controller('admin/statController', adminstatController)
        .config(routes)
        .run(loginStatus)
        ;
