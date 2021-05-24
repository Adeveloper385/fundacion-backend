import express from 'express'
import settings from './settings'
import app from './app'


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


function startServer(){
    try{
        app.listen(settings.PORT, () => {
            console.log('server on port', settings.PORT )
        })
    
    } catch(err) {
        console.error(err) 
    }
}

startServer()
