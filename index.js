$(document).ready(function(){
    $("#submit").click(function(){
        var todoBlock = $(this).closest("#todo")    
        var description = todoBlock.find("#itemname") 
        var pomodoroEstimate = todoBlock.find("#pomodoros")
        var descriptionName = todoBlock.find("#descriptionname")
        $("ol").append(" <li><input type = 'checkbox'/> <Font size = '5'>" +description.val()+ "</Font> <span class = ' pomodoro-estimate ' > " + pomodoroEstimate.val() + " pomodoro </span> <small> <div>" + descriptionName.val() + "</div></small> </li> ")
        
        description.val("")
        pomodoroEstimate.val("") 
        descriptionName.val("")
        
    })
    $("ol").on("click", "input[type=checkbox]",function(){
        $(this).closest("li").toggleClass("completed-todo")
        
        
    
    
    })
    
    
    }) 
    
