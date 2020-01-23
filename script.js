$(function() {
	let rico = $('#rico');
	rico.x = 0;
	rico.y = 0;
	rico.move = 0;

	//キーボードのオブジェクトを作成
	let key = new Object();
	key.up = false;
	key.down = false;
	key.right = false;
	key.left = false;
	
	let push_key = '';

	//メインループ
	function main() {
		//キーボードが押された時、keydownfunc関数（かんすう）を呼び出す
		$(document).on('keydown', keydownfunc);
		//addEventListener("keydown", keydownfunc, false);
		//キーボードが放（はな）された時、keyupfunc関数（かんすう）を呼び出す
		$(document).on('keyup', keyupfunc);
		//addEventListener("keyup", keyupfunc, false);
	
		if(rico.move === 0) {
			if(key.left === true) {
				rico.move = 32;
				push_key = 'left';
			}
			if(key.up === true) {
				rico.move = 32;
				push_key = 'up';
			}
			if(key.right === true) {
				rico.move = 32;
				push_key = 'right';
			}
			if(key.down === true) {
				rico.move = 32;
				push_key = 'down';
			}
		}
		
		//方向キーが押されている場合（ばあい）は、りこちゃんが移動する
		if(rico.move > 0) {
			rico.move -= 8;
			if (push_key === 'left') rico.x -= 8;
			if (push_key === 'up') rico.y -= 8;
			if (push_key === 'right') rico.x += 8;
			if (push_key === 'down') rico.y += 8;
		}
		console.log("左"+push_key+"上"+push_key+"右"+push_key+"下"+push_key);
		//りこちゃんの位置（いち）を決める
		rico.css("top", rico.y);
		rico.css("left", rico.x);
	
		//main関数（かんすう）、つまり自分自身の関数を呼び出すことでループさせる。
		setTimeout(main,50);
	}
	main();
	
	//キーボードが押されたときに呼び出される関数（かんすう）
	function keydownfunc( event ) {
		let key_code = event.keyCode;
		if( key_code === 37 ) key.left = true;
		if( key_code === 38 ) key.up = true;
		if( key_code === 39 ) key.right = true;
		if( key_code === 40 ) key.down = true;
	}
	
	//キーボードが放（はな）されたときに呼び出される関数
	function keyupfunc( event ) {
		let key_code = event.keyCode;
		if( key_code === 37 ) key.left = false;
		if( key_code === 38 ) key.up = false;
		if( key_code === 39 ) key.right = false;
		if( key_code === 40 ) key.down = false;
	}
});
//りこちゃんのオブジェクトを作成
