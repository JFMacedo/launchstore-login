const db = require('../../config/db')

module.exports = {
  async findOne() {
    let query = 'SELECT * FROM users'

    Object.keys(filters).map(key => {
      query = `${ query }
        ${ key }
      `

      Object.keys(filters[key]).map(field => {
        query = `${ query } ${ field } = '${ filters[key][field] }'`
      })
    })

    const rerults = await db.query(query)
    return results.rows[0]
  }
}