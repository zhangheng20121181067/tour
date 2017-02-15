/**
 * Created by hxsd on 2016-09-28 0028.
 */
angular.module("myapp")
    .controller("weatherCtrl", function ($scope,$http,$ionicLoading) {
        var url = "http://wthrcdn.etouch.cn/weather_mini?city=北京";
        //var url = "data.json";
        $ionicLoading.show();   // 显示加载指示器
        // 网络请求
        $http.get(url).success(function(data){
            $scope.weather = data;  // 保存请求回来的天气数据
            $ionicLoading.hide();   // 隐藏加载指示器
        }).error(function(){
            // 当ajax请求出现错误时，显示一个提示信息
            $ionicLoading.show({
                template:"暂时无法获取天气数据",
                duration:3000
            });
        });
    });