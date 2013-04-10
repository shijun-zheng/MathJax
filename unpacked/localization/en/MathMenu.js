MathJax.Localization.addTranslation("en","MathMenu",{
  isLoaded: true,
  strings: {

    Show: "Show Math As",
      MathMLcode:     "MathML Code",
      OriginalMathML: "Original MathML",
      TeXCommands:    "TeX Commands",
      AsciiMathInput: "AsciiMathML input",
      Original:       "Original Form",
      ErrorMessage:   "Error Message",
      texHints:       "Show TeX hints in MathML",
    Settings: "Math Settings",
      ZoomTrigger: "Zoom Trigger",
        Hover:       "Hover",
        Click:       "Click",
        DoubleClick: "Double-Click",
        NoZoom:      "No Zoom",
      TriggerRequires: "Trigger Requires:",
        Option:      "Option",
        Alt:         "Alt",
        Command:     "Command",
        Control:     "Control",
        Shift:       "Shift",
      ZoomFactor:    "Zoom Factor",
      Renderer: "Math Renderer",
      MPHandles: "Let MathPlayer Handle:",
        MenuEvents:    "Menu Events",
        MouseEvents:   "Mouse Events",
        MenuAndMouse:  "Mouse and Menu Events",
      FontPrefs:  "Font Preferences",
        ForHTMLCSS: "For HTML-CSS:",
          Auto:         "Auto",
          TeXLocal:     "TeX (local)",
          TeXWeb:       "TeX (web)",
          TeXImage:     "TeX (image)",
          STIXLocal:    "STIX (local)",
      ContextMenu: "Contextual Menu",
        Browser:        "Browser",
      Scale: "Scale All Math ...",
      Discoverable: "Highlight on Hover",
    Locale: "Language",
      LoadLocale: "Load from URL ...",
    About: "About MathJax",
    Help:  "MathJax Help",
       
    localTeXfonts:  "using local TeX fonts",
    webTeXfonts:    "using web TeX font",
    imagefonts:     "using Image fonts",
    localSTIXfonts: "using local STIX fonts",
    webSVGfonts:    "using web SVG fonts",
    genericfonts:   "using generic unicode fonts",
      
    wofforotffonts: "woff or otf fonts",
    eotffonts:      "eot fonts",
    svgfonts:       "svg fonts",

    WebkitNativeMMLWarning:
      "Your browser doesn't seem to support MathML natively, " +
      "so switching to MathML output may cause the mathematics " +
      "on the page to become unreadable.",

    MSIENativeMMLWarning:
      "Internet Explorer requires the MathPlayer plugin " +
      "in order to process MathML output.",
      
    OperaNativeMMLWarning:
      "Opera's support for MathML is limited, so switching to " +
      "MathML output may cause some expressions to render poorly.",

    SafariNativeMMLWarning:
       "Your browser's native MathML does not implement all the features " +
       "used by MathJax, so some expressions may not render properly.",

    FirefoxNativeMMLWarning:
      "Your browser's native MathML does not implement all the features " +
      "used by MathJax, so some expressions may not render properly.",
      
    MSIESVGWarning:
      "SVG is not implemented in Internet Explorer prior to " +
      "IE9 or when it is emulating IE8 or below. " +
      "Switching to SVG output will cause the mathemtics to " +
      "not display properly.",
      
    LoadURL:
      "Load translation data from this URL:",
      
    BadURL:
      "The URL should be for a javascript file that defines MathJax translation data.  " +
      "Javascript file names should end with '.js'",

    BadData:
     "Failed to load translation data from %1",
     
    SwitchAnyway:
      "Switch the renderer anyway?\n\n" +
      "(Press OK to switch, CANCEL to continue with the current renderer)",

    ScaleMath:
      "Scale all mathematics (compared to surrounding text) by",

    NonZeroScale:
      "The scale should not be zero",

    PercentScale:
      "The scale should be a percentage (e.g., 120%%)",

    IE8warning:
      "This will disable the MathJax menu and zoom features, " +
      "but you can Alt-Click on an expression to obtain the MathJax " +
      "menu instead.\n\nReally change the MathPlayer settings?",

    IE9warning:
      "The MathJax contextual menu will be disabled, but you can " +
      "Alt-Click on an expression to obtain the MathJax menu instead.",

    NoOriginalForm:
      "No original form available",

    Close:
      "Close",

    EqSource:
      "MathJax Equation Source"

  }
});

MathJax.Ajax.loadComplete("[MathJax]/localization/en/MathMenu.js");
