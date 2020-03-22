$(()=>{
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

    recentProjects = () => {
        let projects = [
            new project("Password Generator", "../assets/images/password-generator.png", "Create any a customized and secure password.")
        ]
        console.log(projects);
        projects.forEach(item => {
            console.log("we in there");

            $("#work").append(item.title);
            $("#work").append(item.imgUrl);
            $("#work").append(item.description);

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