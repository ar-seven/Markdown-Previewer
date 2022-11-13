
    function updatePreview() {
      var text = document.getElementById("editor").value;
      var html = marked.parse(text);
      document.getElementById("preview").innerHTML = html;
    }      
    
    function copy_selection() {
      var text = document.getElementById("editor").value;
    // Get the text field
      var copyText = marked.parse(text);


      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText);
    }

    //DOWNLOAD marked file in md
    function download() {
      var text = document.getElementById("editor").value;
      var html = marked.parse(text);
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html));
      element.setAttribute('download', "myFile.html");

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }


    //upload md file from system
    function upload() {
      var input = document.createElement('input');
      input.type = 'file';

      input.onchange = e => {
        // getting a hold of the file reference
        var file = e.target.files[0];

        // setting up the reader
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
          var content = readerEvent.target.result; // this is the content!
          document.getElementById("editor").value = content;
          updatePreview();
        }
      }

      input.click();
    }


    //function for storing the text in the editor
    function storeText() {
      var text = document.getElementById("editor").value;
      localStorage.setItem("text", text);
    }


    //function for loading the text from the editor
    function loadText() {
      var text = localStorage.getItem("text");
      document.getElementById("editor").value = text;
    }

