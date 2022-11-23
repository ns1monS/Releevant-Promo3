function init(nPag) {
  let numUsuarios = 10;
  let paginacionElement = document.getElementById("paginacion");

  console.log("Página encontrada");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      let publis = document.getElementById("publis");
      publis.innerHTML = "<a href=posts.html onclick=seePosts>POSTS</a>";

      let usersDiv = document.getElementById("listaUsuarios");
      const users = response.data;
      let htmlContent = "<ul>";

      for (i = 0; i < users.length; i++) {
        htmlContent += `<li>${users[i].firstName} , ${users[i].lastName} , 
        <a href="usuarioDetails.html?id=${users[i].id}"><img src=${users[i].picture}></a></li> 
     `;
      }
      htmlContent += "</ul>";
      usersDiv.innerHTML = htmlContent;

      // La paginacion
      let paginacion = "";
      for (let i = 1; i <= response.total / response.limit; i++) {
        paginacion +=
          "<a href='#' id='paginacion' onclick='init(" +
          i +
          ")'>" +
          ` ${i} |` +
          "</a>";
      }
      let ultimaPagina = parseInt(response.total / response.limit) + 1;
      paginacion += `<a href="#" id='paginacion' onclick="init(${ultimaPagina})">${ultimaPagina}</a>`;

      paginacionElement.innerHTML = paginacion;
      // fin
    }
  };
  let url = `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${
    nPag - 1
  }`;
  request.open("GET", url, true);
  request.setRequestHeader("app-id", "63768b3458fe3bbbbc6f1d68");
  request.send();
}

function userDetails() {
  let request = new XMLHttpRequest();
  let userId = new URLSearchParams(window.location.search).get("id");

  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      let usersDiv = document.getElementById("usuarioDetalles");
      const users = response; 

      let htmlContent = "<ul>";

      htmlContent += `<img src=${users.picture}>`;
      htmlContent += `<li>${users.title} ${users.firstName} , ${users.lastName}</li> `;
      htmlContent += `<li>genero : ${users.gender}</li>`;
      htmlContent += `<li>Correo :  ${users.email}</li>`;
      htmlContent += `<li>Fecha de nacimiento :  ${users.dateOfBirth}</li>`;
      htmlContent += `<li>Télefono :  ${users.phone}</li>`;
      htmlContent += `<li>dirección :  ${users.location.street}</li>
                      <li>city : ${users.location.city}</li>
                      <li>city : ${users.location.state}</li>
                      <li>city : ${users.location.country}</li>
                      <li>city : ${users.location.timezone}</li>
                      `;

      htmlContent += "</ul>";
      usersDiv.innerHTML = htmlContent;
    }
  };
  let url = `https://dummyapi.io/data/v1/user/${userId}`;
  request.open("GET", url, true);
  request.setRequestHeader("app-id", "63768b3458fe3bbbbc6f1d68");
  request.send();
}

function seePosts(nPag) {
  let numPost = 10;
  let paginacionElement = document.getElementById("paginacion");

  console.log("Página encontrada");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      let postsDiv = document.getElementById("posts");
      const posts = response.data;
      let htmlContent = "";

      for (i = 0; i < posts.length; i++) {
        htmlContent += `
                      <div>
                        <li><img src=${posts[i].image} with=20px> </li> 
                        <li><b>${posts[i].tags}</b></li>
                        <li>${posts[i].text}</li>
                        <li>${posts[i].publishDate}</li>
                        <li>${posts[i].owner.title} ${posts[i].owner.firstName} ${posts[i].owner.lastName}</li>
                      </div>

       `;
      };
      postsDiv.innerHTML = htmlContent;

      // La paginacion
      let paginacion = "";
      for (let i = 1; i <= response.total / response.limit; i++) {
        paginacion +=
          "<a href='#' id='paginacion' onclick='init(" +
          i +
          ")'>" +
          ` ${i} |` +
          "</a>";
      }
      let ultimaPagina = parseInt(response.total / response.limit) + 1;
      paginacion += `<a href="#" id='paginacion' onclick="init(${ultimaPagina})">${ultimaPagina}</a>`;

      paginacionElement.innerHTML = paginacion;
      // fin
    }
  };

  let url = ` https://dummyapi.io/data/v1/post?${numPost}&page=${nPag - 1}`;
  request.open("GET", url, true);
  request.setRequestHeader("app-id", "63768b3458fe3bbbbc6f1d68");
  request.send();
}

function postsTags() {
  let request = new XMLHttpRequest();
  let userId = new URLSearchParams(window.location.search).get("id");

  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      let usersDiv = document.getElementById("postForTags");
      const users = response; 

      let htmlContent = "<ul>";

      usersDiv.innerHTML = htmlContent;
    }
  };
  let url = `https://dummyapi.io/data/v1/user/${userId}`;
  request.open("GET", url, true);
  request.setRequestHeader("app-id", "63768b3458fe3bbbbc6f1d68");
  request.send();
}