emailjs.init("GeZB74oa2OEcJJwwk"); // Your EmailJS Public Key

let generatedOTP = "";
let otpExpireTime = null;
let isVerified = false;

document.addEventListener("DOMContentLoaded", function () {
  const sendOtpBtn = document.getElementById("sendOtpBtn");
  const verifyOtpBtn = document.getElementById("verifyOtpBtn");
  const resendOtpBtn = document.getElementById("resendOtpBtn");
  const demoForm = document.getElementById("demoForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Enable Send OTP Button only when Name & Email filled
  [nameInput, emailInput].forEach((input) => {
    input.addEventListener("input", () => {
      sendOtpBtn.disabled = !(
        nameInput.value.trim() && emailInput.value.trim()
      );
    });
  });

  /* SEND OTP */
  sendOtpBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const name = nameInput.value.trim();

    if (!name || !email) {
      alert("Please fill Name and Email first");
      return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    otpExpireTime = Date.now() + 2 * 60 * 1000; // 2 min expiry

    emailjs
      .send("service_8ybfxbs", "template_ad380zd", {
        to_email: email, // OTP will go to this email
        otp: generatedOTP,
        user_name: name,
      })
      .then(() => {
        alert("OTP sent to your email 📧");
        document.getElementById("otpBox").style.display = "block";
        document.getElementById("otpActions").style.display = "flex";
      })
      .catch((error) => {
        alert("OTP failed ❌ Check template ID or EmailJS setup");
        console.log(error);
      });
  });

  /* VERIFY OTP */
  verifyOtpBtn.addEventListener("click", function () {
    const userOtp = document.getElementById("otp").value.trim();

    if (!otpExpireTime || Date.now() > otpExpireTime) {
      alert("OTP Expired ❌ Please resend");
      return;
    }

    if (userOtp === generatedOTP.toString()) {
      alert("Email Verified ✅");
      isVerified = true;
      document.getElementById("submitBtn").disabled = false;
      sendOtpBtn.disabled = true;
    } else {
      alert("Wrong OTP ❌");
    }
  });

  /* RESEND OTP */
  resendOtpBtn.addEventListener("click", function () {
    sendOtpBtn.click();
  });

  /* FORM SUBMIT */
  demoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!isVerified) {
      alert("Please verify email first ❌");
      return;
    }

    const formData = {
      name: nameInput.value.trim(),
      mobile: document.getElementById("mobile").value.trim(),
      email: emailInput.value.trim(),
      class: document.getElementById("class").value.trim(),
    };

    // Send form data via EmailJS
    emailjs
      .send("service_8ybfxbs", "template_wnuyabq", formData)
      .then(() => {
        // Save to Google Sheet
        const formBody = new FormData();
        formBody.append("name", formData.name);
        formBody.append("mobile", formData.mobile);
        formBody.append("email", formData.email);
        formBody.append("class", formData.class);

        return fetch(
          "https://script.google.com/macros/s/AKfycbz4wJ66yEFx3gLtkAhsedscvc8NilVnN4pwQocqMFt4389mQ5HLzPOe-m0dSCqf4NVU/exec",
          {
            method: "POST",
            body: formBody,
          },
        );
      })
      .then((res) => res.text())
      .then((data) => {
        console.log("Saved:", data);
        showSuccessPopup();
        demoForm.reset();
        document.getElementById("submitBtn").disabled = true;
        document.getElementById("otpBox").style.display = "none";
        document.getElementById("otpActions").style.display = "none";
        isVerified = false;
      })
      .catch((error) => {
        alert("Submission Failed ❌");
        console.log(error);
      });
  });
});

/* SUCCESS POPUP */
function showSuccessPopup() {
  let popup = document.createElement("div");
  popup.innerHTML = "✅ Form Submitted Successfully";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%,-50%)";
  popup.style.background = "#28a745";
  popup.style.color = "#fff";
  popup.style.padding = "20px 40px";
  popup.style.fontSize = "18px";
  popup.style.borderRadius = "8px";
  popup.style.zIndex = "9999";
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}
