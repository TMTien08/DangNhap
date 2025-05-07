const dich = {
  "en": {
    "welcome": "Welcome",
    "login": "Login",
    "logout": "Logout"
  },
  "vi": {
    "welcome": "Chào mừng",
    "login": "Đăng nhập",
    "logout": "Đăng xuất"
  }
};

const chonNN = document.getElementById("chonNN");

function apDungNN(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = dich[lang][key];
  });
}

chonNN.addEventListener("change", function () {
  const NNdaChon = this.value;
  localStorage.setItem("lang", NNdaChon); // Lưu lựa chọn
  apDungNN(NNdaChon);
});

// Áp dụng ngôn ngữ đã lưu khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  const LuuNN = localStorage.getItem("lang") || "vi";
  chonNN.value = LuuNN;
  apDungNN(LuuNN);
});
