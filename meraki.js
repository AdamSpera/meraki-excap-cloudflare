// Path: meraki.js

// Helper function to parse URL
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

// Parse URL parameters for Meraki appended items
var base_grant_url = decodeURIComponent(GetURLParameter("base_grant_url"));
var user_continue_url = decodeURIComponent(GetURLParameter("user_continue_url"));
var node_mac = GetURLParameter("node_mac");
var client_ip = GetURLParameter("client_ip");
var client_mac = GetURLParameter("client_mac");

// Output Meraki API parameters to console for debugging
console.log("base_grant_url: " + base_grant_url);
console.log("user_continue_url: " + user_continue_url);
console.log("node_mac: " + node_mac);
console.log("client_ip: " + client_ip);
console.log("client_mac: " + client_mac);

// Function to redirect user to Meraki auth URL
function authUser(){
  var loginUrl = base_grant_url;

  // Check if user continue URL is defined
  if(user_continue_url !== "undefined")
      loginUrl += "?continue_url=" + user_continue_url;
  
  // Redirect user to Meraki auth URL
  window.location.href = loginUrl;
}

// Function to store user entered data and start auth
function login(){

  // **************************
  // store user data to db here
  // **************************

  // Start user auth to Meraki
  authUser();
}

// Add click listener to continue button to login user
document.getElementById('continue-btn').onclick = function() {login()}