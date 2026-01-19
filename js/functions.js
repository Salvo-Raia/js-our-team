

/* Functions */
/**
 * This functions allows to convert an object keys into variables and to use them in a ready layout to print into DOM.
 * @param {object} member An object to destructurate into variables.
 * @returns {string} A string ready to be printed into DOM, full with object properties destructurate into variables.
 */
function generateMemberCard (member) {
    const {name, role, img, email} = member; 
const cardHtml = `<div class="member-card d-flex align-items-center gap-3 text-white bg-dark p-0 mx-1">
                    <div class="member-image">
                      <img src="${img}" alt="${name}">
                    </div>
                    <div class="member-info d-flex flex-column">
                      <h3 class="m-0">${name}</h3>
                      <p class="m-0">${role}</p>
                      <address class="m-0"><a href="#">${email}</a></address> 
                    </div>
                  </div>`; 
return cardHtml; 
}

/**
 * This function resets inner HTML of teamCardsContainer then invoke generateMemberCard and save it to cardHtml variable 
 * and add it into teamCardsContainer.
 */
function printCards() {
teamCardsContainer.innerHTML = "";
for (const singleMember of teamMembers) {
const cardHtml = generateMemberCard(singleMember)
teamCardsContainer.innerHTML += cardHtml;
}
}
