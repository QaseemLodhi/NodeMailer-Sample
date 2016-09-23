/**
 * Created by admin on 9/21/2016.
 */

angular.module('myApp')
    .controller('MyCtrl', ['$scope', 'myFactory', function ($scope, myFactory) {
        $scope.userInfo = {};
        $scope.textareaQuestion = '';
        $scope.selectedCategory = 'Select up to three categories...';
        $scope.selectedCity = 'Select city...';
        $scope.selectedSalary = 'Salary';
        $scope.selectedCategory1 = 'Select categories...';
        $scope.selectedCity1 = 'Select city...';
        $scope.selectedSalary1 = 'Salary';
        $scope.cities = ['Faisalabad', 'Multan', 'Islamabad', 'Lahore', 'Karachi'];
        $scope.salaries = ['200000 to 250000', '250000 to 300000', '300000 to 350000', '350000 to 400000', '400000 to 450000', '450000 to 500000', '500000 to 550000', '550000 to 600000'];
        $scope.categories = ['Accounting', 'Admin & Clerical', 'Automotive', 'Government', 'Banking'];
        $scope.setCategory = function (category) {
            $scope.selectedCategory = category;
        };
        $scope.sendMail = function () {
            myFactory.userData($scope.userInfo)
                .then(function (res) {
                    alert('Email send')
                }, function (e) {
                    console.log(e);
                })
        };
        $scope.setCity = function (city) {
            $scope.selectedCity = city;
        };
        $scope.setSalary = function (salary) {
            $scope.selectedSalary = salary;
        };
        $scope.setCategory1 = function (category) {
            $scope.selectedCategory1 = category;
            $scope.userInfo.category = category;
        };
        $scope.setCity1 = function (city) {
            $scope.selectedCity1 = city;
            $scope.userInfo.city = city;
        };
        $scope.setSalary1 = function (salary) {
            $scope.selectedSalary1 = salary;
            $scope.userInfo.salary = salary;
            $scope.userInfo.salRange = salary;
        };
        $scope.yourModel = {};


        $scope.data = {
            text: "hello"
        };
        $scope.disabled = false;

        $scope.yourModel.customMenu = [
            ['bold', 'italic', 'underline', 'strikethrough', 'ordered-list', 'unordered-list', 'outdent', 'indent'],
            ['left-justify', 'center-justify', 'right-justify']
        ];

        $scope.cssClasses = ['test1', 'test2'];

        $scope.setDisabled = function () {
            $scope.disabled = !$scope.disabled;
        }

    }]);