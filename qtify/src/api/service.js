
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
export const getNewAlbumData = async() => {
    try{
        const Newresponse = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`)
        return Newresponse.data;
    }
    catch(e)
    {
        console.error(e);
    }
}

export const getSongData = async() => {
    try{
        const Songresponse = await axios.get(`https://qtify-backend-labs.crio.do/songs`)
        return Songresponse.data;
    }
    catch(e)
    {
        console.error(e);
    }
}

export const getgenreData = async() => {
    try{
        const Tabresponse = await axios.get(`https://qtify-backend-labs.crio.do/genres`)
        return Tabresponse.data;
    }
    catch(e)
    {
        console.error(e);
    }
}

