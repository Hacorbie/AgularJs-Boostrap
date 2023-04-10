var app = angular.module('He',[""]);
app.controller("ctrl",function($scope,$http){
        //Tạo hàm lấy danh sách sản phẩm
        var getProducts = function () {
            $http.get("https://63f822351dc21d5465b9ee35.mockapi.io/thi").
                then(function (response) {
                    $scope.tgs = response.data;
                    console.log($scope.tgss);
                });

        }
});