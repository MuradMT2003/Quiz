let employees = [
    {
        Name: "Murad",
        Age: 20
    },
    {
        Name: "Ayxan",
        Age: 21
    },
    {
        Name: "Adil",
        Age: 22
    },

];
let list = document.querySelector("#list");
let button = document.querySelector("#button");
button.addEventListener('click', () => {
    let count = 1;
    let tb = `
       <tr>
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">Age</th>
       </tr>`;
    employees.forEach(item => {
        tb += `<tr>
              <th scope="row">${count}</th>
              <td>${item.Name}</td>
              <td>${item.Age}</td>
              
            </tr>
         `;
        count++;
    });
    list.innerHTML = tb;
});



