const apiKey = process.env.REACT_APP_API_KEY

const getArticles = (category, source) => {
  let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us`
  if (category) {
    url += `&category=${category}`
  } 
  if (source) {
    url += `&sources=${source}`
  }
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new (`HTTP Error: ${res.status} /n We could not load the content you are looking for`)
      }
      return res.json()
    })
}

export { getArticles }