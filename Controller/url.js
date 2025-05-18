const shortId =require('shortid');
const connection = require('../connection');
function handleHome(req,res)
{
    connection.query('desc Shortend',(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
    return res.end('From Home');
}
function hanldeRedirection(req,res)
{
    const shorturl=req.params.shortUrl;
    console.log(shorturl);
    connection.query('select redirectURL from shortend where shortId =?',[shorturl],(err,data)=>{
        if(err)
            {
                return res.json({error:err.sqlMessage})
            }
            console.log(data[0].redirectURL);
            return res.status(200).redirect(data[0].redirectURL);
    })
}

function handleNewShortURL(req,res)
{
    const body=req.body;
    console.log(body);
    const shortid= shortId();
    const RURL=body.url;
    const insertquery ='insert into Shortend(shortId,redirectURL) values(?,?)';
    connection.query(insertquery,[shortid,RURL],(err,data)=>{
        if(err)
            {
                return res.status(409).json({error:err.sqlMessage});
            }
        console.log('data Inserted');
        return res.json({mess:'Data Inserted',url:body.url,yourShortId:shortid});
    });
}
module.exports={handleHome,handleNewShortURL,hanldeRedirection};