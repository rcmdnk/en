(function() {
  var c = document,
    d = "length",
    e = " translation",
    f = " using Google Translate?",
    k = ".",
    l = "Google has automatically translated this page to: ",
    m = "Powered by ",
    n = "Translate",
    p = "Translate everything to ",
    q = "Translate this page to: ",
    r = "Translated to: ",
    t = "Turn off ",
    u = "Turn off for: ",
    v = "View this page in: ",
    w = "var ",
    x = this;

  function y(a, z) {
    var g = a.split(k),
      b = x;
    g[0] in b || !b.execScript || b.execScript(w + g[0]);
    for (var h; g[d] && (h = g.shift());) g[d] || void 0 === z ? b[h] ? b = b[h] : b = b[h] = {} : b[h] = z
  };
  var A = {
    0: n,
    1: "Cancel",
    2: "Close",
    3: function(a) {
      return l + a
    },
    4: function(a) {
      return r + a
    },
    5: "Error: The server could not complete your request. Try again later.",
    6: "Learn more",
    7: function(a) {
      return m + a
    },
    8: n,
    9: "Translation in progress",
    10: function(a) {
      return q + (a + f)
    },
    11: function(a) {
      return v + a
    },
    12: "Show original",
    13: "The content of this local file will be sent to Google for translation using a secure connection.",
    14: "The content of this secure page will be sent to Google for translation using a secure connection.",
    15: "The content of this intranet page will be sent to Google for translation using a secure connection.",
    16: "Select Language",
    17: function(a) {
      return t + (a + e)
    },
    18: function(a) {
      return u + a
    },
    19: "Always hide",
    20: "Original text:",
    21: "Contribute a better translation",
    22: "Contribute",
    23: "Translate all",
    24: "Restore all",
    25: "Cancel all",
    26: "Translate sections to my language",
    27: function(a) {
      return p + a
    },
    28: "Show original languages",
    29: "Options",
    30: "Turn off translation for this site",
    31: null,
    32: "Show alternative translations",
    33: "Click on words above to get alternative translations",
    34: "Use",
    35: "Drag with shift key to reorder",
    36: "Click for alternative translations",
    37: "Hold down the shift key, click, and drag the words above to reorder.",
    38: "Thank you for contributing your translation suggestion to Google Translate.",
    39: "Manage translation for this site",
    40: "Click a word for alternative translations, or double-click to edit directly",
    41: "Original text",
    42: n,
    43: n,
    44: "Your correction has been submitted.",
    45: "Error: The language of the webpage is not supported."
  };
  var B = window.google && google.translate && google.translate._const;
  if (B) {
    var C;
    t: {
      for (var D = [], E = ["25,0.01,20150123"], F = 0; F < E[d]; ++F) {
        var G = E[F].split(","),
          H = G[0];
        if (H) {
          var I = Number(G[1]);
          if (!(!I || .1 < I || 0 > I)) {
            var J = Number(G[2]),
              K = new Date,
              L = 1E4 * K.getFullYear() + 100 * (K.getMonth() + 1) + K.getDate();
            !J || J < L || D.push({
              version: H,
              a: I,
              b: J
            })
          }
        }
      }
      for (var M = 0, N = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/), O = Number(N && N[1]) || Math.random(), F = 0; F < D[d]; ++F) {
        var P = D[F],
          M = M + P.a;
        if (1 <= M) break;
        if (O < M) {
          C = P.version;
          break t
        }
      }
      C = "26"
    }
    var Q = "/translate_static/js/element/%s/element_main.js".replace("%s",
    C);
    if ("0" == C) {
      var R = " translate_static js element %s element_main.js".split(" ");
      R[R[d] - 1] = "main.js";
      Q = R.join("/").replace("%s", C)
    }
    if (B._cjlc) B._cjlc(B._pas + B._pah + Q);
    else {
      var S = B._pas + B._pah + Q,
        T = c.createElement("script");
      T.type = "text/javascript";
      T.charset = "UTF-8";
      T.src = S;
      var U = c.getElementsByTagName("head")[0];
      U || (U = c.body.parentNode.appendChild(c.createElement("head")));
      U.appendChild(T)
    }
    y("google.translate.m", A);
    y("google.translate.v", C)
  };
})()
