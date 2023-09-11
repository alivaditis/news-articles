const apiKey = process.env.REACT_APP_API_KEY

const getArticlesByCategory = (category, source) => {
  let url
  if (category) {
    url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&category=${category}`
  } 
  if (source) {
    url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&sources=${source}`
  }
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new (`HTTP Error: ${res.status} /n We could not load the content you are looking for`)
      } else {
        return res.json
      }
    })
}