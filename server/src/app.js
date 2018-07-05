const 	express = require('express'),
		bodyParser = require('body-parser'),
		morgan = require('morgan')
		routes = require('./routes/routes'),
		mongoose = require('mongoose'),
		config = require('./config')

mongoose.connect(config.db, (err, res) => {
	if (err) {
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexión a la base de datos establecida...')

	const app = express()
	app.use(morgan('combine'))
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())

	routes(app)

	app.listen(process.env.PORT || 8081)
})
