/*===============================
        08. Chart function
==================================*/
chart();

function chart() {
    /* Layout 1 Token Chat */
    var colors = [
        "#f3c305",
        "#c58b16",
        "#ff11ff",
        "#e41a3c",
        "#ce00ff",
        "#a6cee3",
    ];
    var labels = [
        "50% - Burn",
        "10% - Liquidity",
        "20% - Presale",
        "2% - Dev Team",
        "2% - Partners",
        "16% - Reserve",
    ];
    var data = [50, 10, 20, 2, 2, 16];

    var bgColor = colors;
    var dataChart = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: bgColor,
                borderWidth: 0,
            },
        ],
    };
    var config = {
        type: "doughnut",
        data: dataChart,
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 10,
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="doughnut-legend">');
                if (chart.data.datasets.length) {
                    for (
                        var i = 0;
                        i < chart.data.datasets[0].data.length;
                        ++i
                    ) {
                        text.push(
                            '<li><span class="doughnut-legend-icon" style="background-color:' +
                            chart.data.datasets[0].backgroundColor[i] +
                            '"></span>'
                        );
                        if (chart.data.labels[i]) {
                            text.push(
                                '<span class="doughnut-legend-text">' +
                                chart.data.labels[i] +
                                "</span>"
                            );
                        }
                        text.push("</li>");
                    }
                }
                text.push("</ul>");
                return text.join("");
            },
            tooltips: {
                yPadding: 10,
                callbacks: {
                    label: function (tooltipItem, data) {
                        var total = 0;
                        data.datasets[tooltipItem.datasetIndex].data.forEach(
                            function (element /*, index, array*/) {
                                total += element;
                            }
                        );
                        var value =
                            data.datasets[tooltipItem.datasetIndex].data[
                            tooltipItem.index
                            ];
                        var percentTxt = Math.round((value / total) * 100);
                        return (
                            data.labels[tooltipItem.index] +
                            ": " +
                            data.datasets[tooltipItem.datasetIndex].data[
                            tooltipItem.index
                            ] +
                            " (" +
                            percentTxt +
                            "%)"
                        );
                    },
                },
            },
        },
    };

    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var doughnutChart = new Chart(ctx, config);

    var legend = doughnutChart.generateLegend();
    var legendHolder = document.getElementById("legend");
    legendHolder.innerHTML = legend;

    /* Layout 2 Token Chat */
    var layout2colors = [
        "#3e609b",
        "#ee8c4b",
        "#aeaeae",
        "#fec934",
        "#79abdb",
        "#89bc68",
        "#6b8fce",
        "#c26427",
        "#767676",
        "#bf9417",
        "#90acdb",
        "#7fb35d",
        "#557bbc",
        "#f2ab7b",
        "#629046",
    ];
    var layout2labels = [
        "Team (5%)",
        "Founding (2%)",
        "Seed Placement (1.5%)",
        "Private Placement (2%), Private/Corporate Placement (2%)",
        "Public Allocation (2%)",
        "Game Play Incentive (30%)",
        "Game play features (6.5%)",
        "Token Stake Incentive (10%)",
        "Liquidity (10%)",
        "Listing Fees (1%)",
        "Development (15%)",
        "Marketing (10%)",
        "Airdrop (1%)",
        "Advisor (1.5%)",
    ];
    var layout2data = [5, 2, 1.5, 2, 2, 2, 30, 6.5, 10, 10, 1, 15, 10, 1, 1.5];
    var layout2data2 = [10, 20, 30, 30, 20];
    var bgColor = layout2colors;

    var layout2dataChart = {
        labels: layout2labels,
        datasets: [
            {
                data: layout2data,
                backgroundColor: bgColor,
                borderWidth: 0,
            },
        ],
    };
    var layout2dataChart2 = {
        labels: layout2labels,
        datasets: [
            {
                data: layout2data2,
                backgroundColor: bgColor,
                borderWidth: 0,
            },
        ],
    };
    var layout2config1 = {
        type: "doughnut",
        data: layout2dataChart,
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 40,
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="doughnut-legend">');
                if (chart.data.datasets.length) {
                    for (
                        var i = 0;
                        i < chart.data.datasets[0].data.length;
                        ++i
                    ) {
                        text.push(
                            '<li><span class="doughnut-legend-icon" style="background-color:' +
                            chart.data.datasets[0].backgroundColor[i] +
                            '"></span>'
                        );
                        if (chart.data.labels[i]) {
                            text.push(
                                '<span class="doughnut-legend-text">' +
                                chart.data.labels[i] +
                                "</span>"
                            );
                        }
                        text.push("</li>");
                    }
                }
                text.push("</ul>");
                return text.join("");
            },
            tooltips: {
                yPadding: 10,
                callbacks: {
                    label: function (tooltipItem, data) {
                        var total = 0;
                        data.datasets[tooltipItem.datasetIndex].data.forEach(
                            function (element /*, index, array*/) {
                                total += element;
                            }
                        );
                        var value =
                            data.datasets[tooltipItem.datasetIndex].data[
                            tooltipItem.index
                            ];
                        var percentTxt = Math.round((value / total) * 100);
                        return (
                            data.labels[tooltipItem.index] +
                            ": " +
                            data.datasets[tooltipItem.datasetIndex].data[
                            tooltipItem.index
                            ] +
                            " (" +
                            percentTxt +
                            "%)"
                        );
                    },
                },
            },
        },
    };

    var layout2config2 = {
        type: "doughnut",
        data: layout2dataChart2,
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 40,
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="doughnut-legend">');
                if (chart.data.datasets.length) {
                    for (
                        var i = 0;
                        i < chart.data.datasets[0].data.length;
                        ++i
                    ) {
                        text.push(
                            '<li><span class="doughnut-legend-icon" style="background-color:' +
                            chart.data.datasets[0].backgroundColor[i] +
                            '"></span>'
                        );
                        if (chart.data.labels[i]) {
                            text.push(
                                '<span class="doughnut-legend-text">' +
                                chart.data.labels[i] +
                                "</span>"
                            );
                        }
                        text.push("</li>");
                    }
                }
                text.push("</ul>");
                return text.join("");
            },
            tooltips: {
                yPadding: 10,
                callbacks: {
                    label: function (tooltipItem, data) {
                        var total = 0;
                        data.datasets[tooltipItem.datasetIndex].data.forEach(
                            function (element /*, index, array*/) {
                                total += element;
                            }
                        );
                        var value =
                            data.datasets[tooltipItem.datasetIndex].data[
                            tooltipItem.index
                            ];
                        var percentTxt = Math.round((value / total) * 100);
                        return (
                            data.labels[tooltipItem.index] +
                            ": " +
                            data.datasets[tooltipItem.datasetIndex].data[
                            tooltipItem.index
                            ] +
                            " (" +
                            percentTxt +
                            "%)"
                        );
                    },
                },
            },
        },
    };

    if ($("#layout2doughnutChart1").length > 0) {
        var layout2ctx1 = document
            .getElementById("layout2doughnutChart1")
            .getContext("2d");
        var layout2doughnutChart1 = new Chart(layout2ctx1, layout2config1);

        var layout2legend1 = layout2doughnutChart1.generateLegend();
        var layout2legendHolder1 = document.getElementById("layout2legend1");
        layout2legendHolder1.innerHTML = layout2legend1;
    }

    /*var layout2ctx2 = document.getElementById("layout2doughnutChart2").getContext("2d");
      var layout2doughnutChart2 = new Chart(layout2ctx2, layout2config2);

      var layout2legend2 = layout2doughnutChart2.generateLegend();
      var layout2legendHolder2 = document.getElementById("layout2legend2");
      layout2legendHolder2.innerHTML = layout2legend2;*/
}
