import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { movieService } from '../../service/service';
import { Progress, Rate } from 'antd';

export default function Detailpage() {
    let { id } = useParams();
    const [detail, setDetail] = useState();
    useEffect(() => {
        movieService
        .getDetail(id)
        .then((res) => {
            setDetail(res.data.content);
         })
         .catch((err) => {
            console.log(err);
         });
    }, []);  
  return (
    <div className='container flex justify-content items-center'>
        <div className=''>
          <img className='object-cover h-70 mt-6 w-60' src={detail?.hinhAnh} alt=''></img>
          <span className='block my-2'>{detail?.ngayKhoiChieu}</span>
          <span className='block'>{detail?.tenPhim}</span>
        </div>
        <div className='mx-6'>
            <Progress strokeWidth={20}
            size={100}
            strokeColor={"red"}
            format={(number) => {return  <p className='text-blue-600'>{number /10} Điểm</p>;}} 
            type="circle" percent={detail?.danhGia * 10} />
            <Rate allowHalf value={detail?.danhGia} count={10} 
            className='text-red-500 block my-2 '/>
            <NavLink className='h-10  rounded block
            leading-10 text-center mt-5 bg-red-600 text-white' to={"/booking"}>Mua Vé</NavLink>
        </div>
    </div>
  )
}
