document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const switchToLogin = document.getElementById("switch-to-login");
    const switchToRegister = document.getElementById("switch-to-register");
    const backBtns = document.querySelectorAll("#back-btn");

    registerBtn.addEventListener("click", function () {
        modal.classList.add("active");
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });

    loginBtn.addEventListener("click", function () {
        modal.classList.add("active");
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    modalOverlay.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    switchToLogin.addEventListener("click", function () {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    switchToRegister.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    backBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            modal.classList.remove("active");
        });
    });
});
