class BarChartPie {
    constructor(obj) {
        this.data = obj.data;
        this.chartWidth = obj.chartWidth;
        this.chartHeight = obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.referenceName = obj.referenceName;
        this.axisThickness = obj.axisThickness;
        this.axisLineColour = obj.axisLineColour;
        this.rotation = obj.rotation;
        this.barWidth = obj.barWidth;
        this.referenceFill = obj.referenceFill;
        this.referenceFillY = obj.referenceFillY;
        this.numTicks = obj.numTicks;
        this.barFill = obj.barFill;
        this.barTitle=obj.barTitle;
        this.xTitle=obj.xTitle;
        this.yTitle=obj.yTitle;
        this.yValue = obj.yValue;
        this.barTitle= obj.barTitle;
        this.descriptionSize=obj.descriptionSize;
        this.descriptionText=obj.descriptionText;
        this.descriptionTextX=obj.descriptionTextX;
        this.descriptionTextY=obj.descriptionTextY;
        this.TitleText=obj.TitleText;
        this.TitleTextX=obj.TitleTextX;
        this.TitleTextY=obj.TitleTextY;
        this.TitleSize=obj.TitleSize;
        this.maxValue = max(this.data.map(d => d[this.yValue]));
        this.scale = this.chartHeight / this.maxValue;
        this.rounding = obj.rounding;
        this.decimalPlaces = obj.decimalPlaces;

    }

    render() {
        push()
        // just sizing for the chart, seeing where it would look at 0,0 origin
        translate(this.xPos, this.yPos);
        stroke(this.axisLineColour);
        strokeWeight(this.axisThickness);
        line(0, 0, 0, -this.chartHeight / 2);
        line(0, 0, 0, this.chartHeight / 2);
        line(0, 0, this.chartWidth / 2, 0);
        line(0, 0, -this.chartWidth / 2, 0);
    

// now the starting arc with draw at 0

        let prevEndAngle = 0;

        for (let i = 0; i < this.data.length; i++) {
            // for the starting angle
            let startAngle = prevEndAngle;
            // gruesome multiplying value to scale it to a full donut
            // end of angle is = the start angle added to the map function (which translates the first values scale to another).
            let endAngle = startAngle + map(this.data[i][this.yValue], 0, this.maxValue, 0, TWO_PI)*5.25;
            fill(coloursPie[i % coloursPie.length]);
            arc(0, 0, this.chartWidth, this.chartHeight, startAngle, endAngle);
            // at the end of this loop it makes current end angle = prev end angle for next loop
            prevEndAngle = endAngle;
        }
        // drawing for the "donut" shape
        fill("#f0f0f0")
        ellipse(0,0,500,500)
        // just title of the donut
        fill("#000000")
        textFont(fontLight);
        noStroke()
        textSize(this.TitleSize)
        text(this.TitleText,this.TitleTextX,this.TitleTextY)
        textSize(this.descriptionSize)
        text(this.descriptionText,this.descriptionTextX,this.descriptionTextY)
        pop()

    }
    
}