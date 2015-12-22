import express from 'express'
import {join as j} from 'path'

const PORT = process.env.PORT || 3000
const app = express()

app.set('view engine', 'jade')
app.set('views', j(__dirname, '..', '..', '..', 'views'))

app.use(express.static(j(__dirname, '..', '..', 'web')))
app.get('/', (req, res) => { res.render('index') })

app.listen(PORT, ::console.log(`Now running on ${PORT}.`)) // Such stage-0, wow.
