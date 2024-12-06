apiUrl = "https://randomuser.me/api?results=50";

async function getData(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

getData().then(data => {
    data.results.forEach((element,index) => {
        console.log(element)

        let td = $("<td></td>") 
        td.append($("<td></td>")).text(element.email)
        td.append($("<td></td>")).text(element.gender)

        let tr = $("<tr></tr>")
        tr.append(td)

        $('#myTable tbody').append(tr)
    });
})
.catch(err => console.error(err))


$(document).ready( function () {
    $('#myTable').DataTable();
} );