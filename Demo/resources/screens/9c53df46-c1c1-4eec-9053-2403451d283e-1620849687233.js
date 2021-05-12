jQuery("#simulation")
  .on("mouseup", ".s-9c53df46-c1c1-4eec-9053-2403451d283e .mouseup", function(event, data) {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_6 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_11 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_12 > .backgroundLayer > .colorLayer": {
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
  .on("mousedown", ".s-9c53df46-c1c1-4eec-9053-2403451d283e .mousedown", function(event, data) {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_6 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_11 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Text_12 > .backgroundLayer > .colorLayer": {
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
  .on("mouseenter dragenter", ".s-9c53df46-c1c1-4eec-9053-2403451d283e .mouseenter", function(event, data) {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
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
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-9c53df46-c1c1-4eec-9053-2403451d283e #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
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
  .on("mouseleave dragleave", ".s-9c53df46-c1c1-4eec-9053-2403451d283e .mouseleave", function(event, data) {
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