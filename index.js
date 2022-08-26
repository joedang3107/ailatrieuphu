

class Questions {
    constructor(content, answers, trueAnswer, score) {
        this.score = score
        this.content = content
        this.answers = answers
        this.trueAnswer = trueAnswer
    }

    check(answer) {

        let myScore = 0
        if (answer == this.trueAnswer) {
            alert("Xin chúc mừng bạn đã trả lời đúng!")
            myScore += this.score
            document.getElementById("score").innerHTML = myScore;
        }
        else {
            myScore = this.score
            alert(`Bạn trả lời sai rồi. Điểm của bạn là ${myScore}`)
        }
    }

    stop() {
        alert(`Điểm của bạn là ${this.score}`)
    }

    showQuestion() {
        let question = document.getElementById("question")
        question.innerHTML = this.content
    }
    showAswer() {
        let head = document.getElementsByClassName("head")
        console.log(head);
        for (let index = 0; index < this.answers.length; index++) {
            head[index].innerHTML = this.answers[index]
        }
    }
}
let list = []
list.push(new Questions("Câu 1: Mạnh vì…, bạo vì tiền", ["Gạo", "Ngô", "Lúa", "Sắn"], 0, 100))
list.push(new Questions("Câu 2: Biển có nồng độ muối lớn nhất thế giới?", ["Đỏ", "Xanh", "Chết", "Đen"], 2, 300))
list.push(new Questions("Câu 3: Thức ăn nào sau đây thuộc nhóm thức ăn chứa nhiều bột đường", ["Trứng", "Gạo", "Sữa", "Táo"], 1, 500))
list.push(new Questions("Câu 4: Ao… nước đọng", ["Trong", "Đục", "Tù", "Sạch"], 2, 1000))
list.push(new Questions("Câu 5: Ngôi chùa được đúc hoàn toàn bằng đồng tại Việt Nam", ["Chùa Tam Chúc", "Chùa Một Cột", "Chùa Hương", "Chùa Đồng"], 3, 10000))
list.push(new Questions("Câu 6: Không ăn… bỏ cho người", ["Gắp", "Ném", "Vứt", "Gánh"], 0, 70000))
list.push(new Questions("Câu 7: Tên vũ khí của thổ dân Úc có khả năng bay lại về vị trí cũ", ["Cung", "Nỏ", "Kiếm", "Boomerang"], 3, 90000))
list.push(new Questions("Câu 8: Phương tiện nào sau đây ít giống với những cái còn lại?", ["Xe thùng", "Xe Tăng", "Xe bọc thép", "Máy bay"], 3, 100000))
list.push(new Questions("Câu 9: Thành phần chính trong bầu khí quyển của Sao Hỏa là khí…", ["H20", "O2", "SO2", "CO2"], 3, 120000))
list.push(new Questions("Câu 10: Để bảo vệ vỏ tàu biển bằng thép, người ta thường gắn vào vỏ tàu (phần ngâm dưới nước) những tấm kim loại", ["Kẽm", "Đồng", "Bạc", "Chì"], 0, 150000))

console.log(list);

let currentQ = 0;
show()
function show() {
    list[currentQ].showAswer()
    list[currentQ].showQuestion()

}

function checkAnswer(answer) {
    list[currentQ].check(answer)
}

function next() {
    currentQ++;
    show();
}

function stopPlaying() {
    var confirmation = confirm("Bạn có thực sự muốn dừng cuộc chơi?");
    if (confirmation == true) {
        list[currentQ].stop()
        return true;
    }
    else {
        show()
        return false;
    }
}
