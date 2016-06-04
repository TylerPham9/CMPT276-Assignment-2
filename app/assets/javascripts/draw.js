// Move the student box to corresponding group
function sortGroups(studentId, groupNum) {
    var groupDiv = document.getElementById("group"+groupNum);
    var studentDiv = document.getElementById("boxId_"+studentId);
    groupDiv.appendChild(studentDiv);
    // console.log("foo");

}

//When a group is clicked, hide all the children that are boxes
$(document).ready(function() {
    $('.groupContainers').click(function() {
            $(this).children('.studentBoxes').toggle('slow');
    });
});