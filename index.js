const express = require('express')
const app = express()
const port = 4000

const githubData =  {
  "login": "P-Dubey294",
  "id": 174113079,
  "node_id": "U_kgDOCmDBNw",
  "avatar_url": "https://avatars.githubusercontent.com/u/174113079?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/P-Dubey294",
  "html_url": "https://github.com/P-Dubey294",
  "followers_url": "https://api.github.com/users/P-Dubey294/followers",
  "following_url": "https://api.github.com/users/P-Dubey294/following{/other_user}",
  "gists_url": "https://api.github.com/users/P-Dubey294/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/P-Dubey294/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/P-Dubey294/subscriptions",
  "organizations_url": "https://api.github.com/users/P-Dubey294/orgs",
  "repos_url": "https://api.github.com/users/P-Dubey294/repos",
  "events_url": "https://api.github.com/users/P-Dubey294/events{/privacy}",
  "received_events_url": "https://api.github.com/users/P-Dubey294/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "PrathamKumar Dubey",
  "company": "Asterisc Technocrat Information Technology & Services",
  "blog": "https://www.linkedin.com/in/pratham-ku-dubey-6b9440255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  "location": "Gondia Maharastra ",
  "email": null,
  "hireable": null,
  "bio": "Full Stack Web Devloper🚀",
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-06-28T11:49:49Z",
  "updated_at": "2025-03-22T07:55:54Z"
}

app.get('/', (req, res) => {
  res.send('Hello Pratham Dubey!')
})

app.get('/twitter',(req,res) => {
    res.send('www.google.com')
})

app.get('/login',(req,res) => {
    res.send('<h1> Please login at chai & code </h1>')
})

app.get('/youtube', (req,resp) => {
    resp.send('<h2> Eat sleep code repeate <h2>')
})

app.get('/github', (req,res) => {
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})