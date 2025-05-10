const dich = {
    "en": {
      "welcome": "Welcome",
      "login": "Login",
      "logout": "Logout",
      "Password": "Password",
      "CourseList": "Course list",
      "CourseSearch": "Course search",
      "Dark/Light": "Dark/Light",
      "RegisteredCourse": "Registered course",
      "Register": "Register",
      "Course": "Course",
      "Image": "Image",
      "Price": "Price",
      "Act": "Act",
      "Total": "Total",
      "FirstFtepsInProgramming": "First steps in programming",
      "ManageWebsite": "Manage website",
      "LearnToMakeGames": "Learn to make games",
      "BuildAI": "Build AI",
      "FormatDesignAndLayoutWebsite": "Format design and layout website"




    },
    "vi": {
      "welcome": "Chào mừng",
      "login": "Đăng nhập",
      "logout": "Đăng xuất",
      "Password": "Mật khẩu",
      "CourseList": "Danh sách khóa học",
      "CourseSearch": "Tìm khóa học",
      "Dark/Light": "Sáng/Tối",
      "RegisteredCourse": "Khóa học đã đăng ký",
      "Register": "Đăng ký",
      "Course": "Khóa học",
      "Image": "Hình ảnh",
      "Price": "Giá",
      "Act": "Hành động",
      "Total": "Tổng cộng",
      "FirstFtepsInProgramming": "Bước đầu học lập trình",
      "ManageWebsite": "Quản lý website",
      "LearnToMakeGames": "Học làm game",
      "BuildAI": "Xây dựng AI",
      "FormatDesignAndLayoutWebsite": "Thiết kế định dạng và Layout Website"









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