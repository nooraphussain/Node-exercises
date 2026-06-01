const router = express.Router()

router.use((req,res, next) => {
    console.log('helo');
    next()
})

router.get('/profile', (req,res) =>{
    res.send('Getting profile page');
})


//app.js

const userRouter = require('/routerLevel.js');
app.use('/user', userRouter); 