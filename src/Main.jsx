import React from 'react';
import { createStore } from 'redux';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { TodoList } from "./pages/TodoList";
import { Err404 } from "./pages/Err404";
import { ErrReport } from "./pages/ErrReport";


const reducer = function(state='', action){
    switch(action.type) {
        case 'change_page':
            return action.next_page;
            break;
        default :
            return state;
            break;
    }
  };

const store = createStore(reducer);

const globalValue = (function(){

    const value = {};

    const set = function(key, set_val){

        value[key] = set_val;

        return value[key] == set_val ? true : false;
    }

    const get = function(key){

        return typeof value[key] !== 'undefined' ? value[key] : false;
    }

    const del = function(key){

        value[key] = false;

        return true;
    }

    return {
        set : set,
        get : get,
        del : del
    }
}());

const selectPage = (page) => {

    switch (page) {

        case 'sign_in' : 
            return (
                <SignIn globalValue={ globalValue } />);
            break;

        case 'sign_up' : 
            return (<SignUp />);
            break;

        case 'todo_list' : 
            return (
                <TodoList globalValue={ globalValue } />);
            break;

        case 'err_report' :
            return (
                <ErrReport globalValue={ globalValue } />);
            break;

        case 'test_page' : 
            return (<div>test_page is here</div>);
            break;

        case '404_page' : 
        default:
            return (<Err404 />);
            break;
    }
}


const Main = () => {

    let next_page = 'sign_in';

    const [defaultPageValue, setDefaultPageValue] = React.useState(next_page);
    const [page, setPage] = React.useState(null);

    const setUrlHash = function(to_page){

        window.location.hash = '#'+ to_page;
    };

    const setNextPage = function(to_page){

        next_page = to_page;
    };

    const changePage = function(){

        setPage(selectPage( next_page ));

        setUrlHash( next_page );


        let next_page_input = document.getElementById('next_page');

        if (typeof(next_page_input) != 'undefined' && next_page_input != null)
        {
            // element exist.
            next_page_input.value = next_page;
        }
    };

    useEffect (() => {

        changePage();// init sign_in


        store.subscribe(function(){// page change hook

            let to_page = store.getState();

            setNextPage(to_page);
            changePage();
        });

    }, []);

    useEffect (() => {

        var last_url = window.location.href;
        var url_queue = [];

        window.addEventListener('hashchange', function(e) {

            // console.log(e.oldURL);
            // console.log(e.newURL);

            var url_queue_pop = url_queue.pop();

            if( url_queue_pop == e.newURL ){// page up

                var hash = url_queue_pop.split('#')[1];

                if (hash) {

                    setNextPage(hash);
                    changePage();
                }

            }else{// handle new page 

                url_queue.push( url_queue_pop );

                url_queue.push( last_url );

                var hash = e.newURL.split('#')[1];

                if (hash) {

                    setNextPage(hash);
                    changePage();
                }
            }

            last_url = e.newURL;

        }, false);
    }, []);

    
    return (
    <Provider store={store}>
        <center>Hello ThxJSer</center>
        {page}

        {/* in production, plz remove this div */}
        <div id="debug_render_page">
            <hr/>
            <input id="next_page" type="text" defaultValue={defaultPageValue} />
            <button onClick={function(){
                
                setNextPage( document.getElementById('next_page').value );
                changePage();

            }}>load page (debug mode)</button>
        </div>
    </Provider>
    );
};

export {Main}