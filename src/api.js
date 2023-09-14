const apiKey = process.env.REACT_APP_API_KEY

const getArticles = (category) => {
  let url = `https://newsapi.org/v2/top-headlines?country=us`
  if (category) {
    url += `&category=${category}`
  } 
  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new (`HTTP Error: ${res.status} /n We could not load the content you are looking for`)
      }
      return res.json()
    })
    .then(data => {
      data.articles = data.articles.filter(article => article.title !== '[Removed]')
      return data
    })
}

export { getArticles }