export const request = async({path, method="GET", body}) => {
    const url = `https://tiktok-video-no-watermark10.p.rapidapi.com/${path}`;
    const options = {
        method,
        headers: {
            'X-RapidAPI-Key': 'b8eb3d85d0msh00033c278190ce5p194255jsn5d6037b4426f',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark10.p.rapidapi.com'
        }
    };

    if (body) options.body = body;
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}
