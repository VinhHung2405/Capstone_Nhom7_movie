import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function FooterDesktop() {
  return (
      <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-2">Liên kết nhanh</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Trang chủ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Phim đang chiếu</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Lịch chiếu</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Về chúng tôi</a></li>
          </ul>
        </div>
        <div className="w-1/4 mr-5">
          <h3 className="text-lg font-semibold mb-2">Video Giới Thiệu</h3>
          <video controls width="320" height="240" className="w-full">
            <source src="video.mp4"/>
          </video>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-2">Kết nối với chúng tôi</h3>
          <div className="social-icons">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white mx-1"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          </div>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
          <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
          <p>Email: example@email.com</p>
          <p>Điện thoại: (123) 456-7890</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-400">
         TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
      </div>
    </footer>
  )
}
