jQuery("#simulation")
  .on("click", ".s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_31","#s-Paragraph_5","#s-Image_1","#s-Paragraph_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1bd819f9-a6a8-43c6-a1cc-1d26398f103c",
                    "transition": {
                      "type": "slideleft",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Text_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_7": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_7 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_8": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("mouseenter dragenter", ".s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#777777"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#777777"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#777777"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8228eb74-c12b-45c2-b5ee-bdf024bd17a2 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_11")) {
      jEvent.undoCases(jFirer);
    }
  });