import axios from "axios";
import { ListTodos } from "../types.d";

const url = "https://api.jsonbin.io/v3/b/67dcdef98a456b796679cf85";

const headers = {
    'X-Master-Key': '$2a$10$MEMNzl/3piN3K9Vgjl.uIu36rroOq4/g.T1QKFRj8SsTffUoCTfHi', 
    'X-Access-Key': '$2a$10$xZK6EUG1jzJKCopuXw8rCeFalY/qLTbnOK1TIqudN1G.jnNMT3FCa'
}

export const getTareas = async (): Promise<ListTodos> => {
  const { data } = await axios.get(url, {headers});
  return data.record.tareas;
};

export const putTareas = async (tareas: ListTodos) => {
  await axios.put(url, { tareas: tareas }, {headers});
};