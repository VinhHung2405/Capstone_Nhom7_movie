import React, { useEffect, useState } from 'react'
import { adminSercice } from '../service/service';
import { Button, Table, Tag } from 'antd';

export default function UserPage() {
  const [userArr, setUserArr] = useState([]);
  //goi ra api lay danh sach ng dung
  useEffect(() => {
    adminSercice.getUserList()
    .then((res) => {
      setUserArr(res.data.content)
     })
     .catch((err) => {
          console.log(err);
     });
  }, [])
  // antd rable (dung table dau tien)
  
// dataIndex ~ trung voi hey cua oject trong datasource
const columns = [
  {
    title: 'Name',
    dataIndex: 'hoTen',
    key: 'name',
  },
  {
    title: 'Gmail',
    dataIndex: 'email',
    key: 'age',
  },
  {
    title: 'User Type',
    dataIndex: 'maLoaiNguoiDung', 
    key: 'maLoaiNguoiDung',
    render: (text) => {
      if (text == "KhachHang")
      return <Tag color='green'>Khách Hàng</Tag>
      else return <Tag color='red'>Quan Trị</Tag>
    }
  },
  {
    title: 'Action',
    dataIndex: 'action', 
    key: 'action',
    render: () => {
      return (
       <div>
        <Button className='' success>Add</Button>
        <Button className='mx-2' danger>Delete</Button>
        <Button info>edit</Button>
       </div>
      )
    }
  },
];


  return (
    <div className='mt-20'>
      <Table dataSource={userArr} columns={columns} />
    </div>
  )
}
