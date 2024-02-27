let barCharts = [];
let data;
let cleanData = [];
let numRows;
let fontLight;
let fontReg;
let fontBold;
let colours = ["#b8c0ff", "#fb6f92"]

function preload() {
    // data = loadTable("data/combined.csv", "csv", "header");
    data = loadTable("data/earlyLeavers.csv", "csv", "header");
    fontLight = loadFont("Fonts/IBMPlexSans-Light.ttf");
    fontReg = loadFont("Fonts/IBMPlexSans-Regular.ttf");
    fontBold = loadFont("Fonts/IBMPlexSans-SemiBold.ttf");
}

function setup() {
    createCanvas(3600, 2000)
    angleMode(DEGREES);

    numRows = data.rows.length;
    for (let i = 0; i < numRows; i++) {
        cleanData.push(data.rows[i].obj)
    }
    console.log(cleanData)
    console.log(data)

   

    let barChartHorizontal = {
        data:cleanData,
        chartHeight:800,
        chartWidth:800,
        xPos:50,
        axisThickness:2,
        yPos:100,
        numTicks:8,
        // x axis value
        referenceName:"Year",
        rotation:0,
        barWidth:45,
        // title positioning
        xTitle:500,
        yTitle:50,
        textSize:38,
        // bar fill for when i dont want the gradient
        barFill:"#b8c0ff",
        // x/y axis name fill
        referenceFill:"#000000",
        referenceFillY:"#000000",
        axisLineColour:"#3a5361",
        // yValue:["Male","Female"],
        // this decides what is being used as data
        yValue:"Male",
        rounding:true,
        barTitle: "Male amount of school leavers (in thousands)",
        // for rounding
        decimalPlaces:0
    }

    let barChartRegular = {
        data:cleanData,
        chartHeight:800,
        chartWidth:800,
        xPos:1000,
        axisThickness:2,
        yPos:900,
        numTicks:5,
        referenceName:"Year",
        rotation:45,
        barWidth:45,
        xTitle:1500,
        yTitle:50,
        barFill:"#b8c0ff",
        referenceFill:"#000000",
        referenceFillY:"#000000",
        axisLineColour:"#3a5361",
        yValue:"Female",
        rounding:true,
        barTitle:"Female amount (in thousands)",
        decimalPlaces: 0
    }

    let barChartRegularB = {
        data:cleanData,
        chartHeight:800,
        chartWidth:800,
        xPos:2000,
        axisThickness:2,
        yPos:900,
        numTicks:5,
        referenceName:"Year",
        rotation:45,
        barWidth:45,
        xTitle:2500,
        yTitle:50,
        barFill:"#b8c0ff",
        referenceFill:"#000000",
        referenceFillY:"#000000",
        axisLineColour:"#3a5361",
        yValue:"Male",
        rounding:true,
        barTitle:"Male amount (in thousands)",

        decimalPlaces: 0
    }



     let barChartStacked = {
        data: cleanData,
        chartHeight: 800,
        chartWidth: 800,
        xPos: 50,
        axisThickness: 2,
        yPos: 1800,
        numTicks: 5,
        referenceName: "Year",
        rotation: 45,
        barWidth: 45,
        xTitle: 500,
        yTitle: 950,
        textSize:36,
        referenceFill: "#000000",
        referenceFillY: "#000000",
        axisLineColour: "#3a5361",
        yValues: ["Male", "Female"],
        totalValue: "Total",
        rounding: false,
        barTitle: "Total amount (in thousands)",
        avgLine:true,
        avgLineColour:"#000000",
        decimalPlaces: 0
    }



    let barChartScatter = {
        data: cleanData,
        chartHeight: 800,
        chartWidth: 800,
        xPos: 1000,
        axisThickness: 2,
        yPos: 1800,
        numTicks: 5,
        referenceName: "Year",
        rotation: 45,
        barWidth: 45,
        xTitle: 1500 ,
        yTitle: 950 ,
        barFill: "#b8c0ff",
        referenceFill: "#000000",
        referenceFillY: "#000000",
        axisLineColour: "#3a5361",
        yValue: "Total",
        rounding: true,
        barTitle: "Total amount (in thousands)",
        decimalPlaces: 0
    }

    let barChartLine= {
        data:cleanData,
        chartHeight:800,
        chartWidth:800,
        xPos:2000,
        axisThickness:2,
        yPos:1800,
        numTicks:5,
        referenceName:"Year",
        rotation:45,
        barWidth:45,
        xTitle:2500,
        yTitle:950,
        referenceFill:"#000000",
        referenceFillY:"#000000",
        axisLineColour:"#3a5361",
        yValue:["Total"],
        rounding:true,
        barTitle:"Total amount (in thousands)",
        decimalPlaces: 0
    }

    barCharts.push(new BarChart(barChartHorizontal))
    barCharts.push(new BarChartRegular(barChartRegular))
    barCharts.push(new BarChartRegular(barChartRegularB))
    barCharts.push(new BarChartLine(barChartLine))
    barCharts.push(new BarChartStacked(barChartStacked))
    barCharts.push(new BarChartScatter(barChartScatter))
}

function draw() {

    background(240);
    barCharts.forEach(bar => bar.render())
 

}

