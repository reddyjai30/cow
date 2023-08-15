import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const getCowsSync = createAsyncThunk(
// 	'todos/getTodosAsync',
// 	async () => {
// 		const resp = await fetch('http://localhost:7000/todos');
// 		if (resp.ok) {
// 			const cows = await resp.json();
// 			return { cows };
// 		}
// 	}
// );

export const cowsSlice = createSlice({
	name: 'cows',
	initialState: [
        { id: 111 , name: "Aaaaa", temp : 10, heartRate : 90 , location : { lat: 18, long : 76 }, battery : 10, status: true },
        { id: 222 , name: "bbbbbdddd", temp : 20, heartRate : 80 , location : { lat: 22, long : 20 }, battery : 20, status: true },
        { id: 3333, name: "ccccc", temp : 30, heartRate : 60 , location : { lat: 33, long : 30 }, battery : 30, status: true },
        { id: 11213 , name: "Aaaaa", temp : 10, heartRate : 90 , location : { lat: 18, long : 76 }, battery : 10, status: true },
        { id: 22223 , name: "bbbbcvvb", temp : 20, heartRate : 80 , location : { lat: 22, long : 20 }, battery : 20, status: false },
        { id: 332533 , name: "ccccc", temp : 30, heartRate : 60 , location : { lat: 33, long : 30 }, battery : 30, status: true },
        { id: 1131 , name: "Aaaaass", temp : 10, heartRate : 90 , location : { lat: 18, long : 76 }, battery : 10, status: true },
        { id: 22252 , name: "bbbbfffb", temp : 20, heartRate : 80 , location : { lat: 22, long : 20 }, battery : 20, status: false },
        { id: 3335 , name: "ccccc", temp : 30, heartRate : 60 , location : { lat: 33, long : 30 }, battery : 30, status: true },
        { id: 4445 , name: "dddsssdd", temp : 40, heartRate : 96 , location : { lat: 44, long : 40 }, battery : 40, status: false },
	],
	reducers: {
		addCow: (state, action) => {
			const todo = {
				id: state.length,
				name: action.payload.title,
				temp: action.payload.temp,
                location : action.payload.location,
                heartRate : action.payload.heartRate,
                battery : action.payload.battery,
                status : action.payload.status
			};
			state.push(todo);
		},
		deleteCow: (state, action) => {
			return state.filter((cow) => cow.id !== action.payload.id);
		},
        getCow: (state, action) => {
			return state.filter((cow) => cow.id === action.payload.id);
		},
	},
    // 	extraReducers: {
	// 	[getCowsSync.fulfilled]: (state, action) => {
	// 		return action.payload.todos;
	// 	},
	// },
});
// , toggleComplete,
export const { addCow, deleteCow, getCow } = cowsSlice.actions;

export default cowsSlice.reducer;