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
        // console.log(e, d);
        var subgroupName = d[1];
        var subgroupValue = d[0];
        tooltip.html(
          ` ${layout.qHyperCube.qDimensionInfo[0].qFallbackTitle} : ${subgroupName} <br>  ${layout.qHyperCube.qMeasureInfo[0].qFallbackTitle} : ${subgroupValue}`
        );

        // tooltip.style("left", e.clientX + "px").style("top", e.clientY + "px");
      };
      var mousemove = function (e) {
        // console.log(e.clientX, e.clientY);
        if (layout.tooltipSwitch) {
          tooltip.transition().duration(20).style("opacity", 1);
          tooltip
            .style("left", e.clientX + "px")
            .style("top", e.clientY + "px");
        }

        // .style("transform", "translateY(-55%)")
      };

      var mouseleave = function (d) {
        tooltip.style("opacity", 0);
      };

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
        });

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
        .attr("font-size", "18px")
        // .attr("stroke", "green")
        .attr("fill", "black")
        .text(layout.qHyperCube.qDimensionInfo[0].qFallbackTitle);
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
        .attr("x", (-h + padding) / 2)
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
        .attr("text-anchor", "end")
        .attr("font-size", "18px")
        .attr("fill", "black")
        // .attr("stroke", "black")
        .text(layout.qHyperCube.qMeasureInfo[0].qFallbackTitle);

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

        legendG.append("rect").attr("width", 10).attr("height", 10).attr(
          "fill",
          layout.myColor.color
          // [
          //   "#e41a1c",
          //   "#377eb8",
          //   "#4daf4a",
          //   "#984ea3",
          //   "#ff7f00",
          //   "#ffff33",
          //   "#a65628",
          //   "#f781bf",
          //   "#999999",
          // ]
        );

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
