# Notes

## Utilities

npx json-server --watch db.json
## REST

GET = Read => 200,404
POST = Create => 201,400
PUT = Update => 200,400,404
DELETE = Delete => 204,404

200 => OK
201 => CREATED
202 => ACCEPTED
204 => NO CONTENT
400 => Bad Request
404 => NOT FOUND

GET /posts
POST /posts
GET /posts/1
PUT /posts/1
DELETE /posts/1

GET /posts/1/comments
<=> GET /comments?post=1

GET /posts/1/comments/1