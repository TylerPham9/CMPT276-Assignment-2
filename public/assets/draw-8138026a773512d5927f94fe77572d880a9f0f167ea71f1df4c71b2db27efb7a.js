function sortGroups(e,n){var t=document.getElementById("group"+n),o=document.getElementById("boxId_"+e);t.appendChild(o)}$(document).ready(function(){$(".groupContainers").click(function(){$(this).children(".studentBoxes").toggle("slow")})});