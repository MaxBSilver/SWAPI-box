const cleanFilmFetch = film => {
  const { title, opening_crawl, release_date } = film;
  return { title: title, crawl: opening_crawl, date: release_date };
};

const randomNumber = () => {
  return Math.floor(Math.random() * 7) + 1;
};

const cleanPeople = uncleanPeople => {
  let cleanedPeople=  uncleanPeople.map(person => {
    let cleanPerson = {
      name: person.name,
      homeworld: person.homeworld.name,
      population: person.homeworld.population,
      species: person.species.name
    };
    return cleanPerson
  });
  return cleanedPeople;
};

export { cleanFilmFetch, randomNumber, cleanPeople };
