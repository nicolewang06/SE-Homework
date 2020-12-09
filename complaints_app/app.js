$(() => {
    let thisUrl = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough='
    let borough = null;
    $(":button").click(function() {
      event.preventDefault(); // stops refresh
      borough = this.id;
      console.log(borough);
      const filledInUrl = thisUrl + borough ;
      console.log(filledInUrl);
      const userInput = document.getElementById("userInput").value; // assigns user input of complaints
      console.log(userInput);

      $.ajax({
        url: filledInUrl,
        type: "GET",
        data: {
          "$limit" : userInput || 10
        }
      }).then(function(data) {
          for (let i = 0; i < data.length; i++) {
          // $('#complaint').append(data[i].descriptor + "<br><strong>Resolution: </strong>" + data[i].resolution_description + 
          // "<br><button id='toggle' onclick='toggle'>Toggle Police Response</button><hr>")

          function toggle () {
            alert("helo");
          }

          let desc = data[i].descriptor;
          let reso = data[i].resolution_description;
          $('#complaint').append($("<tr>")
            .append($("<td>").text(desc))
            //.append($("<td>").append(reso)))
            .append($("<td align='right'>").append("<input type='button' id='poBtn' onClick='alert('you clicked')' value='WHAT DID THE POLICE DO?'>")))
          //$('#resolution').append("<td><button onclick='toggle'>WHAT DID THE POLICE DO?</button></td></tr>");   
        };
        console.log(data);
      });
    })
})