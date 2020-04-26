const DataLoader = require("dataloader");
const fakeBooksDB = [
  { title: "book 1", author_id: 1 },
  { title: "book 2", author_id: 2 },
  { title: "book 3", author_id: 3 },
  { title: "book 4", author_id: 3 },
];
const batchGetBooksById = async (ids) => {
  const books = ids.map((authorId) => {
    return fakeBooksDB.filter((book) => book.author_id === authorId);
  });
  console.log("I only get fired once");
  return books;
};
const bookLoader = new DataLoader(batchGetBooksById);
// loop simulates 3 author parent resolvers,
for (let i = 1; i <= 3; i++) {
  bookLoader.load(i).then((res) => {
    console.log(`\nAuthor #${i} books:`);
    console.log(res);
  });
}
