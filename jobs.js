function search(){
    var input = document.getElementById("search");
    var list = document.getElementsByClassName("job");
    for(var i=0; i< list.length; i++){
        var temp = list[i].className.split(" ");
        var element = document.getElementsByClassName(temp[0]);
        if(temp[0].includes(input)){
            element[i].style.display = "";
        }
        else{
            element[i].style.display = "none";
        }
    }
}