define([
  "qlik",
  "https://d3js.org/d3.v7.min.js",
  "css!./barChart_Dept_TotCases.css",
], function (qlik, d3) {
  return {
    initialProperties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [],
        qInitialDataFetch: [
          {
            qWidth: 2,
            qHeight: 100,
          },
        ],
      },
    },
    definition: {
      type: "items",
      component: "accordion",
      items: {
        dimensions: {
          uses: "dimensions",
          min: 1,
          max: 1,
        },
        measures: {
          uses: "measures",
          min: 1,
          max: 1,
        },
        sorting: {
          uses: "sorting",
        },
        settings: {
          uses: "settings",
          items: {
            X_YAxis: {
              label: "X-Y Axis",
              // component: "accordion",
              items: {
                x_y_AxisLabel: {
                  type: "string",
                  label: "X-Y axis Label",
                  component: "buttongroup",
                  ref: "myproperties.x_y_AxisLabel",
                  options: [
                    {
                      value: "bold",
                      label: "Bold",
                      tooltip: "Select for Bold",
                    },
                    {
                      value: "italic",
                      label: "Italic",
                      tooltip: "Select for Italic",
                    },
                    {
                      value: "both",
                      label: "Both",
                      tooltip: "Select for Bold and Italic",
                    },
                    {
                      value: "none",
                      label: "None",
                      tooltip: "Select for None",
                    },
                  ],
                  defaultValue: "none",
                },
                yAxisPos: {
                  type: "string",
                  component: "dropdown",
                  label: "Y-axis Position",
                  ref: "myproperties.positionY",
                  options: [
                    {
                      value: "left",
                      label: "Left",
                    },
                    {
                      value: "right",
                      label: "Right",
                    },
                  ],
                  defaultValue: "left",
                },
                yAxisColor: {
                  label: "Y-Axis Color",
                  component: "color-picker",
                  ref: "yAxisColor",
                  type: "object",
                  defaultValue: {
                    color: "000000",
                    index: "-1",
                  },
                },
                yScale: {
                  type: "string",
                  component: "dropdown",
                  label: "Y-axis Scaling",
                  ref: "myproperties.scalingY",
                  options: [
                    {
                      value: "wide",
                      label: "Wide",
                    },
                    {
                      value: "medium",
                      label: "Medium",
                    },
                    {
                      value: "narrow",
                      label: "Narrow",
                    },
                  ],
                  defaultValue: "medium",
                },
                yAxisLabelSize: {
                  type: "number",
                  component: "slider",
                  label: "Y-Axis Label Size",
                  ref: "myproperties.yAxisLabelSize",
                  min: 7,
                  max: 32,
                  step: 1,
                  defaultValue: 18,
                },
                xAxisPos: {
                  type: "string",
                  component: "dropdown",
                  label: "X-axis Position",
                  ref: "myproperties.positionX",
                  options: [
                    {
                      value: "top",
                      label: "Top",
                    },
                    {
                      value: "bottom",
                      label: "Bottom",
                    },
                  ],
                  defaultValue: "bottom",
                },
                xAxisColor: {
                  label: "X-Axis Color",
                  component: "color-picker",
                  ref: "xAxisColor",
                  type: "object",
                  defaultValue: {
                    color: "000000",
                    index: "-1",
                  },
                },
                xAxisTickLable: {
                  type: "string",
                  component: "dropdown",
                  label: "X-axis Label orientation",
                  ref: "myproperties.LorientationX",
                  options: [
                    {
                      value: "tilted",
                      label: "Tilted",
                    },
                    {
                      value: "horizontal",
                      label: "Horizontal",
                    },
                    {
                      value: "auto",
                      label: "Auto",
                    },
                  ],
                  defaultValue: "auto",
                },
                xAxisLabelSize: {
                  type: "number",
                  component: "slider",
                  label: "X-Axis Label Size",
                  ref: "myproperties.xAxisLabelSize",
                  min: 7,
                  max: 32,
                  step: 1,
                  defaultValue: 18,
                },
              },
            },
            MyTooltip: {
              label: "Tooltip",
              // component: "accordion",
              items: {
                MyTooltipSwitch: {
                  type: "boolean",
                  label: "Tooltip",
                  component: "switch",
                  ref: "tooltipSwitch",
                  options: [
                    {
                      value: true,
                      label: "On",
                    },
                    {
                      value: false,
                      label: "Off",
                    },
                  ],
                  defaultValue: false,
                },
              },
            },
            Chart: {
              label: "Chart",
              items: {
                chartLabel: {
                  type: "string",
                  label: "Chart Heading",
                  component: "buttongroup",
                  ref: "myproperties.chartHeading",
                  options: [
                    {
                      value: "bold",
                      label: "Bold",
                      tooltip: "Select for Bold",
                    },
                    {
                      value: "italic",
                      label: "Italic",
                      tooltip: "Select for Italic",
                    },
                    {
                      value: "both",
                      label: "Both",
                      tooltip: "Select for Bold and Italic",
                    },
                    {
                      value: "none",
                      label: "None",
                      tooltip: "Select for None",
                    },
                  ],
                  defaultValue: "none",
                },
                MyColorPicker: {
                  label: "Bar Color",
                  component: "color-picker",
                  ref: "myColor",
                  type: "object",
                  defaultValue: {
                    color: "006580",
                    index: "-1",
                  },
                },
                BarOpacity: {
                  type: "number",
                  component: "slider",
                  label: "Bar Opacity",
                  ref: "myproperties.barOpacity",
                  min: 0.3,
                  max: 1,
                  step: 0.05,
                  defaultValue: 0.95,
                },
                GridFormate: {
                  label: "Grid",
                  items: {
                    MyTooltipSwitch: {
                      type: "boolean",
                      label: "Grid",
                      component: "switch",
                      ref: "gridSwitch",
                      options: [
                        {
                          value: true,
                          label: "On",
                        },
                        {
                          value: false,
                          label: "Off",
                        },
                      ],
                      defaultValue: true,
                    },
                    gridScale: {
                      type: "string",
                      component: "dropdown",
                      label: "Grid Scaling",
                      ref: "myproperties.gridScaling",
                      options: [
                        {
                          value: "wide",
                          label: "Wide",
                        },
                        {
                          value: "medium",
                          label: "Medium",
                        },
                        {
                          value: "narrow",
                          label: "Narrow",
                        },
                      ],
                      defaultValue: "medium",
                    },
                    gridLineFormate: {
                      type: "string",
                      component: "dropdown",
                      label: "Grid Line Formatting",
                      ref: "myproperties.gridLineFormate",
                      options: [
                        {
                          value: "dashed",
                          label: "Dashed",
                        },
                        {
                          value: "dotted",
                          label: "Dotted",
                        },
                        {
                          value: "line",
                          label: "Line",
                        },
                      ],
                      defaultValue: "line",
                    },
                    GridOpacity: {
                      type: "number",
                      component: "slider",
                      label: "Grid Opacity",
                      ref: "myproperties.gridOpacity",
                      min: 0.1,
                      max: 1,
                      step: 0.05,
                      defaultValue: 0.35,
                    },
                  },
                },
                LegendOption: {
                  label: "Legend",
                  items: {
                    MyTooltipSwitch: {
                      type: "boolean",
                      label: "Legend",
                      component: "switch",
                      ref: "legendSwitch",
                      options: [
                        {
                          value: true,
                          label: "On",
                        },
                        {
                          value: false,
                          label: "Off",
                        },
                      ],
                      defaultValue: false,
                    },
                  },
                },
                ValueLabels: {
                  label: "Value Labels",
                  items: {
                    MyTooltipSwitch: {
                      type: "boolean",
                      label: "Value Label",
                      component: "switch",
                      ref: "valueLabelSwitch",
                      options: [
                        {
                          value: true,
                          label: "On",
                        },
                        {
                          value: false,
                          label: "Off",
                        },
                      ],
                      defaultValue: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    support: {
      snapshot: true,
      export: true,
      exportData: false,
    },
    paint: function ($element, layout) {
      // console.log($element, layout);
      $element.html(`<div id=${layout.qInfo.qId}></div>`);
      //add your rendering code here

      // console.log(layout);
      // console.log(
      //   layout.qHyperCube.qDataPages[0].qMatrix[0][0].qText,
      //   layout.qHyperCube.qDataPages[0].qMatrix[0][1].qNum
      // );
      // console.log(
      //   layout.qHyperCube.qDataPages[0].qMatrix.map((d) => [
      //     d[0].qText,
      //     d[1].qNum,
      //   ])
      // );
      let dataSet1 = layout.qHyperCube.qDataPages[0].qMatrix.map((d) => [
        d[1].qNum,
        d[0].qText,
      ]);
      let arrayOfColors = [
        "#23171b",
        "#271a28",
        "#2b1c33",
        "#2f1e3f",
        "#32204a",
        "#362354",
        "#39255f",
        "#3b2768",
        "#3e2a72",
        "#402c7b",
        "#422f83",
        "#44318b",
        "#453493",
        "#46369b",
        "#4839a2",
        "#493ca8",
        "#493eaf",
        "#4a41b5",
        "#4a44bb",
        "#4b46c0",
        "#4b49c5",
        "#4b4cca",
        "#4b4ecf",
        "#4b51d3",
        "#4a54d7",
        "#4a56db",
        "#4959de",
        "#495ce2",
        "#485fe5",
        "#4761e7",
        "#4664ea",
        "#4567ec",
        "#446aee",
        "#446df0",
        "#426ff2",
        "#4172f3",
        "#4075f5",
        "#3f78f6",
        "#3e7af7",
        "#3d7df7",
        "#3c80f8",
        "#3a83f9",
        "#3985f9",
        "#3888f9",
        "#378bf9",
        "#368df9",
        "#3590f8",
        "#3393f8",
        "#3295f7",
        "#3198f7",
        "#309bf6",
        "#2f9df5",
        "#2ea0f4",
        "#2da2f3",
        "#2ca5f1",
        "#2ba7f0",
        "#2aaaef",
        "#2aaced",
        "#29afec",
        "#28b1ea",
        "#28b4e8",
        "#27b6e6",
        "#27b8e5",
        "#26bbe3",
        "#26bde1",
        "#26bfdf",
        "#25c1dc",
        "#25c3da",
        "#25c6d8",
        "#25c8d6",
        "#25cad3",
        "#25ccd1",
        "#25cecf",
        "#26d0cc",
        "#26d2ca",
        "#26d4c8",
        "#27d6c5",
        "#27d8c3",
        "#28d9c0",
        "#29dbbe",
        "#29ddbb",
        "#2adfb8",
        "#2be0b6",
        "#2ce2b3",
        "#2de3b1",
        "#2ee5ae",
        "#30e6ac",
        "#31e8a9",
        "#32e9a6",
        "#34eba4",
        "#35eca1",
        "#37ed9f",
        "#39ef9c",
        "#3af09a",
        "#3cf197",
        "#3ef295",
        "#40f392",
        "#42f490",
        "#44f58d",
        "#46f68b",
        "#48f788",
        "#4af786",
        "#4df884",
        "#4ff981",
        "#51fa7f",
        "#54fa7d",
        "#56fb7a",
        "#59fb78",
        "#5cfc76",
        "#5efc74",
        "#61fd71",
        "#64fd6f",
        "#66fd6d",
        "#69fd6b",
        "#6cfd69",
        "#6ffe67",
        "#72fe65",
        "#75fe63",
        "#78fe61",
        "#7bfe5f",
        "#7efd5d",
        "#81fd5c",
        "#84fd5a",
        "#87fd58",
        "#8afc56",
        "#8dfc55",
        "#90fb53",
        "#93fb51",
        "#96fa50",
        "#99fa4e",
        "#9cf94d",
        "#9ff84b",
        "#a2f84a",
        "#a6f748",
        "#a9f647",
        "#acf546",
        "#aff444",
        "#b2f343",
        "#b5f242",
        "#b8f141",
        "#bbf03f",
        "#beef3e",
        "#c1ed3d",
        "#c3ec3c",
        "#c6eb3b",
        "#c9e93a",
        "#cce839",
        "#cfe738",
        "#d1e537",
        "#d4e336",
        "#d7e235",
        "#d9e034",
        "#dcdf33",
        "#dedd32",
        "#e0db32",
        "#e3d931",
        "#e5d730",
        "#e7d52f",
        "#e9d42f",
        "#ecd22e",
        "#eed02d",
        "#f0ce2c",
        "#f1cb2c",
        "#f3c92b",
        "#f5c72b",
        "#f7c52a",
        "#f8c329",
        "#fac029",
        "#fbbe28",
        "#fdbc28",
        "#feb927",
        "#ffb727",
        "#ffb526",
        "#ffb226",
        "#ffb025",
        "#ffad25",
        "#ffab24",
        "#ffa824",
        "#ffa623",
        "#ffa323",
        "#ffa022",
        "#ff9e22",
        "#ff9b21",
        "#ff9921",
        "#ff9621",
        "#ff9320",
        "#ff9020",
        "#ff8e1f",
        "#ff8b1f",
        "#ff881e",
        "#ff851e",
        "#ff831d",
        "#ff801d",
        "#ff7d1d",
        "#ff7a1c",
        "#ff781c",
        "#ff751b",
        "#ff721b",
        "#ff6f1a",
        "#fd6c1a",
        "#fc6a19",
        "#fa6719",
        "#f96418",
        "#f76118",
        "#f65f18",
        "#f45c17",
        "#f25916",
        "#f05716",
        "#ee5415",
        "#ec5115",
        "#ea4f14",
        "#e84c14",
        "#e64913",
        "#e44713",
        "#e24412",
        "#df4212",
        "#dd3f11",
        "#da3d10",
        "#d83a10",
        "#d5380f",
        "#d3360f",
        "#d0330e",
        "#ce310d",
        "#cb2f0d",
        "#c92d0c",
        "#c62a0b",
        "#c3280b",
        "#c1260a",
        "#be2409",
        "#bb2309",
        "#b92108",
        "#b61f07",
        "#b41d07",
        "#b11b06",
        "#af1a05",
        "#ac1805",
        "#aa1704",
        "#a81604",
        "#a51403",
        "#a31302",
        "#a11202",
        "#9f1101",
        "#9d1000",
        "#9b0f00",
        "#9a0e00",
        "#980e00",
        "#960d00",
        "#950c00",
        "#940c00",
        "#930c00",
        "#920c00",
        "#910b00",
        "#910c00",
        "#900c00",
        "#900c00",
        "#900c00",
      ];
      // console.log(dataSet1);

      // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
      // const dataset = [
      //   { value: 12, lable: "cat" },
      //   { value: 31, lable: "dog" },
      //   { value: 22, lable: "mouse" },
      //   { value: 17, lable: "cow" },
      //   { value: 25, lable: "buffalo" },
      //   { value: 18, lable: "pig" },
      //   { value: 29, lable: "hen" },
      //   { value: 14, lable: "goat" },
      //   { value: 9, lable: "horse" },
      // ];
      // const dataset = [
      //   [12, "cat"],
      //   [31, "dog"],
      //   [22, "mouse"],
      //   [17, "cow"],
      //   [25, "buffalo"],
      //   [18, "pig"],
      //   [29, "hen"],
      //   [14, "goat"],
      //   [9, "horse"],
      // ];

      let w = $element.width();
      let h = $element.height();
      let padding = w / 10;

      const svg = d3
        .select("#" + layout.qInfo.qId)
        .append("svg")
        .attr("width", w)
        .attr("height", h);
      console.log(layout);
      console.log(layout.qHyperCube.qMeasureInfo[0].qNumFormat);

      const goat = svg.append("g").attr("transform", "translate(0,0)");
      // const xScale = d3
      //   .scaleLinear()
      //   .domain([0, 45])
      //   .range([padding, w - padding]);

      // var color = d3.scaleOrdinal([
      //   "#4daf4a",
      //   "#377eb8",
      //   "#ff7f00",
      //   "#984ea3",
      //   "#e41a1c",
      // ]);
      // console.log(color(0));
      // console.log(color(1));
      // console.log(color(2));
      // console.log(color(3));
      // console.log(color(4));
      // console.log(color(5));

      const xScale = d3
        .scaleBand()
        .domain(dataSet1.map((d) => d[1]))
        .range([padding, w - padding]);
      // .padding(1);

      //    const xScale = d3
      //  .scaleBand()
      //  .domain(dataset.map((data) => data.lable))
      //  .range([0, w])
      //  .padding(0.4);
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataSet1, (d) => d[0]) * 1.5])
        .range([h - padding, padding]);
      // console.log(xScale.bandwidth());

      //Tooltip

      // ----------------
      // Create a tooltip
      // ----------------
      var tooltip = d3
        .select("#" + layout.qInfo.qId)
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("position", "fixed")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px");
      // console.log("zgfz");

      var mouseover = function (e, d) {
        // console.log("zgviukiv");
        console.log(e, d);
        tooltip.html(
          ` ${layout.qHyperCube.qDimensionInfo[0].qFallbackTitle} : ${d[1]} <br>  ${layout.qHyperCube.qMeasureInfo[0].qFallbackTitle} : ${d[0]}`
        );

        // tooltip.style("left", e.clientX + "px").style("top", e.clientY + "px");
      };
      var mousemove = function (e) {
        // console.log(e);
        if (layout.tooltipSwitch) {
          tooltip.transition().duration(20).style("opacity", 1);
          // select("#" + layout.qInfo.qId + " g.tooltip").attr(
          //   "transform-origin",
          //   "translate(" +
          //     e.toElement.x.animVal.value +
          //     "," +
          //     e.toElement.y.animVal.value +
          //     ")"
          // );
          tooltip
            .style("left", e.clientX + "px")
            .style("top", e.clientY + "px");
          // tooltip
          //   .style("left", e.toElement.x.animVal.value + "px")
          //   .style("top", e.toElement.y.animVal.value + "px");
        }

        // .style("transform", "translateY(-55%)")
      };

      var mouseleave = (d) => tooltip.style("opacity", 0);

      goat
        .selectAll("rect")
        .data(dataSet1)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(d[1]) + xScale.bandwidth() / 4)

        .attr("y", (d, i) => yScale(d[0]))
        .attr("width", xScale.bandwidth() / 2)
        .attr("height", (d, i) => h - yScale(d[0]) - padding)
        .attr("fill", (d) => {
          if (d[1] === "-") {
            return "#dcdcdc";
          } else {
            let color = [...Array(6)]
              .map(() => Math.floor(Math.random() * 16).toString(16))
              .join("");
            // console.log(color);
            return layout.myColor.color;
            // return color;
          }
        })
        .attr("opacity", `${layout.myproperties.barOpacity}`)
        .attr("class", "indBar")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
      // .append("title")
      // .text((d) => d[1]);

      // console.log(svg);
      // goat.style("overflow-x", "scroll");
      if (layout.valueLabelSwitch) {
        goat
          .selectAll("text")
          .data(dataSet1)
          .enter()
          // Add your code below this line
          .append("text")
          .attr("x", (d, i) => xScale(d[1]) + xScale.bandwidth() / 2)
          .attr("y", (d, i) => yScale(d[0]) - 3)
          .text((d) => d[0])
          //.attr("transform","rotate(-45)")
          .style("font-size", "15px")
          .style("text-anchor", "middle")
          .attr("fill", "red");
      }
      goat
        .append("text")
        .attr("transform", "translate(0,0)")
        .attr("x", w / 2)
        .attr("y", padding / 4)
        .attr("font-size", "24px")
        .attr("text-anchor", "middle")
        .text(
          `${layout.qHyperCube.qDimensionInfo[0].qFallbackTitle.toUpperCase()} V/S ${layout.qHyperCube.qMeasureInfo[0].qFallbackTitle.toUpperCase()}`
        )
        .style(
          "font-weight",
          layout.myproperties.chartHeading === "bold" ||
            layout.myproperties.chartHeading === "both"
            ? "980"
            : layout.myproperties.chartHeading === "none"
            ? "none"
            : "none"
        )
        .style(
          "font-style",
          layout.myproperties.chartHeading === "italic" ||
            layout.myproperties.chartHeading === "both"
            ? "italic"
            : layout.myproperties.chartHeading === "none"
            ? "none"
            : "none"
        );

      let xAxis = () => {
        if (layout.myproperties.positionX == "top") {
          // console.log(layout.myproperties.positionX);
          return d3.axisTop(xScale);
        }
        if (layout.myproperties.positionX == "bottom") {
          return d3.axisBottom(xScale);
        }
        return d3.axisBottom(xScale);
      };
      let yAxis = () => {
        if (layout.myproperties.positionY == "right") {
          console.log(layout.myproperties.positionY);
          return d3
            .axisRight(yScale)
            .ticks(
              layout.myproperties.scalingY == "wide"
                ? 3
                : layout.myproperties.scalingY == "medium"
                ? 8
                : layout.myproperties.scalingY == "narrow"
                ? 18
                : 8
            );
        }
        if (layout.myproperties.positionY == "left") {
          return d3
            .axisLeft(yScale)
            .ticks(
              layout.myproperties.scalingY == "wide"
                ? 3
                : layout.myproperties.scalingY == "medium"
                ? 8
                : layout.myproperties.scalingY == "narrow"
                ? 18
                : 8
            );
        }
        return d3.axisLeft(yScale);
      };
      let g = goat.append("g").attr("transform", "translate(0,0)");
      // g.append("g")
      //   .attr("transform", "translate(" + padding + ",0)")
      //   .call(yAxis);
      // g.append("g")
      //   .attr("transform", "translate(" + 0 + "," + (h - padding) + ")")
      //   .call(xAxis);
      let xLable = g
        .append("g")
        .attr("transform", () => {
          if (layout.myproperties.positionX == "top") {
            return "translate(0," + padding + ")";
          }
          if (layout.myproperties.positionX == "bottom") {
            return "translate(0," + (h - padding) + ")";
          }
        })
        .call(xAxis());
      xLable.select("path").style("stroke", layout.xAxisColor.color);

      var wrap = function () {
        var self = d3.select(this),
          textLength = self.node().getComputedTextLength(),
          text = self.text();
        while (textLength > 50 && text.length > 0) {
          console.log(textLength, text);
          text = text.slice(0, -1);
          self.text(text + "...");
          textLength = self.node().getComputedTextLength();
        }
      };

      xLable
        .selectAll("text")
        // .attr(
        //   "transform",
        //   "translate(" +
        //     layout.myproperties.LorientationX[1] +
        //     ",0)rotate(" +
        //     layout.myproperties.LorientationX[0] +
        //     ")"
        // )
        // .attr("transform", "translate(0,0)rotate(0)")
        .attr("transform", () => {
          if (layout.myproperties.LorientationX == "tilted") {
            return "translate(-5,0)rotate(-45)";
          } else if (
            layout.myproperties.LorientationX == "horizontal" ||
            layout.myproperties.LorientationX == "auto"
          ) {
            return "translate(0,0)rotate(0)";
          }
          return "translate(0,0)rotate(0)";
        })
        .attr("text-anchor", () => {
          if (layout.myproperties.LorientationX == "tilted") {
            return "end";
          } else {
            return "middle";
          }
        })
        .each(wrap)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

      xLable
        .append("text")
        .attr("y", () => {
          if (layout.myproperties.positionX == "top") {
            return -(padding / 1.4);
          }
          if (layout.myproperties.positionX == "bottom") {
            return padding / 2;
          }
        })
        .attr("dy", "1em")
        .attr("x", w / 2)
        .attr("text-anchor", "middle")
        .attr("font-size", `${layout.myproperties.xAxisLabelSize}px`)
        // .attr("stroke", "green")
        .attr("fill", "black")
        .text(layout.qHyperCube.qDimensionInfo[0].qFallbackTitle)
        .style(
          "font-weight",
          layout.myproperties.x_y_AxisLabel === "bold" ||
            layout.myproperties.x_y_AxisLabel === "both"
            ? "980"
            : layout.myproperties.x_y_AxisLabel === "none"
            ? "none"
            : "none"
        )
        .style(
          "font-style",
          layout.myproperties.x_y_AxisLabel === "italic" ||
            layout.myproperties.x_y_AxisLabel === "both"
            ? "italic"
            : layout.myproperties.x_y_AxisLabel === "none"
            ? "none"
            : "none"
        );
      // g.append("g")
      //   .attr("transform", "translate(" + padding / 4 + ",0)")
      //   .attr("transform", "rotate(-90)")
      //   // .call(yAxis)
      //   .append("text")
      //   .attr("y", padding / 4)
      //   .attr("x", -h / 2)
      //   .attr("text-anchor", "end")
      //   .attr("stroke", "black")
      //   .text(layout.qHyperCube.qMeasureInfo[0].qFallbackTitle);
      let yLabel = g
        .append("g")
        // .attr("transform", "translate(" + padding + ",0)")
        .attr(
          "transform",
          () => {
            if (layout.myproperties.positionY === "left") {
              return "translate(" + padding + ",0)";
            }
            if (layout.myproperties.positionY === "right") {
              // console.log(layout.myproperties.positionY);
              return "translate(" + (w - padding) + ",0)";
            }
          }
          // "translate(" +
          //   (w * layout.myproperties.positionY +
          //     padding * layout.myproperties.positionY) +
          //   ",0)"
        )
        .call(yAxis().tickFormat((d) => `${d3.format(".2s")(d)}`));
      yLabel.select("path").style("stroke", layout.yAxisColor.color);
      // console.log(d3.max(dataset1, (d) => d[0]));
      yLabel
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -h / 2)
        .attr("y", () => {
          if (layout.myproperties.positionY === "left") {
            return padding / 2;
          }
          if (layout.myproperties.positionY === "right") {
            // console.log(layout.myproperties.positionY);
            return padding * 1.7;
          }
        })
        .attr("dy", -padding)
        .attr("text-anchor", "middle")
        .attr("font-size", `${layout.myproperties.yAxisLabelSize}px`)
        .attr("fill", "black")
        // .attr("stroke", "black")
        .text(layout.qHyperCube.qMeasureInfo[0].qFallbackTitle)
        .style(
          "font-weight",
          layout.myproperties.x_y_AxisLabel === "bold" ||
            layout.myproperties.x_y_AxisLabel === "both"
            ? "980"
            : layout.myproperties.x_y_AxisLabel === "none"
            ? "none"
            : "none"
        )
        .style(
          "font-style",
          layout.myproperties.x_y_AxisLabel === "italic" ||
            layout.myproperties.x_y_AxisLabel === "both"
            ? "italic"
            : layout.myproperties.x_y_AxisLabel === "none"
            ? "none"
            : "none"
        );

      //Grid
      if (layout.gridSwitch === true) {
        let xGrid = g
          .append("g")
          .attr("transform", () => {
            if (layout.myproperties.positionX == "top") {
              return "translate(0," + padding + ")";
            }
            if (layout.myproperties.positionX == "bottom") {
              return "translate(0," + (h - padding) + ")";
            }
          })
          .attr("opacity", `${layout.myproperties.gridOpacity}`)
          .style("stroke-dasharray", () => {
            if (layout.myproperties.gridLineFormate === "dashed") return "5 5";
            else if (layout.myproperties.gridLineFormate === "dotted")
              return "2 3.5";
            else return "0 0";
          })
          .call(
            xAxis().tickSize(-(h - padding * 2))
            // .ticks(
            //   // layout.myproperties.gridScaling == "wide"
            //   //   ? 3
            //   //   : layout.myproperties.gridScaling == "medium"
            //   //   ? 8
            //   //   : layout.myproperties.gridScaling == "narrow"
            //   //   ? 18
            //   //   : 8
            // )
          )
          .selectAll("text")
          .style("opacity", "0");
        xGrid.select("path").style("stroke", "white");

        let yGrid = g
          .append("g")
          // .attr("transform", "translate(" + padding + ",0)")
          .attr(
            "transform",
            () => {
              if (layout.myproperties.positionY === "left") {
                return "translate(" + padding + ",0)";
              }
              if (layout.myproperties.positionY === "right") {
                // console.log(layout.myproperties.positionY);
                return "translate(" + (w - padding) + ",0)";
              }
            }
            // "translate(" +
            //   (w * layout.myproperties.positionY +
            //     padding * layout.myproperties.positionY) +
            //   ",0)"
          )
          .attr("opacity", `${layout.myproperties.gridOpacity}`)
          .style("stroke-dasharray", () => {
            if (layout.myproperties.gridLineFormate === "dashed") return "5 5";
            else if (layout.myproperties.gridLineFormate === "dotted")
              return "2 3.5";
            else return "0 0";
          })
          .call(
            yAxis()
              .tickSize(-(w - padding * 2))
              .ticks(
                layout.myproperties.gridScaling == "wide"
                  ? 3
                  : layout.myproperties.gridScaling == "medium"
                  ? 8
                  : layout.myproperties.gridScaling == "narrow"
                  ? 18
                  : 8
              )
          )
          .selectAll("text")
          .style("opacity", "0");
        yGrid.select("path").style("stroke", "white");
      }

      //Legend

      if (layout.legendSwitch) {
        var legendGroup = svg
          .append("g")
          .attr(
            "transform",
            "translate(" + (w - padding * 2) + "," + padding + ")"
          );
        //  + layout.myprops.position +
        var legendG = legendGroup
          .selectAll(".legend")
          .data(dataSet1)
          .enter()
          .append("g")
          .attr("transform", function (d, i) {
            return "translate(0," + i * 20 + ")";
          })
          .attr("class", "legend");

        legendG
          .append("rect")
          .attr("width", 10)
          .attr("height", 10)
          .attr("fill", layout.myColor.color);

        legendG
          .append("text")
          .text(function (d, i) {
            return d[1];
          })
          .style("font-size", 12)
          .attr("y", 10)
          .attr("x", 11);
      }

      //needed for export
      return qlik.Promise.resolve();
    },
  };
});
