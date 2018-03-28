'use strict';
const year = '2018';
const ical = require('ical-generator'),
cal = ical();
const list = require('./list.json');
var fs = require('fs');

list.forEach(event => {
	cal.createEvent({
		start: new Date(`${event.dateFrom}-${year}`),
		end: new Date(`${event.dateTo ? event.dateTo : event.dateFrom}-${year}`),
		summary: event.title,
		description: event.url,
		location: event.where,
	});
});

const outputCal = cal.toString();
const outputFile = `${year}-conferences.ics`;
fs.writeFile(outputFile, outputCal, (err) => {
	console.log(err ? err : `Exported all ${year} conferences into ${outputFile}. This file can be imported from any calendar like Google Calendar.`)
});
