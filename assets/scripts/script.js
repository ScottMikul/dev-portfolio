$(()=>{

    //animate the subtitle of the title
    let words = ["Gamer", "Adventurer", "Professional IT Developer"]
    let txt = words[0];
    let word = "";
    let wordIndex = 0;
    let charIndex = 0;
    let speed = 200;
    typeWriter = () =>{
        if (charIndex < txt.length) {
             word += txt.charAt(charIndex++);
             
            $("#subtitle").text(word);
            console.log("word");
            setTimeout(typeWriter, speed);
            
        }
        else if(wordIndex < words.length){
            charIndex = 0;
            word ="";
            txt = words[++wordIndex]
            setTimeout(typeWriter, 800);   
        }
    }
    typeWriter();


    //render the recent projects portion of the page
    recentProjects = () => {
        let projects = [
            new project("Password Generator", "./assets/images/password-generator.png", "Create any a customized and secure password.")
        ]
        console.log(projects);
        projects.forEach(item => {

            let cardDiv = $("<div>");
            cardDiv.addClass("card");

            let cardHeader = $("<div>")
            cardHeader.addClass("card-header text-center");
            cardHeader.append(item.title);
            cardDiv.append(cardHeader);

            let cardBody = $("<div>");
            cardBody.addClass("card-body");
            let cardImg = $("<img>");
            cardImg.attr("width","100%");
            cardImg.attr("height","100%");
            cardImg.attr("src", item.imgUrl);
            cardBody.append(cardImg);
            let cardText = $("<p>");
            cardText.addClass("card-text text-center");
            cardText.append(item.description);
            cardBody.append(cardText);
            cardDiv.append(cardBody);            
            
            $("#work").append(cardDiv);
        })
    }
    class project {
        constructor(title, imgUrl, description) {
          this.title = title;
          this.imgUrl = imgUrl;
          this.description = description;
        }
      }
    recentProjects();


})