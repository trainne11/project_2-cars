import ItemList from "./components/ItemList";
import {useState} from 'react';
import SearchBar from "./components/SearchBar";
import axios from 'axios';

function App(){

    let [images,setImages] = useState([]); 

    let handleSubmit = async (term) => {
       // let get fetch the results
       try{

        let res = await axios({
            url : "https://api.unsplash.com/search/photos",
            headers : {
              'Authorization' : 'Client-ID hEq8fEeGsFYc0vy-2_rk5hlL6-5BrPQT3ho7gBKbkOA'
            },
            params : {
              query : term
           }
           
        })

        console.log(res.data);
        
        setImages(res.data);

       }catch(err){

        console.log(err);

       }
    


    }

    return <div>
        <SearchBar onSubmit = {handleSubmit} />
        <ItemList imageList = {images}/>
        
        </div>
}


export default App;