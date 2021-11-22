public class index{

	public static String getQuote( String[] quotes, int quote_position ){
		return quotes[quote_position];
	}

	public static String setQuote( String[] quotes, String quote ){
		quotes.push( quote );
	}
	public static void main( String[] args ){
		String[] quotes = new String[]{"One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.", 
		"Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape.", 
		"Life is short. Kiss slowly, laugh insanely, love truly and forgive quickly", 
		"To love someone is nothing, to be loved by someone is something, to love someone who loves you is everything.", 
		"I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.", 
		"A man is lucky if he is the first love of a woman. A woman is lucky if she is the last love of a man.", 
		"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together."
		};
		System.out.println( getQuote( quotes, 6 ) );
		System.out.println( setQuote( quotes, "This is so cool" ) );
	}
}