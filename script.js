apiUrl = "https://randomuser.me/api?results=50";

async function getData(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}




$(document).ready( function () {
    getData().then(data => {
        data.results.forEach((element,index) => {
            let tr = $("<tr></tr>");
    
            let tdGender = $("<td></td>").text(element.gender)
            tr.append(tdGender)
    
            let tdEmail = $("<td></td>").text(element.email)
            tr.append(tdEmail)
    
            $('#myTable tbody').append(tr)
        });
    })
    .catch(err => console.error(err))

    $('#myTable').DataTable();
} );