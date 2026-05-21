
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function getImageUrl(image) {
    if (!image) {
        return "./assets/mac-pro-tower.webp";
    }

    if (image.startsWith("http")) {
        return image;
    }

    return `${API_BASE_URL}/${image}`;
}


export default getImageUrl;