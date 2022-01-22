const capture = () => {
  const websiteAdress = document.getElementById("websiteAdress").value;
    $(document).ready(function() {
    $("#DownloadButton").click(function() {
      domtoimage.toBlob(document.getElementById('resultImg')).then(function (blob) {
        window.saveAs(blob, websiteAdress.replace(/\./g, ""));
  });
});
  });
}