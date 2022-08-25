const ownerLsist = document.querySelector('.owners-list');

function createList(data) {
  data.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element.owner_name;
    option.value = element.id;
    ownerLsist.appendChild(option);
  });
}

fetch('/owners/').then((res) => res.json())
  .then((data) => createList(data));
