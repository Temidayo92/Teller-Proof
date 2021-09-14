  function store(){
     var table= document.getElementById("table-fill");
     localStorage.setItem("table-fill", table.value);
    }

  function getFormData() {
    var table= $("input[type=text][name=username]").val();
    // Do what you want with the data
    return true;
  }
<form id="registration" name="registration" action="register.html" onsubmit="return getFormData();" method="POST">
  <input type="text" name="username" />
</form>