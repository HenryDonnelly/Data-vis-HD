class BarChartStacked {
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
        this.textSize = obj.textSize;
        this.yValues = obj.yValues;
        this.totalValue = obj.totalValue;
        this.barTitle= obj.barTitle;
        this.maxValue = max(this.data.map(d => d[this.totalValue]));
        this.scale = this.chartHeight / this.maxValue;
        this.rounding = obj.rounding;
        this.avgLine=obj.avgLine;
        this.avgLineColour=obj.avgLineColour;
        this.decimalPlaces = obj.decimalPlaces;
        

    }
   
    // rounding for scale and numtick values
    render() {
        push()
        textAlign(CENTER,CENTER);
        textFont(fontLight);
        textSize(this.textSize);
        text(this.barTitle,this.xTitle,this.yTitle);
        pop();

        // if rounding true, makes numtick = the nearest full value thats divisible by an even amount

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
       

        // chart location
        push();
        translate(this.xPos, this.yPos);
        stroke(this.axisLineColour)

        push();
        strokeWeight(this.axisThickness);
        line(0, 0, 0, -this.chartHeight);
        line(0, 0, this.chartWidth, 0);
        //numticks
        for (let i = 0; i <= this.numTicks; i++) {
            push()
            translate(0, i * (-this.chartHeight / this.numTicks));
            line(0, 0, -5, 0)
            pop();
        }
        //numtick values (barchart y values)
        for (let i = 0; i <= this.numTicks; i++) {
            push()
            noStroke();

            fill(this.referenceFillY);
            textAlign(RIGHT, CENTER);
            translate(0, i * (-this.chartHeight / this.numTicks))
            let value = (this.maxValue / this.numTicks) * i;
            textFont(fontBold);
            text(value.toFixed(this.decimalPlaces), -15, 0);
            pop();
        }


        pop();

        let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1)
        let total=0;

        for(let i=0;i<cleanData[i].Total;i++){
            total+=+cleanData[i].Total;
        };
        // console.log(total)
        let avgLine=total/this.data.length;
        // console.log(avgLine)
        
       

        push();
        //bars
        translate(gap, 0);
        for (let i = 0; i < this.data.length; i++) {
            push();
            // loop within first bar loop to create one thats translated above
            for(let j=0;j<this.yValues.length;j++){
                let barHeight=-this.data[i][this.yValues[j]] * this.scale
                fill(colours[j%colours.length])
                rect(0,0,this.barWidth,barHeight);
                translate(0,barHeight)
          
            }
            pop();
            

            
            
            //bar chart x values
            push();

            let referenceNames = this.data.map(d => d[this.referenceName])
            fill(this.referenceFill);
            noStroke();


            textAlign(LEFT, CENTER);
            textFont(fontBold);
            textSize(10);
            translate(this.barWidth / 2, 10)
            rotate(this.rotation);
            text(referenceNames[i], 0, 0);
            pop();

            translate(gap + this.barWidth, 0)


        }
        pop();
        if (this.avgLine){
        stroke(this.avgLineColour);
        line(0,-avgLine*this.scale,this.chartWidth,-avgLine*this.scale);
        }
        pop();

    }
    
    
}
