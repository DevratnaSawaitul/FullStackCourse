function showRules() {
    document.getElementById("show_rules").style.display = "flex";
}

function closeRules() {
    document.getElementById("show_rules").style.display = "none";
}

function userResponse(user_res) {
    document.getElementById("game_start").style.display = "none";
    document.getElementById("game_result").style.display = "flex";

    if (user_res === 'stone') {
        document.getElementById("game_result_user").textContent = "✊";
    } else if (user_res === 'paper') {
        document.getElementById("game_result_user").textContent = "✋";
    } else if (user_res === 'scissor') {
        document.getElementById("game_result_user").textContent = "✌️";
    }

    let arr = ['stone', 'paper', 'scissor'];
    let pc_res = arr[Math.floor(Math.random() * 3)];

    if (pc_res === 'stone') {
        document.getElementById("game_result_pc").textContent = "✊";
    } else if (pc_res === 'paper') {
        document.getElementById("game_result_pc").textContent = "✋";
    } else if (pc_res === 'scissor') {
        document.getElementById("game_result_pc").textContent = "✌️";
    }

    let winner = 0; // 0 is draw, 1 is user, 2 is pc
    if (user_res === 'stone' && pc_res === 'paper') {
        winner = 2
    } else if (pc_res === 'stone' && user_res === 'paper') {
        winner = 1;
    } else if (user_res === 'stone' && pc_res === 'scissor') {
        winner = 1;
    } else if (pc_res === 'stone' && user_res === 'scissor') {
        winner = 2;
    } else if (user_res === 'paper' && pc_res === 'scissor') {
        winner = 2;
    } else if (pc_res === 'paper' && user_res === 'scissor') {
        winner = 1;
    } else if (pc_res === user_res) {
        winner = 0;
    }

    if (winner === 0) {
        document.getElementById("game_result_status").textContent = "Tie";
        document.getElementById("game_result_against").textContent = "Against PC";
    } else if (winner === 1) {
        document.getElementById("game_result_status").textContent = "You Won";
        document.getElementById("game_result_against").textContent = "Against PC";
        // Show the winning GIF
        let winGif = document.getElementById("win_gif");
        winGif.style.display = "block"; // Show the GIF

        // Hide the GIF after 2 seconds
        setTimeout(function () {
            winGif.style.display = "none"; // Hide the GIF
        }, 3000);
        if (localStorage.getItem('user_score') === null) {
            localStorage.setItem('user_score', 1);
            document.getElementById("user_score").textContent = parseInt(localStorage.getItem('user_score'), 10);
        } else {
            let currentScore = parseInt(localStorage.getItem('user_score'), 10);
            currentScore += 1;
            localStorage.setItem('user_score', currentScore);
            document.getElementById("user_score").textContent = parseInt(localStorage.getItem('user_score'), 10);
        }
    } else if (winner === 2) {
        document.getElementById("game_result_status").textContent = "You Loss";
        document.getElementById("game_result_against").textContent = "Against PC";
        if (localStorage.getItem('pc_score') === null) {
            localStorage.setItem('pc_score', 1);
            document.getElementById("pc_score").textContent = parseInt(localStorage.getItem('pc_score'), 10);
        } else {
            let currentScore = parseInt(localStorage.getItem('pc_score'), 10);
            currentScore += 1;
            localStorage.setItem('pc_score', currentScore);
            document.getElementById("pc_score").textContent = parseInt(localStorage.getItem('pc_score'), 10);
        }
    } else {
        document.getElementById("game_result_status").textContent = "Error";
        document.getElementById("game_result_against").textContent = "Error";
    }
}

function playAgain() {
    document.getElementById("game_start").style.display = "flex";
    document.getElementById("game_result").style.display = "none";
}

function clearScore() {
    localStorage.clear();
    document.getElementById("pc_score").textContent = 0;
    document.getElementById("user_score").textContent = 0;
}

window.onload = function () {
    if (localStorage.getItem('pc_score') != null) {
        document.getElementById("pc_score").textContent = parseInt(localStorage.getItem('pc_score'), 10);
    }

    if (localStorage.getItem('user_score') != null) {
        document.getElementById("user_score").textContent = parseInt(localStorage.getItem('user_score'), 10);
    }
};