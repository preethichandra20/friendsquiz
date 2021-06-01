const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const { render } = require('ejs');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));
var userName;
const answers=["Kiwi","Muriel","Soldier","Rome","Bonnie","Moondance Diner","Orthodontist","Eddie","Pyramid",
"Charles Bing","Montauk","Sesame Street","Burbank","Monica","Erika","Chick","The One With The Baby Shower","72","The Shining","Nova Scotia"];
var score=0;
const questions=[
    {
        question:"Ross is allergic to which one among the following?",
        option1:"Cat Hair",
        option2:"Kiwi",
        option3:"Avacado"
    },
    {
        question:"What is Chandler's middle name?",
        option1:"Menuek",
        option2:"Muriel",
        option3:"Kim"
    },
    {
        question:"What kind of uniform does Joey wear to Mondler's wedding?",
        option1:"Chef",
        option2:"Fire figher",
        option3:"Soldier"
    },
    {
        question:"Where did Pete take Monica for their first date?",
        option1:"Rome",
        option2:"Paris",
        option3:"Barbados"
    },
    {
        question:"What is the name of Pheobe's bald friend who becomes Ross's grilfriend?",
        option1:"Erica",
        option2:"Julie",
        option3:"Bonnie"
    },
    {
        question:"What’s the name of the 1950s-themed diner where Monica worked as a waitress?",
        option1:"Marilyn & Audrey",
        option2:"Twilight Galaxy",
        option3:"Moondance Diner"
    },
    {
        question:"What is Russ's job?",
        option1:"Dentist",
        option2:"Orthodontist",
        option3:"Podiatrist"
    },
    {
        question:"What is the name of Chandler's pyscho roomate?",
        option1:"Phil",
        option2:"Eddie",
        option3:"Lance"
    },
    {
        question:"Which game show did Joey appear on?",
        option1:"Jeopardy",
        option2:"Wheel of Fortune",
        option3:"Pyramid"
    },
    {
        question:"What is the name of Chandler's father?",
        option1:"Carlos Bing",
        option2:"Charles Bing",
        option3:"Cooper Bing"
    },
    {
        question:"Where did Pheobe meet her real mother?",
        option1:"Long Island",
        option2:"Montauk",
        option3:"The Hamptons"
    },
    {
        question:"Which PBS show never answered Phoebe's letter?",
        option1:"Sesame Street",
        option2:"Arthur",
        option3:"Reading Rainbow"
    },
    {
        question:"In which city were the show's iconic opening credits filmed?",
        option1:"Boston",
        option2:"Burbank",
        option3:"London"
},
{
    question:"Who hoards a lot of junk in their closet?",

    option1:"Joey",
    option2:"Ross",
    option3:"Monica"
},
{
    question:"Name Joey's stalker?",
    option1:"Sarah",
    option2:"Erika",
    option3:"Beth"
},
{
    question:"What does Treeger, the super, think that Joey's nickname is?",
    option1:"Chick",
    option2:"Honey",
    option3:"Duck"
},
{
    question:"Name The Episode In Which The Guys Play Bamboozled?",
    option1:"The One With The Baby Shower",
    option2:"The One With The Cheap Wedding Dress",
    option3:"The One With The Tea Leaves"
},
{
    question:"How Many Long-Stem Roses Did Ross Send Emily?",
    option1:"62",
    option2:"72",
    option3:"52"
},
{
    question:"What Book Did Joey Keep In The Freezer?",
    option1:"Cujo",
    option2:"The Shining",
    option3:"The Godfather"
},
{
    question:"Where Did Ross And Chandler End Up On A Boat With Gandalf?",
    option1:"Long Island",
    option2:"Nova Scotia",
    option3:"The Bahama's"
}
]
app.get("/",function(req,res){
    res.render("about");
})
app.post("/",function(req,res){
    userName=req.body.userName;
    res.redirect("questions");
})
app.get("/questions",function(req,res){
    res.render("questions",{questions:questions});
})
app.post("/questions",function(req,res){
    
    const ob=Object.values(req.body);
    score=0;
    for(var i=0;i<answers.length;i++)
    {
        if(ob[i]===answers[i])
        {
            score=score+1;
        }
    }
    res.redirect("/score");
})

app.get("/score",function(req,res){
    res.render("score",{score:score,name:userName});
})
app.post("/score",function(req,res){
    res.redirect("/");
})
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));