import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBaUZbk_W6pzrTfFJPE-QoAJbtRJoHhSPg',
  authDomain: 'crwn-db-ae17c.firebaseapp.com',
  databaseURL: 'https://crwn-db-ae17c.firebaseio.com',
  projectId: 'crwn-db-ae17c',
  storageBucket: 'crwn-db-ae17c.appspot.com',
  messagingSenderId: '234110396870',
  appId: '1:234110396870:web:5ad613babd8d9845daeac7'
};

export const createUserProfileDocument = async (userAuth, additionlData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionlData
      });
    } catch (err) {
      console.log('error creating user account', err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } , {})
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// const firestore = firebase.firestore();

// firestore.collection('users').doc('mdhSZvMYzvT6maQH2wQySaRR70I3').collection('cartItems').doc('ed88BzgJIRKeneeej5Of')

// firestore.doc('/users/mdhSZvMYzvT6maQH2wQySaRR70I3/cartItems/ed88BzgJIRKeneeej5Of');
// firestore.collection('/users/mdhSZvMYzvT6maQH2wQySaRR70I3/cartItems');
