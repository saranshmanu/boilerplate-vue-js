/**
 * The function fetches the headlines using the News API
 * @returns A list of recent articles
 */
const getTopHeadlines = async () => {
	try {
		const apiKey = '448700f6a9e249ed85d3b37d59605c9e';
		const response = await fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}`);
		const { articles } = await response.json();
		return articles;
	} catch (err) {
		return [];
	}
};

export { getTopHeadlines };
