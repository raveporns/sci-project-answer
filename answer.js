function checkAnswer() {
    let answerInput1 = document.getElementById('answer1');
    let answerInput2 = document.getElementById('answer2');
    let answerInput3 = document.getElementById('answer3');
    let answerInput4 = document.getElementById('answer4');

    let answer1 = answerInput1.value.trim().toLowerCase();
    let answer2 = answerInput2.value.trim().toLowerCase();
    let answer3 = answerInput3.value.trim().toLowerCase();
    let answer4 = answerInput4.value.trim().toLowerCase();

    let modalBody = document.querySelector('.modal-body');

    // คำตอบที่ถูกต้องทั้งหมด
    let correctAnswers = ["universe", "everything", "answer", "ultimate"];

    // นำคำตอบทั้งหมดใส่ลงใน Set เพื่อลบคำตอบที่ซ้ำกัน
    let userAnswers = new Set([answer1, answer2, answer3, answer4]);

    // ตรวจสอบจำนวนคำตอบที่ถูกต้องเพียงครั้งเดียว
    let count = 0;
    userAnswers.forEach(answer => {
        if (correctAnswers.includes(answer)) {
            count++;
        }
    });

    // แสดงผลตามจำนวนที่ถูกต้อง
    if (count == 2) {
        modalBody.innerHTML = "ยินดีด้วยรหัสลับของคุณถูกต้อง 2 คำ รหัสเปิดประตูที่คุณได้รับคือ XX รหัสยังไม่สมบูรณ์ โปรดลองใหม่อีกครั้ง";
    } else if (count == 3) {
        modalBody.innerHTML = "ยินดีด้วยรหัสลับของคุณถูกต้อง 3 คำ รหัสเปิดประตูที่คุณได้รับคือ X2 รหัสยังไม่สมบูรณ์ โปรดลองใหม่อีกครั้ง";
    } else if (count == 4) {
        modalBody.innerHTML = "ยินดีด้วยรหัสลับของคุณถูกต้องทั้งหมด รหัสเปิดประตูที่คุณได้รับคือ 42";
    } else if (count == 1) {
        modalBody.innerHTML = "ขอแสดงความเสียใจด้วย รหัสลับของคุณถูกต้องเพียง 1 คำเท่านั้น โปรดลองใหม่อีกครั้ง";
    }
    else {
        modalBody.innerHTML = "ขอแสดงความเสียใจด้วยรหัสลับของคุณไม่ถูกต้องเลย";
    }

    // แสดง Modal
    const myModal = new bootstrap.Modal(document.getElementById('checkAnswer'));
    myModal.show();

    // ล้างข้อมูลในช่องกรอกหลังจากตรวจสอบ
    answerInput1.value = '';
    answerInput2.value = '';
    answerInput3.value = '';
    answerInput4.value = '';

    // เพิ่มการฟังเหตุการณ์เมื่อกดปุ่ม Enter เพื่อปิด Modal
    document.getElementById('checkAnswer').addEventListener('shown.bs.modal', function () {
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                myModal.hide();
            }
        }, { once: true });
    });

    console.log(count);
}

// ฟังก์ชันที่ทำให้ฟังก์ชันตรวจสอบรหัสทำงานเมื่อกดปุ่มตรวจสอบรหัส
document.getElementById('check-btn').addEventListener('click', function () {
    checkAnswer();
});

// เพิ่มการฟังเหตุการณ์สำหรับช่องกรอกคำตอบแต่ละช่องให้ทำงานเมื่อกดปุ่ม Enter
document.querySelectorAll('#answer1, #answer2, #answer3, #answer4').forEach(input => {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
});

document.getElementById('checkAnswer').addEventListener('hidden.bs.modal', function () {
    location.reload();
});
