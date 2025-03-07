function sendMessageFrom(){
    alert('Form submited Successfully');
    return false;
}

$('#sendMessageFrom').submit(function(){
    alert('Form submited Successfully');
    return false;
});
// let currentDate = new Date();
// console.log(currentDate);

function akibWAtch(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var watch = `${hours} : ${minutes} : ${seconds}`;
    $('#watchResonse').text(watch);
}
akibWAtch();
setInterval(akibWAtch, 1000);


function getSearchResult(){
    $('#searchresult').html('<span class="w-100 text-center bg-success text-white p-2 rounded">Search Results print here</span>')
}