// get the lines container to dispaly the data in
const lines = document.getElementById("lines")

// save the currentSpotrent spot index here
let currentSpot = 0
let log = console.log
// the data to show
let script = [{
    name: "Monzer Omer: ",
    primaryColor: "#003274",
    text: "سلام الله عليكم <br/> مساء الخير عليك",
    audio: {
        available: false,
        path: ""
    }
},{
    name: "Momen Daoud: ",
    primaryColor: "#2b0070",
    text: "وعليكم السلام والرحمه  <br/> مساء النور",
    audio: {
        available: true,
        path: "./p1.wav"
    }
},{
    name: "Monzer Omer: ",
    primaryColor: "#003274",
    text: "طبعا أنا كان رسلت ليك التصميم عشان تقدمو لينا ملاحظاتكم عليه <br/> فاا اها ايه رايكم والملاحظات العليه",
    audio: {
        available: false,
        path: ""
    }
}, {
    name: "Momen Daoud: ",
    primaryColor: "#2b0070",
    text: "طيب صراحة التصميم عليهو ملاحظات وزي ما إنت عارف نحن مستعجلين فحنديكم الملاحظات وعدلو عليها في التنفيذ مباشرة بدل تعرضو علينا التصميم تاني <br/> اما بالنسبة للملاحظات : <br/> <br/> أولا: حته مكان التوصيل وطريقة الدفع خلوها تجي في نافذة منبثقة احسن وبعد يأكد وروه إنه الطلب إتاكد وحيوصلو بعد كذا من الزمن <br/> <br/> ثانيا: حته تقييم المنتج خلو تحتها زر للمستخدم الحصل إشترا من المنتج عشان يقيمو (وايضا لما يشتريه يوصلو ايميل يقيمو في حال كانت اول مره يشتريه) واكيد طبعا مع قابلية تعديل التقييم <br/> <br/> ثالثا: الشعار بتاع بام فود فوق خلوه ابيض احسن. <br/> <br/> فا ده بالنسبة لي المهم حاليا ولازم يتعدل ولكن لقدام ان شاء الله لازم كل التصميم يتعدل ",
    audio: {
        available: true,
        path: "./p2.wav"
    }
},{
    name: "Monzer Omer: ",
    primaryColor: "#003274",
    text: "طيب كويس جدا <br/> بسيطة وبإذن الله لو لاحظنا لي شي غلط برضو بنصلحو <br/> طيب خلينا نمر مرور عام كده على التصميم الحالي يمكن نطلع بي حاجة تانيه نعدلها",
    audio: {
        available: false,
        path: ""
    }
}, {
    name: "Momen Daoud: ",
    primaryColor: "#2b0070",
    text: "جداً",
    audio: {
        available: true,
        path: "./p3.wav"
    }
},{
    name: "Monzer Omer: ",
    primaryColor: "#003274",
    text: "طيب نبدأ بالصفحة الاولى",
    audio: {
        available: false,
        path: ""
    }
}, {
    name: "Momen Daoud: ",
    primaryColor: "#2b0070",
    text: "والله المرور كويس على قولك <br/> وطوالي إتذكرت لي حاجة <br/> الزر حق ال cart في الصفحة الرئيسية ده انا افضل انو يكون في باقي <br/> الصفحات ايضا عدى البروفايل",
    audio: {
        available: true,
        path: "./p4.wav"
    }
},{
    name: "Monzer Omer: ",
    primaryColor: "#003274",
    text: "منطق والله .. دونت",
    audio: {
        available: false,
        path: ""
    }
}, {
    name: "Momen Daoud: ",
    primaryColor: "#2b0070",
    text: "حاجة تانية برضو <br/> الكتابة بتاعت إطلب الآن دي خلوها زر يحول المستخدم لي القائمة <br/> اما صفحة المنتج لو اضفتو فيها حقل اضافة كمية و زر اضافة للعربة حتكون حاجة ممتازة لي تجربة المستخدم <br/> وأخيرا افضل إنو يكون في صفحة مخصصة فقط لعرض التقييمات <br/> وبي كده الباقي كلو معاي 100%",
    audio: {
        available: true,
        path: "./p5.wav"
    }
},{
    name: "Monzer Omer: ",
    primaryColor: "#003274",
    text: "اوكي ممتاز طيب",
    audio: {
        available: false,
        path: ""
    }
}, {
    name: "Momen Daoud: ",
    primaryColor: "#2b0070",
    text: "إذا حاليا إتفاقنا إسبوعين فا هل بتقدرو تخلصو لينا المشروع فيها؟",
    audio: {
        available: true,
        path: "./p6.wav"
    }
},{
    name: "Monzer Omer: ",
    primaryColor: "#003274",
    text: "ايوه ان شاء الله عندنا فريق كامل جاهز حيبدأ مباشرة من بعد الإجتماع",
    audio: {
        available: false,
        path: ""
    }
}, {
    name: "Momen Daoud: ",
    primaryColor: "#2b0070",
    text: "ممتاز جداً طيب حنكون بإنتظاركم وحنطلق المشروع مباشرة إن شاء الله",
    audio: {
        available: true,
        path: "./p7.wav"
    }
}]

