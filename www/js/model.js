

var beacons = [
    {
        id:1,
        bed_id:1,
        uuid: "f7826da6-4fa2-4e98-8024-bc5b71e0893e",
        identifier: "BED1",
        major: "56170",
        minor: "36053",
        alias: "300W"
    },{
        id:2,
        bed_id:2,
        uuid: "f7826da6-4fa2-4e98-8024-bc5b71e0893e",
        identifier: "BED2",
        major: "21373",
        minor: "54596",
        alias: "8ZA3"
    },{
        id:3,
        bed_id:3,
        uuid: "f7826da6-4fa2-4e98-8024-bc5b71e0893e",
        identifier: "BED3",
        major: "23036",
        minor: "42799",
        alias: "VdoM"
    }
];

var patients = [
    {
        id:1,
        bed_id:1,
        firstname: "Paul",
        lastname: "Weidinger",
        address: "Musterstrasse 1",
        zip: 6000,
        city: "Luzern",
        blood_type: "AB-",
        allergies: [
            "latex"
        ],
        medicine:[
            "Aspirin",
            "Parazetamol",
            "opium"
        ],
        chief_complaint: "swelling of tongue and difficulty breathing and swallowing",
        history_of_present_illness: "77 y o woman in NAD with a h/o CAD, DM2, asthma and HTN on altace for 8 years awoke from sleep around 2:30 am this morning of a sore throat and swelling of tongue.She came immediately to the ED b/c she was having difficulty swallowing and some trouble breathing due to obstruction caused by the swelling. She has never had a similar reaction ever before and she did not have any associated SOB, chest pain, itching, or nausea. She has not noticed any rashes, and has been afebrile. She says that she feels like it is swollen down in her esophagus as well. In the ED she was given 25mg benadryl IV, 125 mg solumedrol IV and pepcid 20 mg IV. This has helped the swelling some but her throat still hurts and it hurts to swallow. Nothing else was able to relieve the pain and nothing make it worse though she has not tried to drink any fluids because of trouble swallowing. She denies any recent travel, recent exposure to unusual plants or animals or other allergens. She has not started any new medications, has not used any new lotions or perfumes and has not eaten any unusual foods. Patient has not taken any of her oral medications today.",
        mediacal_history: [
            "CAD w/ Left heart cath in 2005 showing 40% LAD, 50% small D2, 40% RCA and 30% large OM; 2006 TTE showing LVEF 60-65% with diastolic dysfunction, LVH, mild LAdilation"
            , "Hyperlipidemia"
            , "HTN"
            , "DM 2, last A1c 6.7 in 9/2005 "
            , "Asthma/COPD "
            , "GERD"
            , "h/o iron deficiency anemia"
        ],
        surgical_history: [
            "s/p vaginal wall operation for prolapse 2006",
            "s/p Cardiac stent in 1999 ",
            "s/p hystarectomy in 1970s ",
            "s/p kidney stone retrieval 1960s "
        ],
        social_history: "Patient lives in _______ with daughter _____ (919) _______. Patient does all ADLs and IADLs with no/little assistance. She does own finances and drives. Patient has 4 daughters that all live in the area. Patient does not use tobacco, alcohol, illicit drugs. ",
        appointments:[
            {
                date:"14.12.2016",
                appointment: "X-Ray"
            },{
                date:"15.12.2016",
                appointment:"physiotherapy"
            },{
                date:"20.12.2016",
                appointment:"surgery"
            }
        ],
        treatments:[
            "Test Treatment 1"
        ]

    },
    {
        id:2,
        bed_id:2,
        firstname: "Klaus",
        lastname: "Kleber",
        address: "Musterstrasse 2",
        zip: 6000,
        city: "Luzern",
        blood_type: "AB-",
        allergies: [
            "Penicillin, causes rash and anaphylaxis",
            "morphine, causes itching",
            "IV Contrast, causes tachycardia"
        ],
        medicine:[
            "Cymbalta 60 mg po qday",
            "Fluticasone furoate nasal spray 27.5 mcg prn ",
            "albuterol inhalation aerosol 17 g prn"
        ],
        chief_complaint: "abdominal pain",
        history_of_present_illness: "Ms. ___ is a 47 year old African American female with Crohn's Disease, DM, and HTN who presented to the ED after two days of severe abdominal pain, nausea, vomiting, and diarrhea. She stated that on Wednesday evening after being in her usual state of health she began to experience sharp lower abdominal pain that radiated throughout all four quadrants. The pain waxed and waned and was about a 4/10 and more intense than the chronic abdominal pain episodes she experiences periodically from her Crohn’s disease. The pain was sudden and she did not take any medications to alleviate the discomfort. The abdominal pain was quickly followed by two episodes of partial diarrhea and soft stool that was tan in color with no signs of blood. Her abdominal pain continued and she developed nausea and then vomited six times that evening before going to sleep. Overnight her abdominal pain worsened and she stayed in bed for most of the day on Thursday. She had nausea again all day but had no other episodes of diarrhea or vomiting that day and did not eat anything for fear of vomiting. She was able to drink water and keep it down. By late Thursday night, her pain had intensified to a 10/10 and she called 911 and was brought to the ER by ambulance from her home in Burlington. Ms. ___ also stated that she had just ended a three week course of prednisone four days ago, which she had started about a month ago at 60 mg and tapered herself down over a few days by 10 mg. She began the course of prednisone last month because she felt as if she was about to have a Crohn's flare at the time. Ms. ___ was last hospitalized at UNC for Crohn's disease exacerbation in March 2007. She denies any recent hemoptysis, constipation, hematochezia,melena, and changes in her bowel habits since Wednesday. She has been compliant with taking her medications for Crohn's and has been stable on her mesalamine, mercaptopurine, and omega -3-acid supplement. Upon arrival to the ED, Ms. ___ was put on IV fluids, given fentanyl 50 mcg IVP, phenegran 12.5 mg diluted with 10 mL NS IVP, and Mg sulfate IVP. Radiological images were obtained through an abdominal CT scan, ultrasound, and 2V XR. Ms. ___ was not given any other narcotics for her pain because of a past violation of a pain contract after a positive toxicology screen for cocaine resulted in her discharge from her family medicine provider and due to suspicions that she was narcotic-seeking.",
        mediacal_history: [
            "Crohn's disease, diagnosed 1998 "
            , "Adenocarcinoma of terminal ileum 1998 - s/p resection of terminal ileum, rad and chemo, no mets"
            , "hx of small bowel obstruction secondary to Crohn’s Disease"
            , "DM"
            , "HTN"
            , "DVT and PE 2001 "
            , "PUD"
        ],
        surgical_history: [
         
        ],
        social_history: "Ms. ___ lives in _________ with her husband. She has 6 children who are in good health but do not live with her. Ms. ___ is on disability for her bipolar diagnosis and usually spends her days at home and caring for a sick older relative. She smokes half a ppd and has done so for the past 30 years. She states that she does not use any other drugs and that she does not consume alcohol.She has been involved in the distribution of crack cocaine for years in the past but stopped two years ago. While her husband is a crack user, she states that she has never been a user of any illicit drugs or narcotics. She is not physically active and her diet consists of small food portions but is generally unhealthy. She suffers from chronic abdominal pain secondary to her Crohn’s, and also chronic right knee and lower back pain from a fall injury and osteoarthritis. She uses a cane when her knee and back pain become debilitating. She has a history of narcotic-seeking behavior and has left during past hospital visits when narcotic medications would not be prescribed for her pain. She no longer receives narcotics from UNC after breaking her pain contract with her family medicine provider but it is unclear if she receives pain medications from an outside hospital. She has been incarcerated in the past for arson and attempted murder.",
        appointments:[
            {
                date:"14.12.2016",
                appointment: "X-Ray"
            },{
                date:"15.12.2016",
                appointment:"physiotherapy"
            },{
                date:"20.12.2016",
                appointment:"surgery"
            }
        ],
        treatments:[
            "Test Treatment 1"
        ]

    },
    {
        id:3,
        bed_id:3,
        firstname: "John",
        lastname: "Snow",
        address: "Musterstrasse 3",
        zip: 6000,
        city: "Luzern",
        blood_type: "AB-",
        allergies: [
            "No known drug allergies. Dislikes codeine for the “way it makes me feel.”"
        ],
        medicine:[
            "No regular medications, over-the-counter medications, or supplements. Has taken two days of the medications prescribed by the ER in Abilene: Levaquin 500 mg daily and Benzonatate 200 mg TID."
        ],
        chief_complaint: "Shortness of breath.",
        history_of_present_illness: "Mr.--- is a previously healthy 56-year-old gentleman who presents with a four day history of shortness of breath, hemoptysis, and right-sided chest pain. He works as a truck driver, and the symptoms began four days prior to admission, while he was in Jackson, MS. He drove from Jackson to Abilene, TX, the day after the symptoms began, where worsening of his dyspnea and pain prompted him to go to the emergency room. There, he was diagnosed with pneumonia and placed on Levaquin 500 mg daily and Benzonatate 200 mg TID, which he has been taking for two days with only slight improvement. He then drove from Abilene back to Greensboro, where he resides, and continued to experience shortness of breath, right sided chest pain, and hemoptysis. He presented to an urgent care office in town today, and was subsequently transferred to the Moses Cone ER due to the provider’s suspicion of PE. The right-sided pain is located midway down his ribcage, below the axilla. This pain is sharp, about 7/10 in severity, and worsens with movement and cough. Pressing on the chest does not recreate the pain. He feels that the pain has improved somewhat over the past two days. The hemoptysis has been unchanged since it began; there is not frank blood, but his sputum has been consistently blood-tinged. The blood seems redder at night. The dyspnea has been severe, and it is difficult for him to walk more than across a room. He states that he feels as though there is a “rattling” in his chest. At baseline, he experiences no dyspnea on exertion and has no history of COPD or other respiratory problem. He is a smoker, smoking a little less than a pack a day for thirty-five years. Past history is notable for the fact that he experienced transient left lower leg swelling – from below the knee down – and pain several weeks ago during a cross-country haul. He also notes a four day history of decreased appetite, poor sleep, and subjective fever and chills, with a measured fever of 103 in the hospital in Abilene. He had a bout of pneumonia about two months ago, but has been healthy for the most part and denies any chronic medical conditions. Currently he is fairly comfortable, with morphine helping with the pain. He has no history of a clotting disorder, no cardiac history, and denies any chest trauma or aspiration. He has had no sick contacts.",
        mediacal_history: [
            "Hernia repair"
            , "Bilateral thumb surgeries, secondary to two separate injuries sustained while working with machinery"
        ],
        surgical_history: [
            
        ],
        social_history: "Mr. --- is divorced, lives in -------------------, and has been a truck driver for many years. He lives with his brother and his brother’s wife. He has several children, including a daughter who also lives in the area. His family is very supportive and they get along well. As per HPI, he smokes a little less than a pack per day and has for thirtyfive years. He does not drink alcohol or use other drugs. He tries to be physically active, and his favorite type of exercise is line dancing. He has “excellent” insurance through his employer.",
        appointments:[
            {
                date:"14.12.2016",
                appointment: "X-Ray"
            },{
                date:"15.12.2016",
                appointment:"physiotherapy"
            },{
                date:"20.12.2016",
                appointment:"surgery"
            }
        ],
        treatments:[
            "Test Treatment 1"
        ]

    }
]