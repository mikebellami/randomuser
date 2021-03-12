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
  ];
  var allUser = [];
  var userList = [];
  var selectedRadio;
  var radioProp = $('input[type="radio"]').prop("checked");
  // api request
  $.ajax({
    async: false,
    url: "https://randomuser.me/api",
    dataType: "json",
    data: {
      seed: "b69bd197bb9abd68",
      results: 20,
    },
    success: (data) => {
      allUser = data.results;
      // console.log(allUser);
    },
    err: (jqXHR, textStatus, e) => {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(e);
    },
  });

  // render list display
  const displayRender = (data) => {
    // showCountry(s);
    // console.log(showCountry(s));

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

  const renderList = (data = state.items, start = state.page) => {
    if (radioProp) {
      state.items = allUser;
    } else if (selectedRadio != "") {
      state.items = userList;
    }
    var dataItem = paginator(data, start, state.per_page);
    displayRender(dataItem.items);
  };

  $(".pagination-btn-prev").on("click", function () {
    if (state.page > 1) {
      state.page--;
    }
    $("#result").empty();
    renderList();
  });

  $(".pagination-btn-next").on("click", function () {
    if (state.page < total_pages) {
      state.page++;
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
    s = $("#country").prop("checked");
    console.log(s);
    showCountry(s);
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
    var id = $(this).attr("id");
    $(".details-card").slideUp();
    $(".searching").attr("disabled", true);
    $("#current-state").html("User List");
    viewProfile(id);
  });
  // back button
  $(document).on("click", ".back-btn", function () {
    $(".details-card").slideDown();
    $(".profile-info").empty();
    $(".searching").attr("disabled", false);
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
  renderList();
});
