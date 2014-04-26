$(document).ready(function(){

	$("div.class div.header").click(function(e) {
		e.preventDefault();
		var parent = $(this).parent();
		parent.toggleClass("active");
		var next = $(this).next();
		next.slideToggle(400, function(){
		});
	});

	data = [
		// {	school: "Medill",
		// 	val: "JOUR",
		// 	distros: [
		// 	{	val: "AR",
		// 		name: "Art/Art History" },
		// 	{	val: "EC",
		// 		name: "Economics" },
		// 	{	val: "HS",
		// 		name: "History" },
		// 	{	val: "LT",
		// 		name: "Literature" },
		// 	{	val: "MS",
		// 		name: "Math/Science (non statistical)" },
		// 	{	val: "MS*",
		// 		name: "Math/Science (statistical)" },
		// 	{	val: "PSA",
		// 		name: "American Political Science" },			
		// 	{	val: "PSI",
		// 		name: "International Political Science" },
		// 	{	val: "RP",
		// 		name: "Religion/Philosophy" }
		// 	]
		// },
		{	school: "McCormick",
			val: "MEAS",
			distros: [
			{	val: "FAL",
				name: "Fine Arts, Literature, and Language" },
			{	val: "SBS",
				name: "Social and Behavioral Sciences"},
			{	val: "HSV",
				name: "Historical Studies and Values"}
			]
		}]

	terms = [
		{
		term_id: 4550,
		name: "2014 Summer",
		start_date: "2014-06-23",
		end_date: "2014-08-29"
		},
		{
		term_id: 4540,
		name: "2014 Spring",
		start_date: "2014-03-31",
		end_date: "2014-06-13"
		},
		{
		term_id: 4530,
		name: "2014 Winter",
		start_date: "2014-01-06",
		end_date: "2014-03-21"
		},
		{
		term_id: 4520,
		name: "2013 Fall",
		start_date: "2013-09-24",
		end_date: "2013-12-13"
		},
		{
		term_id: 4510,
		name: "2013 Summer",
		start_date: "2013-06-24",
		end_date: "2013-08-31"
		},
		{
		term_id: 4500,
		name: "2013 Spring",
		start_date: "2013-04-02",
		end_date: "2013-06-14"
		}]

	subjects = [
		{
		symbol: "ACCOUNT",
		name: "Accounting"
		},
		{
		symbol: "ACCT",
		name: "Accounting and Information Systems"
		},
		{
		symbol: "ACCTM",
		name: "Accounting & Info Systems"
		},
		{
		symbol: "ADVT",
		name: "Advertising"
		},
		{
		symbol: "AF_AM_ST",
		name: "African American Studies"
		},
		{
		symbol: "AFST",
		name: "African Studies"
		},
		{
		symbol: "AMER_ST",
		name: "American Studies"
		},
		{
		symbol: "ANTHRO",
		name: "Anthropology"
		},
		{
		symbol: "APP_PHYS",
		name: "Applied Physics"
		},
		{
		symbol: "ARABIC",
		name: "Arabic"
		},
		{
		symbol: "ART",
		name: "Art Theory & Practice"
		},
		{
		symbol: "ART_HIST",
		name: "Art History"
		},
		{
		symbol: "ASIAN_AM",
		name: "Asian American Studies"
		},
		{
		symbol: "ASIAN_LC",
		name: "Asian Languages and Cultures"
		},
		{
		symbol: "ASIAN_ST",
		name: "Asian Studies"
		},
		{
		symbol: "ASTRON",
		name: "Astronomy"
		},
		{
		symbol: "ATHL_PRA",
		name: "Athletic Practicum"
		},
		{
		symbol: "BIOL_SCI",
		name: "Biological Sciences"
		},
		{
		symbol: "BLAW",
		name: "Business Law"
		},
		{
		symbol: "BMD_ENG",
		name: "Biomedical Engineering"
		},
		{
		symbol: "BUS_INST",
		name: "Business Institutions"
		},
		{
		symbol: "BUS_LAW",
		name: "Business Law"
		},
		{
		symbol: "CFS",
		name: "Chicago Field Studies"
		},
		{
		symbol: "CHEM",
		name: "Chemistry"
		},
		{
		symbol: "CHEM_ENG",
		name: "Chemical Engineering"
		},
		{
		symbol: "CHINESE",
		name: "Chinese"
		},
		{
		symbol: "CHSS",
		name: "Comparative & Historical Social Science"
		},
		{
		symbol: "CIC",
		name: "CIC Traveling Scholar"
		},
		{
		symbol: "CIS",
		name: "Computer Information Systems"
		},
		{
		symbol: "CIV_ENV",
		name: "Civil and Environmental Engineering"
		},
		{
		symbol: "CLASSICS",
		name: "Classics - Readings in English"
		},
		{
		symbol: "CLIN_PSY",
		name: "Clinical Psychology"
		},
		{
		symbol: "CLIN_RES",
		name: "Clinical Research & Regulatory Administration"
		},
		{
		symbol: "CME",
		name: "Chicago Metropolitan Exchange Program"
		},
		{
		symbol: "CMN",
		name: "Communication Related Courses"
		},
		{
		symbol: "COG_SCI",
		name: "Cognitive Science"
		},
		{
		symbol: "COMM_ST",
		name: "Communication Studies"
		},
		{
		symbol: "COMP_LIT",
		name: "Comparative Literary Studies"
		},
		{
		symbol: "CONDUCT",
		name: "Conducting"
		},
		{
		symbol: "CONPUB",
		name: "Constitutional and Public Law"
		},
		{
		symbol: "COUN",
		name: "Counseling"
		},
		{
		symbol: "CRDV",
		name: "Career Development"
		},
		{
		symbol: "CRT_INT",
		name: "Certified Internal Auditor"
		},
		{
		symbol: "CSD",
		name: "Communication Sciences and Disorders"
		},
		{
		symbol: "DANCE",
		name: "Dance"
		},
		{
		symbol: "DECS",
		name: "Managerial Economics and Decision Sciences"
		},
		{
		symbol: "DIV_MED",
		name: "Divorce Mediation Training Program"
		},
		{
		symbol: "DSGN",
		name: "Segal Design Institute"
		},
		{
		symbol: "EARTH",
		name: "Earth and Planetary Sciences"
		},
		{
		symbol: "ECON",
		name: "Economics"
		},
		{
		symbol: "EECS",
		name: "Electrical Engineering & Computer Science"
		},
		{
		symbol: "ENGLISH",
		name: "English"
		},
		{
		symbol: "ENTREP",
		name: "Entrepreneurship & Innovation"
		},
		{
		symbol: "ENVR_POL",
		name: "Environmental Policy & Culture"
		},
		{
		symbol: "ENVR_SCI",
		name: "Environmental Science"
		},
		{
		symbol: "EPI_BIO",
		name: "Epidemiology & Biostatistics"
		},
		{
		symbol: "ES_APPM",
		name: "Engineering Science & Applied Math"
		},
		{
		symbol: "FINANCE",
		name: "Finance"
		},
		{
		symbol: "FINC",
		name: "Finance"
		},
		{
		symbol: "FINCM",
		name: "Finance"
		},
		{
		symbol: "FN_EXTND",
		name: "CFP Extended"
		},
		{
		symbol: "FRENCH",
		name: "French"
		},
		{
		symbol: "GBL_HLTH",
		name: "Global Health"
		},
		{
		symbol: "GEN_CMN",
		name: "General Communication & Introductory Courses"
		},
		{
		symbol: "GEN_ENG",
		name: "General Engineering"
		},
		{
		symbol: "GENET_CN",
		name: "Genetic Counseling"
		},
		{
		symbol: "GEN_LA",
		name: "General Liberal Arts"
		},
		{
		symbol: "GEN_MUS",
		name: "General Music"
		},
		{
		symbol: "GEOG",
		name: "Geography"
		},
		{
		symbol: "GERMAN",
		name: "German"
		},
		{
		symbol: "GNDR_ST",
		name: "Gender Studies"
		},
		{
		symbol: "GREEK",
		name: "Greek"
		},
		{
		symbol: "HDPS",
		name: "Human Development & Psychological Services"
		},
		{
		symbol: "HDSP",
		name: "Human Development & Social Policy"
		},
		{
		symbol: "HEBREW",
		name: "Hebrew"
		},
		{
		symbol: "HEMA",
		name: "Health Enterprise Management"
		},
		{
		symbol: "HINDI",
		name: "Hindi"
		},
		{
		symbol: "HISTORY",
		name: "History"
		},
		{
		symbol: "HQS",
		name: "Healthcare Quality and Patient Safety"
		},
		{
		symbol: "HSIP",
		name: "Health Sciences Integrated Program"
		},
		{
		symbol: "HSR",
		name: "Health Services and Outcomes Research"
		},
		{
		symbol: "HUM",
		name: "Humanities"
		},
		{
		symbol: "IBIS",
		name: "Interdepartmental Biological Sciences Program"
		},
		{
		symbol: "IEMS",
		name: "Industrial Engineering & Management Sciences"
		},
		{
		symbol: "IGP",
		name: "Integrated Life Sciences"
		},
		{
		symbol: "IMC",
		name: "Integrated Marketing Communications"
		},
		{
		symbol: "INF_TECH",
		name: "Information Technology"
		},
		{
		symbol: "INTG_SCI",
		name: "Integrated Science"
		},
		{
		symbol: "INTL",
		name: "International Business"
		},
		{
		symbol: "INTL_ST",
		name: "International Studies"
		},
		{
		symbol: "IPLS",
		name: "Liberal Studies"
		},
		{
		symbol: "ISEN",
		name: "Initiative for Sustainability & Energy at NU"
		},
		{
		symbol: "ITALIAN",
		name: "Italian"
		},
		{
		symbol: "JAPANESE",
		name: "Japanese"
		},
		{
		symbol: "JAZZ_ST",
		name: "Jazz Studies"
		},
		{
		symbol: "JOUR",
		name: "Journalism"
		},
		{
		symbol: "JRN_WRIT",
		name: "Journalistic Writing"
		},
		{
		symbol: "JWSH_ST",
		name: "Jewish Studies"
		},
		{
		symbol: "KELLG_FE",
		name: "Financial Economics"
		},
		{
		symbol: "KELLG_MA",
		name: "Managerial Analytics"
		},
		{
		symbol: "KIEI",
		name: "Kellogg Innovation and Entrepreneurship Initiative"
		},
		{
		symbol: "KOREAN",
		name: "Korean"
		},
		{
		symbol: "KPPI",
		name: "Kellogg Public-Private Initiative"
		},
		{
		symbol: "LATIN",
		name: "Latin"
		},
		{
		symbol: "LATINO",
		name: "Latina and Latino Studies"
		},
		{
		symbol: "LAWSTUDY",
		name: "Law Studies-General or Interdisciplinary"
		},
		{
		symbol: "LDRSHP",
		name: "Center for Leadership"
		},
		{
		symbol: "LEAD_ART",
		name: "Art of Leadership Development"
		},
		{
		symbol: "LEADERS",
		name: "Leadership"
		},
		{
		symbol: "LEGAL_ST",
		name: "Legal Studies"
		},
		{
		symbol: "LING",
		name: "Linguistics"
		},
		{
		symbol: "LIT",
		name: "Literature"
		},
		{
		symbol: "LITARB",
		name: "Litigation and Arbitration"
		},
		{
		symbol: "LOC",
		name: "Learning & Organizational Change"
		},
		{
		symbol: "LRN_SCI",
		name: "Learning Sciences"
		},
		{
		symbol: "MATH",
		name: "Mathematics"
		},
		{
		symbol: "MAT_SCI",
		name: "Materials Science & Engineering"
		},
		{
		symbol: "MBIOTECH",
		name: "Masters in Biotechnology Program"
		},
		{
		symbol: "MCW",
		name: "Master of Creative Writing"
		},
		{
		symbol: "MDVL_ST",
		name: "Medieval Studies"
		},
		{
		symbol: "MECH_ENG",
		name: "Mechanical Engineering"
		},
		{
		symbol: "MECN",
		name: "Managerial Economics"
		},
		{
		symbol: "MECS",
		name: "Managerial Economics and Strategy"
		},
		{
		symbol: "MED_INF",
		name: "Medical Informatics"
		},
		{
		symbol: "MEDM",
		name: "Media Management"
		},
		{
		symbol: "MED_SKIL",
		name: "Mediation Skills Training Program"
		},
		{
		symbol: "MENA",
		name: "Middle East and North African Studies"
		},
		{
		symbol: "MGMT",
		name: "Management"
		},
		{
		symbol: "MGMT_ACT",
		name: "Management Accountants"
		},
		{
		symbol: "MHB",
		name: "Medical Humanities and Bioethics"
		},
		{
		symbol: "MKTG",
		name: "Marketing"
		},
		{
		symbol: "MKTGM",
		name: "Marketing"
		},
		{
		symbol: "MMSS",
		name: "Math Methods in the Social Sciences"
		},
		{
		symbol: "MOB_APP",
		name: "Mobile Application Developer"
		},
		{
		symbol: "MORS",
		name: "Management and Organizations"
		},
		{
		symbol: "MPD",
		name: "Master of Product Development"
		},
		{
		symbol: "MPPA",
		name: "Master of Public Policy & Administration"
		},
		{
		symbol: "MSA",
		name: "Master of Arts in Sports Administration"
		},
		{
		symbol: "MSC",
		name: "Master of Science in Communication"
		},
		{
		symbol: "MSCI",
		name: "Master of Science in Clinical Investigation"
		},
		{
		symbol: "MS_ED",
		name: "MS in Education & Social Policy"
		},
		{
		symbol: "MS_FT",
		name: "MS in Marital & Family Therapy"
		},
		{
		symbol: "MS_HE",
		name: "MS in Higher Education Administration and Policy"
		},
		{
		symbol: "MSIA",
		name: "Master of Science in Analytics"
		},
		{
		symbol: "MS_LOC",
		name: "Learning & Organizational Change"
		},
		{
		symbol: "MSRC",
		name: "Master of Regulatory Compliance"
		},
		{
		symbol: "MSTP",
		name: "Medical Scientist Training"
		},
		{
		symbol: "MTS",
		name: "Media, Technology & Society"
		},
		{
		symbol: "MUS_COMP",
		name: "Music Composition"
		},
		{
		symbol: "MUSEUM",
		name: "Museum Studies"
		},
		{
		symbol: "MUS_HIST",
		name: "Music History & Literature"
		},
		{
		symbol: "MUSIC",
		name: "Music"
		},
		{
		symbol: "MUSIC_ED",
		name: "Music Education"
		},
		{
		symbol: "MUSICOL",
		name: "Musicology"
		},
		{
		symbol: "MUS_TECH",
		name: "Music Technology"
		},
		{
		symbol: "MUS_THRY",
		name: "Music Theory"
		},
		{
		symbol: "NAV_SCI",
		name: "Naval Science"
		},
		{
		symbol: "NEUROBIO",
		name: "Neurobiology & Physiology"
		},
		{
		symbol: "NUIN",
		name: "Neuroscience"
		},
		{
		symbol: "OPNS",
		name: "Operations Management"
		},
		{
		symbol: "OPNSM",
		name: "Operations Management"
		},
		{
		symbol: "ORG_BEH",
		name: "Organizational Behavior"
		},
		{
		symbol: "PBC",
		name: "Plant Biology & Conservation"
		},
		{
		symbol: "PERF_ST",
		name: "Performance Studies"
		},
		{
		symbol: "PERSIAN",
		name: "Persian"
		},
		{
		symbol: "PHIL",
		name: "Philosophy"
		},
		{
		symbol: "PHIL_NP",
		name: "Philanthropy and Nonprofit Fundraising"
		},
		{
		symbol: "PHYSICS",
		name: "Physics"
		},
		{
		symbol: "PIANO",
		name: "Piano"
		},
		{
		symbol: "POLI_SCI",
		name: "Political Science"
		},
		{
		symbol: "PORT",
		name: "Portuguese"
		},
		{
		symbol: "PRDV",
		name: "Personal Development"
		},
		{
		symbol: "PREDICT",
		name: "Predictive Analytics"
		},
		{
		symbol: "PROJ_MGT",
		name: "Project Management"
		},
		{
		symbol: "PROJ_PMI",
		name: "Project Management"
		},
		{
		symbol: "PSYCH",
		name: "Psychology"
		},
		{
		symbol: "PUB_HLTH",
		name: "Master's in Public Health"
		},
		{
		symbol: "QARS",
		name: "Quality Assurance & Regulatory Science"
		},
		{
		symbol: "REAL",
		name: "Real Estate"
		},
		{
		symbol: "RELIGION",
		name: "Religious Studies"
		},
		{
		symbol: "RTVF",
		name: "Radio/Television/Film"
		},
		{
		symbol: "SCS",
		name: "School of Continuing Studies"
		},
		{
		symbol: "SEEK",
		name: "Social Enterprise"
		},
		{
		symbol: "SEM_ONLN",
		name: "Semester Online Courses"
		},
		{
		symbol: "SESP",
		name: "School of Education & Social Policy Core"
		},
		{
		symbol: "SHC",
		name: "Science in Human Culture"
		},
		{
		symbol: "SLAVIC",
		name: "Slavic Languages & Literature"
		},
		{
		symbol: "SOCIOL",
		name: "Sociology"
		},
		{
		symbol: "SOC_POL",
		name: "Social Policy"
		},
		{
		symbol: "SPANISH",
		name: "Spanish"
		},
		{
		symbol: "SPANPORT",
		name: "Spanish and Portuguese"
		},
		{
		symbol: "STAT",
		name: "Statistics"
		},
		{
		symbol: "STRINGS",
		name: "String Instruments"
		},
		{
		symbol: "SWAHILI",
		name: "Swahili"
		},
		{
		symbol: "TEACH_ED",
		name: "Teacher Education"
		},
		{
		symbol: "TGS",
		name: "TGS General Registrations"
		},
		{
		symbol: "TH&DRAMA",
		name: "Theatre & Drama"
		},
		{
		symbol: "THEATRE",
		name: "Theatre"
		},
		{
		symbol: "TURKISH",
		name: "Turkish"
		},
		{
		symbol: "URBAN_ST",
		name: "Urban Studies"
		},
		{
		symbol: "VOICE",
		name: "Voice & Opera"
		},
		{
		symbol: "WIND_PER",
		name: "Wind & Percussion"
		},
		{
		symbol: "WRITING",
		name: "Writing Arts"
		},
		{
		symbol: "YIDDISH",
		name: "Yiddish"
		}
		]

	s = $("select#school");
	for (var i = 0; i < data.length; i++) {
		s.append(
			"<option value='" + data[i].val + "'>" + data[i].school + "</option>"
		)
	};	

	t = $("select#term");
	for (var i = 0; i < terms.length; i++) {
		t.append(
			"<option value='" + terms[i].term_id + "'>" + terms[i].name + "</option>"
		)
	};	

	subj = $("select#subject");
	for (var i = 0; i < subjects.length; i++) {
		subj.append(
			"<option value='" + subjects[i].symbol + "'>" + subjects[i].name + "</option>"
		)
	};	

	updateDistroSelect(data[0].distros);

	s.change(function() {
		var optionSelected = $(this).find("option:selected");
		var value = optionSelected.val();
		for (var i = data.length - 1; i >= 0; i--) {
			if (value == data[i].val) {
				updateDistroSelect(data[i].distros);	
			}
		};
	});

	function updateDistroSelect(distros) {
		d = $("select#distro");
		d.html("")
		for (var i = 0; i < distros.length; i++) {
			d.append(
				"<option value='" + distros[i].val + "'>" + distros[i].val + " (" + distros[i].name + ")</option>"
			)
		};
	}

	$("button").click(function() {
		sendFormData()
		return false;
	})

	function sendFormData() {
		var form = $("form");
		var array = form.serializeArray();

		var data = {
			school: array[0].value,
			term: parseInt(array[1].value),
			distro: array[2].value,
			subject: array[3].value
		};
		
		filterClasses(data);		
	}

	function filterClasses(data) {
		var a = $.csv.toObjects("mccormick.csv");
		console.log(a);
	}

});
