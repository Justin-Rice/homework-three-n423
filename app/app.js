var Students = [];

function initSite() {
  if (localStorage) {
     console.log("I got it on me");
  } else {
     console.log("i dont got it on me");
  }
}

function initListener() {
  $("#submit").click(function (e) {
    e.preventDefault();
    let wholeName = $("#fName").val()+ " " + $("#lName").val();
    let name = wholeName;
    let age = $("#age").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let classes = $("#classes").val();
    let classesArray = [];
    classesArray = classes.split(" ").join("").split(",");

    console.log(classesArray)

    let stuObject = { "name" : name, "age" : age, "phone": phone, "email": email, "classes": classesArray };
    Students.push(stuObject);
  
    localStorage.setItem("Student", JSON.stringify(Students));  
    console.log(Students);

  });

  $("#display").click(function(e){
    console.log('what')
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("Student"));   
    let x = 0;
    $(data).each(function(){
      $("#content").append(`
      <div class="student">
      <h1>${data[x].name}</h1>
      <p><span>Age:</span> ${data[x].age}</p>
      <p><span>Phone Number:</span> ${data[x].phone}</p>
      <p><span>Email:</span> ${data[x].email}</p>
      <p><span>Classes:</span></p>
      ${$.map(data[x].classes, function(val, i){
        return `<span id="diff"> ${val} </span>`
      })

      }

      </div>
      `)
      x++;
    });

  });
 
}

$(document).ready(function () {
  initSite();
  initListener();
});

//<p id="classes"><span>Classes:</span>${$.map(data[x].classes)}</p>