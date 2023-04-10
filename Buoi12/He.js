var app = angular.module("IT2797", []);
            app.controller("ctrll",function($scope, $http){
                $http.get("https://6392e382ab513e12c5fc205a.mockapi.io/people/1").then(function(response){
                    // Lấy Dữ Liệu
                    var data =response.data;
                    //Truyển lên giao diện
                    $scope.people = data;
                });
                
            });

            //API Tổng Sản Phẩm http://localhost:8080/products/count