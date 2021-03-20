$(document).ready(function () {
  var User = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Karl",
        last: "Johnson",
      },
      location: {
        street: {
          number: 6057,
          name: "Avondale Ave",
        },
        city: "New York",
        state: "New York",
        country: "United States",
        postcode: 12564,
        coordinates: {
          latitude: "88.9222",
          longitude: "-82.9558",
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "karl.johnson@example.com",
      login: {
        uuid: "97890990-7bf2-469d-981c-16a10ae5307f",
        username: "bigpeacock170",
        password: "lovelove",
        salt: "DS9jzK3v",
        md5: "d178a789477ccccbeef8325d7adc9b00",
        sha1: "5142bc1cb4ccc642cd4bc45ce5fa07dee8228129",
        sha256:
          "ac13d6d88577caa64fad78c599ffac70dcf5d3ded1fcceeb33b6b0b0fe9d9250",
      },
      dob: {
        date: "1965-11-30T13:18:54.147Z",
        age: 56,
      },
      registered: {
        date: "2013-03-31T09:43:14.348Z",
        age: 8,
      },
      phone: "(068)-320-4900",
      cell: "(476)-843-3163",
      id: {
        name: "SSN",
        value: "557-48-8854",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/6.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      },
      nat: "US",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Finn",
        last: "Morris",
      },
      location: {
        street: {
          number: 7130,
          name: "The Strand",
        },
        city: "New Plymouth",
        state: "Nelson",
        country: "New Zealand",
        postcode: 21728,
        coordinates: {
          latitude: "-87.2603",
          longitude: "-154.9263",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "finn.morris@example.com",
      login: {
        uuid: "7b9d7552-a699-4c6d-9e86-d1581be97265",
        username: "whitelion863",
        password: "cygnus",
        salt: "yuoArpzS",
        md5: "3ab606a774eda9af02ae833c504172f0",
        sha1: "308d6837c97f44f7ad0110a2030596e794ea4fb2",
        sha256:
          "e56938a84abf116db7a2570dbb7a6e88177842f6f85788a02eb917aa46274295",
      },
      dob: {
        date: "1997-12-02T19:57:22.746Z",
        age: 24,
      },
      registered: {
        date: "2011-08-16T06:54:26.042Z",
        age: 10,
      },
      phone: "(727)-069-6763",
      cell: "(127)-787-1458",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/64.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Romane",
        last: "Perez",
      },
      location: {
        street: {
          number: 3717,
          name: "Rue Dubois",
        },
        city: "Bordeaux",
        state: "Bouches-du-Rhône",
        country: "France",
        postcode: 48220,
        coordinates: {
          latitude: "-47.0755",
          longitude: "-24.7668",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "romane.perez@example.com",
      login: {
        uuid: "446b4f8d-f8ac-44c0-af9c-9533cbdb278d",
        username: "brownelephant232",
        password: "poopie",
        salt: "41RJrORu",
        md5: "23b9a3bb0c9b2608895002c71a66f194",
        sha1: "e896b61cf2466ae1785e2e2e28ef0319ceb26485",
        sha256:
          "2b2b8100edff6cd58209535e2b94a87c39971f9da46bcafb847b7c89b02360ff",
      },
      dob: {
        date: "1995-04-30T08:00:51.990Z",
        age: 26,
      },
      registered: {
        date: "2002-04-09T16:20:01.048Z",
        age: 19,
      },
      phone: "01-62-65-50-67",
      cell: "06-16-18-12-63",
      id: {
        name: "INSEE",
        value: "2NNaN28512229 62",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Lucia",
        last: "Hammeren",
      },
      location: {
        street: {
          number: 7767,
          name: "Tyristubbveien",
        },
        city: "Torvika",
        state: "Rogaland",
        country: "Norway",
        postcode: "1514",
        coordinates: {
          latitude: "4.5291",
          longitude: "7.5204",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "lucia.hammeren@example.com",
      login: {
        uuid: "ec1a5d22-6edb-494a-b5b3-42e050a3a990",
        username: "tinykoala697",
        password: "tinman",
        salt: "61RshWP5",
        md5: "232d4f8c907349f6f0269b7562a686fc",
        sha1: "854e737eb00ba9697bcd12f1f0d3a0c22a997f30",
        sha256:
          "2375b4f08989e09033f44e893f4efe476065ba2a83821bc437efdfe279182b40",
      },
      dob: {
        date: "1974-06-18T02:40:05.692Z",
        age: 47,
      },
      registered: {
        date: "2002-05-30T23:54:20.946Z",
        age: 19,
      },
      phone: "50971296",
      cell: "90562854",
      id: {
        name: "FN",
        value: "18067444058",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Romane",
        last: "Renaud",
      },
      location: {
        street: {
          number: 6781,
          name: "Rue Laure-Diebold",
        },
        city: "Saint-Denis",
        state: "Doubs",
        country: "France",
        postcode: 93943,
        coordinates: {
          latitude: "30.4387",
          longitude: "83.8155",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "romane.renaud@example.com",
      login: {
        uuid: "2a2d24a6-4e82-4444-aa4c-b94cfceda1ed",
        username: "silvercat363",
        password: "eeeeeeee",
        salt: "smG2CDm4",
        md5: "03507fc20d120ec7762b209ec312ac3e",
        sha1: "a72ea64ce93887093ac266d8d0eb1824eb097f0d",
        sha256:
          "e74e8682bae1e51e7df80956cb4a1f33e93498943e37358ebebe9b304d90d609",
      },
      dob: {
        date: "1982-02-15T13:57:45.232Z",
        age: 39,
      },
      registered: {
        date: "2006-02-04T06:07:35.884Z",
        age: 15,
      },
      phone: "01-43-38-74-92",
      cell: "06-11-20-06-64",
      id: {
        name: "INSEE",
        value: "2NNaN97739478 30",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/87.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Melike",
        last: "Arslanoğlu",
      },
      location: {
        street: {
          number: 972,
          name: "Şehitler Cd",
        },
        city: "Kayseri",
        state: "Muğla",
        country: "Turkey",
        postcode: 28507,
        coordinates: {
          latitude: "35.6181",
          longitude: "-75.4410",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "melike.arslanoglu@example.com",
      login: {
        uuid: "2caeee7a-8056-40fb-a3ea-a08a3d96128a",
        username: "tinymeercat589",
        password: "bigd",
        salt: "X4rBXSHW",
        md5: "1e17dad5b7d9f5391e3e9a30ec23e8dc",
        sha1: "d84ebfc5d40e8bfd01ac1856109ec45b4cfaaa86",
        sha256:
          "bd929935f287f794adc65ece095c9f8ada01f66798a689dabdcf747ef2393648",
      },
      dob: {
        date: "1997-12-08T17:16:29.870Z",
        age: 24,
      },
      registered: {
        date: "2018-11-11T10:46:26.731Z",
        age: 3,
      },
      phone: "(992)-046-2616",
      cell: "(637)-725-8429",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/88.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
      },
      nat: "TR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Regina",
        last: "Daniels",
      },
      location: {
        street: {
          number: 4623,
          name: "Green Rd",
        },
        city: "Stamford",
        state: "Maryland",
        country: "United States",
        postcode: 82187,
        coordinates: {
          latitude: "69.3921",
          longitude: "121.3114",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "regina.daniels@example.com",
      login: {
        uuid: "83aed4e4-38d7-473e-9c24-b3e1754cb6e4",
        username: "redtiger700",
        password: "diao",
        salt: "4CG3nvwN",
        md5: "b12fb9e25145d9afef09209a392e4685",
        sha1: "660943438da57519ccb95273697a6d2950770f2a",
        sha256:
          "af66e466f8d26304c79875c4537c6ac5f300dbfcdcd8fd40fbbcd26541043d25",
      },
      dob: {
        date: "1967-09-18T13:24:41.223Z",
        age: 54,
      },
      registered: {
        date: "2017-06-25T13:13:55.133Z",
        age: 4,
      },
      phone: "(815)-632-4950",
      cell: "(046)-499-1785",
      id: {
        name: "SSN",
        value: "382-68-6799",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/93.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg",
      },
      nat: "US",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Louis",
        last: "Jones",
      },
      location: {
        street: {
          number: 8379,
          name: "North Street",
        },
        city: "Preston",
        state: "Durham",
        country: "United Kingdom",
        postcode: "MO5P 9XR",
        coordinates: {
          latitude: "-70.1876",
          longitude: "-110.0614",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "louis.jones@example.com",
      login: {
        uuid: "300bb7fb-c5f7-4cd4-8eda-18515793ce47",
        username: "ticklishbear962",
        password: "anthrax",
        salt: "qM7D2b7b",
        md5: "b004fadd1eec99ba5ef831d2fe13ec9f",
        sha1: "d63de92a9160ab4ee840895132163c824c6249af",
        sha256:
          "5490dc76d2824c3bb951313aa343d3e3168f2e76147f1a68369fcd4b4b9a093f",
      },
      dob: {
        date: "1951-02-08T23:48:30.316Z",
        age: 70,
      },
      registered: {
        date: "2002-04-06T16:58:27.058Z",
        age: 19,
      },
      phone: "0111390 958 0470",
      cell: "0761-398-211",
      id: {
        name: "NINO",
        value: "OZ 13 63 17 G",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Don",
        last: "George",
      },
      location: {
        street: {
          number: 4836,
          name: "Tara Street",
        },
        city: "Ennis",
        state: "Leitrim",
        country: "Ireland",
        postcode: 59810,
        coordinates: {
          latitude: "54.2514",
          longitude: "75.9456",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "don.george@example.com",
      login: {
        uuid: "8c2e98ff-eff4-407a-ba2a-a5cb38d73efb",
        username: "happyfish123",
        password: "escort",
        salt: "pPpOyAZC",
        md5: "cc8153ffa141d760b0e3a21be36dd3ec",
        sha1: "ea86249e0ba51f6f8760843adc05d92a542f1a16",
        sha256:
          "76e794afca77ee52d3cbfc28065fc4be5d4cc70b92f84981a87ad6bb2184e977",
      },
      dob: {
        date: "1951-10-13T15:00:56.114Z",
        age: 70,
      },
      registered: {
        date: "2008-07-02T21:22:45.090Z",
        age: 13,
      },
      phone: "011-341-0360",
      cell: "081-899-7212",
      id: {
        name: "PPS",
        value: "5959120T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/84.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
      },
      nat: "IE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Frank-Michael",
        last: "Reiser",
      },
      location: {
        street: {
          number: 9536,
          name: "Birkenweg",
        },
        city: "Vacha",
        state: "Rheinland-Pfalz",
        country: "Germany",
        postcode: 13436,
        coordinates: {
          latitude: "52.3412",
          longitude: "-111.4492",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "frank-michael.reiser@example.com",
      login: {
        uuid: "e774d6ce-78e3-455a-8bea-6dfd19b546f8",
        username: "orangecat295",
        password: "boxcar",
        salt: "q8XTWopW",
        md5: "2cbec00c133d5c5742f6fa8eeae0ef17",
        sha1: "defd759e23d543bc4bf5b97a633da90443f1bdb8",
        sha256:
          "63f295d6c6c61a80f3904ab19f6072bfa59e7b92eccbce4e74428ff00f28a0db",
      },
      dob: {
        date: "1947-08-08T09:00:31.300Z",
        age: 74,
      },
      registered: {
        date: "2008-02-28T18:13:31.663Z",
        age: 13,
      },
      phone: "0761-8012542",
      cell: "0170-3536317",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/80.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/80.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
      },
      nat: "DE",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Caitlin",
        last: "Mcdonalid",
      },
      location: {
        street: {
          number: 1997,
          name: "Kingsway",
        },
        city: "Salisbury",
        state: "Gwynedd County",
        country: "United Kingdom",
        postcode: "AI81 0YR",
        coordinates: {
          latitude: "11.5989",
          longitude: "170.9209",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "caitlin.mcdonalid@example.com",
      login: {
        uuid: "29ac35b7-56de-4e2e-b382-8bb0d1a61138",
        username: "blackleopard760",
        password: "killa",
        salt: "AZ56j69o",
        md5: "d585b468438f0db6a90aeccbf58a61c7",
        sha1: "ba160dac725e8c246c5c6c5527adfb3d6faef639",
        sha256:
          "53ec819fc39233aa87568c122f17548adcf3f9b5719acdb5443d0a1dd2b142d9",
      },
      dob: {
        date: "1985-02-12T14:50:21.628Z",
        age: 36,
      },
      registered: {
        date: "2003-04-11T03:05:51.697Z",
        age: 18,
      },
      phone: "015396 37741",
      cell: "0713-918-754",
      id: {
        name: "NINO",
        value: "TN 09 93 93 U",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/81.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Sebastian",
        last: "Watkins",
      },
      location: {
        street: {
          number: 4211,
          name: "Dogwood Ave",
        },
        city: "Ballarat",
        state: "Victoria",
        country: "Australia",
        postcode: 3667,
        coordinates: {
          latitude: "74.4817",
          longitude: "115.0537",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "sebastian.watkins@example.com",
      login: {
        uuid: "f607d195-5608-48b0-8f8c-2ff9d7959ef9",
        username: "smalltiger798",
        password: "kuan",
        salt: "MeyDzUpS",
        md5: "f8aaf367d8717636653db5fe122179c2",
        sha1: "4926d25a6b2c0fa7c2077aa410a858f82d741346",
        sha256:
          "a6a58744737facfdc06f71fabf520c76309241e13aa4a0818a66d75ee9c61d28",
      },
      dob: {
        date: "1952-06-10T21:41:43.254Z",
        age: 69,
      },
      registered: {
        date: "2017-07-25T05:48:39.061Z",
        age: 4,
      },
      phone: "02-5730-8364",
      cell: "0417-401-290",
      id: {
        name: "TFN",
        value: "215578491",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
      },
      nat: "AU",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Linnea",
        last: "Arola",
      },
      location: {
        street: {
          number: 9581,
          name: "Siilitie",
        },
        city: "Kihniö",
        state: "Uusimaa",
        country: "Finland",
        postcode: 65187,
        coordinates: {
          latitude: "-81.1722",
          longitude: "-178.0246",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "linnea.arola@example.com",
      login: {
        uuid: "a04af845-7550-4185-8b72-573ea1105509",
        username: "orangesnake133",
        password: "dieter",
        salt: "Hdw66kSi",
        md5: "acd241dcaa834caede710199c71a6770",
        sha1: "b27dfff5ee85bd1866072a1dcee8b9cdf913bc76",
        sha256:
          "c29518d4c88dbcdc285931b41b4a2136a25ee3aad88fbb077f26bc2d01471112",
      },
      dob: {
        date: "1951-11-01T07:52:02.050Z",
        age: 70,
      },
      registered: {
        date: "2009-03-22T16:04:17.505Z",
        age: 12,
      },
      phone: "03-386-640",
      cell: "048-383-37-42",
      id: {
        name: "HETU",
        value: "NaNNA812undefined",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/70.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
      },
      nat: "FI",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Phoenix",
        last: "Williams",
      },
      location: {
        street: {
          number: 2972,
          name: "Hereford Street",
        },
        city: "Rotorua",
        state: "Otago",
        country: "New Zealand",
        postcode: 40215,
        coordinates: {
          latitude: "56.1693",
          longitude: "-178.8202",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "phoenix.williams@example.com",
      login: {
        uuid: "3b4f8b9b-5b3b-4d34-bbab-75fa27c5e0c7",
        username: "whitekoala624",
        password: "313131",
        salt: "s1qHzti8",
        md5: "9bd6088b0c0c5ec8b98f8929cc29e0c5",
        sha1: "e1ef7d17a7143ad990ca294e6187e98bfd8af2c6",
        sha256:
          "76f3c041821f31d89a52de1caf0dfef455b068341161f04eca8cd2e421898a1e",
      },
      dob: {
        date: "1969-05-20T17:38:31.983Z",
        age: 52,
      },
      registered: {
        date: "2013-02-22T14:49:11.603Z",
        age: 8,
      },
      phone: "(025)-297-1433",
      cell: "(746)-909-0089",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/44.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Jeff",
        last: "Montgomery",
      },
      location: {
        street: {
          number: 2089,
          name: "Hogan St",
        },
        city: "Gresham",
        state: "Kentucky",
        country: "United States",
        postcode: 55318,
        coordinates: {
          latitude: "73.8867",
          longitude: "52.9667",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "jeff.montgomery@example.com",
      login: {
        uuid: "7715e1eb-9717-44f2-a6aa-86b1ddd605e3",
        username: "greenkoala691",
        password: "314159",
        salt: "3v20swFm",
        md5: "202ffaf7a4bf7cf3b9ac94c405c82b4c",
        sha1: "ba348ad6bccdf1b1e785ec2084644b6199c69d2c",
        sha256:
          "d2bca8e7992ed72b8b4c6d5b61ff2a6fc466b5f10a5dcc3e4cc7df5fc4e8efe2",
      },
      dob: {
        date: "1971-04-28T17:10:00.884Z",
        age: 50,
      },
      registered: {
        date: "2008-04-25T03:36:54.620Z",
        age: 13,
      },
      phone: "(710)-416-7431",
      cell: "(073)-290-1689",
      id: {
        name: "SSN",
        value: "489-63-8378",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Luz",
        last: "Vicente",
      },
      location: {
        street: {
          number: 9974,
          name: "Calle de Arganzuela",
        },
        city: "Palma de Mallorca",
        state: "La Rioja",
        country: "Spain",
        postcode: 76621,
        coordinates: {
          latitude: "-85.3565",
          longitude: "150.4686",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "luz.vicente@example.com",
      login: {
        uuid: "a0e298b8-2650-4a48-880f-e6f5c00df462",
        username: "organicfish705",
        password: "contact",
        salt: "cVCLXK6Y",
        md5: "e5e0eae5654108bb691c11ffecad3496",
        sha1: "f5442025007e04e5d503ec8ef03b3f9594efff5c",
        sha256:
          "68f94fca3d5442d5dbf64c831904ba7c40cd609c244f104ab43d2dcb1c122ef7",
      },
      dob: {
        date: "1975-07-21T15:21:12.380Z",
        age: 46,
      },
      registered: {
        date: "2016-08-13T07:03:30.088Z",
        age: 5,
      },
      phone: "906-933-877",
      cell: "682-031-698",
      id: {
        name: "DNI",
        value: "17940978-W",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/17.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
      },
      nat: "ES",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "بنیامین",
        last: "نجاتی",
      },
      location: {
        street: {
          number: 7354,
          name: "30 تیر",
        },
        city: "اردبیل",
        state: "آذربایجان شرقی",
        country: "Iran",
        postcode: 65490,
        coordinates: {
          latitude: "-71.1330",
          longitude: "110.7604",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "bnymyn.njty@example.com",
      login: {
        uuid: "791676b4-b8ce-4c2e-a48b-61d5a63c7023",
        username: "whiteleopard657",
        password: "rodney",
        salt: "KdCOBc9g",
        md5: "1d34435b32dec3292faea64bf5d1141e",
        sha1: "40322b1b6250d83bad27e2f5753d51937e873043",
        sha256:
          "3dd9a3f12e19062183c3aca9e681039973d6be5438395a489b742ca89005a216",
      },
      dob: {
        date: "1985-05-19T22:31:01.608Z",
        age: 36,
      },
      registered: {
        date: "2017-04-23T10:43:48.717Z",
        age: 4,
      },
      phone: "023-17107598",
      cell: "0934-558-1737",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/20.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
      },
      nat: "IR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Derek",
        last: "Ferguson",
      },
      location: {
        street: {
          number: 3441,
          name: "Elgin St",
        },
        city: "Los Angeles",
        state: "West Virginia",
        country: "United States",
        postcode: 28361,
        coordinates: {
          latitude: "85.2241",
          longitude: "-154.6764",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "derek.ferguson@example.com",
      login: {
        uuid: "3188bd7e-157d-4707-afc4-e9805ee2b248",
        username: "brownrabbit375",
        password: "truman",
        salt: "qPUbIJQu",
        md5: "c53fd523d733712edb44f7e2074d36ff",
        sha1: "eeed7063a0360bdf5c27092c6644285b0c93d9ae",
        sha256:
          "ee167d0445c3a44a90681b498b5bd8b4fbf260ec66d40df4aedf4cf22838a189",
      },
      dob: {
        date: "1968-08-17T14:38:16.762Z",
        age: 53,
      },
      registered: {
        date: "2013-11-27T01:47:15.001Z",
        age: 8,
      },
      phone: "(009)-855-7235",
      cell: "(528)-463-4143",
      id: {
        name: "SSN",
        value: "106-12-6588",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg",
      },
      nat: "US",
    },
  ];
  var allUser = [];
  var userList = [];
  var selectedRadio;
  var radioProp;
  var switchBtn;

  // api request
  $.ajax({
    async: false,
    url: "https://randomuser.me/api",
    dataType: "json",
    data: {
      seed: "b69bd197bb9abd68",
      results: 40,
    },
    success: (data) => {
      allUser = data.results;
    },
    err: (jqXHR, textStatus, e) => {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(e);
    },
  });

  // display render
  const displayRender = (data) => {
    $.each(data, function (index, person) {
      // combination of all address together
      var strNum = person.location.street.number;
      var strName = person.location.street.name;
      var city = person.location.city;
      var state = person.location.state;
      var address = strNum + " " + strName + " " + city + " " + state;
      // combination of fullname and title together
      var title = person.name.title;
      var first = person.name.first;
      var last = person.name.last;
      var name = title + " " + first + " " + last;

      $("#result").append(`
      <div class="details-card mb-3 row">
          <div class="col-lg-12">
              <div class="dash-card-content">
                  <div>
                      <table class="table table-borderless table-vertical-center">
                          <tbody>
                              <tr>
                                  <td style="width: 8%;">
                                      <div class="dash-profile">
                                          <img src="${
                                            person.picture.medium
                                          }"  width="100" height="100" class="rounded-circle"/>
                                      </div>
                                  </td>
                                  <td style="width: ;">
                                      <h4 class="ls2 fw700 profile-name d-flex justify-content-between">${name}<span class="fz-12 text-uppercase hidden p-location" style="color:${randColor()}"> (${person.location.country})</span>
                                      </h4>
                                      <p class="address fz-12 text-muted"><i>${address}</i></p>
                                      <span class="d-flex justify-content-between">
                                          <p class="fz-12 profile-text" style="color: #a5a6b0;"><i class="far fa-envelope email-icon" aria-hidden="true "></i>&nbsp; ${
                                            person.email
                                          }</p>
                                          <p class="fz-12 text-lg-cente profile-text" style="color: #a5a6b0;"><i class="fas fa-phone-alt phone-icon" aria-hidden="true "></i> &nbsp;${
                                            person.phone
                                          }</p>
                                           <button  class="btn profile-btn btn-lg"  id="${
                                             person.login.uuid
                                           }">
                                           <i class="text-white fas fa-arrow-right fz-16" aria-hidden="true "></i>
                                           </buttom>
                                      </span>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
      `);
      showCountry(switchBtn);
    });
  };

  // country color Randomization
  const randColor = () => {
    var colors = [
      "#7946C1",
      "#db2d43",
      "#0dce51",
      "#ffae19",
      "#f1610c",
      "#ff3a1a",
    ];
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  };

  // pagination
  var total_pages;
  var state = {
    items: allUser,
    page: 1,
    per_page: 3,
  };

  const paginator = (items, page, per_page) => {
    var start = (page - 1) * per_page,
      end = start + per_page;
    var data = items.slice(start, end);
    current = page;
    total_pages = Math.ceil(items.length / per_page);
    return {
      total_pages: total_pages,
      items: data,
      start: start,
      end: end,
      current: page,
    };
  };

  // render list display
  const renderList = (data = state.items, start = state.page) => {
    radioProp = $('input[type="radio"]').prop("checked");

    if (radioProp) {
      state.items = allUser;
    } else if (selectedRadio != "") {
      state.items = userList;
    }
    var dataItem = paginator(data, start, state.per_page);
    displayRender(dataItem.items);
    // showCountry(s);
    // console.log(showCountry(s));
    // if (start === total_pages) {
    //   $(".pagination-btn-next").attr("disabled", true);
    // } else if (start == 1) {
    //   $(".pagination-btn-prev").attr("disabled", true);
    // }
  };

  $(".pagination-btn-prev").on("click", function () {
    if (state.page - 1) {
      state.page--;
      $(".pagination-btn-next").attr("disabled", false);
    }
    $("#result").empty();
    renderList();
  });

  $(".pagination-btn-next").on("click", function () {
    if (state.page < total_pages) {
      state.page++;
      $(".pagination-btn-prev").attr("disabled", false);
    }
    $("#result").empty();
    renderList();
  });

  // radio button function
  $('input[type="radio"]').click(() => {
    selectedRadio = $('input[name="gender"]:checked').val();
    state.page = 1;
    $("#current-state").html(
      selectedRadio === ""
        ? "All Users"
        : selectedRadio === "male"
        ? "Male Users"
        : "Female Users"
    );

    $("#result").empty();
    $(".searching").val("");
    if (selectedRadio === "") {
      renderList(allUser);
    } else {
      filterDisplay = allUser.filter((data) => {
        return data.gender === selectedRadio;
      });
      userList = filterDisplay;
      renderList(userList);
    }
  });

  // show country
  $('input[type="checkbox"]').change(() => {
    switchBtn = $("#country").prop("checked");
    console.log(switchBtn);
    showCountry(switchBtn);
  });

  const showCountry = (state) => {
    if (state) {
      $(".p-location").removeClass("hidden");
      $(".country-select").removeAttr("disabled");
    } else {
      $(".p-location").addClass("hidden");
      $(".country-select").attr("disabled", true);
    }
  };

  // select country function
  $("#country-select").on("change", () => {
    var selectedOption = $("#country-select :selected").text();
    $("#result").empty();
    if (radioProp) {
      var filterOption = allUser.filter((value) => {
        return value.nat === selectedOption;
      });
    } else if (selectedRadio != "") {
      var filterOption = userList.filter((value) => {
        return value.nat === selectedOption;
      });
    }
    renderList(filterOption);
  });

  // start search function
  $(".searching").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    if (radioProp) {
      var results = allUser.filter((data) => {
        var title = data.name.title.toLowerCase();
        var first = data.name.first.toLowerCase();
        var last = data.name.last.toLowerCase();
        var name = title + " " + first + " " + last;
        return name.lastIndexOf(value) > -1;
      });
    } else if (selectedRadio != "") {
      var results = userList.filter((data) => {
        var title = data.name.title.toLowerCase();
        var first = data.name.first.toLowerCase();
        var last = data.name.last.toLowerCase();
        var name = title + " " + first + " " + last;
        return name.lastIndexOf(value) > -1;
      });
    }
    $("#result").empty();
    state.page = 1;
    renderList(results);
  });

  // view profile
  $(document).on("click", ".profile-btn", function () {
    $(".profile-info").empty();
    $(".details-card").slideUp();
    $(".download-btn, .pagination-btn-prev, .pagination-btn-next").attr(
      "disabled",
      true
    );
    $("#current-state").html("User List");
    var id = $(this).attr("id");
    viewProfile(id);
  });
  // back button
  $(document).on("click", ".back-btn", function () {
    $(".details-card").slideDown();
    $(".profile-info").empty();
    $(".download-btn, .pagination-btn-prev, .pagination-btn-next").attr(
      "disabled",
      false
    );
    $("#current-state").html(
      radioProp
        ? "All Users"
        : selectedRadio === "male"
        ? "Male Users"
        : "Female Users"
    );
  });

  const viewProfile = (id) => {
    $.each(allUser, function (index, person) {
      var join = person.registered.date.slice(0, 10);
      // combination of all address together
      var strNum = person.location.street.number;
      var strName = person.location.street.name;
      var city = person.location.city;
      var state = person.location.state;
      var address = strNum + " " + strName + " " + city + " " + state;

      // combination of fullname and title together
      var title = person.name.title;
      var first = person.name.first;
      var last = person.name.last;
      var name = title + " " + first + " " + last;

      if (id == person.login.uuid) {
        $("#result").append(`
        <div class="profile-info">
          <div class="back">
              <a href="# " id="a" class="btn back-btn ">
                  <i class=" text-white fas fa-arrow-left" aria-hidden="true "></i><span class="ml-2 fz-13 bac" style="color:#8A8C9C;"> RESULTS</span>
              </a>
          </div>
          <div class="row mt-20">
              <div class="col-lg-4">
                  <div class="dash-profile">
                      <img src="${
                        person.picture.large
                      }" width="200" height="200" class="rounded-circle">
                  </div>
              </div>
              <div class="col-lg-8">
                  <div class="mt-20">
                      <h4 class="ls2 fw700 fz-20"> ${name} <span class=" text-uppercase " style="color:${randColor()}"> ${
          person.dob.age
        }</span></h4>
                      <p class="address text-muted">${address}</p>
                      <span class="d-block">
                          <a href="# " class="btn btn-md email-info disabled ">
                              <i class=" far fa-envelope email-icon " aria-hidden="true "></i><span class="ml-2 fz-12"> ${
                                person.email
                              } </span>
                      </a>
                      <br>
                      <a href="# " class="btn  btn-md join-info disabled mt-10 ">
                          <span class="fz-12"> JOIN: ${join}</span>
                      </a>
                      <p class="fz-13 mt-10 text-lg-cente profile-text " style="color:#A5A6B0; "> <i class=" fas fa-phone-alt " aria-hidden="true "></i> &nbsp; ${
                        person.phone
                      }</p>
                      <p class="fz-13 text-lg-cente profile-text " style="color:#A5A6B0; "> <i class=" fas fa-mobile-alt " aria-hidden="true "></i>  &nbsp;${
                        person.cell
                      }</p>
                      </span>

                  </div>
              </div>
          </div>
      </div>
        `);
      }
    });
  };

  // download to csv

  const getData = (data = state.items) => {
    const d = data.map((person) => ({
      Name:
        person.name.title + " " + person.name.first + " " + person.name.last,
      Email: person.email,
      Phone: person.phone,
      Address:
        person.location.street.number +
        " " +
        person.location.street.name +
        " " +
        person.location.city +
        " " +
        person.location.state,
      Gender: person.gender,
      Nation: person.nat,
      Image: person.picture.medium,
    }));
    const csvData = objectToCSV(d);
    download(csvData);
    // console.log(csvData);
  };

  const objectToCSV = (data) => {
    var csvRows = [];

    var headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (row of data) {
      var value = headers.map((header) => {
        var escape = ("" + row[header]).replace(/"/g, '\\"');
        return `"${escape}"`;
      });
      csvRows.push(value.join(","));
    }
    return csvRows.join("\n");
  };
  // download csv function
  const download = (data) => {
    var blob = new Blob([data], { type: "text / csv" });
    var blobUrl = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", blobUrl);
    a.setAttribute(
      "download",
      radioProp
        ? "randomsers.csv"
        : selectedRadio === "male"
        ? "male-randomusers.csv"
        : "female-randomusers.csv"
    );
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  $(".download-btn").on("click", function () {
    getData();
  });

  renderList();
});
