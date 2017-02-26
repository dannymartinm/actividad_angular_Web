
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
    			pasta: 'Dura', costo: '300', proveedor : 'proovedor1', estatus : true}]
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

    $scope.hideDialog = function() {
//      $scope.notFound = "Si esdsdsdsdssncontrado";
      $mdDialog.hide({
        });

    }

    $scope.find = function(ev,dataSearch){

      angular.forEach($scope.modelo.libro, function(item){
      if(item.autor == (dataSearch) || item.titulo == dataSearch) { 
        $mdDialog.show({
        controller: function Ctrl($scope, $mdDialog, item) {
            $scope.data = item;
        },
        controllerAs: 'ctrl',
        targetEvent: ev,
        templateUrl: "views/show.html",
        locals: {
            item : item
        }
    }); 
        $scope.notFound = "";
      }else{
         return $scope.notFound = "No encontrado";
      }
      })
    }

    $scope.showDialog = function(ev,l) {        
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



