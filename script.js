const create = document.getElementById('sukurk');
const rezult = document.getElementById('rezultatas');
const buttonDiv = document.getElementById('buttonDiv')

create.addEventListener("click", photoCreater);

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

function photoCreater(){

    rezult.style.visibility = "visible";

    let j = 1

    let randomizer = shuffle([0, 1, 2, 3, 4, 5])

    const img =  [
        ['https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        ['https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
        ];


    for(let i = 0; i<img.length; i++){

        console.log(randomizer[j])

        console.log(img[randomizer[j]])
        let imgTable = document.createElement('img');
        imgTable.setAttribute('src', img[randomizer[j]]);
        imgTable.setAttribute('height', 150);
        imgTable.setAttribute('width', 300);
        rezult.appendChild(imgTable)

        j += 1

    }

    create.style.visibility = "hidden";
    const nerodyti = document.createElement('button');
    nerodyti.textContent = "nerodyti";

    buttonDiv.appendChild(nerodyti);

    nerodyti.addEventListener("click", hide);

    function hide(){
        rezult.style.visibility = "hidden";
        create.style.visibility = "visible";
        buttonDiv.parentNode.removeChild(nerodyti);
    }

}