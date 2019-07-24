module.exports = class Utils {
    static formatString(message, ...args) {
		let arr = Array.from(args);

		for (let argument of arr) message = message.replace('{}', argument);
		
		return message;
	}

	static getDateString(date) {
		const pad = number => number > 9 ? number : '0' + number;

		return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`
	}
}