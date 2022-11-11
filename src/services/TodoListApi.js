import axios from 'axios';


// simulate the backend's db
var browserStorage = (function(){
      
    var set = function(key, json_data){

        sessionStorage.setItem(key, JSON.stringify(json_data));
    };
    
    var get = function(key){
        var data = sessionStorage.getItem(key);

        if(data !== null ){

            return JSON.parse(data);
        }else{

            return false;
        }
    };
    
    var del = function(key){

        sessionStorage.removeItem(key);
    };
    
    return {
        set : set,
        get : get,
        del : del
    };
}());


// init fake api's data
if( !browserStorage.get('fake_result_data') ){
      
    function createData(id, set_dt, item, expired_dt) {

        return { id, set_dt, item, expired_dt };
    }

    const rows = [
        createData(1, 1667477614418, 'read emails', 1667477614418),
        createData(2, 1667477614418, 'workout', 1667477614418),
        createData(3, 1667477614418, 'Give thanks to Gary', 1667477614418),
        createData(4, 1667477614418, 'Give thanks to Aaron', 1667477614418),
        createData(5, 1667477614418, 'Give thanks to Odin', 1667477614418),
        createData(6, 1667477614418, 'Give thanks to Mike', 1667477614418),
        createData(7, 1667477614418, 'Give thanks to Paul', 1667477614418),
        createData(8, 1667477614418, 'Give thanks to Jay Chou', 1667477614418),
        createData(9, 1667477614418, 'Give thanks to Andy Lau', 1667477614418),
        createData(10, 1667477614418, 'Give thanks to Kobe Bryant', 1667477614418)
    ];

    browserStorage.set('fake_result_data', rows);
}


// fake api for test
const apiGetTodoList = function(data){

    return new Promise((resolve, reject) => {
        
        setTimeout(function () {

            if(data.token == 'c41c0e174e17512fc51c43338649a526'){// simulate token validate

                resolve({
                    'state' : 'success',
                    'result' : browserStorage.get('fake_result_data')
                });

            }else{

                reject({
                    'state' : 'token is error, plz sign in again!'
                });
            }
      
        }, 1000);
    });
};

const apiDelListItem = function(data){

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            if(data.token == 'c41c0e174e17512fc51c43338649a526'){// simulate token validate

                const list = browserStorage.get('fake_result_data');

                if( !list ){
      
                    reject({
                        'state' : 'list is error'
                    });

                    return;
                }

                let new_list = list.filter(row => row.id != data.del_id);

                browserStorage.set('fake_result_data', new_list);

                resolve({
                    'state' : 'success',
                    'result' : browserStorage.get('fake_result_data')
                });

            }else{

                reject({
                    'state' : 'token is error, plz sign in again!'
                });
            }
      
        }, 1000);
    });
};

const apiUpdateListItem = function(data){

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            if(data.token == 'c41c0e174e17512fc51c43338649a526'){// simulate token validate

                const list = browserStorage.get('fake_result_data');

                if( !list ){
      
                    reject({
                        'state' : 'list is error'
                    });

                    return;
                }

                if( data.item_id == '' ){
      
                    reject({
                        'state' : 'item_id is error'
                    });

                    return;
                }

                let is_updated = false;

                let new_list = list.map(function(row){
                    
                    if( row.id != data.item_id ){

                        return row;

                    }else{

                        is_updated = true;

                        return {
                            id        : data.item_id,
                            set_dt    : data.set_dt,
                            item      : data.todo_item, 
                            expired_dt: data.expired_dt
                        }
                    }
                });

                if( is_updated ){

                    browserStorage.set('fake_result_data', new_list);

                    resolve({
                        'state' : 'success',
                        'result' : browserStorage.get('fake_result_data')
                    });

                }else{

                    reject({
                        'state' : 'update failed'
                    });
                }

            }else{

                reject({
                    'state' : 'token is error, plz sign in again!'
                });
            }
      
        }, 1000);
    });
};

const apiAddListItem = function(data){

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            if(data.token == 'c41c0e174e17512fc51c43338649a526'){// simulate token validate

                const list = browserStorage.get('fake_result_data');

                if( !list ){
      
                    reject({
                        'state' : 'list is error'
                    });

                    return;
                }

                let old_list_length = list.length;

                let new_list_length = list.push({
                    id        : (Math.max(...list.map(p => p.id)) + 1 ),
                    set_dt    : data.set_dt,
                    item      : data.todo_item, 
                    expired_dt: data.expired_dt
                });


                if( new_list_length > old_list_length ){

                    browserStorage.set('fake_result_data', list);

                    resolve({
                        'state' : 'success',
                        'result' : browserStorage.get('fake_result_data')
                    });

                }else{

                    reject({
                        'state' : 'add failed'
                    });
                }

            }else{

                reject({
                    'state' : 'token is error, plz sign in again!'
                });
            }
      
        }, 1000);
    });
};

export { apiGetTodoList, apiDelListItem, apiUpdateListItem, apiAddListItem }