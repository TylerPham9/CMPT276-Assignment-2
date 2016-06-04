function sortGroups(studentId, groupNum) {
    var groupDiv = document.getElementById("group"+groupNum);
    var studentDiv = document.getElementById("boxId_"+studentId);
    groupDiv.appendChild(studentDiv);
    // console.log("foo");

}


$(document).ready(function() {
    $('.groupContainers').click(function() {
            $(this).children('.studentBoxes').toggle('slow');
    });
});