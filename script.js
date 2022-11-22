const create = document.getElementById('sukurk');
const rezult = document.getElementById('rezultatas');

create.addEventListener("click", photoCreater);


function photoCreater(){

    const img =  [
        ['https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
        ];


    for(let i = 0; i<img.length; i++){

        const random = Math.floor(Math.random() * img.length)

        console.log(img[random])
        let imgTable = document.createElement('img');
        imgTable.setAttribute('src', img[random]);
        imgTable.setAttribute('height', 150);
        imgTable.setAttribute('width', 300);
        rezult.appendChild(imgTable)
    }

    create.style.visibility = "hidden"
    let nerodyti = document.createElement('button')
    nerodyti.value = "nerodyti"
//    let  = document.createElement('button')
//    nerodyti.value = "nerodyti"
create.addEventListener("click", photoCreater);

    body.appendChild(nerodyti)


}

function hide(){
    rezult.style.visibility = "hidden";
}