export const getToken = async (email, password) => {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email, // "dev@dev.com"
        password: password, // "developer",
      }),
    });
   console.log(response)
    const data = await response.json();
    console.log(data);
    return data;
  };