function khongTimThaySanPham() {
  document.getElementById("productNotFound").style.display = "block";
  document.getElementsByClassName("chitietSanpham")[0].style.display = "none";
}

function increaseQty() {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value) || 0;
  if (value < 999) {
    input.value = value + 1;
  }
}

function decreaseQty() {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value) || 0;
  if (value > 1) {
    input.value = value - 1;
  }
}

// Cập nhật sao
var rating = "";
if (sanPhamHienTai.rateCount > 0) {
  for (var i = 1; i <= 5; i++) {
    if (i <= sanPhamHienTai.star) {
      rating += `<i class="fa fa-star"></i>`;
    } else {
      rating += `<i class="fa fa-star-o"></i>`;
    }
  }
  rating += `<span> ` + sanPhamHienTai.rateCount + ` đánh giá</span>`;
}
divChiTiet.getElementsByClassName("rating")[0].innerHTML += rating;
