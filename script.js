function TaskSec3() {
	    var str = prompt('Please, enter your name: ');
	    var res = '';
	    for (var i = str.length - 1; i >= 0; i--) {
		            res += str[i];
		        }
	    alert(res);
}
