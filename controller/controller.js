function Controller(User){
    function get(req, res){
        User.find((err , user) => {
            if(err)
                return res.send({message: 'an error occured'})
            return res.send({message: 'successful', user})
        })
    }

    function getById(req, res){
        User.findById(req.params.id, (err, user)=>{
            if(err)
                return res.send({message: 'an error occured'})
            return res.send({message: 'successful', user}) 
        })
    }

    function post(req, res){
        console.log(req.body)
        const user = new User(req.body)
        user.save((err, user) => {
            if(err)
                return res.send({message: 'an error occured'})
            return res.send({message: 'successful', user})
            

        })
    }

    function update(req, res){
        User.findById(req.params.id, (err, user) =>{
            if(err)
                return res.send({message: 'an error occured'})
            user.name = req.body.name
            user.email = req.body.email
            user.country = req.body.country
            user.save((err, user), function(){
                if(err)
                    return res.send({message: 'an error occured'})
                return res.send({message: 'updated successfully', user}) 
            })
        })
    }

  

    function deleteOne(req, res){
        User.findById(req.params.id, (err, user) =>{
            if(err)
                return res.send({message: 'an error occured'})
            user.remove((err)=>{
                if(err)
                    return res.send({message: 'an error occured'})
                return res.send({message: 'deletd succesfully'})

            })
           
        }) 
    }

    return {get, post, deleteOne, update, getById}

  
}

module.exports = Controller