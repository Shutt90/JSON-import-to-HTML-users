const getInfo = document.getElementById("information-listing");

//Single User Login
const login = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/gayle.json", true);

  xhr.onreadystatechange = function () {
    if (this.readyState === 3) {
      getInfo.textContent = "Loading...";
    }
    if (this.readyState === 4 && this.status === 200) {
      const gayle = JSON.parse(this.responseText);

      var details = "";

      getInfo.innerHTML = details +=
        "ID: " +
        gayle.id +
        "<br />First Name: " +
        gayle.first_name +
        "<br />Last Name: " +
        gayle.last_name +
        "<br />Email: " +
        gayle.email +
        "<br />Gender: " +
        gayle.gender +
        "<br />IP Address: " +
        gayle.ip_address;
    } else if (this.status === 404) {
      getInfo.textContent = "404\n File not found";
    } else if (this.status === 403) {
      getInfo.textContent = "404\n File has forbidden access";
    } else "Unknown Error";
  };

  xhr.send();
};

// Arguement that can be used to call the data from external

const loginAll = function (userInput) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `./data/${userInput}.json`, true);

  xhr.onreadystatechange = function () {
    if (this.readyState === 3) {
      getInfo.textContent = "Loading...";
    }

    if (this.readyState === 4 && this.status === 200) {
      var user = JSON.parse(this.responseText);

      //Will rewrite to last called function so not overcrowded
      var details = "";

      getInfo.innerHTML = details +=
        "ID: " +
        user.id +
        "<br />First Name: " +
        user.first_name +
        "<br />Last Name: " +
        user.last_name +
        "<br />Email: " +
        user.email +
        "<br />Gender: " +
        user.gender +
        "<br />IP Address: " +
        user.ip_address;
    } else if (this.status === 404) {
      getInfo.textContent = "404\n File not found";
    } else if (this.status === 403) {
      getInfo.textContent = "404\n File has forbidden access";
    } else "Unknown Error";
  };

  xhr.send();
};

login();

loginAll("car");
loginAll("cilka");
loginAll("davy");
loginAll("em");
loginAll("gayle");
loginAll("loy");
loginAll("nico");
loginAll("patricia");
loginAll("travus");
