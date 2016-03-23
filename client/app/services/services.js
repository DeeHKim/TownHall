TownHall.factory('dataFactory', function($http) {

  var loadBoard = function(board, callback) {
    console.log('loadBoard firing');
    $http({
      method: 'POST',
      url: 'api/board/board',
      data: board
    }).then(function success(data) {
      var board = data.data[0];
      callback(board);
    }, function error(response) {
      console.log('error', response);
    });
  };

  var createBoard = function(board, callback) {
    $http({
      method: 'POST',
      url: 'api/board/create',
      data: board
    }).then(function success(board) {
      callback(board.data);
    }, function error(response) {
      console.log('error', response);
    });
  };

  var updateBoard = function(board) {
    console.log('updateBoard firing');
    $http({
      method: 'POST',
      url: 'api/board/update',
      data: board
    }).then(function success() {
      console.log('board updated');
    }, function error(response) {
      console.log('error', response);
    });
  };

  var verifyMember = function(email, callback) {
    console.log('verify member factory func firing...');
    $http({
      method: 'POST',
      url: 'api/profile/verify',
      data: email
    }).then(function success(user) {
      if(user.data.length === 0){
        return callback(false);
      }
      return callback(true);
      // console.log(user);
    }, function error(response) {
      console.log('error', response);
    });
  };

  var sendInvite = function(email) {
    console.log('sendInvite factory func firing...');
    $http({
      method: 'POST',
      url: 'api/board/invite',
      data: email
    }).then(function success() {
      console.log('invite in factory sent');
    }, function error(response) {
      console.log('error', response);
    });
  };


  return {
    loadBoard: loadBoard,
    updateBoard: updateBoard,
    createBoard: createBoard,
    verifyMember: verifyMember,
    sendInvite: sendInvite
  };

});
