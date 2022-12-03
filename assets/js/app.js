// alert("Hello");

//1) Hello there, I'm Vrushali Thombare, 33 years old. I'm from Pune and MEAN Stack Developer by profession.
var person={ 
    fname : "Vrushali",
    lname : "Thombare",
    age : 33,
    nativePlace : "Pune",
    profile : "MEAN Stack Developer",
}
var result = "<h1> 1) Hello there, I'm " + person.fname + " " + person.lname +", " + person.age +
            " years old. I'm from " + person.nativePlace + " and " + person.profile +
            " by profession. </h1>";

console.log(result);
document.write(result);


// 2)Software is a set of computer programs and associated documentation and data. 
// This is in contrast to hardware, from which the system is built and which actually performs the work.
var software = {
     name : "Software",
     info : "computer programs and associated documentation and data",
     type  :  "contrast",
     work : "Work",
}

var result = "<h1> 2) " + software.name + " is a set of " + software.info +". " +
            "This is in " + software.type + " to hardware, from which the system is built and which actually performs the " 
            + software.work + ".</h1>";

console.log(result);
document.write(result);


// 3)Angular is a typescript-based web application framework that supports full-stack development for building all types of web applications. 
// It helps in creating reactive single page application (SPA) and is completely based on the concept of components. Google owns Angular,
//  and its stable version was released on September 14, 2016.
var technology = {
     techName : "Angular",
     development : "full-stack development",
     application  :  "single page application (SPA)",
     year : 2016,
}

var result = "<h1> 3) " + technology.techName + " is a typescript-based web application framework that supports " + technology.development + " for building all types of web applications. It helps in creating reactive " + technology.application +
            " and is completely based on the concept of components. Google owns" + technology.techName + ", and its stable version was released on September 14, " + technology.year + ".</h1>";

console.log(result);
document.write(result);


// 4) CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.
var language = {
     langName1 : "CSS",
     langName2 : "HTML",
}

var result = "<h1> 4) " + language.langName1 + " is the language we use to style an " + language.langName2 + " document. " + language.langName1 + " describes how " + language.langName2 + " elements should be displayed. </h1>";

console.log(result);
document.write(result);

//5)Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist and statesman who served as the 11th President of India from 2002 to 2007. 
var president ={
     fullName : "Avul Pakir Jainulabdeen Abdul Kalam",
     profession1 : "aerospace scientist",
     profession2 : "statesman",
     startYear : 2002,
     endYear : 2007,
}

var result = "<h1> 5) " + president.fullName + " was an Indian " + president.profession1 + " and " + president.profession2 +  " who served as the 11th President of India from " + president.startYear + " to " + president.endYear + ".</h1>";

console.log(result);
document.write(result);

// 6)Independence Day marks the end of British rule in 1947 and the establishment of a free and independent Indian nation.
var independent ={
     day : "Independence Day",
     year : 1947,
     nation : "Indian",
}
var result = "<h1> 6) " + independent.day + " marks the end of British rule in " + independent.year + " and the establishment of a free and independent " + independent.nation + " nation.</h1>";

console.log(result);
document.write(result);

// 7) On 14 November 1987, the 14-year-old Tendulkar was selected to represent Bombay in the Ranji Trophy, India's premier domestic First-class cricket tournament, for the 1987–88 season.
var sachin ={
    day:"14 November 1987",
    age : 14,
    locate : "Bombay",
    year: 1987-88,
}

var result = "<h1> 7) On " + sachin.day + " the " + sachin.age + "-year-old Tendulkar was selected to represent " + sachin.locate + " in the Ranji Trophy, India's premier domestic First-class cricket tournament, for the " + sachin.year + " season.</h1>";

console.log(result);
document.write(result);

//8) Lata Mangeshkar was an Indian playback singer and occasional music composer. 
// She is widely considered to have been one of the greatest and most influential singers in India.
// Her contribution to the Indian music industry in a career spanning eight decades gained her honorific titles such as the "Queen of Melody", "Nightingale of India", and "Voice of the Millennium".
var music = {
     fullName : "Lata Mangeshkar",
     profession1  :  "singer",
     profession2  :  "composer",
     nationality  :  "Indian",
     titles :  '"Queen of Melody", "Nightingale of India", and "Voice of the Millennium"',
}

var result = "<h1> 8) " + music.fullName + " was an " + music.nationality + " playback " + music.profession1 + "  and occasional music " + music.profession2 + ". She is widely considered to have been one of the greatest and most influential singers in India. "
            + music.nationality + " music industry in a career spanning eight decades gained her honorific titles such as the " + music.titles +". </h1>"
// Her contribution to the </h1>";

console.log(result);
document.write(result);


//9)Shivaji, born February 19, 1630, Shivneri, Pune, founder of the Maratha kingdom of India. 
// The kingdom’s security was based on religious toleration and on the functional integration of the Brahmans, Marathas, and Prabhus.
var past = {
     fname : "Shivaji",
     year  :  1630,
     title  :  "the Maratha kingdom of India",
     religion :  'Brahmans, Marathas, and Prabhus',
}

var result = "<h1> 9) " + past.fname + " , born February 19, " + past.year + ", Shivneri, Pune, founder of the " + past.title + ". The kingdom’s security was based on religious toleration and on the functional integration of the " + past.religion +". </h1>"

console.log(result);
document.write(result);

//10)India, officially the Republic of India is a country in South Asia.
//  It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world.
var country = {
    name : "India",
    locate  :  "South Asia",
    demo  :  "democracy",
    }
var result = "<h1> 10) " + country.name + ", officially the Republic of" + country.name + "is a country in " + country.locate + ". It is the seventh-largest country by area, the second-most populous country, and the most " + country.demo + " in the world. </h1>"

console.log(result);
document.write(result);