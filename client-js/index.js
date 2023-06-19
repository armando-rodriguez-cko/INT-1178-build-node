import Sdk from "sdk-javascript";
const config = {
  apiKey: "NO-API-REQUIRED",
  baseUrl: "https://jsonplaceholder.typicode.com"
}
const client = new Sdk(config);
const posts = await client.posts.getAll();
console.log({ posts });
const users = await client.users.getAll();
console.log({ users });