import React, { useEffect, useState } from 'react'
import { movieService } from '../../../service/service';
import Meta from 'antd/es/card/Meta';
import { Card } from 'antd';
import { NavLink, useParams } from 'react-router-dom';

export default function ListMovie() {
    const [list, setList] = useState([]);
    useEffect(() => {
        movieService.getList()
        .then((res) => {
          setList(res.data.content)
            console.log(res);

         })
         .catch((err) => {
              console.log(err);
         });
    }, []);
    let renderList = () => {
       return list.map(({hinhAnh, tenPhim, maPhim}) =>{
            return ( <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img  className='object-cover h-48' alt="example" src={hinhAnh} />}
        >
            <Meta title={tenPhim} description="www.instagram.com" />
            <NavLink className="h-10 w-ful rounded block
            leading-10 text-center mt-2 bg-red-600 text-white" 
            to={`/detail/${maPhim}`}>Đặt Vé Ngay</NavLink>
        </Card>
            )
      })
    }
  return (
    <div className='container grid grid-cols-5 gap-10 pt-20'>
      {renderList()}
    </div>
  )
}
