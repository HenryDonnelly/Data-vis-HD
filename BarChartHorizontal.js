class BarChart {
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
        this.yValueF = obj.yValueF;
        this.barTitle= obj.barTitle;
        this.textSize=obj.textSize;
        this.maxValue = max(this.data.map(d => d[this.yValue]));
        this.scale = this.chartHeight / this.maxValue;
        this.rounding = obj.rounding;
        this.decimalPlaces = obj.decimalPlaces;

    }
    // rounding for scale and numtick values
    render(){
        push();
        textAlign(CENTER,CENTER);
        textFont(fontLight);
        textSize(this.textSize)
        text(this.barTitle,this.xTitle,this.yTitle);
        pop();
        if (this.rounding) {
            for (let i = 0; i < 1000; i++) {
                if (this.maxValue % this.numTicks == 0) {
                    break;
                } else {
                    this.maxValue = this.maxValue + 1;
                }
            }
            this.scale = this.chartHeight / this.maxValue;
        }
        //chart
        // rotate(90)
        // translate(100,-1000)
        push();
        translate(this.xPos, this.yPos);
        stroke(this.axisLineColour)

        push();
        strokeWeight(this.axisThickness);
        line(0, 0, 0, this.chartHeight);
        line(0, 0, this.chartWidth, 0);
        //numticks
        for (let i = 0; i <= this.numTicks; i++) {
            push()
            translate(-i * (-this.chartWidth / this.numTicks), 0);
            line(0, 0, 0, -5)
            pop();
        }
        //numtick values (barchart y values)
        for (let i = 0; i <= this.numTicks; i++) {
            push()
            noStroke();
            fill(this.referenceFillY);
            textAlign(CENTER, CENTER);
            translate(-i * (-this.chartWidth / this.numTicks), -0)
            let value = (this.maxValue / this.numTicks) * i;
            textFont(fontBold);
            text(value.toFixed(this.decimalPlaces),0, -15);
            pop();
        }


        pop();

        let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1)
       
        push();
        //bars
        translate(0, gap);
        for (let i = 0; i < this.data.length; i++) {
            let barHeight=-this.data[i][this.yValue] * this.scale
             fill(this.barFill)
            
            rect(0, 0, -barHeight, this.barWidth);

            
            //bar chart x values
            push();

            let referenceNames = this.data.map(d => d[this.referenceName])
            fill(this.referenceFill);
            noStroke();


            textAlign(LEFT, TOP);
            textFont(fontBold);
            textSize(0);
            translate(this.barWidth / 2, 10)
            rotate(this.rotation);
            text(referenceNames[i], -60, 0);
            pop();

            translate(0, gap + this.barWidth)


        }
        pop();


        pop();
    }
}

