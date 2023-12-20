const carouselImages = document.getElementById('carouselImages');
const carouselIndicators = document.getElementById('carouselIndicators');
const captions = [
  {
    title: 'Tasks',
    text: 'By clicking to view tasks, the users can view all voyages for which they are responsible, including voyage information such as the first loading port, the arrival date on the first loading port and the number of pending tasks and overdue tasks.',
  },
  {
    title: 'Tasks',
    text: 'By selecting a specific voyage, the application shows all its loading ports (calls), the arrival and departure dates and the respectives tasks for each call.',
  },
  {
    title: 'Navigation Bar Options',
    text: "When choosing a particular loading port (call), users can access all tasks associated with that call. It's important to note that some tasks incorporate the button 'Send,' indicating an automation that generates essential documents containing voyage information. Additionally, it creates an email with these documents attached, allowing workers to review them before sending to stakeholders.",
  },
  {
    title: 'Voyage Max Intake',
    text: 'An additional feature incorporated into the application involved monitoring the maximum cargo intake for each voyage. This improvement facilitated a more targeted approach to selling spot contracts for voyages with greater available capacities.',
  },
  {
    title: 'Settings',
    text: 'In the settings section, the user could change account settings, tasks settings and automations settings.',
  },
  {
    title: 'Account Settings',
    text: `n the Account Settings, the user could change account details, such as password or preferences, login to a different account, or create a new account for new employees.`,
  },
  {
    title: 'Tasks Settings',
    text: "Within the task settings, users had the ability to modify tasks' details and deadlines for each trade, offering flexibility to the end-users.",
  },
  {
    title: 'Automations Settings',
    text: 'On the automations settings, the user could change parameters relevant to the automations.',
  },
];

for (let i = 3; i < 11; i++) {
  carouselImages.innerHTML += `
  <figure class="carousel-item">
    <img 
      src="images/screen-${i}.png" 
      class="slide-img d-block rounded-2 border-1" 
      alt="Task Management Application Print Screen"
    >
    <figcaption class="carousel-caption custom-caption mt-2 pb-0">
      <h6>${captions[i - 3].title}</h6>
      <p class="mb-1">${captions[i - 3].text}</p>
    </figcaption>
  </figure>`;
  carouselIndicators.innerHTML += `<button type="button" data-bs-target="#carousel" data-bs-slide-to="${
    i - 1
  }" aria-label="Slide ${i}"></button>`;
}
