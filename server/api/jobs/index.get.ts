import * as db from '../../dataSources/lowdb';

const rawJobs: any[] = [
	{
		id: 3,
		title: "Web Frontend Entwickler",
		company: "EPI development",
		url: "https://www.get-in-it.de/jobsuche/p132078?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche",
		description:
			"Die Herausforderung\n\n    Erstellung einer Bedarfsanalyse für neue Funktionen mit einer selbsterklärenden UI Gestaltung\n    Entwickeln von Funktionen und Algorithmen die nachhaltig lesbar sind\n    Der Fokus liegt in der Vereinfachung komplexer Vorgänge\n\nDeine Aufgaben\n\n    Weiterentwicklung von epirent aufgrund von aktuellen Anforderungen\n    Im Team Lösungen für neue Funktionen erarbeiten\n    Erstellen von gut bedienbaren und ausgeklügelten UI, denke wie ein Anwender\n    Kommunikation im Team, einbringen eigener Ideen\n    Offener Umgang mit neuen Technologien\n    Kreativität ist gefragt\n\nDeine Fähigkeiten\n\n    Weitreichende Erfahrungen in der Anwendungsprogrammierung\n    Klare und selbsterklärende UI Designs erstellen\n    Komplizierte technische Zusammenhänge auf einfache Funktionen herunterbrechen\n    Kommunikativ im Team, zielorientiert und selbständig in der Arbeitsorganisation\n    Deine Sprachkenntnisse (optimal): JavaScript, CSS, HTML, Bootstrap, AngularJS, API Entwicklung (REST), Responsive Design / Progressive Apps\n    Kein Hochschulabschluss notwendig, Können zählt!",
		skillList: "angular, bootstrap, rest, responsive, pwa",
		publicationDate: "2022-11-17",
	},
	{
		id: 4,
		title: "Frontend Developer",
		company: "reuter onlineshop",
		url: "https://www.get-in-it.de/jobsuche/p206536?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche",
		description:
			"Successfully completed studies with a focus on computer science, a similar education or relevant professional experience\nVery good knowledge in React or similar\nGood knowledge of HTML, CSS, JavaScript and Jest/Mocha\nTypeScript, Gitlab, Next.js, styled-components, Storybook and Webpack sound familiar to you\nInspire with your innovative thinking and don't lose sight of the big picture\nGet actively involved in professional discussions",
		skillList:
			"react, jest, mocha, typescript, gitlab, nextjs, styledcomponents, storybook, webpack",
		publicationDate: "2022-12-06",
	},
	{
		id: 5,
		title: "Frontend Developer und Consultant",
		company: "codecentric",
		url: "https://www.get-in-it.de/jobsuche/p206964?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche",
		description:
			"Du hast ein tiefes, technisches Verständnis von Webtechnologien, wie JavaScript, TypeScript, HTML5 und CSS3 sowie Angular, ReactJS und/oder VueJS\n    Du kennst dich mit CSS-Präprozessoren und CSS-Architekturen aus\n    Du bist vertraut mit der Cross-Browser-Problematik\n    Du bist sicher im Umgang mit modernen Buildtools (z. B. Fuse-Box, Rollup, Webpack) und hast Kenntnisse aktueller Testing Frameworks (z. B. Mocha, Jasmine oder Jest)\n    Du kennst die agilen Werte und arbeitest gerne in agilen Teams\n    User Experience und Responsive Design interessieren dich\n    Beratung liegt dir und du kannst dir vorstellen, unsere Kunden technologisch oder/und methodisch zu schulen. Dafür bringst du eine hohe Kommunikationsfähigkeit und verhandlungssichere Deutschkenntnisse mit",
		skillList:
			"typescript, angular, react, vue, fusebox, rollup,webpack, mocha, jasmine, jest, ux, responsive",
		publicationDate: "2022-12-07",
	},
];

export default defineEventHandler((event) => {
	return rawJobs;
});
