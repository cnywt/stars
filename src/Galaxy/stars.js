class PointStars {
        constructor(){
        }
        initPoints(){
          let pa=[];
          for(let i=0;i<starNums;i++){
             let x=(Math.random()-0.5)*showArea;
             let y=(Math.random()-0.5)*showArea;
             let z=(Math.random()-0.5)*showArea;
             pa.push(x,y,x);
          }
          
        }
} 
