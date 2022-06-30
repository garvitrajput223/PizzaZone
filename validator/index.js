exports.userSignupValidator=(req,res,next)=>{
    req.check('name','Name is required').notEmpty()
        .matches(/^[a-zA-Z ]*$/)
        .withMessage("You have entered an Invalid Name")
    req.check('email','Email must be 3 to 32 chars')
        .matches(/.+\@.+\..+/)
        .withMessage('Please enter a valid E-mail')
        .isLength({
            min:4,max:35
        });
    req.check('password','Password is Required').notEmpty()
    req.check('password')
        
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)
        .withMessage("Password must contain Minimum eight characters, at least one letter, one number and one special character:")
        const errors=req.validationErrors()
        if(errors){
            const firstError=errors.map(error=> error.msg)[0]
            return res.status(400).json({error:firstError});
        }
        next();
}