//localStorage的方式读取数据
function get_value_from_storage(key) {
    if(localStorage.length == 0)return;

    var get_value = localStorage.getItem(key);
    if(get_value){
        return get_value;
    }else {
        return '';
    }
}
//ls 保存数据到本地
function save_value_to_storage(key,value) {

    if(!key) return;

    localStorage.setItem(key,value);

}
//ls 移除指定key的数据
function remove_key(key) {
    if(!key) return;
    localStorage.removeItem(key);
}