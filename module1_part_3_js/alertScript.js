function getSecondsToday(){
let date=new Date()
    let today=(date.getFullYear(),date.getMonth(),date.getDate())
    return (date-today)/100
}