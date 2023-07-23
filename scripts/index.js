const apiKey = "31ebd8cc-34f4-4928-9319-12addc32c4df";
// https://project-1-api.herokuapp.com/comments?api_key=31ebd8cc-34f4-4928-9319-12addc32c4df

function displayComments(arr)  {
    let commentContainer = document.querySelector(".comment__default-comment");
    commentContainer.innerHTML = "";
    
    for (let i = 0; i < arr.length; i++) {
        let m = new Date(arr[i]["timestamp"]);
        let dateString = m.getMonth() + 1 + "/" + m.getDate() + "/" + m.getFullYear();
        
        let defaultContainer = document.createElement("div");
        defaultContainer.classList.add("comment__default");
        commentContainer.appendChild(defaultContainer);

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("comment__image-container-one");
        defaultContainer.appendChild(imageContainer);

        let headerContainer = document.createElement("div");
        headerContainer.classList.add("comment__header");
        defaultContainer.appendChild(headerContainer);

        let image = document.createElement("div");
        image.classList.add("comment__header--image-one");
        imageContainer.appendChild(image);

        let name = document.createElement("h3");
        name.classList.add("comment__header--name");
        name.innerText = arr[i]["name"];
        headerContainer.appendChild(name);

        let date = document.createElement("h3");
        date.classList.add("comment__header--date");
        date.innerText = dateString;
        headerContainer.appendChild(date);

        let textContainer = document.createElement("div");
        textContainer.classList.add("comment__text-container-default");
        defaultContainer.appendChild(textContainer);

        let comment = document.createElement("p");
        comment.classList.add("comment__text-container-default--comment");
        comment.innerText = arr[i]["comment"];
        textContainer.appendChild(comment);
    }
}

const form = document.querySelector(".comment__input-container");

form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

  const name = submitEvent.target.name.value;
  const comment = submitEvent.target.comment.value;

  if (!name || !comment) {
    alert("Please enter both a name and a comment.");
    return; 
  }
  axios
    .post("https://project-1-api.herokuapp.com/comments?api_key=31ebd8cc-34f4-4928-9319-12addc32c4df", {
      name: name,
      comment: comment
    })
    .then(() => {
      getComments();
      let clearInput = document.querySelector(".comment__input-container");
      clearInput.reset();
    })
    .catch(error => {
      console.error("Error submitting comment:", error);
    });
});

function getComments() {
  axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=31ebd8cc-34f4-4928-9319-12addc32c4df")
    .then(response => {
      displayComments(
        response.data.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        })
      );
    })
    .catch(error => {
      console.error("Error getting comments:", error);
    });
}

getComments();
