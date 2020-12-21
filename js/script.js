function reg() {
    $("#log").css({'z-index' : -1});
    $("#reg").css({'z-index' : 3});
}

function log() {
    $("#log").css({'z-index' : 3});
    $("#reg").css({'z-index' : -1});
}

function registration() {
    if ($("#name").val() == "" | $("#surname").val() == "" | $("#patronymic").val() == "" | $("#address").val() == "" | $("#tel").val() == "" | $("#email").val() == "") {
        alert("Заполните все поля!")
    } else if ($("#pass1").val() == $("#pass2").val()) {
        var text = $("#surname").val();
        $(".list").children("dd").eq(0).text(text);
        var text = $("#name").val();
        $(".list").children("dd").eq(1).text(text);
        var text = $("#patronymic").val();
        $(".list").children("dd").eq(2).text(text);
        var text = $("#address").val();
        $(".list").children("dd").eq(3).text(text);
        var text = $("#tel").val();
        $(".list").children("dd").eq(4).text(text);
        var text = $("#email").val();
        $(".list").children("dd").eq(5).text(text);
        $(".blur").remove();
        $("#reg").remove();
        $("#log").remove();
        $(".blur img").remove();
    } else {
        alert("Пароли не совпадают!")
    }
}

function main() {
    $(".blur img").click(function() {
        $(".blur").remove();
        $("#reg").remove();
        $("#log").remove();
        $(".blur img").remove();
    });
}

function sort() {
    if ($('#p1').prop('checked') & $('#p2').prop('checked')) {
        $(".cards").children(".card").eq(0).show()
        $(".cards").children(".card").eq(1).show()
        $(".cards").children(".card").eq(2).show()
        $(".cards").children(".card").eq(3).show()
        $(".cards").children(".card").eq(4).show()
        $(".cards").children(".card").eq(5).show()
        $(".cards").children(".card").eq(6).show()
        $(".cards").children(".card").eq(7).show()
        $(".cards").children(".card").eq(8).show()
    } else if ($('#p1').prop('checked')) {
        $(".cards").children(".card").eq(0).show()
        $(".cards").children(".card").eq(1).show()
        $(".cards").children(".card").eq(2).show()
        $(".cards").children(".card").eq(3).show()
        $(".cards").children(".card").eq(4).show()
        $(".cards").children(".card").eq(5).show()
        $(".cards").children(".card").eq(6).hide()
        $(".cards").children(".card").eq(7).hide()
        $(".cards").children(".card").eq(8).hide()
    } else if ($('#p2').prop('checked')) {
        $(".cards").children(".card").eq(0).hide()
        $(".cards").children(".card").eq(1).hide()
        $(".cards").children(".card").eq(2).hide()
        $(".cards").children(".card").eq(3).hide()
        $(".cards").children(".card").eq(4).hide()
        $(".cards").children(".card").eq(5).hide()
        $(".cards").children(".card").eq(6).show()
        $(".cards").children(".card").eq(7).show()
        $(".cards").children(".card").eq(8).show()
    } else {
        $(".cards").children(".card").eq(0).show()
        $(".cards").children(".card").eq(1).show()
        $(".cards").children(".card").eq(2).show()
        $(".cards").children(".card").eq(3).show()
        $(".cards").children(".card").eq(4).show()
        $(".cards").children(".card").eq(5).show()
        $(".cards").children(".card").eq(6).show()
        $(".cards").children(".card").eq(7).show()
        $(".cards").children(".card").eq(8).show()
    }
}