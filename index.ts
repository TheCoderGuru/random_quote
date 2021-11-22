
var quotes = [ "“Be yourself, everyone else is already taken.”" , "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", "“You only live once, but if you do it right, once is enough.”" ];

export function getRandomQuote(){
	return quotes[Math.floor(Math.random() * quotes.length)];
}


export function addQuote( quotes, name ){
	console.log( `Quote called ${name} added` )
	return quotes.push( name )
}

export function getQuote( quotes, name ){
	return quotes[ name ];
}

export function removeQuote( quotes, name ){
	return quotes.pop( name )
}


