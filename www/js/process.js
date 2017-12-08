// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		let content = <div>
		<div align='center'>
						<h1> BALL GAMES </h1>
						<img src='img/th.jpg' width='900px' height='400px' />
					</div>
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<br/>
			<br/>
			<br/>
			<br/>
			<div align='center'>

<p class="buttons-row">
  <a href="#" class="button button-fill color-red" onClick={process.page1}>BASEBALL</a>
  <a href="#" class="button button-fill color-green" onClick={process.page2}>BASKETBALL</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-blue" onClick={process.page3}>BADMENTON</a>
  <a href="#" class="button button-fill color-orange" onClick={process.page4}>VOLLEYBALL</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page5}>SOFTBALL</a>
  <a href="#" class="button button-fill color-purple" onClick={process.page6}>SOCCER</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-cyan" onClick={process.page7}>RUGBY</a>
  <a href="#" class="button button-fill color-teal" onClick={process.page8}>BILLIARD</a>
  <a href="#" class="button button-fill color-indigo" onClick={process.page9}>BOWLING</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-yellow" onClick={process.page10}>ANGELBALL</a>
  <a href="#" class="button button-fill color-black" onClick={process.page11}>FOOTBALL</a>
  <a href="#" class="button button-fill color-yellowgreen" onClick={process.page12}>SEPAK TAKRAW</a>
</p>       

			</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		process.audio('audio_bomb').play();
		let content = <div>

		<p class="buttons-row">
  			<a href="#" class="button button-big color-black" onClick={process.menu}>Back</a>
		</p>
				<div align='center'>
						<img src='img/baseball.jpg' width='500px' height='200px' />
						<p>
						<h1>BASEBALL</h1>
						<div>is a bat-and-ball game played between two teams of nine players each who take turns batting and fielding. The batting team attempts to score runs by hitting a ball (that is thrown by the opposing team's pitcher) with a bat swung by the batter, and then running counter-clockwise around a series of four bases: first, second, third, and home plate. A run is scored when a player advances around the bases and touches home plate.</div>
						<div>Players on the batting team take turns hitting against the pitcher of the fielding team, which tries to prevent runs by getting hitters out in any of several ways. A player on the batting team who reaches a base safely can later attempt to advance to subsequent bases during teammates' turns batting, such as on a hit or by other means. The teams switch between batting and fielding whenever the fielding team records three outs. One turn batting for both teams, beginning with the visiting team, constitutes an inning. A game is composed of nine innings, and the team with the greater number of runs at the end of the game wins. If scores are tied at the end of nine innings, extra innings are usually played. Baseball has no game clock, although most games end in the ninth inning.</div>
						</p>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
			<p class="buttons-row">
  				<a href="#" class="button button-big color-black" onClick={process.menu}>Back</a>
			</p>
				<div align='center'>
						<img src='img/basketball.jpg' width='500px' height='200px' />
						<p>
						<h1>BASKETBALL</h1>
						<div>Basketball is a limited contact sport played on a rectangular court. While most often played as a team sport with five players on each side, three-on-three, two-on-two, and one-on-one competitions are also common. The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and 10 feet (3.048 m) high that is mounted to a backboard at each end of the court. The game was invented in 1891 by Dr. James Naismith.</div>
						<div>at each end of the court. The game was invented in 1891 by Dr. James Naismith.</div>
						<div>A team can score a field goal by shooting the ball through the basket being defended by the opposition team during regular play. A field goal scores three points for the shooting team if the player shoots from behind the three-point line, and two points if shot from in front of the line. A team can also score via free throws, which are worth one point, after the other team is assessed with certain fouls. The team with the most points at the end of the game wins, but additional time (overtime) is mandated when the score is tied at the end of regulation. The ball can be advanced on the court by passing it to a teammate, or by bouncing it while walking or running (dribbling). It is a violation to lift, or drag, one's pivot foot without dribbling the ball, to carry it, or to hold the ball with both hands then resume dribbling.</div>
						<div>The game has many individual techniques for displaying skill—ball-handling, shooting, passing, dribbling, dunking, shot-blocking, and rebounding. Basketball teams generally have player positions, the tallest and strongest members of a team are called a center or power forward, while slightly shorter and more agile players are called small forward, and the shortest players or those who possess the best ball handling skills are called a point guard or shooting guard. The point guard directs the on court action of the team, implementing the coach's game plan, and managing the execution of offensive and defensive plays (player positioning).</div>
						<div>Basketball is one of the world's most popular and widely viewed sports.[1] The National Basketball Association (NBA) is the most popular and widely considered to be the highest level of professional basketball in the world and NBA players are the world's best paid athletes by average annual salary per player.[2][3] Outside North America, the top clubs from national leagues qualify to continental championships such as the Euroleague and FIBA Americas League. The FIBA Basketball World Cup is the major international competition of the sport and attracts the top national teams from around the world. Each continent hosts regional competitions for national teams, like EuroBasket and FIBA Americas Championship.</div>

						</p>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/badmenton.jpg' width='500px' height='200px' />
						<h1>BADMINTON</h1>
						<div> Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.</div>
						<div>Each side may only strike the shuttlecock once before it passes over the net. Play ends once the shuttlecock has struck the floor or if a fault has been called by the umpire, service judge, or (in their absence) the opposing side.</div>
						<div>The shuttlecock is a feathered or (in informal matches) plastic projectile which flies differently from the balls used in many other sports. In particular, the feathers create much higher drag, causing the shuttlecock to decelerate more rapidly. Shuttlecocks also have a high top speed compared to the balls in other racquet sports. The flight of the shuttlecock gives the sport its distinctive nature.</div>

					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/volleyball.jpg' width='500px' height='200px' />
						<h1>VOLLEYBALL</h1>
						<div> Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.</div>
						<div>Each side may only strike the shuttlecock once before it passes over the net. Play ends once the shuttlecock has struck the floor or if a fault has been called by the umpire, service judge, or (in their absence) the opposing side.</div>
						<div>The shuttlecock is a feathered or (in informal matches) plastic projectile which flies differently from the balls used in many other sports. In particular, the feathers create much higher drag, causing the shuttlecock to decelerate more rapidly. Shuttlecocks also have a high top speed compared to the balls in other racquet sports. The flight of the shuttlecock gives the sport its distinctive nature.</div>

					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();

	
	},

	page5:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/softball.jpg' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/soccer.jpg' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page7:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/rugby.jpg' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page8:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/billiard.jpg' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page9:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/bowling.jpg' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page10:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/angelball.jpg' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page11:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/football.png' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page12:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-black " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/sepak.jpg' width='500px' height='200px' />
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/bomb.mp3" type="audio/mp3" />
					</audio>
					<div align='center'>
					<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
					</div>

				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},1000);