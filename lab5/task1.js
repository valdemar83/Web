 class human {
  constructor(name, surname, sex, birthday) {
    this.name = name;
    this.surname = surname;
    this.sex = sex;
    this.birthday = birthday;
  }
  translation(info) {
    var info = "" + info;
    info = info.toUpperCase();
    var vowels = "EUIOA",
      consonant = "QWRTYPSDFGHJKLZXCVBNM",
      pers_code = "",
      consonant = "",
      vowels = "";

    for (let i = 0; i < info.length; i++) {
      if (consonant.indexOf(info[i]) != -1) {
        consonant += info[i];
      } else if (vowels.indexOf(info[i]) != -1) {
        vowels += info[i];
      }
    }

    if (info.length >= 3) {
      if (consonant.length > 3) {
        pers_code = consonant[0] + consonant[2] + consonant[3];
      } else if (consonant.length == 3) {
        pers_code = consonant;
      } else {
        pers_code = consonant + vowels;
        pers_code = pers_code.substring(0, 3);
      }
    } else {
      pers_code = info + "___";
      pers_code = pers_code.substring(0, 3);
    }
    return pers_code;
  }

  get code() {
    let birth_day = this.birthday.split("/")[0],
      birth_month = this.birthday.split("/")[1],
      birth_year = this.birthday.split("/")[2];
    const months = {"1": "A","2": "B","3": "C","4": "D","5": "E",
	"6": "H","7": "L","8": "M","9": "P","10": "R","11": "S","12": "T"};
    let day = "";
    if (this.sex == "M") {
      if (birth_day < 10) {
        day = "0" + birth_day;
      } else {
        day = birth_day;
      }
    } else {
      day = 40 + Number(birth_day);
    }

    let pers_code =
      this.translation(this.surname) +
      this.translation(this.name) +
      birth_year[2] +
      birth_year[3] +
      months[birth_month] +
      day;

    return pers_code;
  }
}

function start() {
  var Matt = new human("Matt", "Edabit", "M", "1/1/1900"),
    Helen = new human("Helen", "Yu", "F", "1/12/1950");
  console.log(Matt.code);
  console.log(Helen.code);
}
start();