import { db, storage } from "../firebaseconf";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const receiveData = async (params) => {
  const Data = [];
  let DataFilter = [];
  const params2 = params.split("/", 2)[0];

  if (params2 == "autos") {
    const querySnapshot1 = await getDocs(collection(db, "Autos"));
    querySnapshot1.forEach((docum) => {
      Data.push(docum.data());
    });
    return Data;
  }

  if (params2 == "motos") {
    const querySnapshot5 = await getDocs(collection(db, "Motos"));
    querySnapshot5.forEach((docum) => {
      Data.push(docum.data());
    });
    return Data;
  }

  if (params2 == "camiones") {
    const querySnapshot1 = await getDocs(collection(db, "Camiones"));
    querySnapshot1.forEach((docum) => {
      Data.push(docum.data());
    });
    return Data;
  }

  if (params2 == "botes") {
    const querySnapshot1 = await getDocs(collection(db, "Botes"));
    querySnapshot1.forEach((docum) => {
      Data.push(docum.data());
    });
    return Data;
  }

  if (params == "todos") {
    const querySnapshot1 = await getDocs(collection(db, "Autos"));
    querySnapshot1.forEach((docum) => {
      Data.push(docum.data());
    });
    const querySnapshot2 = await getDocs(collection(db, "Motos"));
    querySnapshot2.forEach((docum) => {
      Data.push(docum.data());
    });
    const querySnapshot3 = await getDocs(collection(db, "Camiones"));
    querySnapshot3.forEach((docum) => {
      Data.push(docum.data());
    });
    const querySnapshot4 = await getDocs(collection(db, "Botes"));
    querySnapshot4.forEach((docum) => {
      Data.push(docum.data());
    });

    return Data;
  }
};

export const SearchData = async (param) => {
  const Data = [];
  let DataFilter = [];
  const vehicleRef1 = collection(db, "Autos");
  const vehicleRef2 = collection(db, "Motos");
  const vehicleRef3 = collection(db, "Camiones");
  const vehicleRef4 = collection(db, "Botes");

  const q1 = query(
    vehicleRef1,
    where("Reference", ">=", param),
    where("Reference", "<=", param + "\uf8ff")
  );
  const q2 = query(
    vehicleRef2,
    where("Reference", ">=", param),
    where("Reference", "<=", param + "\uf8ff")
  );
  const q3 = query(
    vehicleRef3,
    where("Reference", ">=", param),
    where("Reference", "<=", param + "\uf8ff")
  );
  const q4 = query(
    vehicleRef4,
    where("Reference", ">=", param),
    where("Reference", "<=", param + "\uf8ff")
  );
  const querySnapshot1 = await getDocs(q1);
  querySnapshot1.forEach((docum) => {
    Data.push(docum.data());
  });
  const querySnapshot2 = await getDocs(q2);
  querySnapshot2.forEach((docum) => {
    Data.push(docum.data());
  });
  const querySnapshot3 = await getDocs(q3);
  querySnapshot3.forEach((docum) => {
    Data.push(docum.data());
  });
  const querySnapshot4 = await getDocs(q4);
  querySnapshot4.forEach((docum) => {
    Data.push(docum.data());
  });
  return Data;
};

export const fetchHomeData = async () => {
  const Data = [];
  let DataFilter = [];
  const vehicleRef1 = collection(db, "Autos");
  const vehicleRef2 = collection(db, "Motos");
  const vehicleRef3 = collection(db, "Camiones");
  const vehicleRef4 = collection(db, "Botes");

  const q1 = query(vehicleRef1, where("Featured", "==", true));
  const q2 = query(vehicleRef2, where("Featured", "==", true));
  const q3 = query(vehicleRef3, where("Featured", "==", true));
  const q4 = query(vehicleRef4, where("Featured", "==", true));
  const querySnapshot1 = await getDocs(q1);
  querySnapshot1.forEach((docum) => {
    Data.push(docum.data());
  });
  const querySnapshot2 = await getDocs(q2);
  querySnapshot2.forEach((docum) => {
    Data.push(docum.data());
  });
  const querySnapshot3 = await getDocs(q3);
  querySnapshot3.forEach((docum) => {
    Data.push(docum.data());
  });
  const querySnapshot4 = await getDocs(q4);
  querySnapshot4.forEach((docum) => {
    Data.push(docum.data());
  });

  if (Data.length > 4) Data.splice(4);
  return Data;
};

export const fetchUserVehicle = async (user) => {
  let Data = [];
  let DataFilter = [];
  let i = 0;
  const vehicleRef1 = collection(db, "Autos");
  const vehicleRef2 = collection(db, "Motos");
  const vehicleRef3 = collection(db, "Camiones");
  const vehicleRef4 = collection(db, "Botes");

  const q1 = query(vehicleRef1, where("Email", "==", user));
  const q2 = query(vehicleRef2, where("Email", "==", user));
  const q3 = query(vehicleRef3, where("Email", "==", user));
  const q4 = query(vehicleRef4, where("Email", "==", user));
  const querySnapshot1 = await getDocs(q1);
  querySnapshot1.forEach((docum, index) => {
    Data.push({ ...docum.data(), documentid: docum.id });
  });
  const querySnapshot2 = await getDocs(q2);
  querySnapshot2.forEach((docum) => {
    Data.push({ ...docum.data(), documentid: docum.id });
  });
  const querySnapshot3 = await getDocs(q3);
  querySnapshot3.forEach((docum) => {
    Data.push({ ...docum.data(), documentid: docum.id });
  });
  const querySnapshot4 = await getDocs(q4);
  querySnapshot4.forEach((docum) => {
    Data.push({ ...docum.data(), documentid: docum.id });
  });

  return Data;
};

export const fetchDeletePost = async (id) => {
  const Data = [];
  let DataFilter = [];

  await deleteDoc(doc(db, "Autos", id));
  await deleteDoc(doc(db, "Motos", id));
  await deleteDoc(doc(db, "Camiones", id));
  await deleteDoc(doc(db, "Botes", id));
};
