var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

$(document).ready(function () {

    /* Link Interaction for Social Icons */
$( "#cvLink" ).mouseover(function() {
    $('#cvImg').attr('src','img/cvpink.png');
  });
  $( "#cvLink" ).mouseout(function() {
    $('#cvImg').attr('src','img/cv.png');
  });
  
  $( "#facebookLink" ).mouseover(function() {
    $('#facebookImg').attr('src','img/fbpink.png');
  });
  $( "#facebookLink" ).mouseout(function() {
    $('#facebookImg').attr('src','img/facebook.png');
  });
  
  $( "#linkedinLink" ).mouseover(function() {
    $('#linkedinImg').attr('src','img/linkedinpink.png');
  });
  $( "#linkedinLink" ).mouseout(function() {
    $('#linkedinImg').attr('src','img/linkedin.png');
  });
  
  $( "#youtubeLink" ).mouseover(function() {
    $('#youtubeImg').attr('src','img/youtubepink.png');
  });
  $( "#youtubeLink" ).mouseout(function() {
    $('#youtubeImg').attr('src','img/youtube.png');
  });
  
  $( "#soundcloudLink" ).mouseover(function() {
    $('#soundcloudImg').attr('src','img/soundcloudpink.png');
  });
  $( "#soundcloudLink" ).mouseout(function() {
    $('#soundcloudImg').attr('src','img/soundcloud.png');
  });
  
  $( "#bandcampLink" ).mouseover(function() {
    $('#bandcampImg').attr('src','img/bandcamppink.png');
  });
  $( "#bandcampLink" ).mouseout(function() {
    $('#bandcampImg').attr('src','img/bandcamp.png');
  });
  
  $( "#gitHubLink" ).mouseover(function() {
    $('#gitHubImg').attr('src','img/github_pink.png');
  });
  $( "#gitHubLink" ).mouseout(function() {
    $('#gitHubImg').attr('src','img/github.png');
  });
  
  $( "#instagramLink" ).mouseover(function() {
    $('#instagramImg').attr('src','img/instagrampink.png');
  });
  $( "#instagramLink" ).mouseout(function() {
    $('#instagramImg').attr('src','img/instagram.png');
  });

    $.getJSON('../content.json', function (data) {
        console.log(data);
        myItems = data.items;
        $("#location span").text(data.location);

        let currentYear = new Date().getFullYear() + 1;

        let totalYears = currentYear - 2003;

        let totalLength = totalYears * 600;

        let lastDistanceFromTopWork = 0;
        let lastDistanceFromTopEducation = 0;
        let lastDistanceFromTopMusic = 0;
        let lastDistanceFromTopAchievement = 0;

        $("#miscLine").css("height", totalLength);
        $("#workLine").css("height", totalLength);
        $("#musicLine").css("height", totalLength);
        $("#educationLine").css("height", totalLength);
        $("#achievementLine").css("height", totalLength);

        for (var i = currentYear; i >= 2003; i--) {
            let marginTop = 600 * (i - 2003);
            $("#timeline").append("<div class='years' style='margin-top:" + (totalLength - marginTop) +
                "px;'>" + i +
                "&nbsp;&nbsp;&nbsp;&nbsp;</div>")
        }

        for (var i = 0; i < myItems.length; i++) {
            let item = myItems[i];

            item.id = i;

            let year = new Date(item.date).getFullYear();
            let month = new Date(item.date).getMonth() + 1;
            let day = new Date(item.date).getDate();

            yearDistance = (totalLength / totalYears) * (year - 2003);

            monthDistance = month * ((totalLength / totalYears) / 12) ;

            daysDistance = day;

            distanceFromTop = (totalLength - (yearDistance + monthDistance + daysDistance));

            threshold = 0;

            switch (item.type) {
                case ("content"):
                    $("#miscLine").append("<div id='" + item.id +
                        "' class='item' style='background-color:black; border-color:white; margin-top:" +
                        100 + "px'></div>");
                    break;
                case ("work"):

                    $("#workLine").append("<div id='" + item.id +
                        "' class='item' style='background-color:#d11141; margin-top:" +
                        (distanceFromTop - lastDistanceFromTopWork) + "px'></div>");
                    lastDistanceFromTopWork = (totalLength - (yearDistance + monthDistance) - threshold);
                    break;
                case ("education"):

                    $("#educationLine").append(
                        "<div id='" + item.id +
                        "' class='item' style='background-color:#00aedb; margin-top:" +
                        (distanceFromTop - lastDistanceFromTopEducation) + "px'></div>");
                    lastDistanceFromTopEducation = (totalLength - (yearDistance + monthDistance) - threshold);
                    break;
                case ("music"):

                    $("#musicLine").append("<div id='" + item.id +
                        "' class='item' style='background-color:#00b159; margin-top:" +
                        (distanceFromTop - lastDistanceFromTopMusic) + "px'></div>");
                    lastDistanceFromTopMusic = (totalLength - (yearDistance + monthDistance) - threshold);
                    break;
                case ("achievement"):

                    $("#achievementLine").append(
                        "<div id='" + item.id +
                        "' class='item' style='background-color:#ffc425; margin-top:" +
                        (distanceFromTop - lastDistanceFromTopAchievement ) + "px'></div>");
                    lastDistanceFromTopAchievement = (totalLength - (yearDistance + monthDistance) - threshold);
                    break;
            }

        }
    });

    if(!isMobile)
    {
        $('#clickInfo').text('Hover over each item on the timeline to see details, click to open its related page.');
        $("#photoText").text('slide to scroll, or press the dots underneath the picture to navigate.');
        $(document).on('mouseover', '.item', function (event) {
            $("#theDescriptionContainer").removeClass("descriptionHidden");
            $("#theDescriptionContainer").addClass("descriptionShown");
            $("#theTitleContainer").text(myItems[$(this).attr('id')].title);
            if (myItems[$(this).attr('id')].type != 'content')
                $("#theDateContainer").text(myItems[$(this).attr('id')].date);
            else
                $("#theDateContainer").text("");
            $("#theTextContainer").text(myItems[$(this).attr('id')].text);
            event.preventDefault();
        });
    
        $(document).on('mouseout', '.item', function (event) {
            $("#theDescriptionContainer").removeClass("descriptionShown");
            $("#theDescriptionContainer").addClass("descriptionHidden");
            event.preventDefault();
        });
    
        $(document).on('click', '.item', function (event) {
            if (myItems[$(this).attr('id')].link && myItems[$(this).attr('id')].type != 'content')
            {
                window.open(myItems[$(this).attr('id')].link, '_blank');
            }
            else if (myItems[$(this).attr('id')].link && myItems[$(this).attr('id')].type == 'content')
            {
                window.open(myItems[$(this).attr('id')].link, '_self');
            }
            event.preventDefault();
        });
    
        let hovered = (item) => {
            $("#theTitleContainer").text(item.title);
        }
    }
    else
    {
        $('#clickInfo').text('Click on each item of the timeline to see details, then click on the Next button to see its related page, or click anywhere else to dismiss.');
        $("#photoText").text('swipe your finger on the photo to navigate');
        $(document).on('click', '.item', function (event) {
            $("#mobileSlideIn").removeClass("mobileSlideInHidden");
            $("#mobileSlideIn").addClass("mobileSlideInVisible");
            $("#theTitleContainerMobile").text(myItems[$(this).attr('id')].title);
            if (myItems[$(this).attr('id')].type != 'content')
                $("#theDateContainerMobile").text(myItems[$(this).attr('id')].date);
            else
                $("#theDateContainerMobile").text("");
            $("#theTextContainerMobile").text(myItems[$(this).attr('id')].text);
            if(myItems[$(this).attr('id')].link)
            {
                $("#mobileRelatedLink").css("display","block");
                $("#mobileRelatedLink").attr("href", myItems[$(this).attr('id')].link);
            }
            else
            {
                $("#mobileRelatedLink").css("display","none");
            }
            event.preventDefault();
        });

       

        $(document).on('click', '#mobileRelatedLink', function (event) {
            
            if (myItems[$(this).attr('id')].link && myItems[$(this).attr('id')].type != 'content')
            {   
                window.open(myItems[$(this).attr('id')].link, '_blank');
            }
            else if (myItems[$(this).attr('id')].link && myItems[$(this).attr('id')].type == 'content')
            {
                window.open(myItems[$(this).attr('id')].link, '_self');
            }
            event.preventDefault();
        });

        $(document).on('click', '#mobileSlideIn', function (event) {
            $("#mobileSlideIn").removeClass("mobileSlideInVisible");
            $("#mobileSlideIn").addClass("mobileSlideInHidden");
            event.preventDefault();
        });
    }
    

    document.title = 'Christian Marques . ' + new Date().getFullYear();
});