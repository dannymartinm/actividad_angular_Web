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
    	libro : [{fecha: "22/02/2017", usuario: "Gandhi", autor: "J.K", titulo: "Harry Potter", isbn: "123456790",
    			editorial : "Anagrama", anioP: "2005", numEd: "2",
    			pasta: "dura", costo: "$300", proveedor : "Proveedor1", estatus : "Pendiente"}]
    };
    $scope.modelo = modelo;

    $scope.addBook = function(autorT, tituloT, isbnT, editorialT, anioPT, numEdT, pastaT, costoT, proveedorT) {
    	var fecha = Date.now();
  		$scope.modelo.libro.push({fecha : fecha, usuario : "usuario1", autor:autorT, titulo : tituloT, isbn : isbnT,
  									editorial : editorialT, anioP : anioPT, numEd : numEdT,
  									pasta : pastaT, costo : costoT, proveedor : proveedorT, estatus : "Pendiente"});
  	}

  });
