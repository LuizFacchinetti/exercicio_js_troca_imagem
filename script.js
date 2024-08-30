function troca(esco){

    let m1 = "url('images/gojo1.webp')";
    let m2 = "url('images/gojo2.png')";

    switch(esco){
        case 1:
            m1 = "url('images/gojo1.webp')";
            m2 = "url('images/gojo2.png')";
            break;
        case 2:
            m1 = "url('images/nanami1.jpg')";
            m2 = "url('images/nanami2.jpg')";
            break;
        case 3:
            m1 = "url('images/togi1.jpg')";
            m2 = "url('images/togi2.jpg')";
            break;
        case 4:
            m1 = "url('images/nobara1.webp')";
            m2 = "url('images/nobara2.jpg')";
            break;

    }  
    
    document.getElementById('m1').style.backgroundImage = m1;
    document.getElementById('m2').style.backgroundImage = m2;
}