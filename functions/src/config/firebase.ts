import * as admin from "firebase-admin";
import config from "./config";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase as admin.ServiceAccount),
  databaseURL: `https://${config.firebase.project_id}.firebaseio.com`,
});
// firestore
const firestore: FirebaseFirestore.Firestore = admin.firestore();
const dataPoint = (collectionPath: string) =>
  firestore.collection(collectionPath);
const db = {
  companyCollection: dataPoint("Company_Collection"),
  users: (company: string) =>
    dataPoint(`Company_Collection/${company}/Users`),
};

export {
  db,
};
