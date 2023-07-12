let dataArray;

const fetchData=(callBack)=>{
 $.ajax({
     url:'https://jsonplaceholder.typicode.com/photos',
     Method : 'GET',
     dataType : 'json',
     success : (response)=>{
         callBack(response);
     },
     error: (error)=>{
         console.log(error);
     }
 })
}

const displayData=(data)=>{
    console.log(data);
}

const loadData=()=>{
    fetchData(displayData())
}