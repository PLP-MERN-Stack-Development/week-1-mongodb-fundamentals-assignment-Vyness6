db.books.insertOne({ title: "New Book", author: "Author Name", year: 2024 })


db.books.find({ author: "Author Name" })


db.books.updateOne({ title: "New Book" }, { $set: { year: 2025 } })


db.books.deleteOne({ title: "New Book" })


db.books.find({ year: { $gt: 2015 } })
db.books.find({ genre: { $in: ["Sci-Fi", "Fantasy"] } })


db.books.find({}, { title: 1, author: 1, _id: 0 })


db.books.find().sort({ year: -1 }) 

db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } }
])


db.books.createIndex({ title: 1 })



