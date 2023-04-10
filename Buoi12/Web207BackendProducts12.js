var app = angular.module("IT27977", []);

            app.controller("ctrl",function($scope, $http){
                $http.get("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones").then(function(response){
                    // Lấy Dữ Liệu
                    var data =response.data;
                    //Truyển lên giao diện
                    $scope.products = data;
                });
                    $scope.totalPages = function(){
                        var range = [];
                        var page = 50/10
                        var i;
                        for(i =1;i<=page;i++) { 
                           range.push(i); 
                        } 
                        
                        return range;
                        };
                    // $scope.getDetals() = function(id) {
                    //     $http.get("https://63ec4a3d32a081172398cd32.mockapi.io/27977/+id").then(function(response){
                    //     // Lấy Dữ Liệu
                    //     var data =response.data;
                    //     //Truyển lên giao diện
                    //     $scope.products = data;
                    //     });
                    // }
                
            });

            //API Tổng Sản Phẩm http://localhost:8080/products/count