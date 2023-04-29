import React from 'react'
import './table.scss'
import { Link } from 'react-router-dom'
import Button from '../button/Buttons'
function ProductTable({ value, handleDelete }) {
    
    let boolean = (value.length > 0) ? true : false
    
        // const handleDelete = (id) => {
        //     axios.delete(`https://api-coffee-e8kl.onrender.com/api/product/${id}`)
            
        //     .catch(err => {
        //         console.log(err)
        //     })
        // }

    return (
        <div>
            
            {boolean && 
            <>
                <div style={{display: 'flex', paddingBottom: '16px'}}>
                <Link to='/add'>
                    <Button text={('Thêm sản phẩm')} type={('edit')} />
                </Link>
            </div>
                <table>
                    <thead>
                        <tr>
                            <th className='table__img'>Image</th>
                            <th className='table__name'>Name</th>
                            <th className='table__price'>Price</th>
                            <th className='table__function'></th>
                        </tr>
                    </thead>
        
                    <tbody>
                        {value.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <img src={item.image} alt=''/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div className='wrap__option'>
                                        <Link to= {`/update/${item._id}`}
                                        onClick={() => console.log(item)}
                                        >
                                        <div className='button edit' >Sửa</div>
                                        </Link>
                                        <div className='button delete' onClick={() => handleDelete(item._id)}>Xóa</div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
            </>}
        </div>
    )
}

export default ProductTable