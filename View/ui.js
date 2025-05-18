
document.addEventListener('DOMContentLoaded',  () => {
    const res=document.getElementById('result')
    document.getElementById('submit').addEventListener('click', async(event) => {
        event.preventDefault()
        const URL = document.getElementById('url').value
        if (url.value =="")
        {
            alert("Enter the URL")
        }
        const  response= await fetch('/url',   {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({url:URL})
        })
        const data= await response.json();
        // console.log('ShortID',data.yourShortId);
        res.innerHTML=`<strong>Your Link:</strong><a href="http://localhost:2828/url/${data.yourShortId}"  target="_blank" style="color:#fff;">`+"http://localhost:2828/url/"+data.yourShortId+"</a>";
        
    });
});
