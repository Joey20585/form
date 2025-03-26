const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm_password");
        const passwordMatchMsg = document.getElementById("password_match_msg");

        confirmPassword.addEventListener("input", () => {
            if (password.value !== confirmPassword.value) {
                passwordMatchMsg.textContent = "Passwords do not match!";
                passwordMatchMsg.style.color = "red";
            } else {
                passwordMatchMsg.textContent = "Passwords match!";
                passwordMatchMsg.style.color = "green";
            }
        });