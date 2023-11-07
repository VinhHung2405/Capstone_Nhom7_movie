import React, { useEffect, useState } from 'react'
import { movieService } from '../../service/service';
import { Carousel } from 'antd';

const contentStyle = {
  height: "700px",
  color: "#fff",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export default function Intro() {
  const [listBanner, setBanner] = useState([]);
  useEffect(() => {
    movieService.getListBanner()
     .then((res) => {
      setBanner(res.data.content)
        console.log(res);
     })
     .catch((err) => {
          console.log(err);
     });
  }, [])
  let renderBanner = () => {
    return listBanner.map(({ hinhAnh, maBanner }) => {
      return (
        <div key={maBanner}>
          <div
            style={{
              ...contentStyle,
              width: "100%",
              height: "100vh",
            }}
          >
            <img
              src={hinhAnh}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                
              }}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        backgroundPosition: "center",
        objectFit: "cover",
        backgroundSize: "cover",
        boxShadow: " inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
      }}
    >
      <Carousel style={{ margin: 0 }} effect="fade">
        {renderBanner()}
      </Carousel>
    </div>
  )
}
