import React, { useEffect, useState } from 'react'
import { adminService, movieService, userService } from '../service/service'
import { Table, Tag, Button, Modal, Drawer, Form, Input } from 'antd'
import toast from 'react-hot-toast'
export default function UserPageDesktop() {
    const [userArr, setUserArr] = useState([])

    const [isOpenModal, setIsOpenModal] = useState(false)

    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    const [userDelete, setUserDelete] = useState()

    const [userDetail, setUserDetail] = useState()
    console.log('userDetail: ', userDetail)

    //   gọi api lấy danh sách người dùng
    const getUers = async () => {
        try {
            const res = await adminService.getUserList('?maNhom=GP00')
            setUserArr(res.data.content)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        // antd table ( dùng table đầu tiên)
        getUers()
    }, [])

    const dataSource = userArr

    const columns = [
        {
            title: 'Name',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Gmail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'User Type',
            dataIndex: 'maLoaiNguoiDung',
            render: (text) => {
                if (text == 'KhachHang') return <Tag color="green">Khách Hàng</Tag>
                else return <Tag color="red">Quản Trị</Tag>
            },
            key: 'maLoaiNguoiDung',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (value, recordItem, index) => {
                return (
                    <div className="flex gap-5">
                        <Button
                            type="primary"
                            onClick={async () => {
                                try {
                                    const res = await adminService.getUserDetailById(
                                        recordItem.taiKhoan
                                    )
                                    if (res) {
                                        // form.resetFields()
                                        setUserDetail(res.data.content)
                                        setIsOpenDrawer(true)
                                    }
                                } catch (err) {
                                    console.log('err: ', err)
                                }
                            }}
                        >
                            Edit
                        </Button>

                        <Button
                            danger
                            onClick={() => {
                                console.log('recordItem: ', recordItem)
                                setUserDelete(recordItem)
                                setIsOpenModal(true)
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                )
            },
            width: 100,
        },
    ]
    return (
        <div>
            <Table
                dataSource={userArr}
                columns={columns}
                pagination={{
                    total: 100,
                }}
            />
            <Modal
                open={isOpenModal}
                onCancel={() => setIsOpenModal(false)}
                onOk={async () => {
                    try {
                        await adminService.deleteUser(userDelete.taiKhoan)
                        getUers()
                        toast.success('Xóa user thành công!')
                    } catch (err) {
                        // toast.error('Xóa user thất bại!')
                        toast.error(err.response.data.content)
                    } finally {
                        setIsOpenModal(false)
                    }
                }}
            >
                <p>Xác nhận xóa thông tin user: {userDelete?.taiKhoan}</p>
            </Modal>
            {userDetail && (
                <Drawer
                    open={isOpenDrawer}
                    onClose={() => {
                        setIsOpenDrawer(false)
                        setUserDetail(undefined)
                    }}
                    title="Chỉnh sửa thông tin user"
                >
                    <Form
                        onFinish={async (values) => {
                            try {
                                const res = await adminService.updateUser({
                                    ...userDetail,
                                    ...values,
                                })
                                // đóng drawer
                                setIsOpenDrawer(false)

                                // set user detail
                                setUserDetail(undefined)

                                // get lại danh sách user
                                getUers()

                                toast.success('Cập nhật user thành công!')
                            } catch (err) {
                                toast.error('Cập nhật user thất bại!')
                            }
                        }}
                    >
                        <Form.Item label="Họ và tên" name="hoTen" initialValue={userDetail?.hoTen}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Họ và tên" name="email" initialValue={userDetail?.email}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Số điện thoại"
                            name="soDt"
                            initialValue={userDetail?.soDT}
                        >
                            <Input />
                        </Form.Item>
                        <Button className="!mt-10" type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form>
                </Drawer>
            )}
        </div>
    )
}
