function sortGroups(studentId, groupNum) {
    var groupDiv = document.getElementById("group"+groupNum);
    var studentDiv = document.getElementById("boxId_"+studentId);
    groupDiv.appendChild(studentDiv);
    
}

// jQuery(document).ready(function(){
//     $('.studentBoxes').mouseenter(function(){
//         $(this).fadeIn('fast',1);
//     }).mouseleave(function(){
//         $(this).fadeIn('fast',0.5);
//     });
// });

jQuery(document).ready(function() {
    $(.studentBoxes).fadeOut(1000);
});
