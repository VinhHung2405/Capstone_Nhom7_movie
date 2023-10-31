import { https } from "./config";

export let userService={

    login:(valueForm) => {
       return https.post("/api/QuanLyNguoiDung/DangNhap", valueForm);
    },
    register: (valueForm) => {
        return https.post("/api/QuanLyNguoiDung/DangKy", valueForm);
    }
}
export let movieService= {
    getList: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachPhim");
    },
    getDetail: (id) => {
        return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
    },
    getMovieByTheater: () => {
        return https.get("api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
    }
}
export let adminSercice={
    getUserList:() => {
        return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=GP00")
    }
}