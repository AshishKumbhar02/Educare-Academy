const form = document.querySelector(".contact-form");
const btn = document.querySelector(".btn");
const btnText = document.querySelector(".btn-text");
const btnIcon = document.querySelector(".btn-icon");

function setLoading(isLoading) {
  btn.disabled = isLoading;

  if (isLoading) {
    btnText.textContent = "Sending...";
    btnIcon.classList.remove("fa-paper-plane");
    btnIcon.classList.add("fa-spinner", "fa-spin");
  } else {
    btnText.textContent = "Send Message";
    btnIcon.classList.remove("fa-spinner", "fa-spin");
    btnIcon.classList.add("fa-paper-plane");
  }
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");

  const icons = {
    success: "✅",
    error: "❌",
  };

  toast.innerHTML = `
    <span style="margin-right:8px">${icons[type] || "ℹ️"}</span>
    <span>${message}</span>
  `;

  Object.assign(toast.style, {
    position: "fixed",
    bottom: "100px",
    left: "50%",
    transform: "translateX(-50%) translateY(20px)",
    padding: "12px 18px",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "14px",
    zIndex: "9999",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    background:
      type === "success"
        ? "linear-gradient(135deg, #43aa8b, #2d6a4f)"
        : "linear-gradient(135deg, #e63946, #a4161a)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    opacity: "0",
    transition: "all 0.3s ease",
  });

  document.body.appendChild(toast);

  // animate in
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  });

  // auto remove with animation
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !phone || !email || !message) {
    showToast("Please fill all fields ❌", "error");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    showToast("Enter valid 10 digit mobile number ❌", "error");
    return;
  }

  setLoading(true);

  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", "+91" + phone);
  formData.append("email", email);
  formData.append("message", message);

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyggJFQe4M9npJUSoIv-M7qr-snCAP_SiLX7_wih3febLITwVgzB7PfrGJsCfO0TSlCBg/exec",
      {
        method: "POST",
        body: formData,
      },
    );

    if (res.ok) {
      showToast("Message sent successfully ✅", "success");
      form.reset();
    } else {
      throw new Error("Server Error");
    }
  } catch (err) {
    console.error(err);
    showToast("Failed to send message ❌", "error");
  } finally {
    setLoading(false);
  }
});
