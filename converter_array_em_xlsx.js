									
 function saveByteArray(reportName, resultByte) {
            var byte = new Uint8Array(resultByte);
            var blob = new Blob([byte], { type: "application/vnd.ms-excel" });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            var fileName = reportName;
            link.download = fileName;
            link.click();
        };