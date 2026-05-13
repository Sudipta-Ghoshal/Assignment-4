
const API_BASE_URL = "http://localhost:9000";

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