const page_name = input
const tune_name = page_name.file.name

const url = `https://thesession.org/tunes/search?q=${encodeURIComponent(tune_name)}&format=json`;
const response = await fetch(url);
const data = await response.json();
try {
	dv.span(data['tunes'][0]['url'])
} catch {
	dv.span("No Such Tune Found!")
}