const key='GFve7suM0p6JBZUoeUCBVTsy2LHGYA7V';

const getweather = async(id)=>
{
     
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data= await response.json();
    return data[0];
};

const getcity = async(city)=>{
    
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data= await response.json();
    return data[0];
};

