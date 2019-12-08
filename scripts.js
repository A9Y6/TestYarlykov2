function getBooks(){
	var xhr = new XMLHttpRequest();
  	xhr.open('GET', '/get_book.php', true);
  	console.log(xhr.readyState);
  	console.log(xhr.status);
	xhr.onreadystatechange = function(data){
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200){
			var data = JSON.parse(data.target.responseText);
			data.forEach(function(item){
			console.log(xhr);
			var books = document.getElementById('books'); 
			var create = document.createElement('div'); 
			create.innerHTML += 
			'<div id = "content-body">'+
				'<div class="info">'+
					'<img id="icon-content" src="/img/book.jpg">'+
				'</div>'+
				'<div class="info">'+
					'<div>'+
						'<b class="name-book">'+(item.name)+'</b>'+
					'</div>'+
					'<div id ="content-text">'+
						'<p>'+(item.description)+'</p><br>'+
					'</div>'
				'</div>'
			'</div>';
			books.appendChild(create);
		})

		}

	}
		xhr.send(null);
}

function getInfo(){
	var first_icon = 0;
	var second_icon = 6;
	var third_icon = 17;

	var icons = document.getElementById('icons');
	var create = document.createElement('div');
	create.innerHTML = 
		'<div  class="icon-info">'+
			'<div class="icon-count">'+
				'<img class="img-search"src="/img/stats.png">'+
				'<b class="count-text">'+(first_icon)+'</b>'+
			'</div>'+
			'<div class="icon-count">'+
				'<img class="img-search"src="/img/like.png">'+
				'<b class="count-text">'+(second_icon)+'</b>'+
			'</div>'+
			'<div class="icon-count">'+
				'<img class="img-search"src="/img/box.png">'+
				'<b class="count-text">'+(third_icon)+'</b>'+
			'</div>'+
		'</div>';
	icons.appendChild(create);
}

function getRoute(){
	var url = window.location.href;
	if (url == window.location.href){
		var route = document.getElementById('route');
		var create = document.createElement('div');
		create.innerHTML = 
		'<div class="container route">'+
			'<p>Главная</p>'+
			'<p> --> Статьи <p>'+
		'</div>';
		route.appendChild(create);
	}
}