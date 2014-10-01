function MainController($scope) {

  'use strict';
  
  $scope.photos = [
    { title: 'Photo 1', thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains1.jpg' },
    { title: 'Photo 2', thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains2.jpg' },
    { title: 'Photo 3', thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains3.jpg' }
  ];
  
  $scope.thumbSize = 'small';
  
  $scope.setThumbSize = function(size) {
    $scope.thumbSize = size;
  };

}