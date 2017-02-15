/**
 * Created by hxsd on 2016-09-28 0028.
 */
angular.module("myapp")
    .controller("reservationCtrl", function ($scope) {
        // 准备预订数据-实际中应该从服务器端请求
        $scope.data = {
            room:"3302",
            checkin:new Date(),
            checkout:new Date(Date.now() + 7*24*60*60*1000),
            wifi:"hello123",
            price:268.00
        };
    });