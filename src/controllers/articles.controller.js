import { pool } from "../db.js"

//obtener los articulos
export const getArticles = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM articles')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'something goes grong'
    })
  }
}

// obtener 1 articulo
export const getArticle = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM articles WHERE id = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
      message: 'Article not found'
    })
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: 'something goes grong'
    })
  }
}

// enviando articulos
export const postArticles = async (req, res) => {
  const { nombre, categoria, precio, valorT, stock } = req.body
  try {
    const [rows] = await pool.query('INSERT INTO articles(nombre, categoria, precio, valorT, stock) VALUES(?,?,?,?,?)',
      [nombre, categoria, precio, valorT, stock])
    res.send({
      id: rows.insertId,
      nombre,
      categoria,
      precio,
      valorT,
      stock,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'something goes grong'
    })
  }
}

//eliminando ariculo
export const deleteArticles = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM articles WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
      message: 'Article not found'
    })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({
      message: 'something goes grong'
    })
  }
}


// actualizando articulo
export const putArticles = async (req, res) => {
  const { id } = req.params
  const { nombre, categoria, precio, valorT, stock } = req.body
  try {
    const [result] = await pool.query('UPDATE articles SET nombre = IFNULL(?, nombre), categoria = IFNULL(?, categoria), precio = IFNULL(?, precio), valorT = IFNULL(?, valorT), stock = IFNULL(?, stock) WHERE id=?',
      [nombre, categoria, precio, valorT, stock, id])

    if (result.affectedRows === 0) return res.status(404).json({
      message: 'Article no found'
    })
    const [rows] = await pool.query('SELECT * FROM articles WHERE id = ?', [id])
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: 'something goes grong'
    })
  }
}

