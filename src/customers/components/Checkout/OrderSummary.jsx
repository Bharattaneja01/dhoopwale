import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
    const dispatch=useDispatch();
    const location=useLocation();
    const {order}=useSelector(store=>store);
    const searchParams=new URLSearchParams(location.search)
    const orderId=searchParams.get("order_id")

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])

    const handleCheckout=()=>{
        dispatch(createPayment(orderId))
    }
    return (
        <div className='space-y-6'>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard address={order.order?.shippingAddress}/>
            </div>

            <div>
                <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                    <div className='col-span-2'>
                        {order.order?.orderItems.map((item)=>(
                            <CartItem item={item}/>
                        ))}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                            <hr />
                            <div className='space-y-3 font-semibold ml-3 mr-3'>
                                <div className='flex justify-between pt-3 text-black '>
                                    <span>Price</span>
                                    <span>Rs.3434</span>
                                </div>
                                <div className='flex justify-between pt-3 text-black '>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3 text-black '>
                                    <span>Discount</span>
                                    <span className='text-green-600'>Rs.434</span>
                                </div>
                                <div className='flex justify-between pt-3 text-black font-semibold'>
                                    <span>Total Amount</span>
                                    <span className='text-green-600'>Rs.3000</span>
                                </div>
                                <Button variant='contained' className='w-full mt-10 ' sx={{ px: "10rem", py: "0.7rem", bgcolor: "#9155fd" }}
                                onClick={handleCheckout}
                                >

                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderSummary