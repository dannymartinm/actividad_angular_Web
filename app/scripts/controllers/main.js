'use strict';

/**
 * @ngdoc function
 * @name proyectoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoAngularApp
 */
angular.module('proyectoAngularApp')
  .controller('MainCtrl', function ($scope) {
  	
    var modelo={
    	libro : [{fecha: "22/2/2017", usuario: "Gandhi", autor: "J.K", titulo: "Harry Potter", isbn: "123456790",
    			editorial : "Anagrama", anioP: "2005", numEd: "2",
    			pasta: "Dura", costo: "$300", proveedor : "Proovedor1", estatus : true}]
    };
    $scope.modelo = modelo;

    $scope.addBook = function(autorT, tituloT, isbnT, editorialT, anioPT, numEdT, pastaT, costoT, proveedorT) {
    	var tmp = new Date();
  		var day = tmp.getDate();
  		var month = tmp.getMonth()+1;
  		var year = tmp.getFullYear();
  		var fecha = day+"/"+month+"/"+year;

    	var user = Math.floor(Math.random() * 10) + 1  
  		$scope.modelo.libro.push({fecha : fecha, usuario : ("usuario"+user), autor:autorT, titulo : tituloT, isbn : isbnT,
  									editorial : editorialT, anioP : anioPT, numEd : numEdT,
  									pasta : pastaT, costo : costoT, proveedor : proveedorT, estatus : false});
  	}

   /* $scope.remove = function(request) { 
    var index = $scope.modelo.libro.indexOf(request);
    $scope.modelo.libro.splice(index, 1);     
    }
*/
    $scope.remove = function(request){
    $scope.modelo.libro.splice($scope.modelo.libro.indexOf(request),1);
}

  });
