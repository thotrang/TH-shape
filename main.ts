import{Circle} from './circle'
import{Square} from './square'
import{Rectangle} from './rectangle'
import{Shape} from './shape'

let circle= new Circle("indigo",3.5, false);
console.log(circle);

let square = new Square("yellow", 5.8,true);
console.log(square);

let rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);

let shape = new Shape("red", false);
console.log(shape);