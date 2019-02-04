SELECT * FROM posts
LEFT JOIN users ON users.id = posts.user_id
WHERE posts.user_id = $1