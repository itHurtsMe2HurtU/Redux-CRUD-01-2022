import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, selectProduct } from '../features/product/productSlice';

const AddProduct = () => {

    // const [productName, setProductName] = useState('')
    // const [price, setPrice] = useState(0)
    // const [description, setdescription] = useState('')

    const product = useSelector(selectProduct);
    console.log('useSelector logged-->', product);

    const dispatch = useDispatch();

    const [addProductItem, setAddProductItem] = useState({
        name: '',
        description: '',
        price: undefined
    })

    const onChange = (e) => {
        setAddProductItem(
            {
                ...addProductItem, [e.target.name]: e.target.value
            }
        )
    }

    const addProductHandler = (e) => {
        // action to be called to update the store state
        // { ...addProduct, id: uuidv4() }
        dispatch(addProduct([{ ...addProductItem, id: uuidv4() }]))

        // at last state will be cleared so that the input fields are empty
        // setAddProductItem{name:'', description:'', price:0}
        setAddProductItem({
            name: '',
            description: '',
            price: undefined
        })
    }


    return (
        <>
            <div className='flex flex-col items-center justify-center mx-auto rounded-3xl border-2 bg-white border-red-500 shadow-xl p-5 h-auto w-3/5 text-black'>
                <h1 className='font-bold text-2xl'>
                    Please Fill this Form to Add your Products!
                </h1>
                <div className='flex flex-row items-center justify-center'>
                    <input className='w-96 h-12 pl-2 rounded-lg border-2 border-red-500 m-5' type='text' id='name' placeholder='Enter Product Name...'
                        name='name'
                        value={addProductItem.name}
                        onChange={onChange}
                    />

                    <input className='w-96 h-12 pl-2 rounded-lg border-2 border-red-500 m-5' type='number' id='price' placeholder='Enter Price...'
                        name='price'
                        value={addProductItem.price}
                        onChange={onChange}
                    />
                </div>

                <div className='flex flex-row items-center justify-center'>
                    <input className='w-96 h-12 pl-2 rounded-lg border-2 border-red-500 m-5' type='text' id='description' placeholder='Enter Description...'
                        name='description'
                        value={addProductItem.description}
                        onChange={onChange}
                    />

                    <input disabled className='w-96 h-12 p-2 rounded-lg border-2 border-red-500 m-5 text-justify items-center' type='file' id='image' placeholder='Choose File...' />
                </div>

                <button className='font-bold h-12 p-2 border-2 border-red-500 rounded-lg text-xl hover:bg-gray-300' type='button'
                    onClick={addProductHandler}
                >
                    Add Product
                </button>
            </div>
        </>
    )
}

export default AddProduct;