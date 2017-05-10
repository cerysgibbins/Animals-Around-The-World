        $(document).ready(function () {
            $("#navHamburger > a").click(function () {
                if ($("body").hasClass("toggleNavigationVisible") == false) {
                    $("#navMainMenu").show();
                    $("#navHamburger").addClass("expand");
                    $("body").addClass("toggleNavigationVisible");
					$("#navHamburger span").hide();
                    return false;
                }
            });

            $("#navHamburger").click(function () {
                if ($("body").hasClass("toggleNavigationVisible") == true) {
                    $("#navMainMenu").hide();
                    $("#navHamburger").removeClass("expand");
                    $("body").removeClass("toggleNavigationVisible");
					$("#navHamburger span").show();
                    return false;
                }
            });
        });

   