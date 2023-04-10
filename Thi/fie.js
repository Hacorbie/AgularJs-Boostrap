var app = angular.module("web207", ["ngRoute"]);
       
        app.controller("web207-ctrl", function ($scope, $http) {
            //Tạo hàm lấy danh sách sản phẩm
            var getProducts = function () {
                $http.get("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones").
                    then(function (response) {
                        $scope.products = response.data;
                        console.log($scope.products);
                    });

            }
            // Tạo hàm lấy sản phẩm theo id
            $scope.getProduct = function (id) {
                $http.get("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones/" + id)
                    .then(function (response) {
                        $scope.selectedProduct = response.data;
                        saveProduct = response.data;
                    });
            }
            //Tạo hàm thêm sản phẩm mới
            $scope.newProduct = function () {
                var data = {
                    "name": $scope.productName,
                    "price": $scope.productPrice,
                    "type": $scope.productType,
                    "quantity": $scope.productQuantity
                }
                console.log(data);
                $http.post("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones", data)
                    .then(function (response) {
                        console.log(response);
                        getProducts();//reload
                    });
            }
            //Tạo hàm cập nhật sản phẩm
            $scope.updateProduct = function (id) {
                var data = {
                    "name": $scope.Name,
                    "price": $scope.Price,
                    "type": $scope.Type,
                    "quantity": $scope.Quantity,
                };
                console.log(data);
                $http.put("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones/" + id, data)
                    .then(function (response) {
                        console.log(response);
                        getProducts();//reload
                    });
            }
            //Tạo hàm xóa sản phẩm
            $scope.deleteProduct = function (id) {
                $http.delete("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones/" + id)
                    .then(function (response) {
                        console.log(response);
                        getProducts();//reload
                    });
            }
            
            
        });
        app.config(function($routeProvider,$locationProvider) {
            $locationProvider.hashPrefix("");
            $routeProvider
            // .when('/home', {
            //     templateUrl : 'Ph27977.html',
            // })
            .when('/about', {
                templateUrl: 'about.html',

            })
            .when('/manager', {
                templateUrl: 'CRUD.html',
                
            });
            // $scope.search = function () {
            //     var gender = document.getElementById("genderText").value;
            //     console.log(gender);
            //     $http.get("https://63f187265b7cf4107e32985f.mockapi.io/lab/people?gender=" + gender)
            //         .then(function (response) {
            //             //lấy dữ liệu
            //             var data = response.data;
            //             //truyền lên giao diện
            //             console.log(data)
            //             $scope.peoples = data;
            //         });
        });
        
        
        
            