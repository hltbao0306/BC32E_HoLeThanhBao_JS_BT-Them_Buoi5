//----------Bài tập 3----------\\
document.getElementById('btnTinhTienThue').onclick = function(e){
    e.preventDefault();
    tinhTienThue('HoTen');
}

function tinhThuNhap(id1, id2) {
    var txtThuNhapNam = Number(domID(id1).value);
    var txtSoNguoiPhuThuoc = Number(domID(id2).value);

    var txtThuNhapChiuThue = txtThuNhapNam - 4e6 - txtSoNguoiPhuThuoc * 1600000;
    return txtThuNhapChiuThue;
}

function tinhTienThue(id3){
    var txtHoTen = document.getElementById(id3).value;
    var txtThuNhapChiuThue = tinhThuNhap('txtThuNhapNam', 'txtSoNguoiPhuThuoc');
        //console.log(formatter.format(txtThuNhapChiuThue));
    var txtTienThue = 0;
    if (txtThuNhapChiuThue > 0 && txtThuNhapChiuThue <= 60e6) {
        txtTienThue = txtThuNhapChiuThue * 0.05;
    } else if (txtThuNhapChiuThue > 60e6 && txtThuNhapChiuThue <= 120e6) {
        txtTienThue = txtThuNhapChiuThue * 0.1;
    } else if (txtThuNhapChiuThue > 120e6 && txtThuNhapChiuThue <= 210e6) {   
        txtTienThue = txtThuNhapChiuThue * 0.15;
    } else if (txtThuNhapChiuThue > 210e6 && txtThuNhapChiuThue <= 384e6) {
        txtTienThue = txtThuNhapChiuThue * 0.2;
    } else if (txtThuNhapChiuThue > 384e6 && txtThuNhapChiuThue <= 624e6) {
        txtTienThue = txtThuNhapChiuThue * 0.25;
    } else if (txtThuNhapChiuThue > 624e6 && txtThuNhapChiuThue <= 960e6) {
        txtTienThue = txtThuNhapChiuThue * 0.3;
    } else {
        txtTienThue = txtThuNhapChiuThue * 0.35;
    }
    
    document.getElementById('ketQua_b3').innerHTML = '👉' + 'Họ Tên: ' + txtHoTen + '; Số thuế thu nhập cá nhân phải đóng là: ' + Intl.NumberFormat("vn-VN").format(txtTienThue) + ' VND';
}

//----------Bài tập 4----------\\
document.getElementById('btnTinhTienCap').onclick = function(e){
    e.preventDefault();
    tinhTienThue('chonKH', 'maKH', 'soKenhCaoCap', 'soKN');
}

// function ketNoiDN(doanhNghiep){
//     var kiemTra = domID("chonKH").value;
//     if (kiemTra === "doanhNghiep") {
//         document.getElementById("soKN").style.display = "block";
//     } else {
//         document.getElementById("soKN").style.display = "none";
//     }
// }
  
function tinhTienCap(id1, id2, id3, id4) {
    var chonKhachHang = domID(id1).value;
    var maKhachHang = domID(id2).value;
    var soKenhCaoCap = Number(domID(id3).value);
    var soKetNoi = Number(domID(id4).value)*1;
    
    var ketQua = 0;

    var phiXuLyHD = 0;
    var phiDichVuCB = 0;
    var thueKenhCaoCap = 0;
        if (chonKhachHang === "nhaDan") {
            var phiXuLyHD = 4.5;
            var phiDichVuCB = 20.5;
            var thueKenhCaoCap = 7.5;
            ketQua = phiXuLyHD + phiDichVuCB + thueKenhCaoCap * soKenhCaoCap;
        } else if (chonKhachHang === "doanhNghiep") {
            var phiXuLyHD = 15;
            var phiDichVuCB = 75;
            var thueKenhCaoCap = 50;
            if (soKetNoi <= 10) {
            ketQua = phiXuLyHD + phiDichVuCB + thueKenhCaoCap * soKenhCaoCap;
            } else if (soKetNoi > 10) {
            ketQua =
                phiXuLyHD +
                phiDichVuCB +
                (soKetNoi - 10) * 5 +
                thueKenhCaoCap * soKenhCaoCap;
            }
        }
    document.getElementById("ketQua_b4").innerHTML = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + Intl.NumberFormat("en-US").format(ketQua.toFixed(2));
}