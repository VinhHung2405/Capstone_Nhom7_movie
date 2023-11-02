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
    },
    getListBanner: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachBanner")
    },
    getBookingDetail: (id) => {
        return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    },
     getToPurchase: (idBooking) => {
        return https.get(
            `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idBooking}`
        );
    },
    bookingTicket: (ticket) => {
        return https.post("/api/QuanLyDatVe/DatVe", ticket);
    },
    
}
export let adminService = {
    getUserList: (query = '') => {
        return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung${query}`)
    },
    deleteUser: (taiKhoan = '') => {
        return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    },

    getUserDetailById: (taiKhoan) => {
        return https.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?TaiKhoan=${taiKhoan}`)
    },

    updateUser: (payload) => {
        return https.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, payload)
    },
}
