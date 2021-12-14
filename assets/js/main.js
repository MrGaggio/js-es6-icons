const objects = [{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi. Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
*/




//selezione del container
const containerEl = document.querySelector(".container")
// selezione del select
const selezione = document.getElementById("select")

// // Creare tanti div quanti son gli oggetti presenti all'interno dell'array objects
// for (let i = 0; i < objects.length; i++) {
// 	// creo i div
// 	const div = document.createElement("div")
// 	// aggiungo una classe rettangolo ai div
// 	div.classList.add('rettangolo')
// 	// appendo i div al container
// 	containerEl.append(div)
// 	//creo un template all'interno del quale ricostruisco l'icona
// 	let template =
// 		`<i style="color: ${objects[i].color} ;"  class= "${objects[i].family}  ${objects[i].prefix}${objects[i].name} icon"></i>${objects[i].name}`
// 	// console.log(template);
// 	div.innerHTML += template

// }



//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
selezione.addEventListener('change', function () {
	// svuota il container a ogni selezione
	containerEl.innerHTML = ""
	if (selezione.value == "animals") {
		// filtra le icone all'interno dell'array object andando a prendere il type animal
		const animals = objects.filter(objects => objects.type == "animal")
		// console.log(animals);
		creaDiv(animals)


	} else if (selezione.value == "vegetables") {
		// filtra le icone all'interno dell'array object andando a prendere il type vegetable
		const vegetables = objects.filter(objects => objects.type == "vegetable")
		// console.log(vegetables);
		creaDiv(vegetables)
	} else if (selezione.value == "users") {
		// filtra le icone all'interno dell'array object andando a prendere il type user
		const users = objects.filter(objects => objects.type == "user")
		// console.log(users);
		creaDiv(users)
	} else if(selezione == "All") {
		
		creaDiv(objects)
	}

})



// creare una funzione per creare tanti div quanti ne servono nella selezione

function creaDiv(array){
	for (let i = 0; i < array.length; i++) {
		// creo i div
		const div = document.createElement("div")
		// aggiungo una classe rettangolo ai div
		div.classList.add('rettangolo')
		// appendo i div al container
		containerEl.append(div)
		//creo un template all'interno del quale ricostruisco l'icona
		let template =
			`<i style="color: ${array[i].color} ;"  class= "${array[i].family}  ${array[i].prefix}${array[i].name} icon"></i>${objects[i].name}`
		// console.log(template);
		div.innerHTML += template
	
	}
}