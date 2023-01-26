import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Card from "./componets/Card";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
      <Flex gap={"16px"} wrap={"wrap"} justifyContent={"center"} >  
      {
        users.map((user) => {
          return (
          <Card 
          key={user.id}
          name={user.name}
          />
          );
        })
      };
      </Flex>
    </ChakraProvider>
  );
}
