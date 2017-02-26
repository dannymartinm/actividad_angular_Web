
'use strict';

/**
 * @ngdoc function
 * @name proyectoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoAngularApp
 */
angular
    .module('proyectoAngularApp')
    .controller('MainCtrl', function ($scope,$mdDialog, $log) {
  	var _id = 1;
    var modelo={
    	libro : [{id:_id++,fecha: '22/2/2017', usuario: 'Gandhi', autor: 'J.K', titulo: 'Harry Potter', isbn: '123456790',
    			editorial : 'Anagrama', anioP: '2005', numEd: '2',
    			pasta: 'Dura', costo: '300', proveedor : 'Proovedor1', estatus : true}]
    };
    $scope.modelo = modelo;

    $scope.addBook = function(autorT, tituloT, isbnT, editorialT, anioPT, numEdT, pastaT, costoT, proveedorT) {
    	var tmp = new Date();
  		var day = tmp.getDate();
  		var month = tmp.getMonth()+1;
  		var year = tmp.getFullYear();
  		var fecha = day+'/'+month+'/'+year;

    	var user = Math.floor(Math.random() * 10) + 1; 
  		$scope.modelo.libro.push({fecha : fecha, usuario : ('usuario'+user), autor:autorT, titulo : tituloT, isbn : isbnT,
  									editorial : editorialT, anioP : anioPT, numEd : numEdT,
  									pasta : pastaT, costo : costoT, proveedor : proveedorT, estatus : false});
  	};

   /* $scope.remove = function(request) { 
    var index = $scope.modelo.libro.indexOf(request);
    $scope.modelo.libro.splice(index, 1);     
    }
*/
    $scope.remove = function(request){
      $scope.modelo.libro.splice($scope.modelo.libro.indexOf(request),1);       
    };

    $scope.edit = function(l) {
      $log.debug("debug: "+$scope.modelo.libro.autor);
      $scope.modelo.libro.autor = l;

      $mdDialog.hide({
        
        });
    }
    
    $scope.showDialog = function(ev,l) {
    // Appending dialog to document.body to cover sidenav in docs app
    /*var confirm = $mdDialog.prompt()
      .title(Editar)
      .textContent('Cambie el valor de los campos que desee.')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .initialValue('Buddy')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('I\'m a cat person');
        
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    }); */
        
        
    $mdDialog.show({
        controller: function Ctrl($scope, $mdDialog, l) {
            $scope.data = l;
        },
        controllerAs: 'ctrl',
        targetEvent: ev,
        templateUrl: "views/dialog.html",
        locals: {
            l : l
        }
        
    
    });    
        
    };

    
    
  });



