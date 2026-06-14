import "./Cursor.scss";
import { useEffect,useRef } from "react";

const Cursor=()=>{
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas=canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width =  window.innerWidth;

        let mouse={x : window.innerWidth/2,y : window.innerHeight/2};
        const arr = [];
        const len = 15;
        for(let i=0;i<len;i++){
            arr.push({x:mouse.x,y:mouse.y,vx:0,vy:0,});
        }

        const handleMouse=(e)=>{
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("mousemove",handleMouse);
        window.addEventListener("resize",resize);
        let id;

        function draw(){
            context.beginPath();
            context.moveTo(arr[0].x,arr[0].y);
            for(let i=1;i<arr.length-1;i++){
                const xi = (arr[i].x+arr[i+1].x)/2;
                const yi = (arr[i].y+arr[i+1].y)/2;
                context.quadraticCurveTo(arr[i].x,arr[i].y,xi,yi);
            }
        }
        function animate(){
            context.clearRect(0,0,canvas.width,canvas.height);
            // arr[0].x = mouse.x;
            // arr[0].y = mouse.y;
            arr[0].x += (mouse.x - arr[0].x)*0.4;
            arr[0].y += (mouse.y - arr[0].y)*0.4;

            for(let i=1;i<arr.length;i++){
                const dx = arr[i-1].x - arr[i].x;
                const dy = arr[i-1].y - arr[i].y;

                arr[i].vx += dx*0.3;
                arr[i].vy += dy*0.3;
                arr[i].vx *= 0.35;
                arr[i].vy *= 0.35;

                arr[i].x += arr[i].vx;
                arr[i].y += arr[i].vy;
            }

            for(let i = 0;i<arr.length-1;i++) {
                const progress = 1 - i/arr.length;
                context.beginPath();
                context.moveTo(arr[i].x,arr[i].y);
                context.lineTo(arr[i + 1].x,arr[i + 1].y);

                context.lineCap = "round";
                context.lineWidth = progress*2.5;
                context.strokeStyle =`rgba(255,255,255,${progress})`;
                context.stroke();
            }
            id = requestAnimationFrame(animate);
        }

        animate();
        
        return ()=>{
            cancelAnimationFrame(id);
            window.removeEventListener("mousemove",handleMouse);
            window.removeEventListener("resize",resize);
        };
    },[]);
    return <canvas ref={canvasRef} className="cursor"> </canvas>
};

export default  Cursor;
