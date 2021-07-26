
// TODO 1: ADD ANOTHER KEY VALUE PAIR TO EACH OBJECT IN THE friends ARRAY BELOW
// NAMED age. YOU CAN CHOOSE AN AGE FOR EACH FRIEND.
// TODO 2: REVERSE THE DISPLAY ORDER OF THE FRIENDS
// TODO 3: GO TO https://avataaars.io TO GET A NEW AVATAR
// AND ADD ANOTHER FRIEND TO THIS ARRAY
// TODO 4: CLICK ON THE "FRIEND-CARD" AND:
//   1 - DISPLAY THAT FRIEND'S INFORMATION ON THE DIV WITH ID="js-friend-info"
//   2 - HIDES THE FRIEND-LIST

const friends = [
      {
        avatar:
          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=Platinum&facialHairType=Blank&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light",
        name: "Alexa",
        mood: "Always happy",
        age: 55,
        hideShowButton: "hide/show"
      },
      {
        avatar:
          "https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=Skull&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Grimace&skinColor=Black",
        name: "Jimmy",
        mood: "Always worried",
        age: 9001,
        hideShowButton: "hide/show"
      },
      {
        avatar:
          "https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Gray01&clotheType=ShirtCrewNeck&eyeType=WinkWacky&eyebrowType=RaisedExcited&facialHairColor=BlondeGolden&facialHairType=Blank&hairColor=Platinum&hatColor=PastelBlue&mouthType=Grimace&skinColor=Yellow&topType=WinterHat1",
        name: "Brad",
        mood: "Always annoyed",
        age: 34,
        hideShowButton: "hide/show"
      },
      {
        avatar:
          "https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheType=ShirtScoopNeck&eyeType=Hearts&eyebrowType=RaisedExcited&facialHairType=MoustacheFancy&hairColor=Red&mouthType=Sad&skinColor=Tanned&topType=Hijab",
        name: "Cass",
        mood: "Always amused",
        age: 899,
        hideShowButton: "hide/show"
      },
    ];

    // TODO: FIND A WAY TO ADD ANOTHER DIV TO DISPLAY THE AGE VALUES
    // YOU ADDED ABOVE
    const friendListDom = document.getElementById("js-friend-list");
    friendListDom.innerHTML = friends
      .map(
        (friend) =>
          `
    <div class="friend-card">
        <div class="avatar">
          <img
            src="${friend.avatar}"
          />
        </div>
        <div class="name">${friend.name}</div>
        <div class="mood">${friend.mood}</div>
        <div class="age">${friend.age}</div>
        <div class="hideShowButton">${friend.hideShowButton}</div>
      </div>
    `
      )
      .reverse()
      .join("");

      function hideFriends() {
        var x = document.getElementById("ishabutton");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      