export const DummyUserList = ["Srinivas", "Bhagav", "seenu", "Jay", "Santhoshi"];
export const getDummyUserList = (key) => {
  let data = null;
  if (key === "Bhagav") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304811",
      firstName: "Bhagav",
      lastName: "Yadav",
      email: "Bhagav@gmail.com",
      phone: "(909) 090-9090",
    };
  }

  if (key === "seenu") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304813",
      firstName: "seenu",
      lastName: "Kumar",
      email: "seenu@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  if (key === "Jay") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304814",
      firstName: "Jay",
      lastName: "Nari",
      email: "Jay@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  if (key === "Santhoshi") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304815",
      firstName: "Santhoshi",
      lastName: "Nari",
      email: "Santhoshi@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  if (key === "Srinivas") {
    data = {
      address: {
        zipCode: "50001",
        country: "USA",
        state: "CA",
        city: "Rancho Cucamonga",
      },
      _id: "6553aaf6dcc0242ee4304817",
      firstName: "Srinivas",
      lastName: "Nari",
      email: "Srinivas@gmail.com",
      phone: "(909) 090-9090",
    };
  }
  return data;
};