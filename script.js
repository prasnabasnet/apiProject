apiUrl = "https://randomuser.me/api?results=50";

async function getData(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}




$(document).ready( function () {
    const table = $('#myTable').DataTable({
        columnDefs: [{ width: '15%', targets: 0 }]
    });

    getData().then(data => {
        table.clear();
        data.results.forEach((element,index) => {
            table.row.add([
                index+1,
                element.email,
                element.gender
            ]).draw()
        });
    })
    .catch(err => console.error(err))
} );