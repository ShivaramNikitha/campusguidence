// ================= LOGIN =================
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (
        (username === "24RH1A67Z2" && password === "12345") ||
        (username === "hod_ds" && password === "ds@2026")
    ) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("app-content").style.display = "block";

        loadAllData();
    } else {
        document.getElementById("login-msg").innerText = "Invalid credentials";
    }
});


// ================= LOAD ALL DATA =================
function loadAllData() {
    loadAnnouncements();
    loadDepartments();
    loadAttendance();
}


// ================= ANNOUNCEMENTS =================
function loadAnnouncements() {
    const announcements = [
        "Orientation on 10 April 2026 at 9:00 AM",
        "Library closed on 12 April 2026",
        "Sports Meet on 25 April 2026"
    ];

    const announceList = document.getElementById("announce-list");
    announceList.innerHTML = "";

    announcements.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a;
        announceList.appendChild(li);
    });
}


// ================= DEPARTMENTS =================
function loadDepartments() {
    const departments = [
        { name: "CSE - Block-6", faculty: ["Dr. Asha Reddy", "Prof. Ravi Kumar"] },
        { name: "DS - Block-6", faculty: ["Dr. Suresh Babu", "Prof. Nisha Verma"] },
        { name: "ECE/EEE - Block-1", faculty: ["Dr. Kiran Rao"] },
        { name: "IT - Block-6", faculty: ["Prof. Rekha Rani"] }
    ];

    const deptList = document.getElementById("dept-list");
    deptList.innerHTML = "";

    departments.forEach(dept => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${dept.name}</strong><ul></ul>`;

        const facultyUl = li.querySelector("ul");

        dept.faculty.forEach(f => {
            const fLi = document.createElement("li");
            fLi.textContent = f;
            facultyUl.appendChild(fLi);
        });

        deptList.appendChild(li);
    });
}


// ================= ATTENDANCE =================
function loadAttendance() {
    const attendance = Math.floor(Math.random() * 21) + 80;

    document.getElementById("attendance-value").textContent =
        attendance + "%";
}


// ================= UPDATE ATTENDANCE =================
document.getElementById("update-attendance").addEventListener("click", () => {
    const attendance = Math.floor(Math.random() * 21) + 80;

    document.getElementById("attendance-value").textContent =
        attendance + "%";
});