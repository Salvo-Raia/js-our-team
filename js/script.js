/* Members Info */
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
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
const teamCardElement = document.getElementById("team-cards-container"); 
const cardHtml = generateMemberCard(member);


/* Functions */
/**
 * This functions allows to convert an object keys into variables and to use them in a ready layout to print into DOM.
 * @param {object} member An object to destructurate into variables.
 * @returns {string} A string ready to be printed into DOM, full with object properties destructurate into variables.
 */
function generateMemberCard (member) {
    const {name, role, img} = member; 
const cardHtml = `<div class="member-card d-flex align-items-center gap-3 text-white bg-dark">
                    <div class="member-image">
                      <img src="./img/${img}" alt="${name}">
                    </div>
                    <div class="member-info d-flex flex-column gap-3">
                      <h3 class="m-0">${nome}</h3>
                      <p class="m-0">${role}</p>
                      <address class="m-0"><a href="#">${email}</a></address> 
                    </div>
                  </div>`; 
return cardHtml; 
}