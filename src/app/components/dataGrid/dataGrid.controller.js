(function() {
  'use strict';

  angular
    .module('p4')
    .controller('dataGridController', dataGridController);

  /** @ngInject */
  function dataGridController($timeout, Auth, dataService) {
    var vm = this;

    //Auth.loginAnonymously();


    dataService.getIssuesDataforGrid().then(function(resp){

      vm.myData = resp;
      //
      // firebase.database().ref('issues/').on('child_added', function(data) {
      //   var issueData = {};
      //   issueData.id = +data.val().id;
      //   issueData.createdOn = new Date(data.val().createdOn);
      //   issueData.customerName = data.val().customerName;
      //   issueData.customerEmail = data.val().customerEmail;
      //   issueData.description = data.val().description;
      //   issueData.open = data.val().open;
      //   issueData.closedOn = new Date(data.val().closedOn);
      //   issueData.employeeName = data.val().employeeName;
      //
      //   vm.myData.push(issueData);

      //});

    });



  }
})();
