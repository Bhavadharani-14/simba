var light ="white"

if(light =="green"){
    console.log("go!");
}
else if(light == "yellow"){
    console.log("wait!");
}
else if(light == "red"){
    console.log("stop!");
}
else{
    console.log("invalied light color");
}
console.log("outside if");


//switch condition

var signal ="white"

switch(signal){
    case "green":
        console.log("go!");
        break;

    case "yellow":   
        console.log("wait!");
        break;

    case "red":
        console.log("stop!");
        break

       
     default:
        console.log("invalid light colour");
}
