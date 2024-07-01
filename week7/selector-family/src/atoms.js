import { atomFamily, selector, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
	key: "todosAtomFamily",
	default: selectorFamily({
		key: "todoSelectorFamily",

		/*easier
    
    get: fucntion(id){
    return(
      async fuction({get})=> {
        cosnt res = await axios.get(``);
        retunr res.data.todo;
        }
    )}
    
    
    */
		get: (id) => async ({ get }) => {
			const res = await axios.get(
				`https://sum-server.100xdevs.com/todo?id=${id}`
			);
			return res.data.todo;
		},
	}),
});

/*



const todo = atom({
	key: "todo",
	default: selector({
		key: " sfdgb",
		get: async () => {
			const res = await axios.get(``);
			return res.data.todo;
		},
	}),
});


*/
