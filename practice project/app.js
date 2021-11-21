String.prototype.title = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const searchProfile = document.querySelector("#search-profile");
const profile = new Profile();
searchProfile.addEventListener("keyup", (event) => {
  let text = event.target.value;
  if (text !== "") {
    //TODO: replace
    //lowerCaseText = text.toLowerCase();
    let titleText = text.title();
    profile.getProfile(titleText).then((res) => {
      if (res.profileData.length === 0) {
      } else {
        console.log(res.profileData[0]);
      }
    });
  } else {
    //TODO: replace
  }
});
