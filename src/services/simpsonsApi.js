export const getQuotes = (count = 20) => {
  return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch quote';
      return res.json();
    })
    .then(quotes => {
      return quotes.map(quote => ({
        characterName: quote.character,
        quote: quote.quote,
        characterImage: quote.image
      }));
    });
};
