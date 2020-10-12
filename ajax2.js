document.querySelector('#but').addEventListener('click', obtener);
function obtener(){
const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'products.json', true);
xhttp.send();
xhttp.onreadystatechange = function(){

        if(this.readyState==4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let tab = document.querySelector('#tab');
            tab.innerHTML = '';
            for( let item of datos ){
                //console.log(item.codigo);
                tab.innerHTML +=  `
                    <tr>
                        <td>${item.codigo}</td>
                        <td>${item.nombre}</td>
                        <td>${item.descripcion}</td>
                        <td>${item.precio}</td>
                    </tr>
                `
            }

        }
    }
}


