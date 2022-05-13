import { getGlasses } from "./../service/service.js";

fetchData();
function fetchData() {
  getGlasses().then((result) => {
    render(result.data);
  });
}
function render(getGlasses) {
  let content = "";
  for (let i in getGlasses) {
    content += `<div class="col-md-4 d-flex align-items-center">
         
         <img onclick="getGlass('${getGlasses[i].id}')" id="${getGlasses[i].id}" style="width: 100%;" src="${getGlasses[i].src}"  alt="..">
       
         </div>`;
  }
  document.getElementById("vglassesList").innerHTML = content;
}
window.getGlass = (value) => {
  getGlasses().then((result) => {
    let arr = result.data;
    let obj = arr.find((getGlassEle) => getGlassEle.id === `${value}`);
    let img = `<img src="${obj.virtualImg}" >`
    let info= 
    `<div d-block>
      <h3>${obj.name}- ${obj.brand}(${obj.color})</h3>
      <div class="mt-5"> <h3 class="p-1  rounded d-inline bg-danger"> ${obj.price} $</h3>  <h4 class="text-success d-inline">Stocking</h4></div>
      <p class="mt-4">${obj.description}</p>
    </div>`
    document.getElementById("avatar").innerHTML = img;
    document.getElementById("glassesInfo").innerHTML = info;
    document.getElementById("glassesInfo").style.display = "block";
  });
};

