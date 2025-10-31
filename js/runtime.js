var now = new Date;

function createtime() {
    now.setTime(now.getTime() + 1000);
    
    // 日期格式化 - 显示今天是几几年几月几日
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 月份从0开始，需+1
    var day = now.getDate();
    // 补零处理
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    var todayStr = `${year}年${month}月${day}日`;
    
    // 计算洛天依出道天数（2012年7月12日出道）
    var luoTianyiDebute = new Date(2012, 6, 12); // 月份参数为0-11，7月对应6
    var luoTianyiDays = Math.floor((now - luoTianyiDebute) / (1000 * 60 * 60 * 24));
    
    // 计算初音未来出道天数（2007年8月31日出道）
    var hatsuneMikuDebute = new Date(2007, 7, 31); // 8月对应7
    var hatsuneMikuDays = Math.floor((now - hatsuneMikuDebute) / (1000 * 60 * 60 * 24));
    
    // 原有逻辑保持不变
    var e = new Date("06/17/2025 16:43:27"),
        t = Math.trunc(23400000000 + (now - e) / 1000 * 17),
        a = (t / 1496000000).toFixed(6),
        o = new Date("06/17/2025 16:43:27"),
        n = (now - o) / 1000 / 60 / 60 / 24,
        r = Math.floor(n),
        i = (now - o) / 1000 / 60 / 60 - 24 * r,
        s = Math.floor(i);
    
    if (1 == String(s).length) {
        s = "0" + s;
    }
    
    var d = (now - o) / 1000 / 60 - 1440 * r - 60 * s,
        l = Math.floor(d);
    
    if (1 == String(l).length) {
        l = "0" + l;
    }
    
    var g = (now - o) / 1000 - 86400 * r - 3600 * s - 60 * l,
        b = Math.round(g);
    
    if (1 == String(b).length) {
        b = "0" + b;
    }
    
    // 拼接新功能内容到HTML
    let c = "";
    c = s < 18 && s >= 9 
        ? `<img class='boardsign' src='https://img.shields.io/badge/gyの屋-营业中-6adea8?style=social&logo=cakephp' title='什么时候能够实现财富自由呀~'><br> 
           <div style="font-size:13px;font-weight:bold">
               本站运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i><br>
               今天是 ${todayStr}<br>
               洛天依出道的第 ${luoTianyiDays} 天<br>
               初音未来出道的第 ${hatsuneMikuDays} 天<br>
           </div>`
        : `<img class='boardsign' src='https://img.shields.io/badge/gyの屋-打烊了-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心地玩耍~'><br> 
           <div style="font-size:13px;font-weight:bold">
               本站运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i><br>
               今天是 ${todayStr}<br>
               洛天依出道的第 ${luoTianyiDays} 天<br>
               初音未来出道的第 ${hatsuneMikuDays} 天<br>
           </div>`;
    
    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = c;
    }
}

setInterval(() => {
    createtime();
}, 1000);