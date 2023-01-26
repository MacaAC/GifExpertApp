export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sz76YDz6jqaPHgzReIkRhKkqi8ZYh3bL&q=${category}&limit=20`
    const resp = await fetch(url)
    const {data} = await resp.json(); //esto no lo entiendo, porqué desestructura la data..y el resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}