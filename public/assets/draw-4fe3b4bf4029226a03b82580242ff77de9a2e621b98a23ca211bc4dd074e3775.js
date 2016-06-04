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

// $(document).ready(function(){
//     $('.studentBoxes').mouseenter(function() {
//         alert("MouseEnter!"); // This will create an alert box
//         console.log("MouseEnter!"); // This will log to the JS console on your browser which is a bit nicer to read than alerts, you do not need both, just preference
//         $(this).fadeIn('fast',1);
//     })
        
// });
  $(document).ready(function() {
    $( "#group1, #group2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });
