$(document).ready(function () {
  var allUser = [];
  var userList = [];
  var activeRadio = "";
  var s;

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

  const getUserData = () => {
    $.ajax({
      async: false,
      url: "https://randomuser.me/api/?results=2&seed=b69bd197bb9abd68",
      dataType: "json",
      success: function (data) {
        allUser = data.results;
        renderList(allUser);
      },
      err: (e) => {
        console.log(e);
      },
    });
  };

  const renderList = (data) => {
    $.each(data, function (index, person) {
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
                                      <h4 class="ls2 fw700 profile-name d-flex justify-content-between">${
                                        person.name.title
                                      } ${person.name.first} ${person.name.last}<span class="fz-12 text-uppercase hidden p-location" style="color:${randColor()}"> (${person.location.country})</span>
                                      </h4>
                                      <p class="address fz-12 text-muted"><i>${
                                        person.location.street.number
                                      } ${person.location.street.name}, ${person.location.city}, ${person.location.state}</i></p>
                                      <span class="d-flex justify-content-between">
                                          <p class="fz-12 profile-text" style="color: #a5a6b0;"><i class="far fa-envelope email-icon" aria-hidden="true "></i>&nbsp; ${
                                            person.email
                                          }</p>
                                          <p class="fz-12 text-lg-cente profile-text" style="color: #a5a6b0;"><i class="fas fa-phone-alt phone-icon" aria-hidden="true "></i> &nbsp;${
                                            person.phone
                                          }</p>
                                          <a href="# " class="btn profile-btn btn-lg">
                                              <i class="text-white fas fa-arrow-right fz-16" aria-hidden="true "></i>
                                          </a>
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

  // radio button function
  $('input[type="radio"]').click(() => {
    var selectedRadio = $('input[name="gender"]:checked').val();
    $("#current-state").html(
      selectedRadio === "all-users"
        ? "All Users"
        : selectedRadio === "male"
        ? "Male Users"
        : "Female Users"
    );

    $("#result").empty();

    // shorthand version of if statement
    selectedRadio === "all-users"
      ? renderList(allUser)
      : (filterDisplay = allUser.filter((value) => {
          return value.gender === selectedRadio;
        }));
    userList = filterDisplay;
    renderList(filterDisplay);

    if (selectedRadio === "all-users") {
      if (s === true) {
        $(".p-location").removeClass("hidden");
        renderList(allUser);
      }
    }
  });

  const switchBtn = () => {
    $('input[type="checkbox"]').change(() => {
      s = $("#country").prop("checked");
      console.log(s);
      if (s) {
        $(".p-location").removeClass("hidden");
        $(".country-select").removeAttr("disabled");
      } else {
        $(".p-location").addClass("hidden");
        $(".country-select").attr("disabled", true);
      }
    });
  };

  // select country function
  $("#country-select").on("change", () => {
    var selectedOption = $("#country-select :selected").text();

    $("#result").empty();
    var filterOption = userList.filter((value) => {
      return value.nat === selectedOption;
    });

    renderList(filterOption);
  });

  // start search function
  $(".searching").on("keyup", function (e) {
    var value = $(this).val().toLowerCase();
    var results = search(value, allUser);
    // renderList(searchedData);
    if (results.length != 0) {
      return renderList(results);
    } else {
      // alert("kjhgf");
    }
  });
  const search = (value, d) => {
    var searchedData = [];
    $.each(d, function (i, data) {
      var first = data.name.first.toLowerCase();
      var last = data.name.last.toLowerCase();
      var name = first + " " + last;
      if (name.includes(value)) {
        searchedData.push(name);
      }
    });
    return searchedData;
  };

  // end search function
  getUserData();

  switchBtn();
});
