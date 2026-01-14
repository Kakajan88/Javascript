
const result = document.getElementById("result");

  document.getElementById("userform").addEventListener("submit", function (e) {
    e.preventDefault();

   const body = {
    username:
    document.getElementById("username").value,
    email:
    document.getElementById("email").value,
    password: 
    document.getElementById("password").value,
    phonenumber: 
    document.getElementById("phonenumber").value
   };
  // result.textContent=JSON.stringify(body,null,2);
    data(body);

});
  async function data(body) {
     try{
      const response = await fetch ("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
          "Content-Type":"appalication/json"
        },
        body: JSON.stringify(body)
      });
      const data = await response .json();
      console.log("Server jogaby", data);
     }catch (error){
       console.log("Yalnyslyk:", error)
     }
  }