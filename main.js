
// TODO 1: ADD ANOTHER KEY VALUE PAIR TO EACH OBJECT IN THE friends ARRAY BELOW
// NAMED age. YOU CAN CHOOSE AN AGE FOR EACH FRIEND.
// TODO 2: REVERSE THE DISPLAY ORDER OF THE FRIENDS
// TODO 3: GO TO https://avataaars.io TO GET A NEW AVATAR
// AND ADD ANOTHER FRIEND TO THIS ARRAY
const friends = [
      {
        avatar:
          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=Platinum&facialHairType=Blank&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light",
        name: "Alexa",
        mood: "Always happy"
      },
      {
        avatar:
          "https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=Skull&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Grimace&skinColor=Black",
        name: "Jimmy",
        mood: "Always worried"
      },
    ];

    // TODO: FIND A WAY TO ADD ANOTHER DIV TO DISPLAY THE AGE VALUES
    // YOU ADDED ABOVE
    const friendListDom = document.getElementById("js-friend-list");
    friendListDom.innerHTML = friends
      .map(
        (friend) =>
          `
    <div class="friend">
        <div class="avatar">
          <img
            src="${friend.avatar}"
          />
        </div>
        <div class="name">${friend.name}</div>
        <div class="mood">${friend.mood}</div>
      </div>
    `
      )
      .join("");