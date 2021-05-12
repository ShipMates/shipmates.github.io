(function(window, undefined) {
  var dictionary = {
    "91a6b157-fb9f-4584-aff1-6bbf86c91c31": "Products page",
    "8228eb74-c12b-45c2-b5ee-bdf024bd17a2": "groups",
    "9c53df46-c1c1-4eec-9053-2403451d283e": "group_dashboard",
    "1bd819f9-a6a8-43c6-a1cc-1d26398f103c": "payment",
    "92b87bd7-1995-45c0-9368-40627e83f78a": "details",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Landing page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);