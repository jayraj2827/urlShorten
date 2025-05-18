const express =require('express');
const router=express.Router();
const {handleHome,hanldeRedirection,handleNewShortURL}= require('../Controller/url');
router.post('/',handleNewShortURL);
router.get('/:shortUrl',hanldeRedirection);

module.exports =router;