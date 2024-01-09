import { MongoClient } from "mongodb"; //🦋🦋[MONGO DB]🦋🦋

async function handler(req, res) {
  console.log("Received request:", req.method);

  if (req.method === "POST") {
    const { email, name, message } = req.body;
    //🥒🥒[CONTACT API ROUTE]🥒🥒 🥒🥒[CONTACT API ROUTE]🥒🥒
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    // console.log(newMessage);//this was to see if all the Input Fields works and submit the data, the result was displayed here in the Terminal of VSCode

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://Milici-Ilie:LLAR5Nmr9sTgiRRd@cluster0.rkfd97h.mongodb.net/Milici-site?retryWrites=true&w=majority"
      ); //🦋🦋[MONGO DB]🦋🦋
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    } //🦋🦋[MONGO DB]🦋🦋

    const db = client.db;

    try {
      const result = await db.collection("messages").insertOne(newMessage); //🦋🦋[MONGO DB]🦋🦋
      newMessage.id = result.insertedId;
    } catch {
      client.close(); //will close the client if something failed
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close(); //will close the client if succes to submit

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
} //🦋🦋[MONGO DB]🦋🦋 here we have some 'error' if the BackEnd Data=Base failed and also we have a succes message
//🥒🥒[CONTACT API ROUTE]🥒🥒
export default handler;
