let employees = [];
if(document.getElementById("studentForm")){
    let form = document.getElementById("studentForm");
    form.addEventListener("submit",(even)=>{
        even.preventDefault();
        let empData = {
            empName : document.getElementById("name").value,
            empFather : document.getElementById("fatherName").value,
            empEmail : document.getElementById("email").value,
            empNum : document.getElementById("phoneNumber").value,
            joinDate : document.getElementById("date").value
        };
        employees.push(empData);
        console.log(employees);
        alert("Registratin Successfully");
       form.reset(); 
        
    });
}
// --- Table ---
if(document.getElementById("tableData")){
    let tableDetail = document.getElementById("tableData");
    
}