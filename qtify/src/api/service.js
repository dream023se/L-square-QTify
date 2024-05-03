
import axios from 'axios';
export const getTopAlbumData = async() => {
    try{
        const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`)
        return response.data;
    }
    catch(e)
    {
        console.error(e);
    }
}