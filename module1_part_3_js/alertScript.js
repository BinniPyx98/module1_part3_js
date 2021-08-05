function getSecondsToTomorrow(){
let date=new Date()
    let today=(date.getFullYear(),date.getMonth(),date.getDate())
    return 86400-((date-today)/100)
}