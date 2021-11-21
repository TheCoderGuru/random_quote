var quotes = [
		"One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.",
		"Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape.",
		"Life is short. Kiss slowly, laugh insanely, love truly and forgive quickly",
		"To love someone is nothing, to be loved by someone is something, to love someone who loves you is everything.",
		"I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
		"A man is lucky if he is the first love of a woman. A woman is lucky if she is the last love of a man.",
		"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
		"If she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy. ... Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for.",
		"Life is very simple. What I give out comes back to me.Today, I choose to give love.",
		"Sometimes people put up walls, not to keep others out, but to see who cares enough to break them down.",
		"I love you because I love you, because it would be impossible not to love you. I love you without question, without calculation, without reason good or bad, faithfully, with all my heart and soul, and every faculty.",
		"Understand that you own nothing. Everything that surrounds you is temporary. Only the love in your heart will last forever.",
		"We don't need to explain our love. We only need to show it.",
		"For every beauty there is an eye somewhere to see it. For every truth there is an ear somewhere to hear it. For every love there is a heart somewhere to receive it.",
		"We come to love not by finding the perfect person, but by learning to see an imperfect person perfectly.",
		"To the whole world you might be just one person, but to one person you might just be the whole world.",
		"I don’t know what they are called, the spaces between seconds– but I think of you always in those intervals.",
		"Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
		"Even a mistake may turn out to be the one thing necessary to a worthwhile achievement.",
		"If everybody loves you, something is wrong. Find at least one enemy to keep you alert.",
		"Enjoy the little things, for one day you may look back and realize they were the big things.",
		"God grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.",
		"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
		"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		"Take the opportunity to learn from your mistakes: find the cause of your problem and eliminate it. Don't try to be perfect; just be an excellent example of being human.",
		"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
		"Our greatest glory is not in never falling, but in rising every time we fall.",
		"There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.",
		"It is by loving and not by being loved that one can come nearest to the soul of another.",
		"Dream big, stay positive, work hard, and enjoy the journey."
]


function getQuote(){

	return quotes[Math.floor(Math.random() * quotes.length)];

}

function setQuote( name ){

	return quotes.push( name );
}


function removeQuote( rname ){
	return quotes.pop( rname );
}


module.exports = {
	getQuote: getQuote,
	setQuote: setQuote,
	removeQuote: removeQuote;
}