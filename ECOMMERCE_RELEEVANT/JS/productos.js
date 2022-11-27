
function productosDestacados(){
   
    const request= new XMLHttpRequest(); //creame un objet (XMLHttp...). XMLHtto..proporciona informacion de una URL sin tener que descargar la pagina:var req (new XMLHttpRequest())
   
    request.onreadystatechange = function() {
        console.log(`estado actual ${this.readyState}`);

        if(this.readyState == 4 && this.status == 200){
         
            const response = JSON.parse(this.responseText);
            let usersDiv = document.getElementById("destacados");
            const users = response.data;
            let htmlContent = "<ul>";
           
             for(let i = 0; i < users.length; i++) {
                htmlContent += `<li><a href="#">  <img src="${users[i].picture} ">
                <li>, ${users[i].firstName}, ${users[i].lastName}</li>`
            }
                htmlContent += "</ul>"
            usersDiv.innerHTML = htmlContent;
        }
        
    }
    request.open("GET", `http://localhost:8801/productosDestacados`, true);
    request.send();

}