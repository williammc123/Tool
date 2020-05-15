  $(".btn-controller").click(function () {
            var idSolicitacao = $(this).attr("data-id");
            $.ajax({
                url: '@Url.Action("Action", "Controller")',
                datatype: 'json',
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({ id: id }),
                success: function (data) {

                    saveByteArray("Certificado", data.PdfBytes);

               },
                error: function (error) {

                    if (error != null) {
                        toastr.warning(error.statusText);
                    }
                }

            });
        });

        function saveByteArray(reportName, resultByte) {
            var byte = new Uint8Array(resultByte);
            var blob = new Blob([byte], {type: "application/pdf"});
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            var fileName = reportName;
            link.download = fileName;
            link.click();
        };
		
		// A controller é necessário ser do tipo JsonResult