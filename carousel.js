const carouselImages = document.getElementById("carouselImages");
const carouselIndicators = document.getElementById("carouselIndicators");
const descriptions = [
  {
    title: "Tasks",
    text: "By clicking to view tasks, the users can view all voyages for which they are responsible, including voyage information such as the first loading port, the arrival date on the first loading port and the number of pending tasks and overdue tasks."
  },
  {
    title: "Tasks",
    text: "By selecting a specific voyage, it appears all its loading ports (calls) and the respectives tasks for each call."
  },
  {
    title: "Navigation Bar Options",
    text: "When choosing a particular loading port (call), users can access all tasks associated with that call. It's important to note that numerous tasks incorporate the keyword 'Send,' indicating the presence of an automation that generates essential documents containing voyage information. Additionally, it creates an email with these documents attached, allowing operators and/or assistants to review them before sending to pertinent stakeholders."
  },
  {
    title: "Voyage Max Intake",
    text: "An additional feature incorporated into the application involved monitoring the maximum cargo intake for each voyage. This improvement facilitated a more targeted approach to selling spot contracts for voyages with greater available capacities."
  },
  {
    title: "Settings",
    text: "In the settings section, the user could change account settings, tasks settings and automations settings."
  },
  {
    title: "Account Settings",
    text: `n the Account Settings, the user could change account details, such as password or preferences, login to a different account, or create a new account for new employees.`
  },
  {
    title: "Tasks Settings",
    text: "Within the task settings, users had the ability to modify tasks' details and deadlines for each trade, offering flexibility to the end-users."
  },
  {
    title: "Automations Settings",
    text: "On the automations settings, the user could change parameters relevant to the automations."
  }
];

for (let i = 3; i < 11; i++){
  carouselImages.innerHTML += `
  <div class="carousel-item">
    <img src="images/screen-${i}.png" class="d-block w-75 position-relative start-50 translate-middle-x rounded-2 border-1" style="border-style:solid" alt="Issues Management Application Print Screen">
    <div class="carousel-caption d-none d-md-block position-relative start-0 top-100 mt-3 pb-0">
      <h6>${descriptions[i-3].title}</h6>
      <p class="mb-1">${descriptions[i-3].text}</p>
    </div>
  </div>`
  carouselIndicators.innerHTML += `<button type="button" data-bs-target="#carousel" data-bs-slide-to="${i-1}" aria-label="Slide ${i}"></button>`
}
