import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { deepPurple } from '@mui/material/colors'

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20 '>
            <div>
                <h1 className='font-bold text-xl py-7 '>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid container className='space-y-5'>
                {[1, 1, 1, 1,].map((item) => <Grid ite container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-6'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70" alt="" />
                            <div className='space-y-0 ml-5'>
                                <p>title</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                    <span>color</span>
                                    <span>size</span>
                                </p>
                                <p>seller</p>
                                <p>price</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2 text-5xl' />
                            <span>Rate & Review Product</span>
                        </Box>

                    </Grid>
                </Grid>)}

            </Grid>

        </div>
    )
}

export default OrderDetails