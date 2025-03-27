import { useTheme } from '@emotion/react'
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const menu=[
    {name:"Dashboard",path:"/admin"},
    {name:"Products",path:"/admin/products"},
    {name:"Customers",path:"/admin/customers"},
    {name:"Orders",path:"/admin/orders"},
    {name:"AddProduct",path:"/admin/product/create"},
]

const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box
            sx={{
                overflow:"auto",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
            }}
        >
            {isLargeScreen && <Toolbar/>}
            <List>
                {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {index%2==0?<InboxIcon/>:<MailIcon/>}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>)}
            </List>
        </Box>
    )
  return (
    <div>
        <Box sx={{display:`${isLargeScreen}? "flex":"block"`}}>
            <CssBaseline/>

            <Drawer>
                
            </Drawer>
        </Box>
    </div>
  )
}

export default Admin