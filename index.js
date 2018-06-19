const Express = require('express')
const app = new Express()

app.get('/', (req, res) => {
	res.send({ message: 'This is simple rest api.' })
})

app.listen(3000, () => console.log('App running at post: 3000'))