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

    let correctAnswers = ["universe", "everything", "answer", "ultimate"];

    let userAnswers = new Set([answer1, answer2, answer3, answer4]);

    let count = 0;
    userAnswers.forEach(answer => {
        if (correctAnswers.includes(answer)) {
            count++;
        }
    });

    if (count == 2) {
        modalBody.innerHTML = "คุณมาถูกทางแล้วแต่รหัสยังไม่สมบูรณ์ รหัสถูกต้องเพียง 2 ใน 4 (คำใบ้รหัสเปิดประตูที่คุณได้รับมี 2 ตำแหน่ง) โปรดลองใหม่อีกครั้ง";
    } else if (count == 3) {
        modalBody.innerHTML = "คุณมาถูกทางแล้วแต่รหัสยังไม่สมบูรณ์ รหัสถูกต้องเพียง 3 ใน 4 (คำใบ้รหัสเปิดประตูที่คุณได้รับมี 2 ตำแหน่งและตำแหน่งสุดท้ายคือเลข 2) โปรดลองใหม่อีกครั้ง";
    } else if (count == 4) {
        modalBody.innerHTML = "ยินดีด้วยรหัสลับของคุณถูกต้องทั้งหมด รหัสเปิดประตูคือ 42";
        triggerFireworkEffect()
    } else if (count == 1) {
        modalBody.innerHTML = "ขอแสดงความเสียใจด้วย รหัสลับของคุณถูกต้องเพียง 1 คำเท่านั้น โปรดลองใหม่อีกครั้ง";
    }
    else {
        modalBody.innerHTML = "ขอแสดงความเสียใจด้วยรหัสลับของคุณไม่ถูกต้องเลย";
    }

    const myModal = new bootstrap.Modal(document.getElementById('checkAnswer'));
    myModal.show();

    answerInput1.value = '';
    answerInput2.value = '';
    answerInput3.value = '';
    answerInput4.value = '';

    document.getElementById('checkAnswer').addEventListener('shown.bs.modal', function () {
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                myModal.hide();
            }
        }, { once: true });
    });

    console.log(count);
}

document.getElementById('check-btn').addEventListener('click', function () {
    checkAnswer();
});

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