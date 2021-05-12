jQuery("#simulation")
  .on("click", ".s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/92b87bd7-1995-45c0-9368-40627e83f78a",
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
  .on("mouseup", ".s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 .mouseup", function(event, data) {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_6 > .backgroundLayer > .colorLayer": {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_11 > .backgroundLayer > .colorLayer": {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_12 > .backgroundLayer > .colorLayer": {
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
  .on("mousedown", ".s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 .mousedown", function(event, data) {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_6 > .backgroundLayer > .colorLayer": {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_11 > .backgroundLayer > .colorLayer": {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Text_12 > .backgroundLayer > .colorLayer": {
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
  .on("mouseenter dragenter", ".s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 .mouseenter", function(event, data) {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Rectangle_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Rectangle_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
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
  .on("mouseleave dragleave", ".s-91a6b157-fb9f-4584-aff1-6bbf86c91c31 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_9")) {
      jEvent.undoCases(jFirer);
    }
  });