function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRows = Array.from(document.querySelectorAll("tbody tr"));
      const input = document.querySelector("#searchField").value;
      const inputValue = input;
      
      tableRows.forEach(row => {

         if (row.className === "select") {
            row.className = "";
         }

         const tableDatas = row.querySelectorAll("td");
         const [name, email, course] = tableDatas;

         if (name.textContent.includes(inputValue) ||
            email.textContent.includes(inputValue) || 
            course.textContent.includes(inputValue)) {
            row.className = "select";
         }
         
      });
   }
}