import axios from 'axios';
import FormData from 'form-data';
// import path from 'path';


export const useConvertLogic = ()=>{
  const removebg = (image:Blob,result:React.Dispatch<React.SetStateAction<string>>)=>{

    // const inputPath = '/path/to/file.jpg';
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', image);

    axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      responseType: 'arraybuffer',
      headers: {
          'Content-Type': 'multipart/form-data',
        'X-Api-Key': 'pPV5zGU3NRSezXaRhL2nkZKE',
      },
      responseEncoding: undefined
    })
    .then((response) => {
      if(response.status !== 200) return console.error('Error:', response.status, response.statusText);
      const blob = new Blob([response.data], {type: 'image/png'});
      result(URL.createObjectURL(blob));
    })
    .catch((error) => {
        return console.error('Request failed:', error);
    });

  }

  return {removebg}
}
