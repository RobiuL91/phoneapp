const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

  searchField.value = '';

  if (searchText === 0) {
    alert("Please write a Brand name!!");
  }
  
  else {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data.slice(0,20)));
   }
    // console.log(data.data);
}

const displayPhone = phones => {
    const searchResult = document.getElementById('search-reasult');
  // console.log(phone.brand);
    
  
  phones.forEach(phone => {
    

       
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="col">
        <div onclick = "loadPhoneDetails('${phone.slug}')" class="card text-center h-100">
          <img src="${phone.image} " class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name} </h5>
            <button class="btn btn-primary" type="button">Details</button>
          </div>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadPhoneDetails = phoneId => {
  // console.log(phoneId);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
    .then (res => res.json())
  .then(data => displayPhoneDetails(data.data));
}

const displayPhoneDetails = phone => {
  // console.log(phone.sensors.length);
  const phoneDetails = document.getElementById('display-details');
  
//   // const sensoreOutput = (sensors) => {
//   //   `
//   //   console.log(sensor);
//   `
  
// };
  phoneDetails.textContent = '';
  
  const div = document.createElement('div');
  div.classList.add('card')
  div.innerHTML = `
  <div class="card text-center fs-3 font-weight-bold">
  <img src="${phone.image} " class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">Brand Name: ${phone.brand} </h5>
    <h5 class="card-title">Model: ${phone.name} </h5>
    <h5 class="card-title">Release Date: ${phone.releaseDate} </h5>
    <h5 class="card-title">Storage: ${phone.mainFeatures.storage} </h5>
    <h5 class="card-title">Display Size: ${phone.mainFeatures.displaySize} </h5>
    <h5 class="card-title">ChipSet: ${phone.mainFeatures.chipSet} </h5>
    <h5 class="card-title">Memory: ${phone.mainFeatures.memory} </h5>
    <h5 class="card-title">${phone.sensors} </h5>

    
    
    
    
  </div>
</div>
`;
  phoneDetails.appendChild(div);
}