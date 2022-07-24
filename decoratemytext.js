//window.onload = function() {
   // hello alert
    function hello() {
        alert("Hello, World!");
    }

    function interval() {
        var id = setInterval(enlargeText, 1000);
        setTimeout(clearInterval, 5000, id);
    }

    function enlargeText() {
        // document.getElementById("textarea").style.fontSize="24pt";
        var styled = window.getComputedStyle(document.getElementById("textarea")).fontSize;
        styled = parseInt(styled) + 2 + "pt";
        document.getElementById("textarea").style.fontSize = styled;
    }

    function boldText() {
        if (document.getElementById("bling").checked == true) {
            document.getElementById("textarea").style.fontWeight = "bold";
            document.getElementById("textarea").style.color = "green";
            document.getElementById("textarea").style.textDecoration = "underline";
            document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
        } else {
            document.getElementById("textarea").style.fontWeight = "";
            document.getElementById("textarea").style.color = "";
            document.getElementById("textarea").style.textDecoration = "";
            document.body.style.backgroundImage = "";

        }
    }

    function pig() {
        var words = document.getElementById("textarea").value;
        var addedwords = words.split(/\s+/);
        var result = "";
        for (var i = 0; i < addedwords.length; i++) {
            if (addedwords[i].charAt(0).match("[aeoiuAEOIU]")) {
                changed = addedwords[i] + "ay";
            } else {
                var words = addedwords[i];
                for (var j = 0; j < words.length; j++) {
                    if (words[j].match("[aeoiuAEOIU]")) {
                        var changed = words.substring(j) + words.substring(0, j) + "ay";
                        break;
                    }

                }
            }
            result += changed + " ";

        }
        document.getElementById("textarea").value = result;

    }

    function malkovitch() {
        var words1 = document.getElementById("textarea").value;
        var arr = words1.split(/\s+/);
        var result = "";
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= 5) {
                arr[i] = "Malkovich";
            }
            result += arr[i] + " ";
        }
        document.getElementById("textarea").value = result;
    }
//};

