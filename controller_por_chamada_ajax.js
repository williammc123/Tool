 $(".btn-controller").click(function () {
            var id = $(this).attr("data-id");
            $.ajax({
                url: '@Url.Action("Action", "Controller")',
                datatype: 'json',
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({ id: id }),
                success: function (data) {

                    toastr.warning(sucess.statusText);

               },
                error: function (error) {

                    if (error != null) {
                        toastr.warning(error.statusText);
                    }
                }

            });
        });