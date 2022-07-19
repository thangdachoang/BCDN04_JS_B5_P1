//BT1
// Hàm main
function tuyenSinh(){
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var diem1 = Number(document.getElementById("mon1").value);
    var diem2 = Number(document.getElementById("mon2").value);
    var diem3 = Number(document.getElementById("mon3").value);
    var diemKhuVuc = Number(document.getElementById("khuVuc").value);
    var diemDoiTuong = Number(document.getElementById("doiTuong").value);
    
  

    document.getElementById("txtTuyenSinh").innerHTML=checkKetQua(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong,diemChuan);
    
}
document.getElementById("btnTuyenSinh").onclick = tuyenSinh;


//hàm checkKetQua
function checkKetQua(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong,diemChuan){
    var tongDiem= tinhDiem(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong);
    if (tongDiem !== 0){
        if(tongDiem >= diemChuan){
            return "Bạn đã đậu, Tổng điểm: " + tongDiem;
        }else{
            return "Bạn đã rớt, Tổng điểm: " + tongDiem;
        }
    }else{
        return "Bạn đã rớt, vì có môn điểm 0"
    }
}
//hàm tính điểm

function tinhDiem(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong){
    if(diem1 > 0 && diem2>0 && diem3>0){
        return tongDiem = diem1+diem2+diem3+diemKhuVuc+diemDoiTuong;
    }else{
        return tongDiem=0;
    }
}


//BT2

//hàm main 
function tienDien(){
    //giá tiền của từng đoạn KW
    const tien50KwDau = 500;
    const tien50kwKe = 650;
    const tien100KwKe = 850;
    const tien150KwKe = 1100;
    const tienConLai = 1300;
    var hoTen = document.getElementById("user").value;
    var soKw = Number(document.getElementById("soKw").value);

    var content =""
    
    if(tongTinhTien(soKw,tien50KwDau,tien50kwKe,tien100KwKe,tien150KwKe,tienConLai) !== 0){
        content = "Họ và tên: " + hoTen +"; Tiền điện: " + tongTinhTien(soKw,tien50KwDau,tien50kwKe,tien100KwKe,tien150KwKe,tienConLai).toLocaleString() +" VND";
    }else{
        content = "Nhập sai thông tin"
    }
    document.getElementById("txtTienDien").innerHTML=content;
}
document.getElementById("tinhTienDien").onclick = tienDien;

//hàm tính tiền điện

function tongTinhTien(soKw,tien50KwDau,tien50kwKe,tien100KwKe,tien150KwKe,tienConLai){
  
    if(soKw>0){
        if(soKw<=50){
            return soKw*tien50KwDau;
        }else if(soKw>50 && soKw<=100){
            return tien50KwDau*50+(soKw-50)*tien50kwKe;
        }else if(soKw>100 && soKw<=200){
            return tien50KwDau*50+tien50kwKe*50+tien100KwKe*(soKw-100);
        }else if(soKw>200 && soKw <= 350){
            return tien50KwDau*50+tien50kwKe*50+tien100KwKe*100+tien150KwKe*(soKw-200);
        }else{
            return tien50KwDau*50+tien50kwKe*50+tien100KwKe*100+tien150KwKe*150+tienConLai*(soKw-350);
        }
    }else{
        return 0;
    }
}
