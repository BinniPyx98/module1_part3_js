let styles=['Джаз',"Блюз"]
styles.push( "Рок-н-Рол")
styles[Math.floor((styles.length-1)/2)]='Classica'
console.log(styles.shift())
styles.unshift('raggi')
styles.unshift('Rap')