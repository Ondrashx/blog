function create_remarkbox_iframe() {
  var rb_owner_key = "06263375-c6b9-11eb-a7d6-040140774501";
  var thread_uri = window.location.href;
  var thread_title = window.document.title;
  var thread_fragment = window.location.hash;

  var rb_src =
    "https://my.remarkbox.com/embed" +
    "?rb_owner_key=" +
    rb_owner_key +
    "&thread_title=" +
    encodeURI(thread_title) +
    "&thread_uri=" +
    encodeURIComponent(thread_uri) +
    thread_fragment;

  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("id", "remarkbox-iframe");
  ifrm.setAttribute("scrolling", "no");
  ifrm.setAttribute("src", rb_src);
  ifrm.setAttribute("frameborder", "0");
  ifrm.setAttribute("tabindex", "0");
  ifrm.setAttribute("title", "Remarkbox");
  ifrm.setAttribute("style", 'height:600px;width:100%;border:none!important"');
  ifrm.style.width = "100%";
  const div = document.getElementById("remarkbox-div");
  if (div) {
    window.removeChildren(div);
    div.appendChild(ifrm);
  }
}

function initDiscussion() {
  this.create_remarkbox_iframe();
  var thread_fragment = window.location.hash;
  window.iFrameResize(
    {
      checkOrigin: ["https://my.remarkbox.com"],
      inPageLinks: true,
      initCallback: function (e) {
        e.iFrameResizer.moveToAnchor(thread_fragment);
      },
    },
    document.getElementById("remarkbox-iframe")
  );
}

function removeChildren(parent) {
  while (parent && parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

var initialized = false;

window.onscroll = function () {
  if (!initialized) {
    let scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    if (scrollTop > 300) {
      window.lazyload();
      window.initDiscussion();
      initialized = true;
    }
  }
};

// window.onload = function() {
//     document.getElementsByTagName('share-button').onclick = function () {
//         alert('x');
//     }
// }

window.addEventListener(
  "load",
  function () {
    var btns = document.getElementsByTagName("share-button");
    for (let index = 0; index < btns.length; index++) {
      btns[index].onclick = function (e) {
        var url = null;
        if (e.currentTarget.innerHTML.indexOf("facebook") !== -1) {
          url = "https://www.facebook.com/sharer/sharer.php?u=" + window.location;
        }
        if (e.currentTarget.innerHTML.indexOf("twitter") !== -1) {
          url = "https://twitter.com/intent/tweet?url=" + window.location;
        }
        if (e.currentTarget.innerHTML.indexOf("linked") !== -1) {
          url = "https://www.linkedin.com/shareArticle/?url=" + window.location;
        }

        if (!url) return;

        window.open(url, "_blank");
      };
    }
  },
  false
);
