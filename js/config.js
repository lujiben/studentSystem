/**
 * Created by box on 2017/2/22.
 */
function first_Login_YESORNO(){
    if(localStorage.length == 0)return;

    var first = localStorage.getItem('FIRST');

    alert("重新登录");
    if(first)
        return true;
    else
        return false;

}