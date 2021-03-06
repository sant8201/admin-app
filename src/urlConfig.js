const baseUrl = 
      location.hostname === "localhost" 
      ? "http://localhost:2000" 
      : "https://pragas-rest-server.herokuapp.com";

//const baseUrl = process.env.API || "https://pragas-rest-server.herokuapp.com";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
