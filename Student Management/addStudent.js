let students = [];
let warn = document.getElementById("warn");
let pop = document.getElementById("popup");
let popDel = document.getElementById("popDel");
let deleteIndex = null;
let loader = document.getElementById("ldr");

const form = document.getElementById("studentForm");

if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    let data = {
      userName: document.getElementById("name").value,
      fName: document.getElementById("fatherName").value,
      email: document.getElementById("email").value,
      pNum: document.getElementById("phoneNumber").value,
      joining: document.getElementById("date").value,
      course: document.getElementById("course").value,
      branch: document.getElementById("branch").value,
      batch: document.getElementById("batch").value
    };

    if (data.pNum.length !== 10) {
      warn.textContent = "Error:- Mobile number must be 10 digits";
      return;
    } else {
      warn.textContent = "";
    }

    students.push(data);
    openLdr();
    setTimeout(() => {
      pop.style.display = "flex";
      addData();
      form.reset();
      closeLdr();
    }, 5000);


  });
}
function closeLdr() {
  loader.style.display = "none";
}
function openLdr() {
  loader.style.display = "flex";
}

function closePop() {
  pop.style.display = "none";
}

function closeDel() {
  popDel.style.display = "none";
  deleteIndex = null;
}

function confirmDelete() {
  if (deleteIndex !== null) {
    students.splice(deleteIndex, 1);
    addData();
    closeDel();
  }
}

const tableBody = document.getElementById("studentTableBody");

function addData() {
  tableBody.innerHTML = "";
  students.forEach((data, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${data.userName}</td>
      <td>${data.fName}</td>
      <td>${data.email}</td>
      <td>${data.pNum}</td>
      <td>${data.joining}</td>
      <td>${data.course}</td>
      <td>${data.branch}</td>
      <td>${data.batch}</td>
      <td>
        <button class="btn" id="delete-${index}"><i class="ri-delete-bin-5-fill"></i></button>
        <button class="edit" id="edit-${index}">Edit</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

tableBody.addEventListener("click", (e) => {
  if (e.target.closest(".btn")) {
    let btn = e.target.closest(".btn");
    deleteIndex = parseInt(btn.id.split("-")[1]);
    popDel.style.display = "flex";
  }

  if (e.target.closest(".edit")) {
    let editBtn = e.target.closest(".edit");
    let editIndex = parseInt(editBtn.id.split("-")[1]);
    let student = students[editIndex];

    // Fill form with existing data
    document.getElementById("name").value = student.userName;
    document.getElementById("fatherName").value = student.fName;
    document.getElementById("email").value = student.email;
    document.getElementById("phoneNumber").value = student.pNum;
    document.getElementById("date").value = student.joining;
    document.getElementById("course").value = student.course;
    document.getElementById("branch").value = student.branch;
    document.getElementById("batch").value = student.batch;

    // Remove old entry before resubmitting
    students.splice(editIndex, 1);
    addData();
  }
});

// SEARCH FUNCTIONALITY
document.getElementById("s-btn").addEventListener("click", function () {
  let searchVal = document.getElementById("search").value.toLowerCase();
  let filtered = students.filter(student =>
    student.userName.toLowerCase().includes(searchVal)
  );
  displaySearchResults(filtered);
});

function displaySearchResults(dataList) {
  tableBody.innerHTML = "";
  dataList.forEach((data, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${data.userName}</td>
      <td>${data.fName}</td>
      <td>${data.email}</td>
      <td>${data.pNum}</td>
      <td>${data.joining}</td>
      <td>${data.course}</td>
      <td>${data.branch}</td>
      <td>${data.batch}</td>
      <td>
        <button class="btn" id="delete-${index}"><i class="ri-delete-bin-5-fill"></i></button>
        <button class="edit" id="edit-${index}">Edit</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}
