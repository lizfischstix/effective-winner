import { putDb, getDb } from './database';

const form = document.getElementById();


form.addEventListener('submit', (event) => {
  // handle the form data
  event.preventDefault();
  const note = form.elements['note'].value;
  
  // Post form data to IndexedDB
  postDb(note);

  // Submit the form
  form.reset();

  // Reload the DOM
  fetchCards();
});

const fetchCards = async () => {
// Grab card data from IndexedDB
  const result = await getDb();

  let card = ` `;

  // Loop through the data and create the note card
  for (let data of result) {
    console.log(data);
    card += `
    <div class="card">
      <div class="card-header">
        <h1>${data.note}</h1>
      </div>
    </div>
    `;
  }

  // Setting innerHTML as card variable
  document.getElementById('card-group').innerHTML = card;
};

// Fetch cards upon being loaded.
fetchCards();
