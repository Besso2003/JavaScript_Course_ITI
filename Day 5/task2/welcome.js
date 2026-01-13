function loadData() {
    var params = new URLSearchParams(location.search);
    console.log(params)
    document.getElementById("welcome").innerHTML =
        "Welcome " + params.get("name");

    document.getElementById("info").innerHTML =
        "<b>Email:</b> " + params.get("email") + "<br>" +
        "<b>Mobile:</b> " + params.get("mobile") + "<br>" +
        "<b>Address:</b> " + params.get("address");
}
