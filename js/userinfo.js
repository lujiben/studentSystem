/**
 * Created by box on 2017/2/22.
 */

//模拟用户数据
var userinfo = {"name":"div","password":"123456"};

function get_value_from_storage(key) {
    if(localStorage.length == 0)return;

    var get_value = localStorage.getItem(key);
    if(get_value){
        return get_value;
    }else {
        return '';
    }
}

function save_value_to_storage(key,value) {

    if(!key) return;

    localStorage.setItem(key,value);

}

function remove_key(key) {
    if(!key) return;
    localStorage.removeItem(key);
}