/**
 * Created by admin on 9/22/2016.
 */
angular.module('myApp', ['colorpicker.module', 'wysiwyg.module'])
    .factory('myFactory', ['$q', '$http',
        function ($q, $http) {

            function userData(data) {
                var q = $q.defer();
                var userInfo = {
                    category: data.category,
                    city: data.city,
                    salary: data.salary,
                    email: data.email,
                    companyName: data.compName,
                    vacancyTitle: data.vacTitle,
                    salaryRange: data.salRange,
                    description: data.desc

                };
                $http.post('/api/subscriptions/createcustomer', userInfo)
                    .then(function (resp) {
                        q.resolve(resp);
                    }, function (err) {
                        q.reject(err);
                    });
                return q.promise;
            }

            return {
                userData: userData
            }
        }

    ]);