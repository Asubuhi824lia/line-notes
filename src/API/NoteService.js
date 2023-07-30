import axios from "axios"

export default class NoteService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.data.map(post => {
					const cur_date = new Date()
		
					let day = post.userId + 10
					day = day < 10 ? '0'+String(day) : day
		
					let month = cur_date.getMonth() + 1
					month = month < 10 ? '0'+String(month) : month
		
					return {
						id: post.id,
						date: day + '.' + month + '.' + cur_date.getFullYear(),
						text: post.title
					}	
				})
			)
        return response;
    }
}