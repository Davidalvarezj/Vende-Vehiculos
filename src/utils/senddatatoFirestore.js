import { db, storage } from "../firebaseconf";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const sendData = async (Data) => {
  console.log("Sending data to server ...");
  console.log("Data: ", Data);

  const objImg1 = Data.Image1;
  const objImg2 = Data.Image2;
  const objImg3 = Data.Image3;
  const objImg4 = Data.Image4;

  const storageRef1 = ref(
    storage,
    Data.VehicleType + "/" + Data.Email + "/" + Date.now()
  );
  await uploadBytes(storageRef1, objImg1);
  const url1 = await getDownloadURL(storageRef1);
  Data.Image1 = url1;
  console.log("Uploaded  file #1");

  const storageRef2 = ref(
    storage,
    Data.VehicleType + "/" + Data.Email + "/" + Date.now()
  );
  await uploadBytes(storageRef2, objImg2);
  const url2 = await getDownloadURL(storageRef2);
  Data.Image2 = url2;
  console.log("Uploaded  file #2");

  const storageRef3 = ref(
    storage,
    Data.VehicleType + "/" + Data.Email + "/" + Date.now()
  );
  await uploadBytes(storageRef3, objImg3);
  const url3 = await getDownloadURL(storageRef3);
  Data.Image3 = url3;
  console.log("Uploaded  file #3");

  const storageRef4 = ref(
    storage,
    Data.VehicleType + "/" + Data.Email + "/" + Date.now()
  );
  await uploadBytes(storageRef4, objImg4);
  const url4 = await getDownloadURL(storageRef4);
  Data.Image4 = url4;
  console.log("Uploaded  file #4");

  console.log("New Data: ", Data);

  const docRef = await addDoc(collection(db, Data.VehicleType), Data);

  return true;
};
