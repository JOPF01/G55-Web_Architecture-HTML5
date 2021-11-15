let frutas=["kiwi","pera","corozo","sandia","melon"];

//console.log(frutas);

/*

for(let cont=0; cont<frutas.length; cont++){

    const fruta=frutas[cont];

    console.log(fruta);

}*/



for(fruta in frutas){

    console.log(frutas[fruta]);

}

// ESTRUCTURA MAP

let palabra="corozo";
console.log(palabra[0]);
console.log(palabra.length);

const mapa=new Map();
const mapa2=new Map([['nombre','You'],['apellido','Lazaro'],['edad',35]]);
console.log(mapa);
console.log(mapa2);
const ordenes=[
    {
        vendedorNombre:"Loki",
        total:600000,
        reportado:true,
    },
    {
        vendedorNombre:"Jor",
        total:00000,
        reportado:false,
    },
];
console.log(ordenes);

const respuesta=ordenes.map((item)=>item.vendedorNombre);
console.log(respuesta);

const respuesta2=ordenes.reduce((suma,elemento)=>suma+elemento.total,0);
console.log(respuesta2);