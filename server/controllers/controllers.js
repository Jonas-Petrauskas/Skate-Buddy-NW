const Data = require('../model/data')

exports.getAll = async (req, res) => {
  try {
    const result = await Data.find()
    res.send(result)
    res.status(200)
  } catch (err) {
    res.send(err)
    res.status(500)
  }
}

exports.post = async (req, res) => {
  try {
    const result = await Data.create(req.body)
    res.send(result)
    res.status(201)
  } catch (err) {
    res.send(err)
    res.status(400)
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params
  try {
    await Data.findByIdAndRemove(id)
    res.send('Removed')
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
