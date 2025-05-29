const express = require('express')
const router = express.Router()
const uuidv4 = require ('uuid').v4

const games = [
    {
        id: "adowb1b3bb",
        game: "League of Legends",
        description: "League of Legends is a team-based game with over 140 champions to make epic plays with."
    },
    {
        id: "kd7b9ks2nda",
        game: "PlayerUnknown's Battlegrounds",
        description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback."
    }
    ]

    //  d. Make a GET "/get-all-games
    router.get('/get-all-games', (req, res)=>{
        res.json(games)
    })

    // e. Make a GET "/get-game-by-id
    router.get('/get-game-by-id/:id', (req, res)=>{
        const id = req.params.id
        const foundGame = games.find(item=> item.id === req.params.id)
        if (foundGame){
            return res. json(foundGame)
        }else{
            return res.json({message: 'The game with the id does not exist, please check id'})
            }
    })

    // f. Make a POST "/create-new-game
    router.post('/create-new-game', (req, res)=>{
        if(games.find(item => item.game === req.body.game)){
            res.json({message: 'Game already exists, cannot add game'})
        }else{
            if(!req.params.game ||  !req.params.description || !req.body.id ){
                res.json({message: 'Cannot leave text area blank'})
            }else{
            
            const newGame={
                id: uuidv4(),
                game:req.body.game,
                description: req.body.description
            }
            games.push(newGame) 
            res.json(games)   
        }
        }
    })
            

    // g. Make PUT "/update-game
  router.put('/update-game/:id', (req, res)=>{     
  const id = req.params.id
  const game = req.params.game
  const description = req.params.description

    const foundGame = games.find(item => item.id === req.params.id) 
    foundGame.game = game 
    res.json(games) 
})
    // h. Make DELETE "/delete-game
    router.delete('/delete-game/:id', (req, res)=>{
    const id = req.params.id
    const foundIndex = games.findIndex(item => item.id === req.params.id)
    games.splice(foundIndex, 1)
    res.json({message: 'Game deleted successfully'})
})

    module.exports = router