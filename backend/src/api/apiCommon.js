export const getRequest = (url, data=null, header)=>{
    return new Promise((resolve, reject) => {  

      let headers = {
        ...header,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      let q = '';
      headers['Authorization'] = "Bearer " + token;
     
      if(data){
        let arr = []
        Object.keys(data).forEach((key)=>{
          arr.push(`${key}=${data[key]}`);
        })
        q = arr.join('&');
      }


      try {
        fetch(`${url}?${q}`, {
          method: "GET",
          mode: "cors",
          headers,
        }).then((res) => {
          res.json().then((data) => {
            resolve(data);
          });
          return;
        });
      } catch (error) {
        reject(error);
        console.log("Error", error);
      }
    });
  }


  export const postRequest = (url, data=null, json=true) =>{
    return new Promise((resolve, reject) => { 

      let headers = { 
        Accept: "application/json", 
      };

      if (json) {
        data = JSON.stringify(data);
        headers["Content-Type"] = "application/json";
      }

      try {
        fetch(url, {
          method: "POST",
          mode: "cors",
          headers,
          body:data,
        }).then((res) => {
          res.json().then((data) => {
            resolve(data);
          });
          return;
        }); 
      } catch (error) {
        reject(error);
        console.log("Error", error);
      }
    });
}