import axios from "axios"

export default class NoteService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
				return formNotes(response) 
			}
		)
        return response;
    }
}

const formNotes = (response) => {
	response.data = response.data.map(post => {
		const cur_date = new Date()

		let day = post.userId
			day = day < 10 ? '0'+String(day) : day

		let month = cur_date.getMonth() + 1
			month = month < 10 ? '0'+String(month) : month

		return {
			id: post.id,
			date: day + '.' + month + '.' + cur_date.getFullYear(),
			text: post.title
		}	
	})

	return response;
}