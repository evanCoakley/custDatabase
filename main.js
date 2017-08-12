for (let i = 0; i < customers.results.length; i++) {
    const content = `
    <div class="content">
        <img src=${customers.results[i].picture.large} alt="Picture1">
        <p class="name"> <strong>${customers.results[i].name.first} ${customers.results[i].name.last}</strong></p>
        <p class="email">${customers.results[i].email}</p>
        <p class="address">${customers.results[i].location.street}<br>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br>${customers.results[i].cell}</p>
    </div >
        `
    document.querySelector('.grid').innerHTML += content;
}