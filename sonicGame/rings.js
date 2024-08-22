class Ring{
 
	constructor(img, x, y, ringFrameX, ringFrameY, ringFrameH, ringFrameW){
		this.ringImg=img;
		this.ringX=x;
		this.ringY=y;

		this.ringFrameX=ringFrameX;
        this.ringFrameY=ringFrameY;
        this.ringFrameH=ringFrameH;
        this.ringFrameW=ringFrameW;

        this.ringLeft=x+2;
        this.ringRight=x+ringFrameW-2;
        this.ringTop=y+2;
        this.ringBottom=y+ringFrameH-2;
	}
    getRingLeft(){
        return this.ringLeft;
    }
    getRingRight(){
        return this.ringRight;
    }
    getRingTop(){
        return this.ringTop;
    }
    getRingBottom(){
        return this.ringBottom;
    }
    addRingY(num){
        this.ringTop+=num;
        this.ringBottom+=num;
    }
    moveDown(num){
        this.ringY+=num;
    }
    getFrameX(){
        return this.ringFrameX;
    }
    getFrameH(){
        return this.ringFrameH;
    }
    getFrameW(){
        return this.ringFrameW;
    }
    addOneFrameX(){
        this.ringFrameX+=1;
    }
    setZeroFrameX(){
        this.ringFrameX=0;
    }
    getRingX(){
        return this.ringX;
    }
    getRingY(){
        return this.ringY;
    }
    setRingY(num){
        this.ringY=num;
    }

    draw(ctx){
	ctx.beginPath();
		ctx.drawImage(this.ringImg, 
            this.ringFrameX*this.ringFrameW, 
            this.ringFrameY*this.ringFrameH, 
            this.ringFrameW, 
            this.ringFrameH, 
            this.ringX, 
            this.ringY, 
            this.ringFrameW, 
            this.ringFrameH);
	ctx.closePath();
    }	
}
