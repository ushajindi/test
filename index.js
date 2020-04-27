
const test=(value)=>{
    const areaCircle = (radius)=>{
        let circle = {
            square : ()=> {
                return Math.PI * Math.pow(radius, 2)
            },
            length : () => {
                return Math.PI * 2 * radius;
            }
        }
        return [circle.square(),circle.length()];
    }
   const areaTriangle=(a,b,c) => {
       const p = (a+b+c)/2;
        if (a===b && c===b){
            return Math.sqrt(p*(p-a)*(p-b)*(p-c)) + " Прямоуголный триуголник"
        }
        return Math.sqrt(p*(p-a)*(p-b)*(p-c))
    }
    if (value.length===1){
        return areaCircle(value[0])
    }
    if (value.length===3){
        return areaTriangle(value[0],value[1],value[2])
    }

    return  console.log("Нет решений для данной задачи")
}
let tri=[5,5,5]
let tri2=[4,5,5]
let rdCrug=[10]
let also=[10,2]
 console.log(test(tri2))


// Я не знаю язык запросов SQL