function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

function signOut() {
    firebase.auth().signOut();
}

$(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if ($("body").attr("data-account") == "signedOut") {
                window.location.replace(getURLParameter("go") || "/account/index.html");
            }
        } else {
            if ($("body").attr("data-account") == "signedIn") {
                window.location.replace(getURLParameter("go") || "/account/signin.html");
            }
        }
    });
});