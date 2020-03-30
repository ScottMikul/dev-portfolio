$(()=>{



    //animate the subtitle of the title
    let words = ["Gamer", "Adventurer", "Professional IT Developer"]
    let txt = words[0];
    let word = "";
    let wordIndex = 0;
    let charIndex = 0;
    let speed = 50;
    
    typeWriter = () =>{
        if (charIndex < txt.length) {
             word += txt.charAt(charIndex++);
             
            $("#subtitle").text(word);
            //console.log("word");
            setTimeout(typeWriter, speed);
            
        }
        else if(wordIndex < words.length-1){
            charIndex = 0;
            word ="";
            
            txt = words[++wordIndex]
            
            setTimeout(typeWriter, 800);   
        }
    }
    typeWriter();

    //in order to animate the scroll bar the heights of the hidden navbar with bootstrap must be accounted for in the height.
    // let heights;
    // updateHeights = () => {
    //     console.log("before updateheights" +heights);
    //     heights = [$("#home").offset().top,
    //     $("#about").offset().top,
    //     $("#work").offset().top,
    //     $("#technologies").offset().top,
    //     $("#contact").offset().top
    //     ]
    //     console.log("after updateheights" +heights);
    // }

    //render the recent projects portion of the page
    recentProjects = () => {
        let projects = [
            new project("Password Generator",
             "./assets/images/password-generator.png",
              "Create any a customized and secure password.",
              "https://github.com/ScottMikul/PasswordGenerator",
              "https://scottmikul.github.io/PasswordGenerator"),
            
            new project("Employee Team Generator",
             "./assets/images/EmployeeTeamGenerator.gif",
              "A node command line app which allows users to create a page with a team of employees, managers and interns. I used iteration of object properties heavily. ",
             " https://github.com/ScottMikul/Emplyee-Team-Generator" ),

             new project("Weather Forecast",
             "./assets/images/WeatherDashBoard.PNG",
             "Displays the next 5 days of forecast using the OpenWeather Api",
             "https://github.com/ScottMikul/WeatherForecast",
             "https://scottmikul.github.io/WeatherForecast/"

             ),

             new project("Stop and Shop",
                 "./assets/images/stop-and-shop.png",
                 "allows a shopper to put items into a card then checkout using stripe client api",
                 "https://github.com/ScottMikul/stopandshop",
                 "https://stop-and-shop-2020.herokuapp.com/"
             ),

            new project("Developer Profile Generator",
                "./assets/images/PortfolioGenerator.gif",
                "A node application the creates a styled pdf from a github users URL",
                "https://github.com/ScottMikul/developer-profile-generator"
            
            ),

            new project("Day Callendar",
                "./assets/images/WorkDayScheduler.PNG",
                "Save an activity to hour slot and the result is stored on the browser",
                "https://github.com/ScottMikul/daycallendar",
                "https://scottmikul.github.io/daycallendar/"
            )
        ]
        //console.log(projects);
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
                    let cardGithubUrlDiv = $("<div>");
                        let cardGithubUrl =  $("<a>");
                        cardGithubUrl.text("Github: "+ item.repoLink);
                        cardGithubUrl.attr("href", item.repoLink);
                        cardGithubUrlDiv.append(cardGithubUrl);
                cardBody.append(cardGithubUrlDiv);
                    if(item.demoLink){
                        let cardDemoUrlDiv = $("<div>");
                            let cardDemoUrl =  $("<a>");
                            cardDemoUrl.text("Demo: "+ item.demoLink);
                            cardDemoUrl.attr("href", item.demoLink)
                            cardBody.append(cardDemoUrl)
                        cardBody.append(cardDemoUrlDiv);
                    }
            cardDiv.append(cardBody);
            
            $("#work").append(cardDiv);
        })
        
    }
    class project {
        constructor(title, imgUrl, description, repoLink, demoLink) {
          this.title = title;
          this.imgUrl = imgUrl;
          this.description = description;
          this.repoLink = repoLink
          this.demoLink = demoLink;
        }
      }
    recentProjects();



    //figure out the heights of each element.




    // let navElems =  [$("#home_sidebar"),
    //     $("#about_sidebar"),
    //     $("#work_sidebar"),
    //     $("#technologies_sidebar"),
    //     $("#contact_sidebar")
    // ]

    // //the heights change on window resizing so figure out the heights then also.
    // $(window).resize(()=>{
    //     console.log("window is resizing");
    //     updateHeights()})

    // $(window).scroll(function() {
        

    //     console.log("scrolltop: "+ $(window).scrollTop());
    //     updateHeights();

    //     var currItemIndex = heights.findIndex(item=> {
    //         console.log((item+1)+ " !< " + $(window).scrollTop() );
    //         return !((item+1) <  $(window).scrollTop()) });
    //     //remove active on each Element
    //     navElems.forEach(elem => { 
    //          elem.removeClass("active")
    //     });

    //     currItem = navElems[currItemIndex];
    //     currItem.addClass("active",true);

       
    // })




})