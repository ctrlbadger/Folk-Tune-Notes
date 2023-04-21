async function get_tune(tune_name) {
    const url = `https://thesession.org/tunes/search?q=${encodeURIComponent(tune_name)}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    try {
        return data['tunes'][0]['url']
    } catch {
        return "No Such Tune Found!"
    }
  }
module.exports = get_tune;