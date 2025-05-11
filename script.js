function calculateFullAge(birthYear, birthMonth, birthDay) {
    const now = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (hours < 0) {
        days--;
        hours += 24;
    }
    if (days < 0) {
        months--;
        const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth() - 1, 0).getDate();
        days += prevMonthLastDay;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes
    };
}

function getZodiacSign(month, day) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "الحمل";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "الثور";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "الجوزاء";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "السرطان";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "الأسد";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "العذراء";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "الميزان";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "العقرب";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "القوس";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "الجدي";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "الدلو";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "الحوت";
    }
    return "غير معروف";
}

function getZodiacDescription(sign) {
    switch (sign) {
        case "الحمل":
            return `**برج الحمل (21 مارس - 19 أبريل):** يتميز مواليد برج الحمل بشخصية ديناميكية وطموحة. إنهم قادة بالفطرة، يتمتعون بشجاعة وحماس لا يضاهى. غالبًا ما يكونون مندفعين ومستقلين، ويسعون دائمًا لتحقيق أهدافهم بقوة وإصرار. قد يظهرون أحيانًا بعض العصبية أو الاندفاع في قراراتهم.`;
        case "الثور":
            return `**برج الثور (20 أبريل - 20 مايو):** يعرف مواليد برج الثور بثباتهم وصبرهم. إنهم أشخاص عمليون وموثوقون، ويقدرون الاستقرار والراحة في حياتهم. يتمتعون بحس فني وتقدير للجمال والماديات. قد يكونون عنيدين بعض الشيء ويقاومون التغيير.`;
        case "الجوزاء":
            return `**برج الجوزاء (21 مايو - 20 يونيو):** يتميز مواليد برج الجوزاء بذكائهم الحاد وقدرتهم على التواصل بفعالية. إنهم اجتماعيون وفضوليون، ويحبون تعلم أشياء جديدة باستمرار. قد يظهرون بعض التردد أو التنوع في آرائهم واهتماماتهم.`;
        case "السرطان":
            return `**برج السرطان (21 يونيو - 22 يوليو):** يعرف مواليد برج السرطان بحساسيتهم وعاطفيتهم العميقة. إنهم يهتمون بعائلتهم ومنزلهم بشكل كبير، ويسعون لخلق بيئة دافئة وآمنة. قد يكونون متقلبين المزاج بعض الشيء ويحتاجون إلى الشعور بالأمان.`;
        case "الأسد":
            return `**برج الأسد (23 يوليو - 22 أغسطس):** يتميز مواليد برج الأسد بثقتهم بأنفسهم وكرمهم. إنهم قادة طبيعيون يحبون أن يكونوا مركز الاهتمام. يتمتعون بشخصية جذابة ومبهجة، ولكن قد يظهرون بعض الغرور أو حب السيطرة أحيانًا.`;
        case "العذراء":
            return `**برج العذراء (23 أغسطس - 22 سبتمبر):** يعرف مواليد برج العذراء بدقتهم واهتمامهم بالتفاصيل. إنهم أشخاص عمليون ومنظمون، ويسعون للكمال في كل ما يفعلونه. قد يكونون انتقاديين بعض الشيء ويميلون إلى القلق.`;
        case "الميزان":
            return `**برج الميزان (23 سبتمبر - 22 أكتوبر):** يتميز مواليد برج الميزان بحبهم للعدل والتوازن. إنهم دبلوماسيون واجتماعيون، ويسعون لخلق الانسجام في علاقاتهم. يقدرون الجمال والفنون، ولكن قد يظهرون بعض التردد في اتخاذ القرارات.`;
        case "العقرب":
            return `**برج العقرب (23 أكتوبر - 21 نوفمبر):** يعرف مواليد برج العقرب بشخصيتهم القوية والعاطفية العميقة. إنهم أشخاص غامضون ومخلصون، ولديهم قدرة كبيرة على التركيز والمثابرة. قد يظهرون بعض الغيرة أو الميل إلى السرية.`;
        case "القوس":
            return `**برج القوس (22 نوفمبر - 21 ديسمبر):** يتميز مواليد برج القوس بتفاؤلهم وحبهم للمغامرة. إنهم أشخاص أحرار ومستقلون، ويسعون للمعرفة والتوسع في آفاقهم. قد يكونون متهورين بعض الشيء أو يفتقرون إلى الصبر.`;
        case "الجدي":
            return `**برج الجدي (22 ديسمبر - 19 يناير):** يعرف مواليد برج الجدي بطموحهم ومسؤوليتهم. إنهم أشخاص جادون ومنضبطون، ويسعون لتحقيق أهدافهم بجد واجتهاد. قد يظهرون بعض التشاؤم أو الميل إلى الجدية المفرطة.`;
        case "الدلو":
            return `**برج الدلو (20 يناير - 18 فبراير):** يتميز مواليد برج الدلو باستقلالهم وابتكارهم. إنهم أشخاص تقدميون وإنسانيون، ويسعون للتغيير الإيجابي في العالم. قد يكونون عنيدين في آرائهم أو غير تقليديين.`;
        case "الحوت":
            return `**برج الحوت (19 فبراير - 20 مارس):** يعرف مواليد برج الحوت بتعاطفهم وحساسيتهم. إنهم أشخاص روحانيون وفنيون، ولديهم قدرة كبيرة على فهم مشاعر الآخرين. قد يكونون عرضة للهروب من الواقع أو الشعور بالضياع.`;
        default:
            return "لا يوجد وصف لهذا البرج.";
    }
}

function calculate() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12) {
        alert("يرجى إدخال تاريخ ميلاد صحيح.");
        return;
    }

    const fullAge = calculateFullAge(year, month, day);
    const sign = getZodiacSign(month, day);
    const description = getZodiacDescription(sign);

    document.getElementById("age").textContent = `عمرك هو: ${fullAge.years} سنة, ${fullAge.months} شهر, ${fullAge.days} يوم, ${fullAge.hours} ساعة, ${fullAge.minutes} دقيقة.`;
    document.getElementById("sign").textContent = `برجك الفلكي هو: ${sign}.`;
    document.getElementById("description").innerHTML = `وصف برج ${sign}: <br>${description}`;
}
