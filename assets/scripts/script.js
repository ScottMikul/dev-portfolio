const $mainTitle = $("#maintitle");


$(function(){
    var i = 0;
    var j = 0;
    const titleTextArray = ["Nerd", "Gamer", "It Professional"];
    var txt = titleTextArray[j];
    var speed = 250;
    var temptext = "";
    function typeWriter(){
        if (i < txt.length) {
            temptext += txt.charAt(i);
            $mainTitle.text(temptext);
            i++;
            if(i ===txt.length){
                setTimeout(typeWriter, 1000);
            }else{
                setTimeout(typeWriter, speed);
            }
        }else{
            if(j !==titleTextArray.length-1){
                temptext="";
                
                txt = titleTextArray[++j];
                $mainTitle.empty();
                i=0;
                setTimeout(typeWriter, speed);

            }

        }

    }
    typeWriter();


})// end document ready