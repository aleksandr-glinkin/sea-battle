const record = document.getElementById('record'),
shot = document.getElementById('shot'),
hit = document.getElementById('hit'),
dead = document.getElementById('dead');

const enemy = document.getElementById('enemy');
const again = document.getElementById('again');


const play = {
	record: 0,
	shot: 0,
	hit: 0,
	dead: 0,
	set updateData(data) {
		this[data] += 1
		this.render();
	},
	render() {
		record.textContent = this.record;
		shot.textContent = this.shot;
		hit.textContent = this.hit;
		dead.textContent = this.dead;
	},
};

const show = {
	hit() {

	},
	miss(elem) {
		this.changeclass(elem, 'miss');
	},
	dead() {

	},
	changeclass(elem, value) {
		elem.className = value;
	},
};

const fire = (event) => {
	const target = event.target;
	let x = target.className;
	show.miss(target);
	if (target.className != x) {
	play.updateData = 'shot';
	}
};








const init = () => {
	enemy.addEventListener('click', fire);
};

init();








