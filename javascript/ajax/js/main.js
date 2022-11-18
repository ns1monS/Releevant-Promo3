function init() {
  console.log("Página encontrada");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let entries = response.entries;
      let htmlContent = "<ul>";
      
      for (let i = 0; i < entries.length; i++) {
        htmlContent += `<li>${entries[i].Category} , ${entries[i].Description}</li>`;
        let entriesDiv = document.getElementById("entries");
        entriesDiv.innerHTML = htmlContent;
        

      }
    }
  };

  request.open("GET", "https://api.publicapis.org/entries", true);
  request.send();
}
