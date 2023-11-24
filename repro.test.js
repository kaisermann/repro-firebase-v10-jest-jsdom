const { initializeApp } = require("firebase/app");
const {
  connectFirestoreEmulator,
  doc,
  initializeFirestore,
  getDoc,
  setDoc,
} = require("firebase/firestore");

const testApp = initializeApp({
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  projectId: "some-project-id",
});

const testFirestore = initializeFirestore(testApp, {
  ignoreUndefinedProperties: true,
});

connectFirestoreEmulator(testFirestore, "127.0.0.1", 5001);

test("hangs forever", async () => {
  const ref = doc(testFirestore, "users", "alice");

  // hangs forever
  await setDoc(ref, { age: 29 });

  // would also hang forever
  console.log((await getDoc(ref)).data());

  expect(true).toBe(true);
});
