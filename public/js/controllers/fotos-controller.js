angular.module('alurapic').controller('FotosController', function($scope, $http) {
    
        $scope.fotos = [
            {
                titulo : 'Gibson SG',
                url : 'http://www.gibson.com/Images/Products/Electric-Guitars/SG/Gibson-USA/Standard/Gallery-Images/SGSHCCH1-Finish-Shot3-jpg.aspx?KeepThis=true&TB_iframe=true&height=410&width=1000'
            },
    
            {
                titulo : 'Fender',
                url : 'https://www.fmicassets.com/Damroot/ZoomJpg/10002/0112702706_gtr_frt_001_rr.jpg'
            },

            {
                titulo : 'Gibson Less Pool',
                url : 'http://www.gibson.com/Images/Products/Electric-Guitars/Les-Paul/Gibson-Custom/LP-Custom/LPC-AWGH1-Finish-Shot-jpg.aspx?KeepThis=true&TB_iframe=true&height=410&width=1000'
            }
        ];
    
    });