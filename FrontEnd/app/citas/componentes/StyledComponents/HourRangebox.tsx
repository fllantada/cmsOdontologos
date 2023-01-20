import React from 'react'
import {Box} from '@mui/material'
export const HourRangeBox: React.FC<{text:string}>=({text}) => {
   
//
return (
    <Box
    sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'50%',
    }}
    />
)


}
