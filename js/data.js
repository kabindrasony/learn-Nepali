const courseData = [
    {
        part: "Part 1 [About Nepal]",
        categories: [
            {
                title: "Understanding Nepal",
                lessons: [
                    { 
                        id: "geography", 
                        title: "Geography", 
                        content: `
                            <iframe src="https://maps.google.com/maps?q=Nepal&t=&z=6&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style="border:0; border-radius: 8px; margin-bottom: 2rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <h2>The Hardware (Geography — Where Is Nepal?)</h2>
                            <p>Big Bang. Stars form. Galaxies settle. <br>Fast forward 13.8 billion years.</p>
                            <p>The Indian tectonic plate decides to slam into the Eurasian plate. It doesn’t politely bump. It crashes. Hard. The land buckles upward. That collision is still happening today.</p>
                            <p>Result? The Himalayas.</p>
                            <p>That’s the geological backbone of Nepal.</p>
                            <p>Present day: Nepal sits in South Asia, wedged between two giant boulders — India to the south, east, and west, and China (the autonomous region of Tibet) to the north.</p>
                            <p>It’s small on the map, occupying just 0.03% of the world's total landmass. But it’s not small in vertical scale.</p>
                            <p>Nepal stretches across three distinct ecological regions:</p>
                            <ul>
                                <li><strong>Himal (Mountain region)</strong> — Taking up 15% of the country, this is the realm of rock and snow starting above 3,000 meters. It is home to eight of the world’s fourteen 8,000-meter peaks, including Mount Everest (Sagarmatha) at 8,848 meters. This is extreme altitude. Thin air. Ice. Global climbing history.</li>
                                <li><strong>Hills (Hilly region)</strong> — Taking up 68% of the landmass, this area features terraced farms, deep river valleys, and old towns. Most of the population traditionally lived here. This is where Kathmandu sits at 1,337 meters above sea level — the political, cultural, and historical center.</li>
                                <li><strong>Terai</strong> — Flat, fertile plains in the south taking up 17% of the land. Known as the "granary" of Nepal, it is agriculturally vital and sits at an altitude of just 60 to 600 meters. Ecologically rich. Also home to places like Chitwan National Park — known globally for protecting wildlife including one-horned rhinos and Bengal tigers.</li>
                            </ul>
                            <p>Other places you’ve probably heard of:</p>
                            <ul>
                                <li><strong>Pokhara</strong> — Famous for its lakes like Phewa, massive mountain views, and acting as the gateway to the Annapurna region.</li>
                                <li><strong>Lumbini</strong> — Traditionally and historically recognized as the birthplace of Siddhartha Gautama (the Buddha) around 563 BC.</li>
                                <li><strong>Annapurna</strong> — One of the most famous trekking regions and conservation areas in the world.</li>
                            </ul>
                            <p>Nepal runs on Nepal Standard Time: UTC+5:45.</p>
                            <p>Yes, 45 minutes. Not 30. Not 00. Forty-five. It is based specifically on the longitude passing through its own Mount Gaurishankar. One of the few countries in the world with that offset.</p>
                            <p>Surprising geographic fact?<br>In an average width of just 193 kilometers north to south, Nepal goes from near sea-level plains (60 meters) to the highest point on Earth (8,848 meters). Few places on the planet compress that much vertical diversity into that little horizontal space.</p>
                            <p>So if you zoom out:<br>Nepal is a narrow strip of land formed by continental violence, stacked vertically with climate zones, ecosystems, and extremes.</p>
                            <p>This is the physical stage.</p>
                            <p>We’ll go deeper later. For now, just hold the map in your head.</p>
                            <p>Because language grows out of land.</p>
                        `
                    },
                    { 
                        id: "history", 
                        title: "History (Brief Overview)", 
                        content: `
                            <h2>History — From Land to Nation</h2>
                            <p>Fast forward to prehistoric times. Humans lived in the hills and valleys that would become Nepal. Archaeological tools show early settlements long before written history.</p>
                            <p>And then comes the myth.</p>
                            <p>The Kathmandu Valley was once a giant lake. According to legend, Manjushri cut open the hills to drain it and make the land habitable. Geology says the valley really was an ancient lake basin that naturally drained over time.</p>
                            <p>Myth and science overlap here.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Early States</h3>
                            <p>Over centuries, different groups migrated into the region — Indo-Aryan Khas groups in the hills, Tibeto-Burman communities across mountains and valleys.</p>
                            <p>The Licchavis (around 4th–9th century CE) established organized rule in the Kathmandu Valley. They left inscriptions, trade networks, temples. Early statecraft began here.</p>
                            <p>After them came the Malla period (c. 1200–1768).</p>
                            <p>The Kathmandu Valley split into three rival city-states:</p>
                            <ul>
                                <li>Kathmandu</li>
                                <li>Patan</li>
                                <li>Bhaktapur</li>
                            </ul>
                            <p>They competed constantly — politically, economically, culturally. They built extraordinary temples and palaces that still define the valley today. But they were divided.</p>
                            <p>Outside the valley, dozens of small kingdoms ruled their own territories.</p>
                            <p>Nepal was not yet one country.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Unification</h3>
                            <p>Enter Prithvi Narayan Shah in 1743.</p>
                            <p>King of the small hill state of Gorkha.</p>
                            <p>He saw the wealthy but divided valley kingdoms — and moved strategically. Through siege, diplomacy, blockades, and force, he conquered the Kathmandu Valley by 1769.</p>
                            <p>Modern Nepal begins here.</p>
                            <p>He famously described Nepal as a “yam between two boulders” — referring to India and China. That geopolitical reality still shapes Nepal’s foreign policy.</p>
                            <p>After unification, the Gorkhali state expanded aggressively — until it collided with the British East India Company.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>War and Rana Rule</h3>
                            <p>The Anglo-Nepalese War (1814–1816) ended with the Treaty of Sugauli. Nepal lost territory but remained independent — a rare case in South Asia.</p>
                            <p>Then came 1846.</p>
                            <p>The Kot Massacre.</p>
                            <p>Jung Bahadur Rana eliminated rivals and established hereditary Rana prime ministers. The Shah kings remained, but only as ceremonial figures.</p>
                            <p>For 104 years (1846–1951), the Rana regime ruled Nepal as an autocratic oligarchy. The country was largely isolated. Education and political participation were limited.</p>
                            <p>But Nepal maintained independence — partly by cooperating militarily with the British.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Monarchy vs Democracy</h3>
                            <p>In 1951, King Tribhuvan aligned with political forces to end Rana rule. The monarchy regained authority. Democratic experiments followed — unstable and short-lived.</p>
                            <p>In 1960, King Mahendra dismissed the elected government and introduced the Panchayat system — a partyless political structure where the king held ultimate power.</p>
                            <p>National identity was centralized. Diversity was downplayed. Political dissent was suppressed.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>1990 and the Civil War</h3>
                            <p>In 1990, a mass movement forced constitutional monarchy and multiparty democracy.</p>
                            <p>But corruption, inequality, and rural neglect created anger.</p>
                            <p>In 1996, Maoist insurgents launched a “People’s War.” The conflict lasted ten years. Over 16,000 people died. The state, the rebels, and civilians all paid the cost.</p>
                            <p>Then came 2001.</p>
                            <p>The royal massacre.</p>
                            <p>King Birendra and much of the royal family were killed. The official investigation concluded Crown Prince Dipendra was responsible, but public suspicion never fully disappeared.</p>
                            <p>King Gyanendra assumed the throne.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Republic</h3>
                            <p>In 2006, another people’s movement forced the king to give up direct rule.</p>
                            <p>In 2008, Nepal abolished the monarchy and became a <strong>Federal Democratic Republic</strong>.</p>
                            <p>The Maoists entered mainstream politics. A new constitution was eventually adopted in 2015.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Today</h3>
                            <p>Nepal is federal. Multilingual. Multiethnic. Politically active.</p>
                            <p>It struggles with corruption, instability, and economic migration.</p>
                            <p>It also has a young population, growing civic awareness, and ongoing debates about identity and governance.</p>
                            <p>It’s unfinished.</p>
                        `
                    },
                    { 
                        id: "the-people", 
                        title: "The People", 
                        content: `
                            <h2>The People — Who Lives Here?</h2>
                            <p>Nepal is small on the map.<br>It is not small in diversity.</p>
                            <p>Roughly 30 million people. Dozens of ethnic groups. Over 120+ languages spoken across the country.</p>
                            <p>There is no single “Nepali look.” No single culture.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Ethnic and Cultural Groups</h3>
                            <p>Broadly, Nepal’s population includes:</p>
                            <ul>
                                <li>Indo-Aryan groups (such as Khas, Madhesi communities in the Terai)</li>
                                <li>Tibeto-Burman groups (such as Tamang, Gurung, Rai, Limbu, Sherpa, Magar, Newar, Tharu, and many others)</li>
                            </ul>
                            <p>Each group has its own history, dress, food traditions, rituals, and sometimes its own language.</p>
                            <p>For example:</p>
                            <ul>
                                <li>Sherpa communities are known globally for high-altitude mountaineering.</li>
                                <li>Newars shaped much of the urban culture and architecture of the Kathmandu Valley.</li>
                                <li>Tharu communities have deep roots in the Terai plains.</li>
                            </ul>
                            <p>And that’s just scratching the surface.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Language</h3>
                            <p>The official language is Nepali.</p>
                            <p>But it’s not the only one.</p>
                            <p>Maithili, Bhojpuri, Tharu, Tamang, Nepal Bhasa (Newari), and many others are spoken daily.</p>
                            <p>Nepali became the state language during the unification period under Prithvi Narayan Shah and later state-building efforts. Over time, it became the lingua franca — the bridge language between communities.</p>
                            <p>So when you learn Nepali, you’re learning the connector language of a very diverse society.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Religion</h3>
                            <p>Nepal is religiously layered.</p>
                            <p>The majority identify as Hindu.<br>Buddhism has deep historical roots.<br>There are also Muslim, Kirat, Christian, and other communities.</p>
                            <p>And in daily life, religious boundaries often blend. Temples and stupas stand close to each other. Festivals overlap.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Food and Daily Life</h3>
                            <p>Food shifts by region:</p>
                            <ul>
                                <li>In the hills and mountains: rice, lentils, vegetables — dal bhat is the daily staple.</li>
                                <li>In the Terai: more wheat-based dishes, stronger North Indian influence.</li>
                                <li>In Himalayan regions: barley, potatoes, yak products.</li>
                            </ul>
                            <p>Clothing also varies — from daura suruwal and sari to regional dresses unique to specific ethnic groups.</p>
                            <p>Urban youth today might wear jeans and hoodies.<br>Rural elders might wear traditional attire daily.</p>
                            <p>Both are equally Nepali.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Identity</h3>
                            <p>Nepal calls itself:</p>
                            <ul>
                                <li>Multilingual</li>
                                <li>Multiethnic</li>
                                <li>Multireligious</li>
                            </ul>
                            <p>And that’s not just a slogan.</p>
                            <p>It’s reality.</p>
                            <p>But diversity also means tension — over representation, language rights, federal boundaries, and inclusion. These debates are ongoing.</p>
                            <p>Nepal is still negotiating what “national identity” really means.</p>
                        `
                    },
                    { 
                        id: "government-structure", 
                        title: "Government Structure", 
                        content: `
                            <h2>Government Structure — How Power Is Organized</h2>
                            <p>Nepal today is a Federal Democratic Republic.</p>
                            <p>No king.<br>No monarchy.<br>Power comes from the constitution (2015) and elected representatives.</p>
                            <p>That’s the theory.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Three Levels of Government</h3>
                            <p>Nepal runs on a three-tier system:</p>
                            <ul>
                                <li>Federal (Central Government)</li>
                                <li>7 Provinces</li>
                                <li>753 Local Levels (municipalities and rural municipalities)</li>
                            </ul>
                            <p>Think of it as vertical power distribution.</p>
                            <p>Not everything is controlled by Kathmandu anymore.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Federal Level</h3>
                            <p>This is the national government.</p>
                            <p>It includes:</p>
                            <ul>
                                <li>President (ceremonial head of state)</li>
                                <li>Prime Minister (head of government)</li>
                                <li>Federal Parliament</li>
                            </ul>
                            <p>The Prime Minister runs the executive branch. Parliament makes laws. The Supreme Court interprets them.</p>
                            <p>The federal government handles:</p>
                            <ul>
                                <li>Foreign affairs</li>
                                <li>National defense</li>
                                <li>Monetary policy</li>
                                <li>National taxation</li>
                                <li>Big infrastructure</li>
                            </ul>
                            <p>This is where the main political drama usually happens.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Provincial Level (7 Provinces)</h3>
                            <p>Each province has:</p>
                            <ul>
                                <li>A Provincial Assembly</li>
                                <li>A Chief Minister</li>
                                <li>A provincial cabinet</li>
                            </ul>
                            <p>They handle regional issues like:</p>
                            <ul>
                                <li>Provincial roads</li>
                                <li>Health systems</li>
                                <li>Education administration</li>
                                <li>Local development</li>
                            </ul>
                            <p>In theory, this allows regional autonomy.</p>
                            <p>In practice, coordination with the federal level is still messy. The system is young.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Local Level (753 Units)</h3>
                            <p>This is where federalism becomes real.</p>
                            <p>Each municipality or rural municipality has:</p>
                            <ul>
                                <li>A Mayor or Chairperson</li>
                                <li>A local council</li>
                            </ul>
                            <p>They deal with:</p>
                            <ul>
                                <li>Local schools</li>
                                <li>Basic healthcare</li>
                                <li>Local roads</li>
                                <li>Registration (birth, marriage, land records)</li>
                                <li>Community-level services</li>
                            </ul>
                            <p>If something affects your daily life directly, it’s often handled here.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Political Reality</h3>
                            <p>Nepal is multiparty.</p>
                            <p>Major parties rotate in and out of coalition governments. No party usually wins a strong majority, so alliances are common.</p>
                            <p>That means frequent government changes. Instability is normal. Coalition politics is constant.</p>
                            <p>But elections happen. Power changes hands. The system holds — even if it shakes.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Big Shift</h3>
                            <p>Before 2008:</p>
                            <ul>
                                <li>Constitutional monarchy</li>
                                <li>Centralized state</li>
                            </ul>
                            <p>After 2008:</p>
                            <ul>
                                <li>Republic</li>
                                <li>Federal restructuring</li>
                            </ul>
                            <p>The change from a Kathmandu-centered unitary system to federalism is one of the biggest political shifts in Nepal’s history.</p>
                            <p>It’s still evolving.</p>
                        `
                    },
                    {
                        id: "interesting-facts",
                        title: "Interesting Facts",
                        content: `
                            <h2>Interesting Facts</h2>
                            
                            <h3>1. The time zone is unusual</h3>
                            <p>Nepal runs on UTC+5:45.<br>Not five hours. Not five and a half.<br>Forty five minutes.<br>It aligns with the country’s own meridian and reflects an independent time standard.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>2. The highest point on Earth is here</h3>
                            <p>Mount Everest stands on the border with China.<br>In Nepali it is called Sagarmatha.<br>Within less than 200 kilometers south, the land drops to near sea level in the Terai plains.</p>
                            <p>Few countries have that kind of vertical range.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>3. Nepal was never colonized</h3>
                            <p>While much of South Asia was ruled by the British Empire, Nepal remained formally independent.<br>It signed treaties and lost territory, but it was not colonized.</p>
                            <p>That history still shapes national identity.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>4. The living goddess tradition</h3>
                            <p>In the Kathmandu Valley, a young girl from the Newar community is chosen as the Kumari, regarded as a living goddess until she reaches puberty.<br>This tradition continues today.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>5. The flag is not rectangular</h3>
                            <p>Nepal’s national flag is the only non rectangular national flag in the world.<br>It is made of two stacked triangles with sun and moon symbols.<br>Its exact geometric construction is written into the constitution.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>6. Birthplace of the Buddha</h3>
                            <p>Lumbini in southern Nepal is traditionally recognized as the birthplace of Siddhartha Gautama.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>7. More than 120 languages</h3>
                            <p>Nepali is the official language, but more than 120 languages are spoken across the country.<br>Many communities maintain their own scripts, traditions, and oral histories.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>8. From monarchy to republic in one decade</h3>
                            <p>In 2001, Nepal was a kingdom.<br>In 2008, it became a federal democratic republic.<br>A 240 year old monarchy ended within a generation.</p>
                        `
                    }
                ]
            }
        ]
    },
    {
        part: "Part 2 [Nepali Language]",
        categories: [
            {
                title: "Intro",
                lessons: [
                    { id: "intro", title: "Intro", content: "<p>Coming soon...</p>" },
                    { id: "script-basics", title: "0.1 script basics", content: "<p>The Nepali language uses the Devanagari script. Here is a basic greeting in Nepali: <span class='nepali-font'>नमस्ते</span> (Namaste).</p><h3 id='intro-sub1'>Coming soon</h3><p>More content will be added here.</p>" }
                ]
            },
            {
                title: "CONVERSATION SKILLS",
                lessons: [
                    { id: "lesson-01", title: "01 Greetings" },
                    { id: "lesson-02", title: "02 Making introductions" },
                    { id: "lesson-03", title: "03 Conversation fillers" },
                    { id: "lesson-04", title: "04 Saying you don't understand" },
                    { id: "lesson-05", title: "05 Opinions and preferences" },
                    { id: "lesson-06", title: "06 Agreeing and disagreeing" },
                    { id: "lesson-07", title: "07 Making suggestions" },
                    { id: "lesson-08", title: "08 Saying thank you" },
                    { id: "lesson-09", title: "09 Saying sorry" },
                    { id: "lesson-10", title: "10 Saying goodbye" },
                    { id: "lesson-11", title: "11 Dates, time, and weather" },
                    { id: "lesson-12", title: "12 Making arrangements" },
                    { id: "lesson-13", title: "13 Talking about the weather" }
                ]
            },
            {
                title: "FAMILY AND RELATIONSHIPS",
                lessons: [
                    { id: "lesson-14", title: "14 Family and relationships" },
                    { id: "lesson-15", title: "15 Talking about family" },
                    { id: "lesson-16", title: "16 Life events" },
                    { id: "lesson-17", title: "17 Socializing" },
                    { id: "lesson-18", title: "18 Dating and romance" },
                    { id: "lesson-19", title: "19 Showing support" }
                ]
            },
            {
                title: "EATING AND DRINKING",
                lessons: [
                    { id: "lesson-20", title: "20 Eating and drinking" },
                    { id: "lesson-21", title: "21 Cafés and coffee shops" },
                    { id: "lesson-22", title: "22 Takeaway and delivery" },
                    { id: "lesson-23", title: "23 Bars and pubs" },
                    { id: "lesson-24", title: "24 At the restaurant" },
                    { id: "lesson-25", title: "25 Cooking and eating" }
                ]
            },
            {
                title: "FREE TIME AND HOBBIES",
                lessons: [
                    { id: "lesson-26", title: "26 Free time and hobbies" },
                    { id: "lesson-27", title: "27 At the cinema" },
                    { id: "lesson-28", title: "28 At the theatre" },
                    { id: "lesson-29", title: "29 Concerts and festivals" },
                    { id: "lesson-30", title: "30 At the gym" },
                    { id: "lesson-31", title: "31 Sporting activities" },
                    { id: "lesson-32", title: "32 Sports events" },
                    { id: "lesson-33", title: "33 Hobbies" }
                ]
            },
            {
                title: "SHOPS AND SERVICES",
                lessons: [
                    { id: "lesson-34", title: "34 Shops and services" },
                    { id: "lesson-35", title: "35 At the market" },
                    { id: "lesson-36", title: "36 At the supermarket" },
                    { id: "lesson-37", title: "37 At the garden centre" },
                    { id: "lesson-38", title: "38 At the DIY store" },
                    { id: "lesson-39", title: "39 Buying clothes and shoes" },
                    { id: "lesson-40", title: "40 Returning goods" },
                    { id: "lesson-41", title: "41 Hair, beauty, and grooming" },
                    { id: "lesson-42", title: "42 Sending and receiving" },
                    { id: "lesson-43", title: "43 Money and finance" },
                    { id: "lesson-44", title: "44 At the library" }
                ]
            },
            {
                title: "WORK AND STUDY",
                lessons: [
                    { id: "lesson-45", title: "45 Work and study" },
                    { id: "lesson-46", title: "46 At school" },
                    { id: "lesson-47", title: "47 Further and higher education" },
                    { id: "lesson-48", title: "48 Looking for work" },
                    { id: "lesson-49", title: "49 Applying for a job" },
                    { id: "lesson-50", title: "50 Job interviews" },
                    { id: "lesson-51", title: "51 Starting a new job" },
                    { id: "lesson-52", title: "52 In the workplace" },
                    { id: "lesson-53", title: "53 Giving a presentation" },
                    { id: "lesson-54", title: "54 Work meetings" },
                    { id: "lesson-55", title: "55 Online meetings" }
                ]
            },
            {
                title: "THE HOME",
                lessons: [
                    { id: "lesson-56", title: "56 The home" },
                    { id: "lesson-57", title: "57 Finding a new home" },
                    { id: "lesson-58", title: "58 Moving house" },
                    { id: "lesson-59", title: "59 Meeting the neighbours" },
                    { id: "lesson-60", title: "60 Household chores" },
                    { id: "lesson-61", title: "61 Home improvements" },
                    { id: "lesson-62", title: "62 Pets" },
                    { id: "lesson-63", title: "63 Home emergencies" },
                    { id: "lesson-64", title: "64 Home entertainment" }
                ]
            },
            {
                title: "GETTING AROUND",
                lessons: [
                    { id: "lesson-65", title: "65 Getting around" },
                    { id: "lesson-66", title: "66 Buses and coaches" },
                    { id: "lesson-67", title: "67 Train and metro travel" },
                    { id: "lesson-68", title: "68 At the airport" },
                    { id: "lesson-69", title: "69 Cycling" },
                    { id: "lesson-70", title: "70 Taxis" },
                    { id: "lesson-71", title: "71 At the garage" }
                ]
            },
            {
                title: "ON HOLIDAY",
                lessons: [
                    { id: "lesson-72", title: "72 On holiday" },
                    { id: "lesson-73", title: "73 Booking a holiday" },
                    { id: "lesson-74", title: "74 Staying in a hotel" },
                    { id: "lesson-75", title: "75 City sightseeing" },
                    { id: "lesson-76", title: "76 Going camping" },
                    { id: "lesson-77", title: "77 At the beach" },
                    { id: "lesson-78", title: "78 Finding your way" },
                    { id: "lesson-79", title: "79 Holiday problems" }
                ]
            },
            {
                title: "HEALTH AND MEDICINE",
                lessons: [
                    { id: "lesson-80", title: "80 Health and medicine" },
                    { id: "lesson-81", title: "81 At the pharmacy" },
                    { id: "lesson-82", title: "82 Booking an appointment" },
                    { id: "lesson-83", title: "83 Seeing the doctor" },
                    { id: "lesson-84", title: "84 Injuries and emergencies" },
                    { id: "lesson-85", title: "85 The hospital" },
                    { id: "lesson-86", title: "86 Dental care" },
                    { id: "lesson-87", title: "87 Mental health support" }
                ]
            },
            {
                title: "MEDIA AND COMMUNICATIONS",
                lessons: [
                    { id: "lesson-88", title: "88 Media and communications" },
                    { id: "lesson-89", title: "89 Formal phone calls" },
                    { id: "lesson-90", title: "90 Informal phone calls" },
                    { id: "lesson-91", title: "91 Using the internet" },
                    { id: "lesson-92", title: "92 Digital problems" },
                    { id: "lesson-93", title: "93 Emails" },
                    { id: "lesson-94", title: "94 Messaging and video calls" },
                    { id: "lesson-95", title: "95 Social media" },
                    { id: "lesson-96", title: "96 Reading" }
                ]
            }
        ]
    }
];

// Flatten for easy access
const allLessons = [];
courseData.forEach(part => {
    part.categories.forEach(cat => {
        cat.lessons.forEach(lesson => {
            allLessons.push({
                ...lesson,
                partTitle: part.part,
                categoryTitle: cat.title
            });
        });
    });
});
