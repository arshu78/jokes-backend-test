import express from "express";

const app=express();

// app.get('/',(req,res) => {
//     res.send('Server is ready');
// });
const jokes=[
    {
      "id": 1,
      "title": "Atom Trust",
      "content": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      "id": 2,
      "title": "Eyebrow Surprise",
      "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
    },
    {
      "id": 3,
      "title": "Scarecrow Award",
      "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 4,
      "title": "Anti-Gravity Book",
      "content": "I'm reading a book on anti-gravity. It's impossible to put down!"
    },
    {
      "id": 5,
      "title": "Ocean Conversation",
      "content": "What did one ocean say to the other ocean? Nothing, they just waved."
    }
  ]
  
app.get('/api/jokes',(req,res) => {
    res.send(jokes);
});

const port= process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Serve at http://localhost:${port}`);
});