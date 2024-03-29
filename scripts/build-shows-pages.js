   function table(arr) {
        let tableContainer = document.querySelector(".tour__container");

        let titleContainer = document.createElement("div");
        titleContainer.classList.add("tour__title-container");
        tableContainer.appendChild(titleContainer);

        let title = document.createElement("h1");
        title.classList.add("tour__title");
        titleContainer.appendChild(title);
        title.innerText = "Shows";

        let showsContainer = document.createElement("div");
        showsContainer.classList.add("tour__container-all");
        tableContainer.appendChild(showsContainer);

        let headerContainer = document.createElement("div");
        headerContainer.classList.add("tour__header-container");
        showsContainer.appendChild(headerContainer);

        let dateHeader = document.createElement("h3");
        dateHeader.classList.add("tour__header-container--date");
        headerContainer.appendChild(dateHeader);
        dateHeader.innerText = "DATES";

        let venueHeader = document.createElement("h3");
        venueHeader.classList.add("tour__header-container--venue");
        headerContainer.appendChild(venueHeader);
        venueHeader.innerText = "VENUE";

        let locationHeader = document.createElement("h3");
        locationHeader.classList.add("tour__header-container--location");
        headerContainer.appendChild(locationHeader);
        locationHeader.innerText = "LOCATION";

        let buttonHeader = document.createElement("button");
        buttonHeader.classList.add("tour__header-container--button-header");
        headerContainer.appendChild(buttonHeader);

        buttonHeader.innerText = "BUY TICKETS";

        for (let i = 0; i < arr.length; i++) {
        let oneContainer = document.createElement("div");
        oneContainer.classList.add("tour__one-container");
        showsContainer.appendChild(oneContainer);
        
        let dateLabel = document.createElement("h3");
        dateLabel.classList.add("tour__one-container--date-label");
        oneContainer.appendChild(dateLabel);
        dateLabel.innerText = "DATE";

        let date = document.createElement("h3");
        date.classList.add("tour__one-container--date");
        oneContainer.appendChild(date);
        date.innerText = arr[i]["date"];

        let venueLabel = document.createElement("h3");
        venueLabel.classList.add("tour__one-container--venue-label");
        oneContainer.appendChild(venueLabel);
        venueLabel.innerText = "VENUE";

        let venue = document.createElement("h3");
        venue.classList.add("tour__one-container--venue");
        oneContainer.appendChild(venue);
        venue.innerText = arr[i]["place"];

        let locationLabel = document.createElement("h3");
        locationLabel.classList.add("tour__one-container--location-label");
        oneContainer.appendChild(locationLabel);
        locationLabel.innerText = "LOCATION";

        let location = document.createElement("h3");
        location.classList.add("tour__one-container--location");
        oneContainer.appendChild(location);
        location.innerText = arr[i]["location"];

        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("tour__one-container--button-container");
        oneContainer.appendChild(buttonContainer);

        let button = document.createElement("button");
        button.classList.add("tour__one-container--button");
        buttonContainer.appendChild(button);
        button.innerText = "BUY TICKETS";
        }
    }
    // table(arr);

    let tourList = axios.get("https://project-1-api.herokuapp.com/showdates?api_key=31ebd8cc-34f4-4928-9319-12addc32c4df");
    tourList.then(response => {
      table(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log("error try again");
    });
    
    