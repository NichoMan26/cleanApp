export const SERVICES = [
  {latter:'P',name:'päälipesu', nameRu:'поверхностная мойка'},
  {latter:'T',name:'täyspesu', nameRu:'полная мойка'},
  {latter:'K',name:'kevytpesu', nameRu:'средняя мойка'},
  {latter:'Av',name:'auton vient', nameRu:'доставка машины'},
  {latter:'B',name:'bonus', nameRu:'бонус'},
  {latter:'R',name:'renkaat', nameRu:'замена колес'},
  {latter:'Mp',name:'mainoksen poisto', nameRu:'удаление наклеек'},]
  // {latter:'Lq',name:'Liquids', nameRu:'жидкости'},]

export const WASHERS = [
  {name:'Igor',place:'K'},
  {name:'Sergey',place:'V'},
  {name:'Anton',place:'V'},
  {name:'Vasiliy',place:'K'},
  {name:'Jani',place:'V'},
  {name:'Denis',place:'V'},
]
export const MONTHS = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]

// export const SEC = {
// 0: 7, 1: "M", 2: "e", 3: "l", 4: "p", 5: "V", 6: "j", 7: "f", 8: "c", 9: 2,
// A: "N", B: "u", C: "L", D: "T", E: "Y", F: "Q", G: 5, H: "w", I: "r",
// J: "K", K: "t", L: "G", M: "a", N: "g", O: "b", P: "X", Q: 4, R: "s", S: "B",
// T: "k",U: "d",V: "C",W: "P",X: "W",Y: 9,Z: "x",a: 8,b: "i",c: "A",
// d: "I", e: "R", f: "o", g: "E", h: "D", i: "Z", j: "y", k: "F", l: "J", m: "U",
// n: "h", o: "n", p: "v", q: 0, r: "S", s: "O", t: 6, u: "H", v: "z", w: "q",
// x: "m", y: 1, z: 3
// }
export const SEC = {
A: "N", B: "u", C: "L", D: "T", E: "Y", F: "Q", G: "V", H: "w", I: "r",
J: "K", K: "t", L: "G", M: "a", N: "g", O: "b", P: "X", Q: "p", R: "s", S: "B",
T: "k",U: "d",V: "C",W: "P",X: "W",Y: "e",Z: "x",a: "c",b: "i",c: "A",
d: "I", e: "R", f: "o", g: "E", h: "D", i: "Z", j: "y", k: "F", l: "J", m: "U",
n: "h", o: "n", p: "v", q: "f", r: "S", s: "O", t: "j", u: "H", v: "z", w: "q",
x: "m", y: "M", z: "l"
}


export const SERVICES_ALGORITM = {
  P:{
      serv_fi:'päälipesu',
      serv_ru:'поверхностная мойка',
      steps:['Второе','Компот']
    },
  T:{
      serv_fi:'täyspesu',
      serv_ru:'полная мойка',
      steps:['Второе','Компот']
    },
  K:{
      serv_fi:'kevytpesu',
      serv_ru:'средняя мойка',
      steps:['Второе','Компот']
    },
  Av:{
      serv_fi:'auton vient',
      serv_ru:'доставка машины',
      steps:['Перегонка авто в/из магазина.']
    },
  B:{
      serv_fi:'bonus',
      serv_ru:'бонус',
      steps:['За 6 "täyspesu" за один день, мойщик получает бонус (B - bonus).','Нужно добавить как новую машину.',]
    },
  R:{
      serv_fi:'renkaat',
      serv_ru:'замена колес',
      steps:['Поставить авто на ручник.','Ослабить гайки.','Поднять машину домкратом.','Открутить колесо.','Проверить направления колес и высоту профиля, таже проверить наличие другого комплекта болтов/гаек.','Прикрутить колесо','Повторить пунк 3,4,5,6 три раза.','Опустить машину.', 'Затянуть гайки на колесах.','Оставшиеся колеса промаркировать и положить на полки с указанием номера полки в Прилоение.']
    },
  Mp:{
      serv_fi:'mainoksen poisto',
      serv_ru:'удаление наклеек',
      steps:['Удаление виниловых наклеек с поверхности автомобиля не меньше двух квадратных децеметров.','Со стекла удаляется металического лезвием.','С ЛКП удаляется негревом с помощью фена.','Оставшийся клей удалятся "ТАРом".']
    },
  // Liquids:{
  //   serv_fi:'ainet',
  //   serv_ru:'liquids',
  //   steps:['Удаление виниловых наклеек с поверхности автомобиля не меньше двух квадратных децеметров.','Со стекла удаляется металического лезвием.','С ЛКП удаляется негревом с помощью фена.','Оставшийся клей удалятся "ТАРом".']
  // }
}