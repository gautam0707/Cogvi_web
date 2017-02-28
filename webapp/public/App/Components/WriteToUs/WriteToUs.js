angular.module('cogvi').controller('WriteToUs',['$scope','$uibModal',function ($scope,$uibModal) {  
  $scope.composeMessage = function () {    
    debugger;
    var modalInstance = $uibModal.open({
      animation: true,      
      templateUrl: 'WriteToUs.tmpl.html',
      controller: 'WriteToUsModalInstance'      
    });
    modalInstance.result.then(function (modelClosedResponse) {
      console.log(modelClosedResponse);
    }, function (modelDismisseResponse) {
      console.log(modelDismisseResponse)
    });
  };
}]);

angular.module('cogvi').controller('WriteToUsModalInstance',['$scope','$uibModalInstance',function($scope,$uibModalInstance){
  $scope.Message = {
    fromName:'',
    fromEmail:'',
    messageSubject:'',
    messageBody:''
  };
  $scope.send = function () {
    $uibModalInstance.close($scope.Message);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);