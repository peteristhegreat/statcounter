var React = require('react');

var StatCounter = function StatCounter(_ref) {
  var _ref$sc_project = _ref.sc_project,
      sc_project = _ref$sc_project === void 0 ? 0 : _ref$sc_project,
      _ref$sc_security = _ref.sc_security,
      sc_security = _ref$sc_security === void 0 ? '' : _ref$sc_security,
      _ref$sc_image_url = _ref.sc_image_url,
      sc_image_url = _ref$sc_image_url === void 0 ? undefined : _ref$sc_image_url,
      _ref$disableBackLink = _ref.disableBackLink,
      disableBackLink = _ref$disableBackLink === void 0 ? undefined : _ref$disableBackLink;

  var _sc_image_url = sc_image_url || "https://c.statcounter.com/" + sc_project + "/0/" + sc_security + "/1/";

  return React.createElement(React.Fragment, null, React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "var sc_project=" + sc_project + "; var sc_invisible=1; var sc_security=\"" + sc_security + "\"; var sc_remove_link=1;"
    }
  }), React.createElement("script", {
    type: 'text/javascript',
    src: 'https://www.statcounter.com/counter/counter.js',
    async: true
  }), disableBackLink ? React.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "<div class=\"statcounter\"><img class=\"statcounter\" src=\"" + _sc_image_url + "\" alt=\"Web Analytics Made Easy - Statcounter\" referrerPolicy=\"no-referrer-when-downgrade\"></div>"
    }
  }) : React.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "<div class=\"statcounter\"><a title=\"Web Analytics Made Easy - Statcounter\" href=\"https://statcounter.com/\" target=\"_blank\"><img class=\"statcounter\" src=\"" + _sc_image_url + "\" alt=\"Web Analytics Made Easy - Statcounter\" referrerPolicy=\"no-referrer-when-downgrade\"></a></div>"
    }
  }));
};

module.exports = StatCounter;
//# sourceMappingURL=index.js.map
