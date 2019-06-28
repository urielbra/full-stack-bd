module.exports = (pool) => ({
  allPosts: async (email) => {
    try {
    	const results = 'po.id_user, id_postit, nm_title, nm_body, dt_create, dt_modified';
      const result = await pool.query('select po.id_user, id_postit, nm_title, nm_body, dt_create, dt_modified from postit po inner join userz us on po.id_user = us.id_user where nm_email=$1',[email]).then(res => res.row)
      return result
    } catch (err) { throw err }
  },
  createPost: async (email, title, body) => {
    try {
      const result = await pool.query('insert into postit (id_user,nm_title,nm_body,dt_create,dt_modified) values ((select id_user from userz where nm_email = $1),$2,$3,now(),now())',[email,title,body]).then(res => res.row)
      return result
    } catch (err) { throw err }
  },
  updatePost: async (postID, title, body) => {
    try {
      const result = await pool.query('update postit set nm_title = $1, nm_body = $2, dt_modified = now() where id_postit = $3',[title,body,postID]).then(res => res.row)
      return result
    } catch (err) { throw err }
  },
  deletePost: async (postID) => {
    try {
      const result = await pool.query('delete from postit where id_postit=$1'[postID]).then(res => res.row)
      return result
    } catch (err) { throw err }
  }

})