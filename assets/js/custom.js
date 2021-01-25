$(document).ready(function () {
  var allUser = [];
  var activeRadio = $('input[name="gender"]:checked').val();

  const getUserData = () => {
    $.ajax({
      async: false,
      url: "https://randomuser.me/api/?results=200&seed=02d5ae16a567c330",
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
                    <div class="dash-card-content ">
                        <div>
                            <table class="table table-borderless table-vertical-center  ">
                                <tbody>
                                    <tr>
                                        <td style="width: 8%;">
                                            <div class="dash-profile">
                                                <img src="${person.picture.medium}" width="100" height="100" class="rounded-circle">
                                            </div>
                                        </td>
                                        <td style="width: ">
                                            <h4 class="ls2 fw700 profile-name">${person.name.title} ${person.name.first} ${person.name.last}<span class="fz-12 text-uppercase text-danger fright"> (${person.location.country})</span>  </h4>
                                            <p class="address fz-12 text-muted"><i>${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}</i></p>
                                            <span class="d-flex justify-content-between">    
                                                <p class="fz-12  profile-text " style="color:#A5A6B0; ">  <i class=" far fa-envelope email-icon " aria-hidden="true "></i>&nbsp; ${person.email}
                                                </p>
                                                <p class="fz-12 text-lg-cente profile-text " style="color:#A5A6B0; "> <i class=" fas fa-phone-alt phone-icon  " aria-hidden="true "></i> &nbsp;${person.phone}</p>
                                                <a href="# " class="btn profile-btn btn-lg ">
                                                    <i class=" text-white fas fa-arrow-right fz-16 " aria-hidden="true "></i>
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
    
    $("#current-state").html((selectedRadio === "all-users") ? "All Users" : (selectedRadio === "male") ? "Male Users" : "Female Users");

    $("#result").empty();
    if (selectedRadio === "all-users") {
      renderList(allUser);
    }
    else {
      var filterDisplay = allUser.filter((value) => {
        return value.gender === selectedRadio;
      });
      renderList(filterDisplay);
    }
  });

  // select country function
  $("#country-select").on("change", ()=>{
    var selectedOption = $("#country-select :selected").text();

    $("#result").empty();

    var filterOption = allUser.filter(value =>{
      return value.nat === selectedOption;
    })
    renderList(filterOption);
    console.log(filterOption)
  })


  getUserData();
  //   console.log(allUser.filter((value) =>{
  //     return value.gender === activeRadio
  //   }));
});
