import React, { useEffect, useState } from "react";
import { movieService } from "../../../service/service";
import { ConfigProvider, Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
const onChange = (key) => {
  console.log(key);
};
export default function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        setHeThongRap(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderHeThongRap = () => {
    return heThongRap.map((heThong) => {
      return {
        key: heThong.maHeThongRap,
        label: <img className="w-16" src={heThong.logo} alt="" />,
        children: (
          <Tabs
            style={{
              height: 500,
            }}
            tabPosition="left"
            items={heThong.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className=" tab-content text-left w-96 whitespace-normal">
                    <p style={{
                      color:'#fb8500',
                      fontSize: '18px',
                      fontWeight: '600'
                    }}>{cumRap.tenCumRap}</p>
                    <p style={{
                      color: 'white'
                    }}>{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div
                    style={{
                      height: 500,
                      overflowY: "scroll",
                    }}
                  >
                    {renderDsPhim(cumRap)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  let renderDsPhim =(cumRap) => {
    return cumRap.danhSachPhim.map((phim) => {
      return (
        <div className="flex space-x-3 mb-2">
          <img className="w-20 h-32 object-cover" src={phim.hinhAnh} alt=""/>
          <div>
            <h3 className="font-medium" style={{
              color:'#fb8500',
              fontSize: '18px'
            }}>{phim.tenPhim}</h3>
            <div className="grid grid-cols-3 gap-3">
              {phim.lstLichChieuTheoPhim.slice(0, 9).map((lichChieu) => {
                return<NavLink to={`/booking/${lichChieu.maLichChieu}`}
                 className="
                rounded bg-red-600 px-2 py-1 text-white
                "
                style={{
                  backgroundColor: '#FF4B4B',
                  color:"white"
                }}
                >{moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY - hh:mm")}
                </NavLink>
              })}
            </div>
          </div>
      </div>
      )
    })
  }
  //   https://coolors.co/palettes/trending
  return (
    <div className="list-movie">
      <div className="container py-20">
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
          },
        }}
      >
        <Tabs
          style={{
            height: 500,
          }}
          tabPosition="left"
          defaultActiveKey="1"
          items={renderHeThongRap()}
          onChange={onChange}
        />
      </ConfigProvider>
    </div>
    </div>
  );
}

