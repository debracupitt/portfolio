$(document).ready(function() {
  const projects = {
    webProjects: [
      {
        name: "Burger Builder",
        backgroundImg: "resources/images/burger-builder.png",
        github: "https://github.com/debracupitt/burger-builder",
        liveSite: "https://debracupitt.github.io/burger-builder/"
      },
      {
        name: "Guardian Lookup",
        backgroundImg: "resources/images/guardian-lookup.png",
        github: "https://github.com/debracupitt/guardian-search",
        liveSite: "https://debracupitt.github.io/guardian-search/"
      },
      {
        name: "AbleWork",
        backgroundImg: "resources/images/ablework.png",
        github: "https://github.com/debracupitt/ablework",
        liveSite: ""
      },
      {
        name: "Unbound",
        backgroundImg: "resources/images/unbound.png",
        github: "",
        liveSite: "https://www.unbound.edu.au/"
      },
      {
        name: "Match Game",
        backgroundImg: "resources/images/match.png",
        github: "https://github.com/debracupitt/match-game",
        liveSite: "https://debracupitt.github.io/match-game/"
      },
      {
        name: "Share Portfolio App",
        backgroundImg: "resources/images/finance.png",
        github: "https://github.com/debracupitt/cs50problemsets",
        liveSite: ""
      },
      {
        name: "Trackster",
        backgroundImg: "resources/images/trackster.png",
        github: "https://github.com/debracupitt/trackster",
        liveSite: "https://debracupitt.github.io/trackster/"
      },
      {
        name: "Speech Detection",
        backgroundImg: "resources/images/speech.png",
        github:
          "https://github.com/debracupitt/javascript30/tree/master/speech-detection",
        liveSite: "https://debracupitt.github.io/javascript30/speech-detection/"
      },
      {
        name: "Custom Movie Player",
        backgroundImg: "resources/images/video.png",
        github:
          "https://github.com/debracupitt/javascript30/tree/master/custom-video-player",
        liveSite:
          "https://debracupitt.github.io/javascript30/custom-video-player"
      },
      {
        name: "Drum Kit",
        backgroundImg: "resources/images/drums.png",
        github:
          "https://github.com/debracupitt/javascript30/tree/master/drum-kit",
        liveSite: "https://debracupitt.github.io/javascript30/drum-kit"
      }
    ]
  };

  const webContainer = document.querySelector(".web");
  const webProjectsHtml = projects.webProjects.map(function(p, i) {
    let img = "<img src=" + p.backgroundImg + " alt=" + p.name + "/>";
    let cover = "<div class='content-overlay'>" + "</div>";
    let title = "<div class='title'>" + "<h3>" + p.name + "</h3></div>";
    let html =
      "<div class='card card-small' id=" +
      i +
      "--" +
      p.backgroundImg +
      ">" +
      img +
      cover +
      title +
      "</div>";
    return html;
  });
  webContainer.innerHTML = webProjectsHtml.join("");

  const handlers = {
    togglePopup: function() {
      const projectPopup = document.querySelector(".project-popup");
      const popupBackground = document.querySelector(
        ".popup-background-overlay"
      );
      projectPopup.classList.toggle("show");
      popupBackground.classList.toggle("show");
    },
    showPopup: function(e) {
      // get identifier for card clicked
      let backgroundImgString = "";
      if (e.path[2].id) {
        let idArray = e.path[2].id.split("--");
        backgroundImgString = idArray[1];
      }
      if (e.path[1].id) {
        let idArray = e.path[1].id.split("--");
        backgroundImgString = idArray[1];
      }

      // get object for card clicked
      let cardObj = projects.webProjects.filter(
        project => project.backgroundImg === backgroundImgString
      );
      cardObj = cardObj[0];

      // Create and populate popup HTML
      const popupTitle = "<h3>Check out my " + cardObj.name + " Project</h3>";
      let githubButton = "";
      let liveSiteButton = "";
      if (cardObj.github !== "") {
        githubButton =
          "<a href='" +
          cardObj.github +
          "' target='_blank'>" +
          "<div class='btn github'>GITHUB</div></a>";
      }
      if (cardObj.liveSite !== "") {
        liveSiteButton =
          "<a href='" +
          cardObj.liveSite +
          "' target='_blank'>" +
          "<div class='btn live-site'>LIVE SITE</div></a>";
      }
      let popup =
        "<div class='popup-box'>" +
        popupTitle +
        "<div class='popup-buttons-container'>" +
        githubButton +
        liveSiteButton +
        "</div>" +
        "</div>";

      // Select popup and background divs
      const projectPopup = document.querySelector(".project-popup");
      const popupBackground = document.querySelector(
        ".popup-background-overlay"
      );
      projectPopup.innerHTML = popup;
      projectPopup.classList.toggle("show");
      popupBackground.classList.toggle("show");
    }
  };

  const events = {
    setUpEventListeners: function(url) {
      const popupBackground = document.querySelector(
        ".popup-background-overlay"
      );
      popupBackground.addEventListener("click", handlers.togglePopup);
      var cards = document.querySelectorAll(".card");
      cards.forEach(card => card.addEventListener("click", handlers.showPopup));
    }
  };

  events.setUpEventListeners(window.location.href);
});
