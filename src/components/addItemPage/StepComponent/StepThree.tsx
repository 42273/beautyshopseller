import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { SxProps } from "@mui/material/styles";
import { useState } from "react";
import { categoryList, StatusList } from "./StepsDescription";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import { ItemState } from "../AddItemPage";
const StepOneBoxStyle: SxProps = {

    display: 'flex',
    flexDirection: 'column'
}

/*

Active
Inactive
Incomplete
Listing Removed
Search Suppressed
*/
export function StepThree({ input, handleChange }: { input: ItemState, handleChange: Function }) {
    const [select, setSelect] = useState<string>("Active")

    return <>

        <Box sx={StepOneBoxStyle} >
            <Box>
                available
                status
            </Box>
            <Box>
                <FormControl fullWidth sx={{ m: 1, px: 0.5 }} variant="standard">
                    {/* <InputLabel htmlFor="standard-adornment-amount">Status</InputLabel> */}
                    <TextField
                        sx={{ maxWidth: "500px", px: 1 }}
                        id="outlined-select-currency"
                        select
                        label="Status"
                        fullWidth
                        value={input.status}
                        onChange={handleChange('status')}
                    >
                        {StatusList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            </Box>
        </Box>



    </>

}