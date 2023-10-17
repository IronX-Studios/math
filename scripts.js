var frozen = false;
/* Place your JavaScript in this file */
function checkPswd() {
    var confirmPassword = "E";
    var pswrd = document.getElementById('password').value;
    if (pswrd == confirmPassword) {
      goNext();
    } else {
      document.getElementById('password').value = ''
    }
  }

  function goNext () {
    window.location.replace('./math.html');
  }

  function goHome () {
    window.location.replace('https://ironx-studios.github.io/gxmes/frozen.html');
  }

  function goHomel () {
    window.location.replace('https://ironx-studios.github.io/gxmes/');
  }

  function goFreeze () {
    frozen = true;
  }

  function openGame () {
      if (frozen == false) {
        var win = window.open()
        var url = "https://awesome65432139.github.io/math/"
        var iframe = win.document.createElement('iframe')
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = url
        win.document.body.appendChild(iframe)
        window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
      } else {
          window.location.replace('https://ironx-studios.github.io/gxmes/');
      }
}

function moto () {
    var win = window.open()
    var url = "https://ironx-studios.github.io/gxmes/moto-x3m.html"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)
    window.location.replace('https://ironx-studios.github.io/gxmes/');
}

// Try later to create panic button
  function panic () {
    window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
  }
