import clientPromise from "../../lib/mongodb";

export default async function cardsAPI(req, res) {
  const client = await clientPromise;
  const db = await client.db("memory-cards-db");
  console.log(`Is DB Connected : ${req.query.cardType}`);
  let cardsCursor = "";
  switch (req.query.cardType) {
    case "sightWords":
      console.log(`Inside case sightWords`);
      cardsCursor = await db
        .collection("memory-cards-col")
        .find({})
        .project({ sightWords: 1, _id: 0 })
        .toArray();
      break;
    case "numbers":
      cardsCursor = await db
        .collection("memory-cards-col")
        .find({})
        .project({ numbers: 1, _id: 0 })
        .toArray();
      break;
    case "alphabets":
      cardsCursor = await db
        .collection("memory-cards-col")
        .find({})
        .project({ alphabets: 1, _id: 0 })
        .toArray();
      break;
  }
  console.log(`API Response : ${cardsCursor[0]}`);
  res.status(200).json(cardsCursor);
}