// define the audio manager
let audio = new Audio()

/*
    uncomment the next line to set the audio source path
*/
// audio.src = script[index].path

/*
    uncomment the next line to set the play the audio
*/
// audio.play()

/*
    uncomment the next line to pause the audio
*/
// audio.pause()

/*
    the next loop is used to display the data in the screen by basiclly add more text to the container inner html
*/
for (let index = 0; index < script.length; index++) {
    lines.innerHTML += `<div class="line" id="id${index + 1}" dir="rtl">
<h5 class="name" style="color: ${script[index].primaryColor};">${script[index].name}</h5>
<p class="text">${script[index].text}</p>
</div>`
}

// get all the elements with the calls line
let scriptLines = document.getElementsByClassName("line")

let selectedElement = null
let msgBox = document.getElementById("info")
let msg = document.getElementById("msg")


function info(message) {
    msgBox.style.display = "flex"
    msg.innerText = `Error Message: ${message}`

    setTimeout(() => {
        msgBox.style.display = "none"
    }, 1000)
}

function changeBorderWidthTo(borderWidth, elementcurrentSpot, logging) {
    if (logging) {
        log(`changing element border with spot number ${elementcurrentSpot} to ${borderWidth}`)
    }

    selectedElement = document.getElementById(`id${elementcurrentSpot}`)
    selectedElement.style.borderWidth = borderWidth

    return
}

/*
    loop throught the items with a custom function
*/
function selectNextElement() {
    audio.pause()

    if (currentSpot <= script.length - 1) {
        currentSpot += 1
    }

    log(`current spot is: ${currentSpot}`)
    if (currentSpot > script.length) {
        info("no next element")
    }
    if (currentSpot > 1) {
        changeBorderWidthTo("0px", currentSpot - 1, false)
    }

    if (currentSpot <= script.length) {
        changeBorderWidthTo("3px", currentSpot, false)
        if (script[currentSpot - 1].audio.available) {
            audio.pause()

            audio.src = script[currentSpot - 1].audio.path
            audio.play()
        }

    }
    if (currentSpot == script.length) {
        info("no more lines")
    }

}

function selectPreviusElement() {
    audio.pause()

    if (currentSpot == 0) {
        info("nothing selected")
        return
    }

    if (currentSpot >= 2) {
        currentSpot -= 1
        changeBorderWidthTo("0px", currentSpot + 1, false)
    }

    log(`current spot is: ${currentSpot}`)
    if (currentSpot == 1) {
        info("no previos element")
    }

    changeBorderWidthTo("3px", currentSpot, false)
    if (script[currentSpot - 1].audio.available) {
        audio.pause()

        audio.src = script[currentSpot - 1].audio.path
        audio.play()
    }

}

addEventListener("keydown", (Button) => {
    console.log(Button.key)
    // "ArrowUp" "ArrowDown"
    if (Button.key == "w") {
        selectPreviusElement()
    }

    if (Button.key == "s")
        selectNextElement()
})