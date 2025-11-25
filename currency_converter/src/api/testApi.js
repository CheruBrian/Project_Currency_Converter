import axios from "axios";

export async function testAPI() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(response.data);
}
