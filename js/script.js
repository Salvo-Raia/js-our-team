/* Members Info */
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/* DOM Elements */ 
const teamCardsContainer = document.getElementById("team-cards-container"); 
const newMemberForm = document.getElementById("add-new-member");
const newMemberNameInput = document.getElementById("new-member-name");
const newMemberRoleInput = document.getElementById("new-member-role");
const newMemberMailInput = document.getElementById("new-member-mail");
const newMemberImageInput = document.getElementById("new-member-image")

printCards()

/* Event Listener to Add new member */
newMemberForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = newMemberNameInput.value;
    const role = newMemberRoleInput.value;
    const img = newMemberImageInput.value;
    const email = newMemberMailInput.value;

    const newMembertoAdd = {name, role, img, email};
    teamMembers.push(newMembertoAdd);
    console.log("Sto pushando");
    printCards();
})




