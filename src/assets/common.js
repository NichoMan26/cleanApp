export const getPrice = (service) => {
  switch (service) {
    case 'P':return 5.5
    case 'T':return 22
    case 'K':return 9.5
    case 'Av':return 7.5
    case 'B':return 40
    case 'R':return 5.75
    case 'Mp':return 11
    default: return 0
  }
}
export const translit = (str) => {
  let latters = {
    а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'zh',з:'z',и:'i',й:'j',
    к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',
    х:'h',ц:'c',ч:'ch',ш:'sh',щ:'sh',ъ:'',ы:'y',ь:'',э:'je',ю:'ju',я:'ya',
    А:'A',Б:'B',В:'V',Г:'G',Д:'D',Е:'E',Ё:'E',Ж:'ZH',З:'Z',И:'I',Й:'J',
    К:'K',Л:'L',М:'M',Н:'N',О:'O',П:'P',Р:'R',С:'S',Т:'T',У:'U',Ф:'F',
    Х:'H',Ц:'C',Ч:'CH',Ш:'SH',Щ:'SH',Ъ:'',Ы:'Y',Ь:'',Э:'JE',Ю:'JU',Я:'YA',
  }
  let newStr = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] in latters){
      newStr += latters[str[i]]
      }
      else {
        newStr += str[i]
      }
    }
  return newStr
}
export const getServiceColor = (service) => {
  let color = 'white'
    switch(service ){
      case 'T':
         color = '#ef2a2a'
         break
      case 'K':
         color = '#ffff53'
         break
      case 'P':
         color = '#69cc69'
         break
      case 'B':
         color = '#7c7cf3'
         break
      case 'R':
         color = 'pink'
         break
      case 'Av':
         color = 'orange'
         break
      case 'F':
         color = 'aqua'
         break
      case 'Mp':
         color = 'grey'
         break
      default:
        color = 'white'   
    }
    return color
}

export const changedName = (n, obj, direction = true) => {
  let res = ''
  if(direction){
    for(let i = 0; i < n.length; i++){
      let w = n[i]
      res += obj[w]
    }
  } else {
    for(let i = 0; i < n.length; i++){
     for(let key in obj){
        if (obj[key] === n[i]){
          res += key
        }
     }
    }
  }
 
  return res
}