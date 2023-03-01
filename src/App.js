import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DanhSachSanPham from "./DanhSachSanPham";
import dulieu from "./Data/data.json";


function App() {
  const [signal, setSignal] = useState(false);
  const handleSignal = () => {
    setSignal(!signal);
  };
  const [SanPhamChiTiet, setSanPhamChiTiet] = useState({
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  });
  const handleState = sanPhamChon => {
    setSanPhamChiTiet(sanPhamChon);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          {dulieu.map((phone) => (
            <div style={{ zIndex: 2, position: "relative" }} key={phone.maSP}>
              <DanhSachSanPham
                giaBan={phone.giaBan}
                name={phone.tenSP}
                source={phone.hinhAnh}
              />
              <button style={{marginLeft:'-190px',marginBottom:'-5px',zIndex:1,position:'relative'}} className="w3-button w3-black w3-hover-green"onClick={() => handleState(phone)}>Xem chi tiết</button>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5 w3-animate-zoom">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <h3>{SanPhamChiTiet.tenSP}</h3>
                  <img
                    style={{ width: "100%" }}
                    src={SanPhamChiTiet.hinhAnh}
                    alt="dien-thoai.jpg"
                  />
                </div>
                <div className="col-8">
                  <h2 style={{ color: "black" }}>Thông số kỹ thuật</h2>
                  <table class="table">
                    <thead className="justify-content-start">
                      <tr>
                        <th>Màn hình</th>
                        <th>{SanPhamChiTiet.manHinh}</th>
                      </tr>
                      <tr>
                        <th>Hệ điều hành</th>
                        <th>{SanPhamChiTiet.heDieuHanh}</th>
                      </tr>
                      <tr>
                        <th>Camera trước</th>
                        <th>{SanPhamChiTiet.cameraTruoc}</th>
                      </tr>
                      <tr>
                        <th>Camera sau</th>
                        <th>{SanPhamChiTiet.cameraSau}</th>
                      </tr>
                      <tr>
                        <th>RAM</th>
                        <th>{SanPhamChiTiet.ram}</th>
                      </tr>
                      <tr>
                        <th>ROM</th>
                        <th>{SanPhamChiTiet.rom}</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
