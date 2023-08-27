import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import '@fontsource/roboto/400.css';

function Navbar() {
    return (
        <nav style={{width:"100%", height:"50px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{paddingLeft: "10px"}}>
                <Typography variant="button">
                    {
                        <NavLink style={{textDecoration:'none', color:'dodgerblue'}} to='/'>
                            Portfolio
                        </NavLink>
                    }
                </Typography>
            </div>
            <div style={{maxWidth: '50%', paddingRight: "10px", display:"flex", flexDirection:"row", justifyContent:"space-between", columnGap:'20px'}}>
                <Typography variant='button'>
                    <NavLink style={{textDecoration:'none', color:'dodgerblue'}} to='/jobs'>
                        Job Submitter
                    </NavLink>
                </Typography>
                <Typography variant='button'>
                    <NavLink style={{textDecoration:'none', color:'dodgerblue'}} to='/integrations'>
                        Integrations
                    </NavLink>
                </Typography>
                <Typography variant='button'>
                    <NavLink style={{textDecoration:'none', color:'dodgerblue'}} to='/auth'>
                        Auth
                    </NavLink>
                </Typography>
                <Typography variant='button'>
                    <NavLink style={{textDecoration:'none', color:'dodgerblue'}} to='/contact'>
                        Contact
                    </NavLink>
                </Typography>
            </div>
        </nav>
    );
}
 
export default Navbar;