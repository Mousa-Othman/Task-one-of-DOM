var imges=document.getElementsByClassName("imge-item");


// for (var i=0;i<imges.length;i++){

//     imges[i].addEventListener('click', function(e){
//         //console.log(e.target.src);
//         //console.log(e.target.getAttribute("src"));
//         var imgesrc=e.target.getAttribute("src");
//         document.getElementById('mainImge').setAttribute('src',imgesrc);
//     })
// };

for (var i=0;i<imges.length;i++){

    imges[i].addEventListener('mouseenter', function(e){
        //console.log(e.target.src);
        //console.log(e.target.getAttribute("src"));
        var imgesrc=e.target.getAttribute("src");
        document.getElementById('mainImge').setAttribute('src',imgesrc);
    })
}