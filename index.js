let time = 0
let double = 4
let master = 0

const answer = 'place'
let keyArray = []

// 행에 글자
$('body').on('keydown', function(e) {
    let keydown = e.key
    let nextNum = 0

    for(let i = keyArray.length; i < 30; i++) {
        if(time == i && /[a-zA-Z]/.test(keydown) && keydown.length == 1) {
            $(`.board-box[data-id='${i}']`).html(e.key);
            keyArray.push(keydown)
            time++
            break
        }
        
        if(keyArray.length == 5) {
            break
        }
    }



    if(e.key=='Enter' && keyArray.length == 5) {
        // console.log(keyArray)
        // console.log(time)

        for(let a = 0; a < 6; a++) {
            if(master == a) {
                for(let i = 0; i < 5; i++) {
                    if(answer[i] == keyArray[i]) {
                        $(`.board-box[data-id="${i + (5 * master)}"]`).css('backgroundColor', 'orange');
                        $(`.board-box[data-id="${i + (5 * master)}"]`).css('color', 'white');
                    } else if(answer.includes(keyArray[i])) {
                        $(`.board-box[data-id="${i + (5 * master)}"]`).css('backgroundColor', 'yellowgreen');
                        $(`.board-box[data-id="${i + (5 * master)}"]`).css('color', 'white')
            
                    } else {
                        $(`.board-box[data-id="${i + (5 * master)}"]`).css('backgroundColor', 'gray');
                        $(`.board-box[data-id="${i + (5 * master)}"]`).css('color', 'white')
                    }
                }

    
            }
        }
        master++
        keyArray = []

    }

    if(keydown == 'Backspace') {
        keyArray.pop();
        // console.log(keyArray);
        for(let i = 0; i < 5; i++) {
            $(`.board-box[data-id='${i}']`).html('');
            $(`.board-box[data-id='${i}']`).html(keyArray[i]);
            time--
        }
        return keyArray

    }
    console.log(keyArray)


})
























// // 엔터 누르면 맞는지 확인하고 색깔 넣어주기
// $("body").on("keyup",function(e){

//     if(e.key=='Enter') {
//         for(let i = 0; i < keyArray.length; i++) {
//             if(answer[i] == keyArray[i]) {
//                 $(`.board-box[data-id="${i}"]`).css('backgroundColor', 'orange');
//                 $(`.board-box[data-id="${i}"]`).css('color', 'white');
//             } else if(answer.includes(keyArray[i])) {
//                 console.log('a')
//                 $(`.board-box[data-id="${i}"]`).css('backgroundColor', 'yellowgreen');
//                 $(`.board-box[data-id="${i}"]`).css('color', 'white')

//             } else {
//                 $(`.board-box[data-id="${i}"]`).css('backgroundColor', 'gray');
//                 $(`.board-box[data-id="${i}"]`).css('color', 'white')
//             }
//         }
    
//     }
// });

