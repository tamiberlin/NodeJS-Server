// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
async function renameCollection() {
  const uri = 'mongodb+srv://volenteer:v123456@cluster0.rolztbj.mongodb.net/'
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('VolunteeringData'); // Database name
    const oldCollection = database.collection('AbilityCategories'); // Old collection name
    await oldCollection.rename('abilitycategories'); // New collection name
    console.log('Collection renamed successfully');
  } catch (error) {
    console.error('Error renaming collection:', error);
  } finally {
    await client.close();
  }
}

renameCollection().catch(console.error);
