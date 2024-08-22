class Bomb{
    
    constructor(img, x, y, bombFrameX, bombFrameY, bombFrameH, bombFrameW){
		this.bombImg=img;
		this.bombX=x;
		this.bombY=y;

        this.bombFrameX=bombFrameX;
        this.bombFrameY=bombFrameY;
        this.bombFrameH=bombFrameH;
        this.bombFrameW=bombFrameW;

        this.bombLeft=x+5;
        this.bombRight=x+bombFrameW-5;
        this.bombTop=y+5;
        this.bombBottom=y+bombFrameH-5;
	}
    getBombLeft(){
        return this.bombLeft;
    }
    getBombRight(){
        return this.bombRight;
    }
    getBombTop(){
        return this.bombTop;
    }
    getBombBottom(){
        return this.bombBottom;
    }
    addBombY(num){
        this.bombTop+=num;
        this.bombBottom+=num;
    }
    moveDown(num){
        this.bombY+=num;
    }
    getFrameX(){
        return this.bombFrameX;
    }
    getFrameH(){
        return this.bombFrameH;
    }
    getFrameW(){
        return this.bombFrameW;
    }
    addOneFrameX(){
        this.bombFrameX+=1;
    }
    setZeroFrameX(){
        this.bombFrameX=0;
    }
    getBombX(){
        return this.bombX;
    }
    getBombY(){
        return this.bombY;
    }
    draw(ctx){
	ctx.beginPath();
		ctx.drawImage(this.bombImg, 
            this.bombFrameX*this.bombFrameW, 
            this.bombFrameY*this.bombFrameH, 
            this.bombFrameW, 
            this.bombFrameH, 
            this.bombX, 
            this.bombY, 
            this.bombFrameW, 
            this.bombFrameH);
	ctx.closePath();
    }
}
