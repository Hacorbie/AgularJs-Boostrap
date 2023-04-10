var app = angular.module("web207", []);
        app.controller("web207-ctrl", function ($scope, $http) {
            //Tạo hàm lấy danh sách sản phẩm
            var getProducts = function () {
                $http.get("https://63ec4a3d32a081172398cd32.mockapi.io/27977/Gemtones").
                    then(function (response) {
                        
                        $scope.products = response.data;
                        console.log($scope.products)
                    });
            }
            //Gọi hàm để thực hiện lấy danh sách sản phẩm
            getProducts()
            // Tạo hàm lấy sản phẩm theo id
            var saveProduct
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
            var saveProduct
        });