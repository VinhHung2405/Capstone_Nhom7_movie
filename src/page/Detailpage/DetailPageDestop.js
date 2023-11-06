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
    <div className='container flex justify-content items-center mt-10 pt-20'>
        <div className=''>
          <img className='object-cover h-70 mt-6 w-60' src={detail?.hinhAnh} alt=''></img>
          <span className='block text-yellow-500 font-semibold'>{detail?.tenPhim}</span>
          <span className='block my-2 text-green-500 font-semibold'>{detail?.ngayKhoiChieu}</span>
          <span className='block my-2 text-white'>{detail?.moTa}</span>
        </div>
        <div className='mx-6'>
            <Progress strokeWidth={20}
            size={100}
            strokeColor={"red"}
            format={(number) => {return  <p className='text-blue-600' >{number /10} Điểm</p>;}} 
            type="circle" percent={detail?.danhGia * 10} />
            <Rate allowHalf value={detail?.danhGia} count={10}
            className='text-red-500 my-2'/>
        </div>
    </div>
  )
}
