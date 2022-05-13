import { getGlasses } from './../service/service.js';
fetchData();

let glassList =[];
function fetchData(){
  getGlasses().then((result)=>{
    render(result.data);
  })
}
function render(getGlasses) {
  let content = "";
  for (let i in getGlasses) {
    content += `<div class="col-md-4">
         
         <img onclick="getGlass('${getGlasses[i].id}')" id="${getGlasses[i].id}" style="width: 100%;" src="${getGlasses[i].src}"  alt="..">
       
         </div>`;
        
  }
  document.getElementById("vglassesList").innerHTML = content;
}

