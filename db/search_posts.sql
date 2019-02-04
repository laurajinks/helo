SELECT * FROM posts
LEFT JOIN users ON users.id = posts.user_id
WHERE posts.title LIKE $1