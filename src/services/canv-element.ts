
export class CanvElement {
  name: string;
  height: number;
  width: number;
  x: number;
  y: number;
  angle: number;
  layer: number;
  src?: string;
  backgroundColor: string = "#FFFFFF";
  
  constructor(name: string, height: number, width: number, x: number, y: number, layer: number, backgroundColor: string, src?: string, angle: number = 0,) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.layer = layer;
    this.angle = angle;
    this.src = src;
    this.backgroundColor = backgroundColor;
  }

}