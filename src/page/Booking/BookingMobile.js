import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { movieService } from "../../service/service";
import toast from "react-hot-toast";
import bgmovie from "./bgmovie.jpg"

export default function PurchaseDesktop() {
  const navigate = useNavigate();
  const {idBooking} = useParams();
  const [detailRoom, setDetailRoom] = useState([]);
  const [selectChair, setSelectChair] = useState ([]);
  let user = JSON.parse(localStorage.getItem("USER"));

  let getBookingRoom = () => {
    movieService.getToBooking(idBooking)
    .then((res) => {
        setDetailRoom(res.data.content);
        console.log(res);
     })
     .catch((err) => {
          console.log(err);
     });
  }
  useEffect(()=>{
    getBookingRoom()
  }, [])
  
  let handleSelectChair = (ghe) => {
    if(ghe.daDat) {
      return;
    }
    if(isSelected(ghe)) {
      setSelectChair((prevSelectChair) =>
      prevSelectChair.filter((chair)=> chair.maGhe !== ghe.maGhe)
      );
    } else {
      setSelectChair((prevSelectChair) => [...prevSelectChair, ghe])
    }
  };
  let isSelected = (ghe) => {
        return selectChair?.some((chair) => chair.maGhe === ghe.maGhe);
    };
    let renderSelectedChair = () => {
        return selectChair?.map((ghe) => {
            return <span key={ghe.maGhe}>Ghế {ghe.tenGhe}, </span>;
        });
    };
    let renderTotal = () => {
        return selectChair.reduce((sum, { giaVe }) => {
            return sum + giaVe;
        }, 0);
    };

  let renderBooking = () => {
        return (
            detailRoom?.danhSachGhe &&
            detailRoom?.danhSachGhe.map((ghe) => {
                return (
                    <span
                        key={ghe.maGhe}
                        className={`${
                            ghe.loaiGhe === "Vip" ? "gheVip" : "gheThuong"
                        } ${
                            ghe.daDat === true ? "gheDaDat" : "cursor-pointer"
                        }`}
                        onClick={() => handleSelectChair(ghe)}
                        style={{
                            backgroundColor: isSelected(ghe) ? "green" : "",
                        }}
                    >
                        {ghe.daDat === false ? ghe.tenGhe : "X"}
                    </span>
                );
            })
        );
    };
  let renderTicket = () => {
        let { diaChi, gioChieu, ngayChieu, tenCumRap, tenPhim, tenRap } =
            detailRoom?.thongTinPhim || {};
        return (
            <table className="w-96 tableBuyTicket text-left">
                <tbody>
                    <tr>
                        <th className="font-semibold w-1/4">Tên phim:</th>
                        <td>{tenPhim}</td>
                    </tr>
                    <tr>
                        <th className="font-semibold">Cụm rạp:</th>
                        <td>{tenCumRap}</td>
                    </tr>
                    <tr>
                        <th className="font-semibold">Địa chỉ:</th>
                        <td>{diaChi}</td>
                    </tr>
                    <tr>
                        <th className="font-semibold">Rạp:</th>
                        <td>{tenRap}</td>
                    </tr>
                    <tr>
                        <th className="font-semibold">Suất chiếu:</th>
                        <td>
                            {ngayChieu} - {gioChieu}
                        </td>
                    </tr>
                    <tr>
                        <th className="font-semibold">Chọn:</th>
                        <td>{renderSelectedChair()}</td>
                    </tr>
                    <tr>
                        <th className="font-semibold">Tổng tiền:</th>
                        <td className="text-4xl">
                            {renderTotal().toLocaleString("vi")} VND
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };
    let handleBuyTicket = () => {
        if (selectChair.length == 0) {
            return toast.error("Vui lòng chọn ghế trước");
        }
        let danhSachVe = selectChair.map((ghe) => {
            return {
                maGhe: ghe.maGhe,
                giaVe: ghe.giaVe,
            };
        });
        let listVe = {
            maLichChieu: idBooking,
            danhSachVe,
        };
        if (user) {
            movieService
                .bookingTicket(listVe)
                .then((res) => {
                    setSelectChair([]);
                    toast.success(res.data.content);
                    getBookingRoom();
                })
                .catch((err) => {
                    toast.error("Mua vé thất bại!");
                    console.log("🚀👾👽 ~ err:", err);
                });
        } else {
            toast.error("Bạn chưa đăng nhập. Hãy đăng nhập rồi đặt vé lại");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        }
    };


    return (
        <div className="background-booking" style={{
            backgroundImage: `url(${bgmovie})`,
            backgroundSize: "cover",
        }}>
            <div className="container py-5 gap-5 inline-block">
            <div>
                <div className="grow grid grid-cols-10 gap-5 mt-20">
                   {renderBooking()}
                </div>
                <div className="flex items-center justify-center gap-3 mt-5">
                  <span className="gheThuong inline-block"></span>
                    <span className="text-white">Ghế thường</span>

                    <span className="gheVip inline-block"></span>
                    <span className="text-white">Ghế Vip</span>

                    <span className="gheDaDat inline-block">X</span>
                    <span className="text-white">Ghế đã đặt</span>
                </div>
            </div>
            <div className="px-5 mt-20">
              {renderTicket()}
                <div
                className="bg-red-500 h-16 rounded-xl text-yellow-500 text-2xl font-bold text-center leading-[64px] hover:bg-red-400 cursor-pointer"
                    onClick={() => {
                        handleBuyTicket();
                    }}
                >
                    ĐẶT VÉ
                </div>
            </div>
        </div>
        </div>
    );
}