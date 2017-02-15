/**
 * Created by hxsd on 2016-09-28 0028.
 *
 * 主模块，程序的入口
 */
var myapp = angular.module("myapp",["ionic"]);
// 配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    }).state("home",{
        url:"/home",
        templateUrl:"views/home/home.html"
    }).state("reservation",{
        url:"/reservation",
        templateUrl:"views/reservation/reservation.html",
        controller:"reservationCtrl"
    }).state("restaurants",{
        url:"/restaurants",
        templateUrl:"views/restaurants/restaurants.html",
        controller:"restaurantsCtrl"
    }).state("weather",{
        url:"/weather",
        templateUrl:"views/weather/weather.html",
        controller:"weatherCtrl"
    });
    // 默认路由
    $urlRouterProvider.otherwise("/tour");
});