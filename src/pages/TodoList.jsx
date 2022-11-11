import React from "react"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from 'dayjs';

// table
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// common
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// self components
import { ButtonOptionEditDel } from '../components/ButtonOptionEditDel';
import { Copyright } from '../components/Copyright';
import { CustomizeDialog } from '../components/CustomizeDialog';
import { MyDatePicker } from '../components/MyDatePicker';

// api call service
import { apiGetTodoList, apiDelListItem, apiUpdateListItem, apiAddListItem } from '../services/TodoListApi.js'; 


const BootstrapButton = styled(Button)({
    boxShadow    : 'none',
    textTransform: 'none',
    fontSize     : 16
});

const schema = yup.object().shape({
    item_id   : yup.string(),
    todo_item : yup.string().required(),
    expired_dt: yup.date().typeError("please enter a valid date").required()
});

const loading_progress_img = (<div style={{textAlign:'center'}}><CircularProgress /></div>);

const TodoList = (props) => {

    let api_token = props.globalValue.get('token');
    
    const dispatch = useDispatch();

    const [todo_list, setTodoList] = React.useState([]);
    const [loading_img, setLoadingImg] = React.useState(loading_progress_img);


    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver : yupResolver(schema),
    });

    const onSelectDatePicker = function(newValue){

        setValue("expired_dt", dayjs(newValue).format('YYYY/MM/DD'));
    }

    const onSubmitHandler = (data) => {

        console.log({ data });        

        (async function callApi() {
            try {

                let res = {};

                let params = {
                    token     : api_token,
                    set_dt    : dayjs(new Date()).valueOf(),
                    item_id   : parseInt(data.item_id, 10),
                    todo_item : data.todo_item,
                    expired_dt: dayjs(data.expired_dt).valueOf()
                };

                if( data.item_id == -1 ){// add new item

                    res = await apiAddListItem(params);

                    if( res.state != 'success' ){

                        throw 'add failed';
                    }

                }else{// update exist item

                    res = await apiUpdateListItem(params);

                    if( res.state != 'success' ){

                        throw 'update failed';
                    }
                }
                //console.log(res);

                document.getElementById('customize_dialog_close').click()
                alert('ok');

                setTodoList(res.result);

            } catch (err) {// access api failed

                alert(JSON.stringify(err));

                props.globalValue.set('error_log', err); 

                dispatch({
                    type: 'change_page',
                    next_page: 'err_report'
                });
            }
        }());
    };

  
    useEffect(() => {
      
        if( api_token ){

            setTimeout(() => {

                alert('pass data from sign_in page,\r\n\r\n'
                    + 'token: '+ api_token + '\r\n\r\n'
                    + 'in this page, we can use the token to access other APIs');
            }, 1000);
        }

        // use token access api example
        (async function(){
            try {
                // here allow sync call api 
                // let res = await getApiResultA();
                // alert(JSON.stringify(res));
                // let res = await getApiResultB();
                // alert(JSON.stringify(res));
                // let res = await getApiResultC();
                // alert(JSON.stringify(res));

                const res = await apiGetTodoList({
                    token : api_token
                });
                // alert(JSON.stringify(res));

                setTodoList(res.result);

                setLoadingImg(null);

            } catch (err) {

                alert(JSON.stringify(err));

                props.globalValue.set('error_log', err.state); 

                dispatch({
                    type: 'change_page',
                    next_page: 'err_report'
                });
            }
        }());
    }, []);


    useEffect(() => {

        return () => {// page did unmount's callback

            if( api_token ){

                alert('exit this page, global values\' token will be clean!');

                props.globalValue.del('token');
            }
        };
    }, []);

    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Set Date Time</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Expired Date</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>        
            <TableBody>
            {todo_list.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {dayjs(row.set_dt).format('YYYY/MM/DD hh:mm:ss')}
                    </TableCell>
                    <TableCell>{row.item}</TableCell>
                    <TableCell align="right">{dayjs(row.expired_dt).format('YYYY/MM/DD')}</TableCell>
                    <TableCell align="right">
                        <ButtonOptionEditDel 
                            editCallback={function(){

                                // set form input value
                                setValue("item_id", row.id);
                                setValue("todo_item", row.item);
                                setValue("expired_dt", dayjs(row.expired_dt).format('YYYY/MM/DD'));

                                document.getElementById('customize_dialog_open').click();
                            }} 
                            delCallback={function(){

                                var r = confirm('delete this item?');

                                if (r != true) {

                                    return;
                                }

                                (async function(){
                                    try {
                                        const res = await apiDelListItem({
                                            token : api_token,
                                            del_id: row.id
                                        });

                                        if( res.state == 'success' ){

                                            alert('del success');
                                            setTodoList(res.result);
                                        }

                                    } catch (err) {

                                        alert(JSON.stringify(err));

                                        props.globalValue.set('error_log', err.state); 

                                        dispatch({
                                            type: 'change_page',
                                            next_page: 'err_report'
                                        });
                                    }
                                }());
                            }} />
                    </TableCell>
                </TableRow>
            ))}
                <TableRow
                    key="-1"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">
                        <BootstrapButton
                            type="button"
                            variant="contained"
                            onClick={function(){

                                // reset form input
                                reset({
                                    item_id   : '-1',
                                    todo_item : '',
                                    expired_dt: ''
                                });

                                document.getElementById('customize_dialog_open').click();
                            }}
                        >
                            Add
                        </BootstrapButton>
                    </TableCell>
                </TableRow>
        </TableBody>
      </Table>

      { loading_img }

      <Copyright sx={{ mt: 5 }} />
      
      {// init CustomizeDialog
        (<CustomizeDialog title='Item Content' body={(
            <Box
              sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
                <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} noValidate sx={{ mt: 1 }}>
                    <TextField 
                        {...register("todo_item")} 
                        margin="normal"
                        required
                        fullWidth
                        id="todo_item"
                        name="todo_item"
                        type="text"
                        autoFocus 
                        label="Todo Item" 
                        InputProps={{
                            startAdornment: <InputAdornment position="start">&nbsp;</InputAdornment>,
                        }}
                    />
                    {errors.todo_item && (function(msg){

                        return (<Alert severity="error">{msg}</Alert>)
                    }(errors.todo_item.message))}
                    <br/>
                    <TextField onClick={() => {
                        document.getElementById('trigger_datepicker').click()
                    }}
                        {...register("expired_dt")} 
                        margin="normal"
                        required
                        fullWidth
                        name="expired_dt"
                        type="text"
                        id="expired_dt" 
                        label="Expired Date" 
                        InputProps={{
                            startAdornment: <InputAdornment position="start">&nbsp;</InputAdornment>,
                        }}
                    />
                    {errors.expired_dt && (function(msg){

                        return (<Alert severity="error">{msg}</Alert>)
                    }(errors.expired_dt.message))}
                    <br/>
                    <Button id="item_submit"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save
                    </Button>

                    {/* in production, plz set this div's css none */}
                    <div id="debug_mode" style={{display:'none'}} >
                        <hr/>
                        <input id="item_id" name="item_id" 
                        {...register("item_id")} type="text" />
                        <br/>
                        <MyDatePicker setValueCallback={onSelectDatePicker} />
                    </div>
                </Box>
            </Box>)} />)}

    </TableContainer>);
};

export { TodoList }