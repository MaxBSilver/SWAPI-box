export const cleanFilmFetch = (film) => {
    const {title, opening_crawl, release_date} = film;
    return {title: title,  crawl: opening_crawl, date: release_date}
}