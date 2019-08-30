export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) throw 'Unable to fetch quote';
      return res.json();
    });
};
