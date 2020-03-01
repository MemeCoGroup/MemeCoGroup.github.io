function signIn() {
    if ($("#email").val().trim() != "" && $("#password").val() != "") {
        firebase.auth().signInWithEmailAndPassword($("#email").val().trim(), $("#password").val()).catch(function(error) {
            $("#error").text(error.message);
        });
    } else {
        $("#error").text("Please fill in both your username and password before signing in.");
    }
}