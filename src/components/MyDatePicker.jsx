import React from "react"

import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const MyDatePicker = (props) => {

    const [value, setValue] = React.useState(dayjs(new Date()));

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
            value={value}
            onChange={(newValue) => {

                setValue(newValue);

                props.setValueCallback(newValue);
            }}
          renderInput={(params) => <TextField id="trigger_datepicker" {...params} />}
        />
    </LocalizationProvider>
    );
}

export { MyDatePicker }