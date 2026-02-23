function generateBarakhariTable() {
    const consonants = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'क्ष', 'त्र', 'ज्ञ'];
    const matras = ['', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', 'ं', 'ः'];
    
    let html = '<div class="table-responsive"><table class="nepali-table barakhari-full-table" style="min-width: 800px;"><tbody>';
    
    for (let c of consonants) {
        html += '<tr>';
        for (let m of matras) {
            html += `<td style="text-align: center; font-size: 1.5rem; padding: 8px;"><span class="nepali-font">${c}${m}</span></td>`;
        }
        html += '</tr>';
    }
    
    html += '</tbody></table></div>';
    return html;
}

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
                    { 
                        id: "intro", 
                        title: "Intro", 
                        content: `
                            <h2>Intro</h2>
                            <p>Before we learn Nepali, let’s ask a simple question.</p>
                            <p>What is language?</p>
                            <p>Language is how humans coordinate.<br>It’s how we build trust.<br>How we flirt.<br>How we argue.<br>How we pass culture from one generation to the next.</p>
                            <p>There are thousands of languages in the world.<br>We’re choosing Nepali.</p>
                            <p>Why?</p>
                            <p>Because language is access.</p>
                            <p>Access to people.<br>Access to culture.<br>Access to memory.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>What Is Nepali?</h3>
                            <p>Nepali is the official language of Nepal.</p>
                            <p>Nepal is a small country between India and China.<br>Geographically small. Culturally huge.</p>
                            <p>It’s multilingual.<br>Dozens of languages are spoken across the country.<br>But Nepali works as the bridge language.</p>
                            <p>Around 30 million people speak it.<br>Some natively.<br>Some as a second language.</p>
                            <p>There’s also a big Nepali diaspora around the world.</p>
                            <p>If you reconnect with Nepali, you reconnect with people.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Nepali and Hindi</h3>
                            <p>Nepali comes from Sanskrit roots.<br>It’s structurally close to Hindi.</p>
                            <p>If you learn Nepali, Hindi becomes much easier.<br>And Hindi opens access to over a billion people.</p>
                            <p>So this isn’t just cultural.<br>It’s strategic.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>Formal Nepali vs Real Nepali</h3>
                            <p>Let me be honest.</p>
                            <p>I don’t speak “pure formal Nepali.”<br>Most people don’t.</p>
                            <p>In daily life, people mix Nepali and English.<br>We call it Nepanglish.</p>
                            <p>English words inside Nepali grammar.</p>
                            <p>That’s how people actually talk now.</p>
                            <p>Language evolves.<br>English dominates globally.<br>Technology, science, AI — most vocabulary comes from English.</p>
                            <p>So instead of pretending Nepali is frozen in time,<br>we’ll learn it how it’s actually spoken.</p>
                            <p>Kathmandu-centered.<br>Neutral accent.<br>Real conversations.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>What We Will NOT Do</h3>
                            <p>We are not starting with heavy grammar.<br>We are not obsessing over script.</p>
                            <p>Yes, Nepali has its own script.<br>Yes, there is Barakhari.<br>You can learn that separately if you want.</p>
                            <p>This course is about speaking.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>The Two Sides of Language</h3>
                            <p>I divide language into two parts:</p>
                            <p>Solitary:</p>
                            <ul>
                                <li>Reading</li>
                                <li>Writing</li>
                            </ul>
                            <p>Social:</p>
                            <ul>
                                <li>Listening</li>
                                <li>Speaking</li>
                            </ul>
                            <p>Reading and writing are private skills.<br>Speaking and listening are social skills.</p>
                            <p>We focus on the social side.</p>
                            <p>Because language lives in conversation.</p>
                            
                            <hr class="section-divider">
                            
                            <h3>What You’ll Gain</h3>
                            <p>You’ll be able to:</p>
                            <ul>
                                <li>Talk to relatives.</li>
                                <li>Travel in Nepal comfortably.</li>
                                <li>Understand everyday conversations.</li>
                                <li>Feel less like an outsider.</li>
                            </ul>
                            <p>And if you want, you’ll also unlock Hindi faster.</p>
                            <p>But most importantly:</p>
                            <p>You’ll understand how Nepali people actually think and speak.</p>
                            <p>Unfiltered.</p>
                            <p>No academic distance.</p>
                            <p>Just real language.</p>
                        `
                    },
                    { 
                        id: "script-basics", 
                        title: "0.1 script basics", 
                        content: `
                            <h2>0.1 script basics</h2>
                            <p>Listen, every language on earth boils down to vowels and consonants. But the way Nepali puts them together is totally different—and honestly, way more efficient once you see the matrix.</p>
                            <p>Nepali uses the Devanagari script. It hangs from a top line, like laundry on a clothesline, and you read left to right. It’s strictly phonetic. There are no silent letters, no weird "knight" or "receipt" bullshit. What you see is exactly what you say.</p>
                            <p>Here is the 10,000-foot view of how the system works.</p>

                            <div class="callout" style="background-color: var(--callout-bg); border-left: 4px solid var(--callout-border); padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
                                <p style="margin-bottom: 0; color: var(--callout-text);"><strong>Learning the Script:</strong> You need to be able to recognize the scripts. There are vowels and consonants. Your goal is to understand and recognize them. It might take you weeks. You may have to write them down, hum along, or say them out loud. Kids learn these for 2 to 3 years. An adult can learn them within 1 to 2 days, but up to 1 week or so of repeated exposure is necessary for it to stick in your brain.</p>
                            </div>

                            <hr class="section-divider">

                            <h3>1. The Vowels (The Independent Sounds)</h3>
                            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 1.5rem; border-radius: 8px;">
                                <iframe src="https://www.youtube.com/embed/7rGeVE9SxwY?autoplay=1&mute=1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Just like A, E, I, O, U. These are the pure sounds that come out of your throat.</p>
                            <p><strong>The Standalones:</strong> When a vowel starts a word, it looks like this:</p>
                            
                            <div class="alphabet-grid">
                                <div class="alphabet-cell"><span class="nepali-char">अ</span><span class="roman-char">a</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">आ</span><span class="roman-char">aa</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">इ</span><span class="roman-char">i</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ई</span><span class="roman-char">ee</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">उ</span><span class="roman-char">u</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ऊ</span><span class="roman-char">oo</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ऋ</span><span class="roman-char">ri</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ए</span><span class="roman-char">e</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ऐ</span><span class="roman-char">ai</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ओ</span><span class="roman-char">o</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">औ</span><span class="roman-char">au</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">अं</span><span class="roman-char">am</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">अः</span><span class="roman-char">ah</span></div>
                            </div>

                            <p><strong>The Golden Rule:</strong> If a vowel attaches to a consonant, it transforms into a "marker" (a Matra). It stops being a full letter and becomes a little symbol that hangs off the consonant.</p>

                            <hr class="section-divider">

                            <h3>2. The Consonants (The Building Blocks)</h3>
                            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 0.5rem; border-radius: 8px;">
                                <iframe src="https://www.youtube.com/embed/zDDRgtC2TF0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;"><em>Video credit: <a href="https://youtu.be/zDDRgtC2TF0" target="_blank" style="color: inherit; text-decoration: underline;">Original YouTube Owner</a></em></p>
                            <p>There are 36 main consonants. Here’s the trick: every single consonant in Nepali has a built-in "a" sound.</p>
                            
                            <div class="alphabet-grid">
                                <div class="alphabet-cell"><span class="nepali-char">क</span><span class="roman-char">ka</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ख</span><span class="roman-char">kha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ग</span><span class="roman-char">ga</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">घ</span><span class="roman-char">gha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ङ</span><span class="roman-char">nga</span></div>
                                
                                <div class="alphabet-cell"><span class="nepali-char">च</span><span class="roman-char">cha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">छ</span><span class="roman-char">chha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ज</span><span class="roman-char">ja</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">झ</span><span class="roman-char">jha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ञ</span><span class="roman-char">nya</span></div>
                                
                                <div class="alphabet-cell"><span class="nepali-char">ट</span><span class="roman-char">ta</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ठ</span><span class="roman-char">tha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ड</span><span class="roman-char">da</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ढ</span><span class="roman-char">dha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ण</span><span class="roman-char">na</span></div>
                                
                                <div class="alphabet-cell"><span class="nepali-char">त</span><span class="roman-char">ta</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">थ</span><span class="roman-char">tha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">द</span><span class="roman-char">da</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ध</span><span class="roman-char">dha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">न</span><span class="roman-char">na</span></div>
                                
                                <div class="alphabet-cell"><span class="nepali-char">प</span><span class="roman-char">pa</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">फ</span><span class="roman-char">pha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ब</span><span class="roman-char">ba</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">भ</span><span class="roman-char">bha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">म</span><span class="roman-char">ma</span></div>
                                
                                <div class="alphabet-cell"><span class="nepali-char">य</span><span class="roman-char">ya</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">र</span><span class="roman-char">ra</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ल</span><span class="roman-char">la</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">व</span><span class="roman-char">wa</span></div>
                                <div class="alphabet-cell" style="visibility: hidden;"></div>
                                
                                <div class="alphabet-cell"><span class="nepali-char">श</span><span class="roman-char">sha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ष</span><span class="roman-char">sha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">स</span><span class="roman-char">sa</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ह</span><span class="roman-char">ha</span></div>
                                <div class="alphabet-cell" style="visibility: hidden;"></div>
                                
                                <div class="alphabet-cell"><span class="nepali-char">क्ष</span><span class="roman-char">ksha</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">त्र</span><span class="roman-char">tra</span></div>
                                <div class="alphabet-cell"><span class="nepali-char">ज्ञ</span><span class="roman-char">gya</span></div>
                            </div>

                            <p>They are organized logically by how your mouth moves. The alphabet literally starts from the back of your throat (ka, kha) and moves forward to the roof of your mouth, to your teeth, and finally to your lips (pa, pha, ba).</p>

                            <hr class="section-divider">

                            <h3>3. The Barakhari (The Matrix)</h3>
                            <p>This is where the magic happens. The Barakhari is the multiplication table for the language. It’s how you mix the consonants and the vowels.</p>
                            <p>Remember those vowel markers? You take one consonant base, let’s say <span class="nepali-font">क</span> (Ka), and you snap the 12 different vowel markers onto it.</p>
                            <p>It looks like this: <span class="nepali-font">क</span> (Ka), <span class="nepali-font">का</span> (Kaa), <span class="nepali-font">कि</span> (Ki), <span class="nepali-font">की</span> (Kee), <span class="nepali-font">कु</span> (Ku), <span class="nepali-font">कू</span> (Koo), <span class="nepali-font">के</span> (Ke), <span class="nepali-font">कै</span> (Kai), <span class="nepali-font">को</span> (Ko), <span class="nepali-font">कौ</span> (Kau), <span class="nepali-font">कं</span> (Kan), <span class="nepali-font">कः</span> (Kah).</p>
                            <p><strong>Minimalist Hack:</strong> You do not need to memorize 432 different random combinations. Learn the 36 consonants, learn the 12 vowel markers, and snap them together like Legos. You can now read 90% of the language.</p>

                            <hr class="section-divider">

                            <h3>4. Half Characters (The Speed Bumps)</h3>
                            <p>When you speak fast, you don't enunciate every single syllable perfectly. You blend them.</p>
                            <p>If you want to say "Kya" (like the start of the English word "Camera"), you don't say "Ka-Ya". You drop the built-in "a" from the "Ka".</p>
                            <p>In writing, we literally chop off the right side of the letter. The <span class="nepali-font">क</span> (Ka) loses its leg and leans onto the <span class="nepali-font">य</span> (Ya) to become <span class="nepali-font">क्य</span> (Kya). That’s how you get blended, fast-spoken sounds.</p>

                            <hr class="section-divider">

                            <h3>5. The Extras (The Nasal Drops & Modifiers)</h3>
                            <p>You can't ignore these tiny symbols floating above words because they change the meaning entirely.</p>
                            <p><strong>Chandra Bindu (The Moon Dot - <span class="nepali-font">अँ</span>):</strong> It looks like a little crescent moon with a dot inside. It means you push the sound through your nose. Instead of saying "Ha", you say "Hã"—like a nasal hum.</p>
                            <p><strong>Shirbindu (The Top Dot - <span class="nepali-font">अं</span>):</strong> Just a single dot above the line. It adds an "n" or "m" sound right in the middle of a word to bridge two letters together quickly.</p>

                            <hr class="section-divider">

                            <h3>6. The Street-Level Pronunciation Hacks (Cut the Academic Crap)</h3>
                            <p>Okay, if you look at a textbook, they will tell you there are distinct ways to pronounce certain letters. On the actual streets of Kathmandu? Nobody cares. We take shortcuts. Here are the survival hacks:</p>
                            <p><strong>The Three S’s:</strong> The script has three different letters for S/Sh sounds: <span class="nepali-font">श</span>, <span class="nepali-font">ष</span>, and <span class="nepali-font">स</span>. Academics will fight over the tongue placement for each. In real life? Everyone basically pronounces all three like a simple "Sa" or a very soft "Sha" depending on how fast they are talking. Don't stress the difference.</p>
                            <p><strong>B vs. V/W:</strong> The script has <span class="nepali-font">ब</span> (Ba) and <span class="nepali-font">व</span> (Wa/Va). In spoken Nepali, these bleed together constantly. A guy named "Vikas" will be called "Bikas". "Bishwo" and "Vishwa" are the same thing.</p>
                            <p><strong>The Double R/D:</strong> There are weird flapped letters like <span class="nepali-font">ड</span> (Da) and <span class="nepali-font">ड़</span> (Rda). Unless you're reciting classic poetry, don't get hung up on the throat gymnastics. Just roll with a soft 'D' or a slight rolled 'R' and people will know exactly what you mean.</p>
                        `
                    },
                    {
                        id: "barakhari-matrix",
                        title: "0.2 the barakhari matrix",
                        content: `
                            <h2>0.2 The Barakhari Matrix: Hacking the Syllables</h2>
                            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 0.5rem; border-radius: 8px; margin-top: 1.5rem;">
                                <iframe src="https://www.youtube.com/embed/vQSvsW4rTb8?autoplay=1&mute=1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;"><em>Video credit: <a href="https://youtu.be/vQSvsW4rTb8" target="_blank" style="color: inherit; text-decoration: underline;">Original YouTube Owner</a></em></p>
                            <p>Forget everything you know about spelling in English. In Nepali, we don't just awkwardly jam letters together and hope they make sense. We use a highly logical system called Barakhari.</p>
                            <p>Barakhari literally translates to "twelve letters." It’s basically a math formula for syllables:</p>
                            <p><strong>One Consonant + One Vowel Marker (Matra) = One Sound.</strong></p>
                            <p>Once you understand the pattern for just one consonant, you automatically know it for every single consonant in the language. You just swap out the base letter. It’s like clicking Legos together.</p>

                            <hr class="section-divider">

                            <h3>Step 1: The Only 12 Patterns You Need to Know</h3>
                            <p>In everyday Nepali, we only deal with 12 of these vowel patterns (Matras). Do not think of this as "adding vowels." Think of it as adding a modifier to the base letter.</p>
                            <p>Here is the master key:</p>

                            <div class="table-responsive">
                                <table class="nepali-table">
                                    <thead>
                                        <tr>
                                            <th>Sound</th>
                                            <th>Matra (The Symbol)</th>
                                            <th>Example with क (Ka)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><span class="nepali-font">अ</span> (a)</td><td>(No symbol)</td><td><span class="nepali-font">क</span> (Ka)</td></tr>
                                        <tr><td><span class="nepali-font">आ</span> (aa)</td><td><span class="nepali-font">ा</span></td><td><span class="nepali-font">का</span> (Kaa)</td></tr>
                                        <tr><td><span class="nepali-font">इ</span> (i)</td><td><span class="nepali-font">ि</span></td><td><span class="nepali-font">कि</span> (Ki)</td></tr>
                                        <tr><td><span class="nepali-font">ई</span> (ee)</td><td><span class="nepali-font">ी</span></td><td><span class="nepali-font">की</span> (Kee)</td></tr>
                                        <tr><td><span class="nepali-font">उ</span> (u)</td><td><span class="nepali-font">ु</span></td><td><span class="nepali-font">कु</span> (Ku)</td></tr>
                                        <tr><td><span class="nepali-font">ऊ</span> (oo)</td><td><span class="nepali-font">ू</span></td><td><span class="nepali-font">कू</span> (Koo)</td></tr>
                                        <tr><td><span class="nepali-font">ए</span> (e)</td><td><span class="nepali-font">े</span></td><td><span class="nepali-font">के</span> (Ke)</td></tr>
                                        <tr><td><span class="nepali-font">ऐ</span> (ai)</td><td><span class="nepali-font">ै</span></td><td><span class="nepali-font">कै</span> (Kai)</td></tr>
                                        <tr><td><span class="nepali-font">ओ</span> (o)</td><td><span class="nepali-font">ो</span></td><td><span class="nepali-font">को</span> (Ko)</td></tr>
                                        <tr><td><span class="nepali-font">औ</span> (au)</td><td><span class="nepali-font">ौ</span></td><td><span class="nepali-font">कौ</span> (Kau)</td></tr>
                                        <tr><td><span class="nepali-font">अं</span> (an)</td><td><span class="nepali-font">ं</span></td><td><span class="nepali-font">कं</span> (Kan)</td></tr>
                                        <tr><td><span class="nepali-font">अः</span> (ah)</td><td><span class="nepali-font">ः</span></td><td><span class="nepali-font">कः</span> (Kah)</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <p><strong>The Golden Rule:</strong> Notice the first one. <span class="nepali-font">क</span> automatically means <span class="nepali-font">क</span> + <span class="nepali-font">अ</span>. There is no special sign for the "a" sound. It is built-in. If a letter has no extra markings, it naturally ends in a short "a". This one rule removes 90% of beginner confusion.</p>

                            <hr class="section-divider">

                            <h3>Step 2: The Visual Trap (Don't Get Played)</h3>
                            <p>There is one massive trick in this system, and it catches everyone. Look closely at the short "i" sound:</p>
                            <p><span class="nepali-font" style="font-size: 2rem;">कि</span> (Ki)</p>
                            <p>The symbol for the short "i" (<span class="nepali-font">ि</span>) is physically drawn <em>before</em> the consonant, but it is pronounced <em>after</em> it.</p>
                            <p><strong>Writing position ≠ Speaking order.</strong></p>
                            <p>Just remember: Small "i" sits in the front, but speaks in the back.</p>

                            <hr class="section-divider">

                            <h3>Step 3: The Ultimate Shortcut</h3>
                            <p>Once you know the 12 patterns for <span class="nepali-font">क</span>, you never have to memorize the Barakhari again. The markers never change. You just swap the base consonant.</p>
                            <p>Take <span class="nepali-font">ग</span> (Ga): <span class="nepali-font">गा, गि, गी, गु, गू, गे, गै, गो, गौ, गं, गः</span></p>
                            <p>Take <span class="nepali-font">न</span> (Na): <span class="nepali-font">ना, नि, नी, नु, नू, ने, नै, नो, नौ, नं, नः</span></p>
                            <p>See? It’s just plug-and-play.</p>

                            <hr class="section-divider">

                            <h3>Clearing Up the Academic Bullshit</h3>
                            <p>If you look at old charts or street signs, you’re going to see some weird shapes that don't fit the 12 patterns above. Let’s clear those up right now so you don't panic.</p>
                            <p><strong>1. The "Ri" Exception (<span class="nepali-font">ऋ / ृ</span>)</strong><br>You might see words like Krishi (<span class="nepali-font">कृषि</span> - agriculture) with a little hook at the bottom. That hook is the "Ri" sound. Academics love to debate where this belongs. For our purposes: It is not part of the 12 Barakhari. You will see it, it exists, but we treat it as a separate, standalone rule. Don't jam it into your matrix. (And honestly, the long version of it—<span class="nepali-font">ॠ</span>—is practically dead. Ignore it completely).</p>
                            <p><strong>2. The "Kra" Confusion (<span class="nepali-font">क्र, क्रि, क्री</span>)</strong><br>You are going to see symbols stacked on top of each other, or lines slashing through them, like <span class="nepali-font">क्र</span> (Kra).</p>
                            <p>These are not vowel combinations. These are two consonants physically crashing into each other (<span class="nepali-font">क्</span> + <span class="nepali-font">र</span> = Kra). These are called "joint letters." They are a completely different lesson. Keep your Barakhari clean.</p>

                            <hr class="section-divider">

                            <h3>The Complete Barakhari Matrix (All 432 Combinations)</h3>
                            <p>Here is the full matrix of all 36 consonants combined with the 12 vowel markers. You don't need to memorize this—just use it to see the pattern in action.</p>
                            ${generateBarakhariTable()}
                        `
                    },
                    {
                        id: "checkpoint",
                        title: "0.3 checkpoint",
                        content: `
                            <h2>0.3 Checkpoint</h2>
                            <p>Alright, here is where the rubber meets the road. By now, you’ve seen the engine. You know the vowels, the consonants, and how the Barakhari matrix snaps them together.</p>
                            <p>Let’s get one thing straight: the goal here is not to make you a speed reader. You do not need to be fast. The only goal is that when you look at a sign, a menu, or a text message, it isn’t just a bunch of random squiggly lines anymore. If you encounter these letters, you should be able to slowly sound them out and interpret what they mean.</p>
                            <p>Realistically, it’s going to take you about a week to lock this into your brain. Maybe more, maybe less, depending on how intentional you are about practicing. And that's fine.</p>
                            <p>Like I said on Day 1, reading and writing are not our main goals—speaking is. We aren't going to test you like you're in a high school exam. But we are going to use the Nepali script in the upcoming lessons so you can get used to it. If some weird, complex new character pops up later on, don't stress. I will explain it to you right then and there.</p>
                            <p>But before we move on to actual conversations, we need a basic reality check to make sure the foundation is there.</p>
                            <p>Here is your test. It’s only two steps.</p>

                            <hr class="section-divider">

                            <h3>Test 1: Own Your Name</h3>
                            <p>You need to be able to write, read, and say your own name using the Nepali script. Since the script is entirely phonetic, you just sound out your English name and find the matching Nepali Lego blocks to build it.</p>
                            
                            <h4>Own Your Name (The Translation Hack)</h4>
                            <p>Here is the golden rule for writing a foreign name in Nepali: English spelling is absolute garbage. Ignore it completely. In English, you have silent letters, weird combinations, and letters that change their sound depending on their mood. Nepali doesn't play that game. We only care about how the name sounds coming out of your mouth.</p>
                            <p>To write your name in Nepali, you sound it out like a caveman and just find the matching Lego blocks.</p>
                            
                            <p><strong>Step 1: Say it out loud and drop the silent bullshit.</strong><br>
                            If your name is "Sarah," drop the 'H'. It’s silent. You are just saying "Saa-raa".<br>
                            If your name is "John," drop the 'H'. It's just "Jo-n".</p>
                            
                            <p><strong>Step 2: Break it into syllables and find the blocks.</strong><br>
                            Let’s look at a few examples of how we hack Western names into Devanagari:</p>

                            <div class="table-responsive">
                                <table class="nepali-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>How it sounds</th>
                                            <th>The Blocks</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>David</td>
                                            <td>"Day - vid"</td>
                                            <td><span class="nepali-font">ड</span> + <span class="nepali-font">े</span> (De) | <span class="nepali-font">भ</span> + <span class="nepali-font">ि</span> (bhi - remember, 'v' and 'b' bleed together in Nepali) | <span class="nepali-font">ड</span> (d)</td>
                                            <td><span class="nepali-font">डेभिड</span></td>
                                        </tr>
                                        <tr>
                                            <td>Sarah</td>
                                            <td>"Saa - raa"</td>
                                            <td><span class="nepali-font">स</span> + <span class="nepali-font">ा</span> (Saa) | <span class="nepali-font">र</span> + <span class="nepali-font">ा</span> (raa)</td>
                                            <td><span class="nepali-font">सारा</span></td>
                                        </tr>
                                        <tr>
                                            <td>Michael</td>
                                            <td>"Mai - kal"</td>
                                            <td><span class="nepali-font">म</span> + <span class="nepali-font">ा</span> (Maa) + <span class="nepali-font">इ</span> (i) = <span class="nepali-font">माई</span> (Mai) | <span class="nepali-font">क</span> (ka) | <span class="nepali-font">ल</span> (l)</td>
                                            <td><span class="nepali-font">माइकल</span></td>
                                        </tr>
                                        <tr>
                                            <td>Chloe</td>
                                            <td>"Klo - ee"</td>
                                            <td><span class="nepali-font">क</span> + <span class="nepali-font">ल</span> + <span class="nepali-font">ो</span> (Klo - this is a joint letter, remember those?) | <span class="nepali-font">ई</span> (ee)</td>
                                            <td><span class="nepali-font">क्लोई</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p><strong>Your Turn:</strong><br>
                            Take a piece of paper. Say your first name out loud. Break it into its raw sounds, look at the Barakhari matrix, and build it. Once you can write your own name, you officially have skin in the game.</p>

                            <hr class="section-divider">

                            <h3>Test 2: Decode the Street Text</h3>
                            <p>Here are five incredibly basic, everyday words. Do not look at the English translations yet. Cover the right side of the page. Look at the Nepali script, use your Barakhari rules, and slowly sound them out. Once you can decode these, you have enough of an idea to move forward.</p>

                            <div class="table-responsive">
                                <table class="nepali-table">
                                    <thead>
                                        <tr>
                                            <th>Nepali</th>
                                            <th>Breakdown</th>
                                            <th>Word</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span class="nepali-font">नेपाल</span></td>
                                            <td><span class="nepali-font">न</span> + <span class="nepali-font">े</span> (Ne) | <span class="nepali-font">प</span> + <span class="nepali-font">ा</span> (Paa) | <span class="nepali-font">ल</span> (l)</td>
                                            <td>Nepal</td>
                                        </tr>
                                        <tr>
                                            <td><span class="nepali-font">चिया</span></td>
                                            <td><span class="nepali-font">च</span> + <span class="nepali-font">ि</span> (Chi - remember the visual trap, small 'i' sits in front!) | <span class="nepali-font">य</span> + <span class="nepali-font">ा</span> (Yaa)</td>
                                            <td>Chiya (Tea)</td>
                                        </tr>
                                        <tr>
                                            <td><span class="nepali-font">पानी</span></td>
                                            <td><span class="nepali-font">प</span> + <span class="nepali-font">ा</span> (Paa) | <span class="nepali-font">न</span> + <span class="nepali-font">ी</span> (Nee)</td>
                                            <td>Paani (Water)</td>
                                        </tr>
                                        <tr>
                                            <td><span class="nepali-font">बस</span></td>
                                            <td><span class="nepali-font">ब</span> (Ba) | <span class="nepali-font">स</span> (sa)</td>
                                            <td>Bas (Bus - yep, we just use the English word).</td>
                                        </tr>
                                        <tr>
                                            <td><span class="nepali-font">काम</span></td>
                                            <td><span class="nepali-font">क</span> + <span class="nepali-font">ा</span> (Kaa) | <span class="nepali-font">म</span> (m)</td>
                                            <td>Kaam (Work)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>If you can slowly sound those out and understand the mechanics of why they sound that way, you pass. You have the basic idea of how the text is written and read.</p>
                            <p>Once you’ve got this down, the hard part of the script is over. Everything else gets easier once you actually start reading real sentences.</p>
                        `
                    }
                ]
            },
            {
                title: "CONVERSATION SKILLS",
                lessons: [
                    { 
                        id: "lesson-01", 
                        title: "01 Greetings",
                        content: `
                            <h2>01 Greetings</h2>
                            <p>If you can greet someone properly, you already sound 50% local.</p>
                            <p>In English, you can throw a "Hey" at your boss, your little brother, and the guy making your coffee, and nobody cares. Nepali doesn't work like that. Here, your greeting depends entirely on formality, relationship, and age. Respect is literally baked into the grammar.</p>

                            <div style="margin: 2rem 0; display: flex; flex-direction: column; align-items: center; font-family: var(--font-sans);">
                                <div style="width: 100%; max-width: 300px; display: flex; flex-direction: column; gap: 4px;">
                                    <div style="background-color: #d32f2f; color: white; padding: 12px; text-align: center; border-radius: 4px 4px 0 0; font-weight: bold;">Highly Formal / Ceremonial</div>
                                    <div style="background-color: #f57c00; color: white; padding: 16px; text-align: center; font-weight: bold;">Elders / Strangers</div>
                                    <div style="background-color: #388e3c; color: white; padding: 20px; text-align: center; border-radius: 0 0 4px 4px; font-weight: bold;">Friends / Informal</div>
                                </div>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">The Respect Pyramid</p>
                            </div>

                            <p>Let’s break it down.</p>

                            <hr class="section-divider">

                            <h3>1. Informal Greetings (Friends, Same Age, Casual)</h3>
                            <p>This is the street-level stuff. You use these with friends, people your own age, or younger kids. Do not use these with your grandma.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">के छ?</span> (Ke cha?)</strong><br>
                                    <em>Meaning: What’s up? / How are things? (This is the undisputed king of casual greetings).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">के छ खबर?</span> (Ke cha khabar?)</strong><br>
                                    <em>Meaning: What’s the news? (Slightly longer version of "Ke cha").</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">सन्चै?</span> (Sanchai?)</strong><br>
                                    <em>Meaning: You good? / All well?</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong>Hey / Hello</strong><br>
                                    <em>Yes, we use English directly. In Kathmandu, people naturally mix the two. Saying "Hello, ke cha bro?" is 100% authentic everyday street talk.</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <h3>2. Formal Greetings (The Respect Tier)</h3>
                            <p>You use these with elders, teachers, strangers, or in professional settings.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 12px;">
                                    <div style="flex-shrink: 0; margin-top: 4px;">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--link-color);">
                                            <path d="M12 21c4-2 6-5.5 6-9v-1a3 3 0 0 0-6 0v1a3 3 0 0 0-6 0v-1a3 3 0 0 0-6 0v1c0 3.5 2 7 6 9Z"/>
                                            <path d="M12 12v9"/>
                                            <path d="M12 12a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1"/>
                                            <path d="M12 12a3 3 0 0 0-3-3h0a3 3 0 0 0-3 3v1"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <strong><span class="nepali-font">नमस्ते</span> (Namaste)</strong><br>
                                        <em>Meaning: "I bow to the divine in you."</em><br>
                                        The Reality: This is the standard, bulletproof respectful greeting. Put your hands together, say this, and you can't go wrong.
                                    </div>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">नमस्कार</span> (Namaskar)</strong><br>
                                    <em>Meaning: A heavier, more formal version of Namaste.</em><br>
                                    When to use: Highly formal events, talking to very senior people, or addressing a crowd.
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">शुभ प्रभात</span> (Subha Prabhat) / <span class="nepali-font">शुभ बिहानी</span> (Subha Bihani)</strong><br>
                                    <em>Meaning: Good morning.</em><br>
                                    The Reality Check: Cut this from your vocabulary right now. It is incredibly stiff. Unless you are reading the morning news on a radio broadcast, do not say this to a human being. Just say "Good morning" in English.
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <h3>3. Extending the Greeting (The Follow-Up)</h3>
                            <p>In Nepal, greeting is not just a polite checkbox; it’s social glue. You don’t just say hi and walk away. You check in. But notice how the verb changes based on who you are talking to:</p>

                            <div style="margin: 2rem 0; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border: 1px solid var(--border-color);">
                                <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 1rem;">
                                        <div style="background: #e3f2fd; color: #1976d2; padding: 8px 16px; border-radius: 20px; font-weight: 600; min-width: 100px; text-align: center;">Friend</div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1976d2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        <div><strong><span class="nepali-font">के गर्दै छौ?</span> (Ke gardai <span style="color: #1976d2;">chau</span>?)</strong> = What are you doing?</div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 1rem;">
                                        <div style="background: #fce4ec; color: #c2185b; padding: 8px 16px; border-radius: 20px; font-weight: 600; min-width: 100px; text-align: center;">Elder</div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c2185b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        <div><strong><span class="nepali-font">के गर्दै हुनुहुन्छ?</span> (Ke gardai <span style="color: #c2185b;">hunuhuncha</span>?)</strong> = What are you doing?</div>
                                    </div>
                                </div>
                            </div>

                            <p>See the shift?<br>
                            "Chau" is casual. "Hunuhuncha" carries heavy respect. You will learn this pattern as we go, but just notice it for now.</p>

                            <hr class="section-divider">

                            <h3>4. The Cultural Insight: The Ultimate Nepali Greeting</h3>
                            <p>If you want to know the absolute most authentic way Nepali people check on each other, it isn't "How are you?"</p>
                            <p>It’s this:</p>

                            <div style="display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0; padding: 1rem; background: #fff3e0; border-left: 4px solid #ff9800; border-radius: 4px;">
                                <div style="display: flex; flex-direction: column; align-items: center; color: #e65100;">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                    <span style="font-size: 0.75rem; font-weight: bold; margin-top: 4px;">10:30 AM</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; color: #e65100;">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                        <path d="M2 12h20"/><path d="M12 12v10"/>
                                        <path d="M2 12a10 10 0 0 0 20 0Z"/>
                                        <path d="M2 12a10 10 0 0 1 20 0Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <strong style="font-size: 1.2rem;"><span class="nepali-font">खाना खानुभयो?</span> (Khana khanu bhayo?)</strong><br>
                                    <em>Literal translation: Have you eaten rice/food?</em>
                                </div>
                            </div>

                            <p>In Nepal, asking if someone has eaten is the highest form of showing warmth and care. If it's 10:30 AM or 8:00 PM, people won't ask how your day is going—they will ask if you've sat down for a massive plate of Dal Bhat yet. If you use this phrase with a local, you will instantly win them over.</p>
                        `
                    },
                    { 
                        id: "lesson-02", 
                        title: "02 Making introductions",
                        content: `
                            <h2>02 Making Introductions</h2>
                            <p>In English, introducing yourself is a flat playing field. You say, "Hi, I'm Kavi," to the CEO or the bartender, and it works exactly the same.</p>
                            <p>Nepali does not work like that.</p>
                            <p>In Nepal, the language is always doing the math on the relationship. It constantly measures age, hierarchy, and respect. If you get the respect levels right, you instantly sound local and tuned in. If you mess them up, you sound incredibly socially awkward.</p>
                            <p>Here is exactly how to introduce yourself and others without stepping on any toes.</p>

                            <div style="margin: 2rem 0; display: flex; flex-direction: column; align-items: center; font-family: var(--font-sans);">
                                <div style="width: 100%; max-width: 300px; display: flex; flex-direction: column; gap: 4px;">
                                    <div style="background-color: #d32f2f; color: white; padding: 12px; text-align: center; border-radius: 4px 4px 0 0; font-weight: bold;">Hajur / Uhaa<br><span style="font-size: 0.8rem; font-weight: normal;">(Highly Respectful)</span></div>
                                    <div style="background-color: #f57c00; color: white; padding: 16px; text-align: center; font-weight: bold;">Tapai<br><span style="font-size: 0.8rem; font-weight: normal;">(Formal)</span></div>
                                    <div style="background-color: #388e3c; color: white; padding: 20px; text-align: center; border-radius: 0 0 4px 4px; font-weight: bold;">Timi / U<br><span style="font-size: 0.8rem; font-weight: normal;">(Casual)</span></div>
                                </div>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">The Pronoun Respect Pyramid</p>
                            </div>

                            <hr class="section-divider">

                            <h3>1. Informal Self-Introduction (Friends / Same Age)</h3>
                            <p>Use this with people your own age, at a bar, or hanging out casually.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">हेलो, म चाहिँ कवि हो।</span> (Hello, ma chai Kavi ho.)</strong><br>
                                    <em>Meaning: Hi, I’m Kavi.</em><br>
                                    The Breakdown: "Ma" = I. "Ho" = am.<br>
                                    The Secret Weapon: Notice the word chai (<span class="nepali-font">चाहिँ</span>). This is an emphasis marker. It basically means "as for me." Dropping a "chai" into your sentence immediately makes you sound native.
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">म काठमाडौँबाट हो।</span> (Ma Kathmandu bata ho.)</strong><br>
                                    <em>Meaning: I’m from Kathmandu. ("bata" = from).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">तिमीलाई भेटेर खुसी लाग्यो।</span> (Timilai bhetera khusi lagyo.)</strong><br>
                                    <em>Meaning: Nice to meet you. (Informal)</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई पनि खुसी लाग्यो।</span> (Malai pani khusi lagyo.)</strong><br>
                                    <em>Meaning: Nice to meet you too.</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <h3>2. Formal Self-Introduction (The Respect Tier)</h3>
                            <p>Use this when walking into a professional meeting, talking to elders, or meeting someone's parents. You drop the casual "Hello" and upgrade the whole structure.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">नमस्ते, मेरो नाम कवि हो।</span> (Namaste, mero naam Kavi ho.)</strong><br>
                                    <em>Meaning: Hello, my name is Kavi. (Notice we switched from "I am Kavi" to the much more polite "My name is Kavi").</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">हजुरलाई भेटेर खुसी लाग्यो।</span> (Hajurlai bhetera khusi lagyo.)</strong><br>
                                    <em>Meaning: Nice to meet you. (Respectful)</em>
                                </li>
                            </ul>

                            <div style="margin: 2rem 0; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                                <p style="margin-bottom: 1rem; font-weight: bold; color: var(--text-muted);">The Pronoun Shift</p>
                                <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                                    <div style="background: #e3f2fd; color: #1976d2; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 1.1rem;">
                                        <span class="nepali-font">तिमीलाई</span><br>(Timilai)
                                        <div style="font-size: 0.8rem; font-weight: normal; margin-top: 4px;">Casual</div>
                                    </div>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    <div style="background: #fce4ec; color: #c2185b; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 1.1rem;">
                                        <span class="nepali-font">हजुरलाई</span><br>(Hajurlai)
                                        <div style="font-size: 0.8rem; font-weight: normal; margin-top: 4px;">Respectful</div>
                                    </div>
                                </div>
                            </div>

                            <hr class="section-divider">

                            <h3>3. Introducing Someone Else (The Respectful Way)</h3>
                            <p>When you are the bridge connecting two people, the respect level of your words sets the tone for their relationship. If you are introducing a boss, an elder, or a respected guest, use this:</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">उहाँ चाहिँ राम हुनुहुन्छ।</span> (Uhaa chai Ram hunuhuncha.)</strong><br>
                                    <em>Meaning: This is Ram. ("Uhaa" = He/She respectful).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">उहाँ मेरो साथी हुनुहुन्छ।</span> (Uhaa mero sathi hunuhuncha.)</strong><br>
                                    <em>Meaning: He is my friend. (Said with a respectful tone).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">हजुर दुवैजनाको चिनजान भयो?</span> (Hajur duwaijana ko chinjaan bhayo?)</strong><br>
                                    <em>Meaning: Have you two met? (Literally: Has acquaintance happened between you two respected people?)</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <h3>4. Introducing Someone Informally (The Casual Way)</h3>
                            <p>If you are at a cafe and your buddy walks up to your table, keep it loose.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">ऊ चाहिँ काल हो, मेरो साथी।</span> (U chai Kaal ho, mero sathi.)</strong><br>
                                    <em>Meaning: This is Kaal, my friend. ("U" = He/She casual).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">तिमीहरुको चिनजान भयो?</span> (Timi haru ko chinjaan bhayo?)</strong><br>
                                    <em>Meaning: You guys know each other?</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <h3>The Cultural Insight: Pronoun Survival Guide</h3>
                            <p>If you want to survive Kathmandu socially, memorize this rule right now.<br>Nepali has three distinct gears for talking to and about people:</p>

                            <div class="callout" style="background-color: #f3f4f6; border-left: 4px solid #6b7280; padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
                                <ul style="list-style-type: none; padding: 0; margin: 0;">
                                    <li style="margin-bottom: 0.5rem;"><strong>Casual (Timi / U):</strong> For friends, people your age, and younger people.</li>
                                    <li style="margin-bottom: 0.5rem;"><strong>Respectful (Tapai / Hajur):</strong> For elders, strangers, and professionals.</li>
                                    <li><strong>Third Person Respect (Uhaa):</strong> When talking about someone you respect, you do not call them "U" (He/She). You call them "Uhaa".</li>
                                </ul>
                            </div>

                            <p>Shift gears correctly, and you’re golden.</p>
                        `
                    },
                    { 
                        id: "lesson-03", 
                        title: "03 Conversation fillers",
                        content: `
                            <h2>03 Conversational Fillers (How Not to Sound Like a Robot)</h2>
                            <p>Grammar and vocabulary are great, but this is the real shit. This is where the language actually feels alive.</p>
                            <p>When you listen to native speakers, they don't talk in perfectly structured, textbook sentences. They hesitate. They think out loud. They make human sounds to buy time or soften the blow of a harsh opinion. If you just rattle off perfectly correct sentences without any of these fillers, you sound like a robot.</p>
                            <p>If you want to sound warm, natural, and local, you need to master the filler.</p>
                            <p>Let’s break down the sounds of the street.</p>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #2e7d32;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                <h3 style="margin: 0;">1. Starting a Sentence (Getting the Engine Going)</h3>
                            </div>
                            <p>In English, you start a thought with "Well...", "So...", or "Right...". In Nepali, we use these:</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">अनि...</span> (Ani...)</strong> = And / So...</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">ल...</span> (La...)</strong> = Alright / Okay, let’s...</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">त्यसो भए...</span> (Teso bhaye...)</strong> = In that case...</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">खै...</span> (Khoi...)</strong> = Hmm / I’m not sure...</li>
                            </ul>
                            <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin-top: 1rem;">
                                <strong>Example:</strong> <span class="nepali-font">अनि, सुरु गरम?</span> (Ani, suru garam?) = So, shall we start?
                            </div>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f57c00;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                <h3 style="margin: 0;">2. Buying Time (Thinking & Hesitating)</h3>
                            </div>
                            <p>When your brain freezes and you need a second to find the right word, do not just stare at people in dead silence. Use these:</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">उम्म...</span> (Umm...)</strong> = Exactly the same as English. Just use it.</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">खै...</span> (Khoi...)</strong> = Not sure / Let me think...</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">थाहा छैन...</span> (Tha chaina...)</strong> = I don’t know.</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">के भन्नु...</span> (Ke bhannu...)</strong> = What to say... (This is the ultimate lifeline when you are stuck in a conversation).</li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #1976d2;"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
                                <h3 style="margin: 0;">3. Softening Opinions (Don't Be a Dick)</h3>
                            </div>
                            <p>If you didn't like something, you don't just bluntly say "It was bad." You soften it so you don't sound aggressive.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">साँचो भन्दा...</span> (Sacho bhanda...)</strong> = Honestly... / To be honest...</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">जस्तो लाग्यो</span> (Jasto lagyo)</strong> = I felt like...</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">जस्तो छ</span> (Jasto cha)</strong> = It seems...</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">खै, ठिकै थियो</span> (Khai, thik nai thiyo)</strong> = It was okay, I guess.</li>
                            </ul>
                            <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin-top: 1rem;">
                                <strong>Example:</strong> <span class="nepali-font">राम्रै थियो तर अलि लामो भयो।</span> (Ramrai thiyo tara ali lamo bhayo.) = It was good, but a bit long.
                            </div>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #d32f2f;"><path d="M9 18l6-6-6-6"/></svg>
                                <h3 style="margin: 0;">4. The Pivot (Saying "But...")</h3>
                            </div>
                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">तर</span> (Tara)</strong> = But</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">तर नि</span> (Tara ni)</strong> = But still</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">तर पनि</span> (Tara pani)</strong> = Even so</li>
                            </ul>
                            <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin-top: 1rem;">
                                <strong>Example:</strong> <span class="nepali-font">राम्री छ तर अलि बदमास छ।</span> (Ramri cha tara ali badmash cha.) = She’s cute but a bit naughty.
                            </div>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #7b1fa2;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                <h3 style="margin: 0;">5. Ending Softly (The Fade-Out)</h3>
                            </div>
                            <p>Sometimes you don't want to make a hard, absolute statement. You want to leave some wiggle room.</p>
                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">सायद</span> (Sayad)</strong> = Maybe</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">लाग्छ</span> (Lagcha)</strong> = I think</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">हुन सक्छ</span> (Huna sakcha)</strong> = Could be</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">त्यही होला</span> (Tyahi hola)</strong> = That’s probably it</li>
                            </ul>
                            <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin-top: 1rem;">
                                <strong>Example:</strong> <span class="nepali-font">त्यही होला, सायद।</span> (Tyahi hola, sayad.) = That’s probably it, maybe.
                            </div>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #00796b;"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                <h3 style="margin: 0;">6. Tag Questions (Right? / Isn't it?)</h3>
                            </div>
                            <p>Instead of asking a full question, you just make a statement and tag a little hook at the end to get them to agree with you.</p>
                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><strong>...<span class="nepali-font">होइन?</span> (...hoina?)</strong> = isn't it?</li>
                                <li style="margin-bottom: 0.5rem;"><strong>...<span class="nepali-font">हैन र?</span> (...haina ra?)</strong> = right?</li>
                                <li style="margin-bottom: 0.5rem;"><strong>...<span class="nepali-font">हैन?</span> (...haina?)</strong> = isn't that so?</li>
                            </ul>
                            <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin-top: 1rem;">
                                <strong>Example:</strong> <span class="nepali-font">ऊ रिसाएको छैन, होइन?</span> (U risayeko chaina, hoina?) = He’s not upset, right?<br>
                                <span class="nepali-font">तिमी आएनौ, हैन?</span> (Timi aayenau, haina?) = You didn’t come, right?
                            </div>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #c2185b;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                <h3 style="margin: 0;">7. Showing You’re Alive (Active Listening)</h3>
                            </div>
                            <p>In the West, it’s polite to sit quietly while someone talks. In Nepal, if you stay silent, you seem cold or dead inside. You have to actively react, echo, and confirm that you are tracking with them.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">हो र?</span> (Ho ra?)</strong> = Really?</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">ए?</span> (Eh?)</strong> = Oh?</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">वा!</span> (Wah!)</strong> = Wow!</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">है?</span> (Hai?)</strong> = Right?</li>
                                <li style="margin-bottom: 0.5rem;"><strong><span class="nepali-font">कस्तो?</span> (Kasto?)</strong> = How was it?</li>
                            </ul>

                            <h4 style="margin-top: 2rem;">The Flow in Real Life:</h4>
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; background: #f9fafb; padding: 1.5rem; border-radius: 12px; border: 1px solid #e5e7eb; max-width: 500px; margin: 1.5rem auto;">
                                <!-- Them -->
                                <div style="display: flex; justify-content: flex-start;">
                                    <div style="background: #e5e5ea; color: black; padding: 10px 16px; border-radius: 18px; border-bottom-left-radius: 4px; max-width: 80%;">
                                        <div style="font-size: 0.75rem; color: #666; margin-bottom: 4px;">Them</div>
                                        <span class="nepali-font">म पेरिस गएँ।</span><br>
                                        <span style="font-size: 0.85rem; color: #555;">(Ma Paris gaye - I went to Paris.)</span>
                                    </div>
                                </div>
                                <!-- You -->
                                <div style="display: flex; justify-content: flex-end;">
                                    <div style="background: #007aff; color: white; padding: 10px 16px; border-radius: 18px; border-bottom-right-radius: 4px; max-width: 80%;">
                                        <div style="font-size: 0.75rem; color: #e0e0e0; margin-bottom: 4px; text-align: right;">You</div>
                                        <span class="nepali-font">हो र?</span><br>
                                        <span style="font-size: 0.85rem; color: #e0e0e0;">(Ho ra? - Really?)</span>
                                    </div>
                                </div>
                                <!-- Them -->
                                <div style="display: flex; justify-content: flex-start;">
                                    <div style="background: #e5e5ea; color: black; padding: 10px 16px; border-radius: 18px; border-bottom-left-radius: 4px; max-width: 80%;">
                                        <div style="font-size: 0.75rem; color: #666; margin-bottom: 4px;">Them</div>
                                        <span class="nepali-font">त्यहाँ पानी परेको थियो।</span><br>
                                        <span style="font-size: 0.85rem; color: #555;">(Tyaha pani pareko thiyo - It was raining there.)</span>
                                    </div>
                                </div>
                                <!-- You -->
                                <div style="display: flex; justify-content: flex-end;">
                                    <div style="background: #007aff; color: white; padding: 10px 16px; border-radius: 18px; border-bottom-right-radius: 4px; max-width: 80%;">
                                        <div style="font-size: 0.75rem; color: #e0e0e0; margin-bottom: 4px; text-align: right;">You</div>
                                        <span class="nepali-font">ओहो...</span><br>
                                        <span style="font-size: 0.85rem; color: #e0e0e0;">(Oh ho... - Oh man / Oh no...)</span>
                                    </div>
                                </div>
                                <!-- Them -->
                                <div style="display: flex; justify-content: flex-start;">
                                    <div style="background: #e5e5ea; color: black; padding: 10px 16px; border-radius: 18px; border-bottom-left-radius: 4px; max-width: 80%;">
                                        <div style="font-size: 0.75rem; color: #666; margin-bottom: 4px;">Them</div>
                                        <span class="nepali-font">आइफल टावर गएँ।</span><br>
                                        <span style="font-size: 0.85rem; color: #555;">(Eiffel Tower gaye - I went to the Eiffel Tower.)</span>
                                    </div>
                                </div>
                                <!-- You -->
                                <div style="display: flex; justify-content: flex-end;">
                                    <div style="background: #007aff; color: white; padding: 10px 16px; border-radius: 18px; border-bottom-right-radius: 4px; max-width: 80%;">
                                        <div style="font-size: 0.75rem; color: #e0e0e0; margin-bottom: 4px; text-align: right;">You</div>
                                        <span class="nepali-font">वा!</span><br>
                                        <span style="font-size: 0.85rem; color: #e0e0e0;">(Wah! - Wow!)</span>
                                    </div>
                                </div>
                            </div>

                            <hr class="section-divider">

                            <h3>The Cultural Insight: The Warmth of Noise</h3>
                            <p>Nepali conversations are highly interactive. We constantly confirm what the other person is saying. Tossing out a "Ho ra?" or an "Oh ho..." doesn't interrupt the speaker—it encourages them. These little fillers are exactly what take you from sounding like a foreigner reading a textbook, to sounding like a local having a beer with a friend.</p>
                        `
                    },
                    { 
                        id: "lesson-04", 
                        title: "04 Saying you don't understand",
                        content: `
                            <h2>04 Surviving Confusion (How to Say "What?!")</h2>
                            <p>Eventually, you are going to hit a wall. Someone is going to speak too fast, use a word you don't know, or completely mumble.</p>
                            <p>When you don’t understand something in English, you usually just say, "Sorry?" or "Excuse me?" But if you directly translate that into Nepali using a dictionary, you are going to sound absolutely ridiculous. Textbooks will tell you to say Kshama garnuhos (Forgive me). Do not do that unless you just ran over their dog.</p>
                            <p>Here is how you actually navigate confusion without sounding like an alien.</p>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f44336;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                <h3 style="margin: 0;">1. Saying "I don’t understand" (The Reality Check)</h3>
                            </div>
                            <p>In Nepal, people avoid bluntness. We don't usually just stare at someone and say, "I don't get it." We soften the blow.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मैले बुझिनँ।</span> (Maile bujhina.)</strong><br>
                                    <em>Meaning: I didn’t understand. (This is your standard, neutral baseline).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">कुरा बुझिएन नि।</span> (Kura bujhiyena ni.)</strong><br>
                                    <em>Meaning: The matter wasn't understood. (This is a very natural, softer way to say it. You are blaming "the matter" instead of saying "I am failing to understand you.")</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">के भन्या?</span> (Ke bhanya?)</strong><br>
                                    <em>Meaning: What did you say? (This is the spoken contraction of Ke bhaneko. It is highly casual. Use it with friends, not your boss).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">बुझिनँ यार।</span> (Bujhina yaar.)</strong><br>
                                    <em>Meaning: I didn't get it, man. (Your go-to phrase with your buddies).</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #1976d2;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                <h3 style="margin: 0;">2. The Magic Word: "Hajur?" (When you didn't hear them)</h3>
                            </div>
                            <p>Let’s fix the biggest mistake foreigners make. When you didn't hear someone, do not apologize. We do not use "Sorry" or "Maaf garnuhos" just because the room was loud.</p>
                            <p>We use one magic word: <strong><span class="nepali-font">हजुर</span> (Hajur)</strong>.</p>

                            <div style="margin: 2rem 0; display: flex; justify-content: center; align-items: center; position: relative; height: 300px; background: #f8f9fa; border-radius: 12px; border: 1px solid var(--border-color);">
                                <svg width="100%" height="100%" viewBox="0 0 400 300" style="max-width: 400px;">
                                    <!-- Lines -->
                                    <line x1="200" y1="150" x2="100" y2="80" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 4" />
                                    <line x1="200" y1="150" x2="300" y2="80" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 4" />
                                    <line x1="200" y1="150" x2="100" y2="220" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 4" />
                                    <line x1="200" y1="150" x2="300" y2="220" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 4" />
                                    
                                    <!-- Center Node -->
                                    <circle cx="200" cy="150" r="45" fill="#1976d2" />
                                    <text x="200" y="145" text-anchor="middle" fill="white" font-weight="bold" font-size="20" font-family="sans-serif">हजुर</text>
                                    <text x="200" y="165" text-anchor="middle" fill="#e3f2fd" font-size="14" font-family="sans-serif">(Hajur)</text>

                                    <!-- Outer Nodes -->
                                    <rect x="30" y="50" width="140" height="40" rx="20" fill="#ffffff" stroke="#d1d5db" stroke-width="2" />
                                    <text x="100" y="75" text-anchor="middle" fill="#374151" font-weight="bold" font-size="14" font-family="sans-serif">Excuse me?</text>

                                    <rect x="230" y="50" width="140" height="40" rx="20" fill="#ffffff" stroke="#d1d5db" stroke-width="2" />
                                    <text x="300" y="75" text-anchor="middle" fill="#374151" font-weight="bold" font-size="14" font-family="sans-serif">Yes, I'm listening</text>

                                    <rect x="30" y="200" width="140" height="40" rx="20" fill="#ffffff" stroke="#d1d5db" stroke-width="2" />
                                    <text x="100" y="225" text-anchor="middle" fill="#374151" font-weight="bold" font-size="14" font-family="sans-serif">Pardon?</text>

                                    <rect x="230" y="200" width="140" height="40" rx="20" fill="#ffffff" stroke="#d1d5db" stroke-width="2" />
                                    <text x="300" y="225" text-anchor="middle" fill="#374151" font-weight="bold" font-size="14" font-family="sans-serif">Respectful Yes</text>
                                </svg>
                            </div>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">हजुर?</span> (Hajur?)</strong><br>
                                    <em>Meaning: Pardon? / What was that? / Excuse me? (Say it with a questioning tone, and it perfectly signals that you didn't hear them. It is highly respectful and works with literally everyone—from your best friend to the Prime Minister).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">हजुर, के भन्नुभयो?</span> (Hajur, ke bhannu bhayo?)</strong><br>
                                    <em>Meaning: Pardon, what did you say? (Formal / Respectful).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">फेरि भन्नुस् त।</span> (Feri bhannus ta.)</strong><br>
                                    <em>Meaning: Say that again. (Neutral / Polite).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">फेरि भन त।</span> (Feri bhana ta.)</strong><br>
                                    <em>Meaning: Say that again. (Casual / For friends).</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #ff9800;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                <h3 style="margin: 0;">3. Asking Them to Slow Down (The Nepanglish Way)</h3>
                            </div>
                            <p>Nepali communication prefers clarification over exact repetition. If you didn't get it, they will usually try to explain it a different way rather than just repeating the same sentence slower.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">अलि बिस्तारै भन्नुहुन्छ कि?</span> (Ali bistarai bhannuhuncha ki?)</strong><br>
                                    <em>Meaning: Could you speak a little slowly? (Respectful. The ki at the end softens it so it doesn't sound like a command).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">अलि स्लो भन न।</span> (Ali slow bhana na.)</strong><br>
                                    <em>Meaning: Speak a bit slow, man. (Total Nepanglish. Highly urban, very common among anyone under the age of 40).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">अलि क्लियर गर न।</span> (Ali clear gara na.)</strong><br>
                                    <em>Meaning: Make it a bit more clear. (Casual Nepanglish).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">कृपया फेरि स्पष्ट पारिदिनुहोस्।</span> (Kripaya feri spasta paridinuhos.)</strong><br>
                                    <em>Meaning: Please clarify this again. (Extremely formal. You will only use this in a high-level business meeting or a university classroom).</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #9c27b0;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                <h3 style="margin: 0;">4. The Hierarchy Warning (Tone Over Words)</h3>
                            </div>
                            <p>Remember the Respect Pyramid from Day 6? It applies to asking questions, too. If you use the wrong verb ending, a simple question sounds like a major insult.</p>

                            <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
                                <div style="background: #ffebee; border-left: 4px solid #d32f2f; padding: 1rem; border-radius: 4px;">
                                    <strong><span class="nepali-font">के भनिस्?</span> (Ke bhanis?)</strong><br>
                                    <span style="color: #d32f2f; font-weight: bold;">Warning:</span> This means "What did you say?" but it uses the absolute lowest, most aggressive level of respect (tã). Only use this if you are talking to a childhood best friend, or if you are trying to start a fistfight.
                                </div>
                                <div style="background: #e8f5e9; border-left: 4px solid #388e3c; padding: 1rem; border-radius: 4px;">
                                    <strong><span class="nepali-font">के भन्यौ?</span> (Ke bhanyau?)</strong><br>
                                    <span style="color: #388e3c; font-weight: bold;">Warning:</span> Casual (timi). Fine for peers.
                                </div>
                                <div style="background: #e3f2fd; border-left: 4px solid #1976d2; padding: 1rem; border-radius: 4px;">
                                    <strong><span class="nepali-font">के भन्नुभयो?</span> (Ke bhannu bhayo?)</strong><br>
                                    <span style="color: #1976d2; font-weight: bold;">Warning:</span> Respectful (tapai). Safe, polite, and bulletproof.
                                </div>
                            </div>

                            <hr class="section-divider">

                            <h3>The Cultural Insight: Just Use English</h3>
                            <p>Here is the absolute truth about urban Nepal, especially Kathmandu: People code-switch constantly. Because the English word "Sorry" covers so many bases (apology, didn't hear, didn't understand), modern Nepalis just use the English word.</p>
                            <p>If you bump into someone, you say "Sorry." If you didn't hear the waiter, you lean in and say, "Sorry?" It is completely culturally acceptable now. Don't stress about finding the ancient Sanskrit equivalent. Just use the hybrid language the city actually speaks.</p>
                        `
                    },
                    { 
                        id: "lesson-05", 
                        title: "05 Opinions and preferences",
                        content: `
                            <h2>05 Stating Opinions & Preferences (Taking a Stand)</h2>
                            <p>Listen, you can’t just nod, smile, and use conversational fillers forever. At some point, you have to actually take a stand. You have to tell people what you love, what you hate, and when you honestly just don't give a shit.</p>
                            <p>In Nepali, we don't overcomplicate this. We have a few heavy-hitting phrases that we recycle constantly. Let’s break down how to actually express yourself.</p>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #4caf50;"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                                <h3 style="margin: 0;">1. Saying What You Like (The Good Stuff)</h3>
                            </div>
                            <p>When something hits right, you want to let people know.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">यो जुत्ता मलाई राम्रो लाग्यो।</span> (Yo jutta malai ramro lagyo.)</strong><br>
                                    <em>Meaning: I like these shoes. / I quite like these boots.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">तिमीलाई के लाग्छ?</span> (Timi lai k lagcha?)</strong><br>
                                    <em>Meaning: What do you think? (Literally: How does it feel to you?)</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई त धेरै मन पर्छ।</span> (Malai ta dherai man parcha.)</strong><br>
                                    <em>Meaning: I absolutely love it. / I really love it.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">यो सुप मिठो छ, हैन?</span> (Yo soup mitho cha, haina?)</strong><br>
                                    <em>Meaning: This soup is great, isn’t it?</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">हो, राम्रै छ।</span> (Ho, ramrai cha.)</strong><br>
                                    <em>Meaning: Yeah, it’s pretty good.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">अहिले मलाई यो एकदम मन परिरहेको छ।</span> (Ahile malai yo ekdam man parirako cha.)</strong><br>
                                    <em>Meaning: I’m really into it these days.</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f44336;"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>
                                <h3 style="margin: 0;">2. Saying What You Don’t Like (Shutting It Down)</h3>
                            </div>
                            <p>You don’t always have to be polite. Sometimes things just suck, or they just aren't your vibe.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई करी खासै मन पर्दैन।</span> (Malai curry khasai man pardaina.)</strong><br>
                                    <em>Meaning: I’m not a big curry fan. (The word khasai softens it slightly, like saying "not particularly").</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">स्केटबोर्डिङ मेरो टाइपको होइन।</span> (Skateboarding mero type ko hoina.)</strong><br>
                                    <em>Meaning: Skateboarding isn’t my thing. (Peak Nepanglish).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">छैन, ठिक छ।</span> (Chaina, thik cha.)</strong><br>
                                    <em>Meaning: No, I’m good.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">म पास।</span> (Ma pass.)</strong><br>
                                    <em>Meaning: I'll pass. (Very modern, highly used in Kathmandu when someone offers you something you don't want).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई हरर फिल्म बिल्कुल मन पर्दैन।</span> (Malai horror film bilkul man pardaina.)</strong><br>
                                    <em>Meaning: I can’t stand horror films. (Bilkul = absolutely not).</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #9c27b0;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <h3 style="margin: 0;">3. Strong Personal Taste (Owning Your Vibe)</h3>
                            </div>
                            <p>When you need to make it clear exactly who you are and what you stand for.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">म ठुलो फ्यान हो।</span> (Ma thulo fan ho.)</strong><br>
                                    <em>Meaning: I’m a big fan.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">यो त मेरो नै टाइप हो।</span> (Yo ta mero nai type ho.)</strong><br>
                                    <em>Meaning: This is so my thing.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई सधैँदेखि मन पर्थ्यो।</span> (Malai sadhai dekhi man parthyo.)</strong><br>
                                    <em>Meaning: I’ve always loved it.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">यो भन्दा नराम्रो अरु के हुन्छ र?</span> (Yo bhanda naramro aru ke huncha ra?)</strong><br>
                                    <em>Meaning: I couldn’t think of anything worse. (Literally: What could be worse than this?)</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई त्यति मन छैन।</span> (Malai tyati man chaina.)</strong><br>
                                    <em>Meaning: I’m not that keen on it.</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #1976d2;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/></svg>
                                <h3 style="margin: 0;">4. Giving Opinions (The Formal/Professional Tier)</h3>
                            </div>
                            <p>If you are sitting in a boardroom, or talking to a group of people you respect, you elevate the language.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">तपाईँहरुलाई के लाग्छ?</span> (Tapai haru lai k lagcha?)</strong><br>
                                    <em>Meaning: What do you all think? (Respectful).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मेरो विचारमा यो राम्रो आइडिया हो।</span> (Mero bichar ma yo ramro idea ho.)</strong><br>
                                    <em>Meaning: I would say it’s a great idea.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मेरो विचारमा...</span> (Mero bichar ma...)</strong><br>
                                    <em>Meaning: In my opinion... (This is your go-to opener for any serious thought).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई जतिसम्म लाग्छ...</span> (Malai jati samma lagcha...)</strong><br>
                                    <em>Meaning: As far as I’m concerned...</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">तपाईँको विचार के छ?</span> (Tapai ko bichar k cha?)</strong><br>
                                    <em>Meaning: What’s your view?</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #ff9800;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                <h3 style="margin: 0;">5. Expressing Preference (Making a Choice)</h3>
                            </div>
                            <p>When you have to pick between two things.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">दाल भात कि सुकियाकी?</span> (Dal bhat ki sukiyaki?)</strong><br>
                                    <em>Meaning: Dal Bhat or Sukiyaki? (The word ki = or).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">म सुशी रोज्छु।</span> (Ma sushi rochchu.)</strong><br>
                                    <em>Meaning: I prefer sushi. (A bit formal).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई सुशी बढी मन पर्छ।</span> (Malai sushi badi man parcha.)</strong><br>
                                    <em>Meaning: I like sushi more. (Very natural).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">म त सुकियाकी नै लिन्छु।</span> (Ma ta sukiyaki nai linchu.)</strong><br>
                                    <em>Meaning: I would rather have Sukiyaki. / I'll go for Sukiyaki.</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #607d8b;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                <h3 style="margin: 0;">6. Expressing Indifference (The Art of Not Caring)</h3>
                            </div>
                            <p>Sometimes you just want to go with the flow. These are the most useful phrases for keeping the peace.</p>

                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">मलाई फरक पर्दैन।</span> (Malai farak pardaina.)</strong><br>
                                    <em>Meaning: I don’t mind. / It doesn't make a difference to me.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">जुन भए पनि हुन्छ।</span> (Jun bhaye pani huncha.)</strong><br>
                                    <em>Meaning: Happy either way. (Literally: Whichever one happens is fine).</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">जे भए पनि ठिक छ।</span> (J bhaye pani thik cha.)</strong><br>
                                    <em>Meaning: I’m not fussed. / Whatever happens is fine.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong><span class="nepali-font">दुइटै ठिक छ।</span> (Duita nai thik cha.)</strong><br>
                                    <em>Meaning: Both are okay.</em>
                                </li>
                            </ul>

                            <hr class="section-divider">

                            <h3>The Cultural Insight: The Holy Trinity of Nepali Opinions</h3>
                            
                            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1rem; margin: 2rem 0;">
                                <div style="flex: 1; min-width: 150px; background: #e3f2fd; border: 2px solid #90caf9; border-radius: 8px; padding: 1.5rem 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤔</div>
                                    <h4 style="margin: 0 0 0.5rem 0; color: #1565c0;">Pillar 1</h4>
                                    <strong style="font-size: 1.1rem; color: #0d47a1;"><span class="nepali-font">मलाई लाग्छ</span><br>(Malai lagcha)</strong>
                                    <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem; color: #1976d2;">I feel / I think</p>
                                </div>
                                <div style="flex: 1; min-width: 150px; background: #e8f5e9; border: 2px solid #a5d6a7; border-radius: 8px; padding: 1.5rem 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">❤️</div>
                                    <h4 style="margin: 0 0 0.5rem 0; color: #2e7d32;">Pillar 2</h4>
                                    <strong style="font-size: 1.1rem; color: #1b5e20;"><span class="nepali-font">मन पर्छ</span><br>(Man parcha)</strong>
                                    <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem; color: #388e3c;">I like</p>
                                </div>
                                <div style="flex: 1; min-width: 150px; background: #f3e5f5; border: 2px solid #ce93d8; border-radius: 8px; padding: 1.5rem 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤷</div>
                                    <h4 style="margin: 0 0 0.5rem 0; color: #6a1b9a;">Pillar 3</h4>
                                    <strong style="font-size: 1.1rem; color: #4a148c;"><span class="nepali-font">फरक पर्दैन</span><br>(Farak pardaina)</strong>
                                    <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem; color: #7b1fa2;">It doesn't matter</p>
                                </div>
                            </div>

                            <p>Notice something? You don't need a massive vocabulary to navigate opinions in Nepali. You just need to master three core patterns:</p>
                            <ul style="list-style-type: none; padding: 0; font-weight: bold; font-size: 1.1rem;">
                                <li style="margin-bottom: 0.5rem;">"Malai lagcha" (I feel / I think)</li>
                                <li style="margin-bottom: 0.5rem;">"Man parcha" (I like)</li>
                                <li style="margin-bottom: 0.5rem;">"Farak pardaina" (It doesn't matter)</li>
                            </ul>
                            <p>If you can wield those three phrases, you have 70% of daily opinions covered. Keep it simple, and don't overthink it.</p>
                        `
                    },
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
