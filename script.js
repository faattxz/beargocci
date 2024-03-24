let isHeartShown = false; 

function startGame() {
    const container = document.getElementById('container');
    container.innerHTML = `
        <h1 class="title">BEAR-A-GOCCI</h1>
        <div class="icons">
            <img src="img/regen.png" class="icon" onclick="startRain()" alt="Rain Icon">
            <img src="img/hartje.png" class="icon" onclick="showHearts()" alt="Heart Icon">
            <img src="img/maantje.png" class="icon" onclick="closeEyes()" alt="Moon Icon">
        </div>
        <img src="img/beertje.png" class="bear" id="bear" alt="Bear Image">
    `;
}

function startRain() {
    const bear = document.getElementById('bear');
    if (!isHeartShown) {
    bear.src = "img/regenbeertje.png";
    isHeartShown = true;
    } else {
    bear.src = "img/beertje.png"; 
    isHeartShown = false;
    }
}

function showHearts() {
    const bear = document.getElementById('bear');
    if (!isHeartShown) {
        bear.src = "img/liefdebeertje.png";
        isHeartShown = true;
    } else {
        bear.src = "img/beertje.png"; 
        isHeartShown = false;
    }
}

function closeEyes() {
    const bear = document.getElementById('bear');
    if (!isHeartShown) {
        bear.src = "img/slaapbeertje.png";
        isHeartShown = true;
    } else {
        bear.src = "img/beertje.png"; 
        isHeartShown = false;
    }
}