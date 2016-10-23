angular
    .module('red23-site')
    .controller('UserDeleteCtrl', ['httpService', '$uibModalInstance','$state',UserDeleteCtrl]);
var deleteById='/api/user/'
var alerts = []
function UserDeleteCtrl(httpService,$uibModalInstance,$state){
    this.ok = function (id) {
        console.log("deleting user id=> "+id)
        httpService.deleteById(deleteById,id).then(function(res){
            console.log(JSON.stringify(res))
            $state.reload()
        },function(error){
            console.error(error.stack)
            var alert={
                type: 'danger',
                msg: 'Oh snap! error occurred when deleting user!'
            }
            alerts.push(alert)
        })
		$uibModalInstance.close();
	};

	this.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}