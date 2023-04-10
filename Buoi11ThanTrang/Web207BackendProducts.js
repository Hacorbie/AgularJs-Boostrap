var app = angular.module("IT27977", []);

            app.controller("ctrl",function($scope, $http){
                $http.get("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones?skip=0&limit=10").then(function(response){
                    // Lấy Dữ Liệu
                    var data =response.data;
                    //Truyển lên giao diện
                    $scope.products = data;
                });
                // $http.get("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones/count").then(function(response){
                //     // Lấy Dữ Liệu
                //     var data =response.data;
                //     //Truyển lên giao diện
                //     $scope.total = data;
                // });
                    $scope.totalPages = function(){
                        var range = [];
                        var page = 50/10
                        var i;
                        for(i =1;i<=page;i++) { 
                           range.push(i); 
                        } 
                        
                        return range;
                        };
                
            });

            //API Tổng Sản Phẩm http://localhost:8080/products/count