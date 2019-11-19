function fuction3() {
    var accessToken = "25582-30567a98-fd4a-4a86-a9a9-7a7b57f77d17"; // Please set your access token.
    var fileKey = "VHHpoUwqQjqqhcLd7YeamP"; // Please set the file key.
    var baseUrl = "https://api.fIgma.com/v1";
    var params = {
        method: "get",
        headers: {"X-Figma-Token": accessToken},
        muteHttpExceptions: true
    };
    var fileInfo = JSON.parse(
        UrlFetchApp.fetch(baseUrl + "/files/" + fileKey, params)
    );
    var children = (args = {
        document: {
            id: "0:0",
            name: "Document",
            type: "DOCUMENT",
            children: [
                {
                    id: "0:1",
                    name: "Page 1",
                    type: "CANVAS",
                    children: [
                        {
                            id: "6:2",
                            name: "Frame 1",
                            type: "FRAME",
                            blendMode: "PASS_THROUGH",
                            children: [
                                {
                                    id: "6:3",
                                    name: "text!!!!!!! I AM TEXT TEXT",
                                    type: "TEXT",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                        x: -406,
                                        y: -274,
                                        width: 437,
                                        height: 56
                                    },
                                    preserveRatio: true,
                                    constraints: {vertical: "TOP", horizontal: "LEFT"},
                                    fills: [
                                        {
                                            blendMode: "NORMAL",
                                            type: "SOLID",
                                            color: {r: 0, g: 0, b: 0, a: 1}
                                        }
                                    ],
                                    strokes: [],
                                    strokeWeight: 1,
                                    strokeAlign: "OUTSIDE",
                                    effects: [],
                                    characters: "text!!!!!!!\nI AM TEXT\nTEXT",
                                    style: {
                                        fontFamily: "Roboto",
                                        fontPostScriptName: null,
                                        fontWeight: 400,
                                        fontSize: 12,
                                        textAlignHorizontal: "LEFT",
                                        textAlignVertical: "TOP",
                                        letterSpacing: 0,
                                        lineHeightPx: 14.0625,
                                        lineHeightPercent: 100,
                                        lineHeightUnit: "INTRINSIC_%"
                                    },
                                    characterStyleOverrides: [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1
                                    ],
                                    styleOverrideTable: {
                                        "1": {
                                            fontFamily: "Roboto",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontWeight: 700
                                       }
                                    }
                                },
                                {
                                    id: "10:3",
                                    name: "text!!!!!!! I AM TEXT TEXT",
                                    type: "TEXT",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                        x: -406,
                                        y: -201,
                                        width: 437,
                                        height: 56
                                    },
                                    preserveRatio: true,
                                    constraints: {vertical: "TOP", horizontal: "LEFT"},
                                    fills: [
                                        {
                                            blendMode: "NORMAL",
                                            type: "SOLID",
                                            color: {r: 0, g: 0, b: 0, a: 1}
                                        }
                                    ],
                                    strokes: [],
                                    strokeWeight: 1,
                                    strokeAlign: "OUTSIDE",
                                    effects: [],
                                    characters: "text!!!!!!!\nI AM TEXT\nTEXT",
                                    style: {
                                        fontFamily: "Roboto",
                                        fontPostScriptName: null,
                                        fontWeight: 400,
                                        fontSize: 12,
                                        textAlignHorizontal: "CENTER",
                                        textAlignVertical: "TOP",
                                        letterSpacing: 0,
                                        lineHeightPx: 14.0625,
                                        lineHeightPercent: 100,
                                        lineHeightUnit: "INTRINSIC_%"
                                    },
                                    characterStyleOverrides: [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1
                                    ],
                                    styleOverrideTable: {
                                        "1": {
                                            fontFamily: "Roboto",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontWeight: 700
                                        }
                                    }
                                },
                                {
                                    id: "10:4",
                                    name: "text!!!!!!! I AM TEXT TEXT",
                                    type: "TEXT",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                        x: -406,
                                        y: -122,
                                        width: 437,
                                        height: 56
                                    },
                                    preserveRatio: true,
                                    constraints: {vertical: "TOP", horizontal: "LEFT"},
                                    fills: [
                                        {
                                            blendMode: "NORMAL",
                                            type: "SOLID",
                                            color: {r: 0, g: 0, b: 0, a: 1}
                                        }
                                    ],
                                    strokes: [],
                                    strokeWeight: 1,
                                    strokeAlign: "OUTSIDE",
                                    effects: [],
                                    characters: "text!!!!!!!\nI AM TEXT\nTEXT",
                                    style: {
                                        fontFamily: "Roboto",
                                        fontPostScriptName: null,
                                        fontWeight: 400,
                                        fontSize: 12,
                                        textAlignHorizontal: "RIGHT",
                                        textAlignVertical: "TOP",
                                        letterSpacing: 0,
                                        lineHeightPx: 14.0625,
                                        lineHeightPercent: 100,
                                        lineHeightUnit: "INTRINSIC_%"
                                    },
                                    characterStyleOverrides: [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1,
                                        1
                                    ],
                                    styleOverrideTable: {
                                        "1": {
                                            fontFamily: "Roboto",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontWeight: 700
                                        }
                                    }
                                },
                                {
                                    id: "10:5",
                                    name: "text!!!!!!! I AM TEXT TEXT",
                                    type: "TEXT",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                        x: -406,
                                        y: -28,
                                        width: 437,
                                        height: 56
                                    },
                                    preserveRatio: true,
                                    constraints: {vertical: "TOP", horizontal: "LEFT"},
                                    fills: [
                                        {
                                            blendMode: "NORMAL",
                                            type: "SOLID",
                                            color: {
                                                r: 1,
                                                g: 0.02916663885116577,
                                                b: 0.02916663885116577,
                                                a: 1
                                            }
                                        }
                                    ],
                                    strokes: [],
                                    strokeWeight: 1,
                                    strokeAlign: "OUTSIDE",
                                    effects: [],
                                    characters: "text!!!!!!!\nI AM TEXT\nTEXT",
                                    style: {
                                        fontFamily: "Roboto",
                                        fontPostScriptName: null,
                                        fontWeight: 400,
                                        fontSize: 12,
                                        textAlignHorizontal: "RIGHT",
                                        textAlignVertical: "TOP",
                                        letterSpacing: 0,
                                        lineHeightPx: 14.0625,
                                        lineHeightPercent: 100,
                                        lineHeightUnit: "INTRINSIC_%"
                                    },
                                    characterStyleOverrides: [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68,
                                        68
                                    ],
                                    styleOverrideTable: {
                                        "68": {
                                            fontFamily: "Roboto",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontWeight: 700,
                                            fills: [
                                                {
                                                    blendMode: "NORMAL",
                                                    type: "SOLID",
                                                    color: {
                                                        r: 1,
                                                        g: 0.02916663885116577,
                                                        b: 0.02916663885116577,
                                                        a: 1
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    id: "10:6",
                                    name: "text!!!!!!! I AM TEXT TEXT",
                                    type: "TEXT",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                        x: -406,
                                        y: 66,
                                        width: 437,
                                        height: 56
                                    },
                                    preserveRatio: true,
                                    constraints: {vertical: "TOP", horizontal: "LEFT"},
                                    fills: [
                                        {
                                            blendMode: "NORMAL",
                                            type: "SOLID",
                                            color: {r: 1, g: 1, b: 1, a: 1}
                                        }
                                    ],
                                    strokes: [
                                        {
                                            blendMode: "NORMAL",
                                            type: "SOLID",
                                            color: {r: 0, g: 0, b: 0, a: 1}
                                        }
                                    ],
                                    strokeWeight: 1,
                                    strokeAlign: "OUTSIDE",
                                    effects: [],
                                    characters: "text!!!!!!!\nI AM TEXT\nTEXT",
                                    style: {
                                        fontFamily: "Roboto",
                                        fontPostScriptName: null,
                                        fontWeight: 400,
                                        fontSize: 12,
                                        textAlignHorizontal: "RIGHT",
                                        textAlignVertical: "TOP",
                                        letterSpacing: 0,
                                        lineHeightPx: 14.0625,
                                        lineHeightPercent: 100,
                                        lineHeightUnit: "INTRINSIC_%"
                                    },
                                    characterStyleOverrides: [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138,
                                        138
                                    ],
                                    styleOverrideTable: {
                                        "138": {
                                            fontFamily: "Roboto",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontWeight: 700,
                                            fills: [
                                                {
                                                    blendMode: "NORMAL",
                                                    type: "SOLID",
                                                    color: {r: 1, g: 1, b: 1, a: 1}
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    id: "10:7",
                                    name: "text!!!!!!! I AM TEXT TEXT",
                                    type: "TEXT",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                        x: -406,
                                        y: 139,
                                        width: 437,
                                        height: 56
                                    },
                                    preserveRatio: true,
                                    constraints: {vertical: "TOP", horizontal: "LEFT"},
                                    fills: [
                                        {
                                            blendMode: "NORMAL",
                                            type: "SOLID",
                                            color: {r: 1, g: 1, b: 1, a: 1}
                                        },
                                        {
                                            blendMode: "NORMAL",
                                            type: "GRADIENT_LINEAR",
                                            gradientHandlePositions: [
                                                {x: 0.5, y: -3.0616171314629196e-17},
                                                {x: 0.5, y: 0.9999999999999999},
                                                {x: 0, y: 0}
                                            ],
                                            gradientStops: [
                                                {
                                                    color: {
                                                        r: 0.925000011920929,
                                                        g: 0.053958356380462646,
                                                        b: 0.053958356380462646,
                                                        a: 1
                                                    },
                                                    position: 0
                                                },
                                                {color: {r: 1, g: 1, b: 1, a: 0}, position: 1}
                                            ]
                                        }
                                    ],
                                    strokes: [
                                        {
                                            blendMode: "NORMAL",
                                            visible: false,
                                            type: "SOLID",
                                            color: {r: 0, g: 0, b: 0, a: 1}
                                        }
                                    ],
                                    strokeWeight: 1,
                                    strokeAlign: "OUTSIDE",
                                    effects: [],
                                    characters: "text!!!!!!!\nI AM TEXT\nTEXT",
                                    style: {
                                        fontFamily: "Roboto",
                                        fontPostScriptName: null,
                                        fontWeight: 400,
                                        fontSize: 12,
                                        textAlignHorizontal: "RIGHT",
                                        textAlignVertical: "TOP",
                                        letterSpacing: 0,
                                        lineHeightPx: 14.0625,
                                        lineHeightPercent: 100,
                                        lineHeightUnit: "INTRINSIC_%"
                                    },
                                    characterStyleOverrides: [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204,
                                        204
                                    ],
                                    styleOverrideTable: {
                                        "204": {
                                            fontFamily: "Roboto",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontWeight: 700,
                                            fills: [
                                                {
                                                    blendMode: "NORMAL",
                                                    type: "SOLID",
                                                    color: {r: 1, g: 1, b: 1, a: 1}
                                                },
                                                {
                                                    blendMode: "NORMAL",
                                                    type: "GRADIENT_LINEAR",
                                                    gradientHandlePositions: [
                                                        {x: 0.5, y: -3.0616171314629196e-17},
                                                        {x: 0.5, y: 0.9999999999999999},
                                                        {x: 0, y: 0}
                                                    ],
                                                    gradientStops: [
                                                        {
                                                            color: {
                                                                r: 0.925000011920929,
                                                                g: 0.053958356380462646,
                                                                b: 0.053958356380462646,
                                                                a: 1
                                                            },
                                                            position: 0
                                                        },
                                                        {
                                                            color: {r: 1, g: 1, b: 1, a: 0},
                                                            position: 1
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                }
                            ],
                            absoluteBoundingBox: {
                                x: -460,
                                y: -333,
                                width: 586,
                                height: 586
                            },
                            preserveRatio: true,
                            constraints: {vertical: "TOP", horizontal: "LEFT"},
                            clipsContent: true,
                            background: [
                                {
                                    blendMode: "NORMAL",
                                    type: "SOLID",
                                    color: {r: 1, g: 1, b: 1, a: 1}
                                }
                            ],
                            backgroundColor: {r: 1, g: 1, b: 1, a: 1},
                            effects: []
                        }
                    ],
                    backgroundColor: {
                        r: 0.8980392217636108,
                        g: 0.8980392217636108,
                        b: 0.8980392217636108,
                        a: 1
                    },
                    prototypeStartNodeID: null
                }
            ]
        },
        components: {},
        schemaVersion: 0,
        styles: {},
        name: "Untitled",
        lastModified: "2019-11-16T19:24:16.397995Z",
        thumbnailUrl:
            "https://s3-alpha-sig.figma.com/thumbnails/f3bf6bfc-7c30-49bb-ad8b-dd8d48413ffa?Expires=1574640000&Signature=TVMdAmF-8YAmN35I4sL4rtW8qOT0afoQf4eR9NIrIDSgBdsnW85jp2i9nE~gpDADTi2WDafdKFaEkjV7hNs7z75s6WnBvD1sWwJKms4NdYTeGe557cUaUQI4qEBlBkVVh3e7Vl3PAb3dNrpgvXoL~QRDA7YL4x1dO~FSYwKZjLLujyO4zox-Ogl7SuyfUSaPa4XRUKLvr77aAG5AijwCtJHJU3sP0lCjl1O3pgW72xGeMYnKEzdDd~Todte43MouvtRM6J2xZcfH~RXzjiaaf5Utm~m6rkwdPf2iJF~1G7bwmCZnUyeZQxgv4T91E9Rq6QedcwoBSOGdaga1n90Aqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        version: "202635446",
        role: "viewer"
    });
    var a, b, c, d, h;
    //get page from JSON

    var pageid = args.document.children;
    for (a in pageid) {
        if (a < pageid.length) ;
        {
            pageid.push(pageid[a].id);
        }
    }

    //get frame from JSON
  
  
 function prop1(obj1, getFrameProps, b, args) {
  getFrameProps = args.document[0].children[0].children[0].children;
      getFrameProps = getFrameProps.replace(/\(/g, "[").replace(/\)/g, "]");

  var objs1 = eval("[" + getFrameProps + "]");
  for 
    (b; b<objs1; b++) {
      obj1 = objs1[b];
    }
 }
function prop2(obj1, obj2, getFrameProps, keys) {

  var GetShapesProps = obj1;
      GetShapesProps = GetShapesProps.replace(/\(/g, "[").replace(/\)/g, "]");
  obj2 = PropertiesService.getProperties();

  // Sets several script properties, then retrieves them and logs them.
  obj2 = getFrameProps.getProperties();
  for (var id in obj2) {
    if (id < obj2) {
    var newObject= (kind, obj2[id]);

  }
}
}

/*    function makeframe1(getFrame, b, obj1, getFrame2, newObject) {
  var newArr = {}
       

  var keys = [];
  for(b in objs1)
    keys.push(b+':'+objs1[b]);
  Logger.log("total " + keys.length + "\n" + keys.join('\n'));
}
*/                                                            
                                                                                               
  
    function createPresentation(
        textStyleJSON,
        slideIDJSON,
        getFrame,
        textX,
        textY,
        textWidth,
        textHeight,
        FrameID,
        pageJSON
    ) {
        JSON.stringify(
            slideIDJSON,
            textX,
            textWidth,
            textHeight,
            textY,
            textStyleJSON
        );
        var slide = SlidesApp.getActivePresentation().getSlides()[0];
        var shape = slide.insertShape(
            SlidesApp.ShapeType.TEXT_BOX,
            textStyleJSON.concat(textWidth),
            textWidth,
            textHeight,
            textHeight
        );
        var textRange = shape.getText(newSlides);
        var textboxid = shape.getObjectId(FrameID);
        var textPosion =
            shape.getTranslateX(getFrame.x) + shope.getTransformY(getFrame.y);
        textRange.setText(textJSON);

        textRange
            .getTextStyle()
            .setBold(true)
            .setLinkUrl("www.example.com")
            .setForegroundColor("#ff0000")
            .getFontFamily(textStyleJSON.textFontFamily)
            .getFontSize(textStyleJSON.textAlignHorizontal)
            .setAlignment(textStyleJSON.HorizontalAlignment);

        var paragraphs = textRange.getParagraphs();
        for (var e = 0; i < 3; e++) {
            var paragraphStyle = paragraphs[e].getRange().getParagraphStyle();
        }
        String.prototype.splice = function (idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };

        var subRange = textRange.getRange(0, 5);
        Logger.log(
            "Sub-range Start: " +
            subRange.getStartIndex() +
            "; Sub-range End: " +
            subRange.getEndIndex() +
            "; Sub-range Content: " +
            subRange.asString()
        );
    }
}