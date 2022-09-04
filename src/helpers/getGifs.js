const GetGifs = async (categoria) => {
    const url =`http://api.giphy.com/v1/gifs/search?api_key=Aexnr6gXvNQ1eWZZyJCKNikLhaazh0fF&q=${categoria}&limit=5`
    const resp = await fetch(url);
    const {data} = await resp.json()
    
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url

    }))
    

    return gifs;
  }



  export {
    GetGifs
  }