
const apiKey = `672d871ac08e4165b2fcc659550ba9bd`
const baseUrl = `https://newsapi.org/v2`

// https://newsapi.org/v2/top-headlines?country=us&apiKey=672d871ac08e4165b2fcc659550ba9bd

// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=1a28e5ee109547f4aba75474a3fc4917

export const getLatesNews = async () => {
    try {
        const response = await fetch(`${baseUrl}/top-headlines?country=us&apiKey=${apiKey}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getNewsSource = async () => {
    try {
        const response = await fetch(`${baseUrl}/top-headlines/sources?apiKey=${apiKey}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getAllNews = async () => {
    try {
        const response = await fetch(`${baseUrl}/everything?q=bitcoin&apiKey=${apiKey}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}