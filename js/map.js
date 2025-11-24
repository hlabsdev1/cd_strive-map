const tabMediaQuery = window.innerWidth < 991;

const mImgs = [
  {
    name: 'Philippines',
    order: 0,
    images: [
      'images/boost-capital.svg',
      'images/grab.svg',
      'images/wise.svg',
      'images/frnds.svg',
      'images/ukmindonesia.svg',
      'images/bayan-academy.svg',
      'images/chatgenie.svg',
    ],
  },
  {
    name: 'Bangladesh',
    order: 1,
    images: ['images/shopup.svg'],
  },
  {
    name: 'Brazil',
    order: 2,
    images: ['images/cufa.svg', 'images/flourish.svg', 'images/alianca.svg', 'images/hoob.svg'],
  },
  {
    name: 'Mexico',
    order: 3,
    images: ['images/nilus.svg', 'images/fundes.svg'],
  },
  {
    name: 'Dominican',
    order: 4,
    images: ['images/incae.svg'],
  },
  {
    name: 'Argentina',
    order: 5,
    images: ['images/nilus.svg'],
  },
  {
    name: 'Columbia',
    order: 6,
    images: ['images/data-sketch.svg', 'images/open-c-p.svg'],
  },
  {
    name: 'Ecuador',
    order: 7,
    images: ['images/impaqto.svg'],
  },
  {
    name: 'Spain',
    order: 8,
    images: ['images/connectycs.svg'],
  },
  {
    name: 'Poland',
    order: 9,
    images: ['images/lbc.svg'],
  },
  {
    name: 'UK',
    order: 10,
    images: ['images/tern.svg', 'images/vested-impact.svg'],
  },
  {
    name: 'Kazakhstan',
    order: 11,
    images: ['images/accion.svg', 'images/beksar.svg'],
  },
  {
    name: 'Uganda',
    order: 12,
    images: ['images/arifu.svg', 'images/mtn.svg'],
  },
  {
    name: 'Kenya',
    order: 13,
    images: [
      'images/arifu.svg',
      'images/mtn.svg',
      'images/novek.svg',
      'images/x-r-global.svg',
      'images/mesh.svg',
    ],
  },
  {
    name: 'Ethiopia',
    order: 14,
    images: ['images/africa.svg'],
  },
  {
    name: 'Uzbekistan',
    order: 15,
    images: ['images/accion.svg', 'images/mayasoft.png'],
  },
  {
    name: 'Nigeria',
    order: 16,
    images: ['images/arifu.svg', 'images/mtn.svg', 'images/boost.svg'],
  },
  {
    name: 'Ivory Coast',
    order: 17,
    images: ['images/arifu.svg', 'images/mtn.svg'],
  },
  {
    name: 'Indonesia',
    order: 18,
    images: [
      'images/wise.svg',
      'images/grab.svg',
      'images/ukmindonesia.svg',
      'images/bayan-academy.svg',
      'images/alner.svg',
    ],
  },
  {
    name: 'Cambodia',
    order: 19,
    images: ['images/boost-capital.svg'],
  },
  {
    name: 'Samoa',
    order: 20,
    images: ['images/skyeye.svg'],
  },
  {
    name: 'Vietnam',
    order: 21,
    images: [
      'images/wise.svg',
      'images/grab.svg',
      'images/ukmindonesia.svg',
      'images/bayan-academy.svg',
      'images/sobanhang.svg',
    ],
  },
];

console.log(mImgs[0].images[0]);

const mapContent = [
  {
    name: 'Philippines',
    id: 'philippines',
    imgList: [
      mImgs[0].images[0],
      mImgs[0].images[1],
      mImgs[0].images[2],
      mImgs[0].images[3],
      mImgs[0].images[4],
      mImgs[0].images[5],
      mImgs[0].images[6],
    ],
    partners: [
      {
        name: 'Scale partner: Grab',
        logo: [mImgs[0].images[1]],
        description:
          'Equipped micro-entrepreneurs in Southeast Asia, including Grab drivers and merchants, with digital skills to start or grow their businesses. Tailored micro-training toolkits helped participants digitize operations, access financial services, become more digitally fluent, and engage more effectively in digital markets.',
        outcomes: [
          'Upskilling content reached 235,000 Grab drivers and merchants',
          'Driver-learners adopted 1.3 times more digital tools than non-learners.',
          'Over 90% of Grab drivers felt inspired to start a new business after watching  micro-training videos.',
        ],
        link: 'https://strivecommunity.org/programs/micro-learning-videos',
      },
      {
        name: 'ChatGenie',
        logo: [mImgs[0].images[6]],
        description:
          'Enabled small businesses to sell within popular social media and messaging apps, turning conversations into conversions. With support from the Mastercard Strive Innovation Fund, ChatGenie tested new features to bring added value to Filipino micro-enterprises engaging in social commerce.',
        outcomes: [
          'Strong uptake—about 1,600 small businesses onboarded',
          'ChatGenie expanded its merchant incubation program, adding 151 new merchants and driving over $250,000 in gross sales',
          'Small businesses reported notable sales growth and higher conversion rates, with one achieving a remarkable 1,400% increase in sales.',
        ],
        link: 'https://strivecommunity.org/programs/chatgenie',
      },
      {
        name: 'Boost Capital',
        logo: [mImgs[0].images[0]],
        description:
          'A white-labeled onboarding platform enabling micro- and small enterprises to access digital financial services via chat-based technology, AI-driven verification, and financial literacy—no app download needed. Builds on prior work in Cambodia linking financial literacy education to improved loan performance.',
        outcomes: [
          'Boost Capital partnered with more than 15 financial service providers to enable digital onboarding.',
          'Boost Capital enhanced its AI technology for dialect recognition and document validation.',
          'Boost Capital found that financial education users tend to be more financially responsible, with 15% more likely to have repaid loans on time in Cambodia.',
        ],
        link: 'https://www.strivecommunity.org/programs/boost-capital-philippines',
      },
      {
        name: '&frnds',
        logo: [mImgs[0].images[3]],
        description:
          'Piloted with 2 wholesalers serving 800+ micro-retailers. 350 of these placed at least one AI-based order, and 165 placed multiple orders.',
        outcomes: [
          'Boost Capital partnered with more than 15 financial service providers to enable digital onboarding.',
          'Human interaction through “Commerce Managers” guided new digital users, verified AI orders, and built trust, while removing OTP verification helped overcome poor mobile coverage to drive adoption.',
          'Delivered efficiency and convenience to small businesses: 84% valued anytime ordering, and 67% saved time by avoiding trips to wholesalers.',
        ],
        link: 'https://www.strivecommunity.org/programs/and-frnds',
      },
    ],
  },
  {
    name: 'Cambodia',
    id: 'cambodia',
    imgList: [mImgs[19].images[0]],
    partners: [
      {
        name: 'Boost Capital',
        logo: [mImgs[19].images[0]],
        description:
          'A white-labeled onboarding platform enabling micro- and small enterprises to access digital financial services via chat-based technology, AI-driven verification, and financial literacy—no app download needed. Builds on prior work in Cambodia linking financial literacy education to improved loan performance.',
        outcomes: [
          'Boost Capital partnered with more than 15 financial service providers to enable digital onboarding.',
          'Boost Capital enhanced its AI technology for dialect recognition and document validation.',
          'Boost Capital found that financial education users tend to be more financially responsible, with 15% more likely to have repaid loans on time in Cambodia.',
        ],
        link: 'https://www.strivecommunity.org/programs/boost-capital-philippines',
      },
    ],
  },
  {
    name: 'Indonesia',
    id: 'indonesia',
    imgList: [
      mImgs[18].images[0],
      mImgs[18].images[1],
      mImgs[18].images[2],
      mImgs[18].images[3],
      mImgs[18].images[4],
    ],
    partners: [
      {
        name: 'Scale partner: Grab',
        logo: [mImgs[18].images[1]],
        description:
          'Equipped micro-entrepreneurs in Southeast Asia, including Grab drivers and merchants, with digital skills to start or grow their businesses. Tailored micro-training toolkits helped participants digitize operations, access financial services, become more digitally fluent, and engage more effectively in digital markets.',
        outcomes: [
          'Upskilling content reached 235,000 Grab drivers and merchants',
          'Driver-learners adopted 1.3 times more digital tools than non-learners.',
          'Over 90% of Grab drivers felt inspired to start a new business after watching  micro-training videos.',
        ],
        link: 'https://strivecommunity.org/programs/micro-learning-videos',
      },
      {
        name: 'Alner',
        logo: [mImgs[18].images[4]],
        description:
          'Equipped micro-retailers with a reusable packaging solution to tackle plastic waste.Through one mobile app, businesses can source refillable essential goods and manage orders, inventory, and sales—boosting income and promoting more sustainable retail practices.',
        outcomes: [
          'Increased retailer incomes by a median of US$33 per month, adding over US$50,000 in new earnings for micro-entrepreneurs',
          'Avoided 400,000+ single-use plastic units by building a full-circular packaging system.',
          'Supported 300+ small businesses, enhancing their competitiveness, efficiency, resilience, and sustainability.',
        ],
        link: 'https://strivecommunity.org/programs/Alner',
      },
    ],
  },
  {
    name: 'Vietnam',
    id: 'vietnam',
    imgList: [
      mImgs[21].images[0],
      mImgs[21].images[1],
      mImgs[21].images[2],
      mImgs[21].images[3],
      mImgs[21].images[4],
    ],
    partners: [
      {
        name: 'Scale partner: Grab',
        logo: [mImgs[21].images[1]],
        description:
          'Equipped micro-entrepreneurs in Southeast Asia, including Grab drivers and merchants, with digital skills to start or grow their businesses. Tailored micro-training toolkits helped participants digitize operations, access financial services, become more digitally fluent, and engage more effectively in digital markets.',
        outcomes: [
          'Upskilling content reached 235,000 Grab drivers and merchants',
          'Driver-learners adopted 1.3 times more digital tools than non-learners.',
          'Over 90% of Grab drivers felt inspired to start a new business after watching  micro-training videos.',
        ],
        link: 'https://strivecommunity.org/programs/micro-learning-videos',
      },
      {
        name: 'SoBanHang',
        logo: [mImgs[21].images[4]],
        description:
          'Supported micro- and small businesses with digital management, e-commerce, and AI-powered tools to streamline operations, gain market insights, and manage cross-border procurement—while assessing how digital adoption can boost revenue and expand access to formal credit.',
        outcomes: [
          'About 4,000 micro and small businesses in Vietnam trialed the platform',
          'Active users achieved 3% to 5% month-over-month revenue growth, with 10% securing credit averaging US$6,000.',
          'Strong financial incentives and a more convenient experience are key to shifting micro-retailers from traditional procurement methods.',
          'Follow-on partnership established with Strive Women on financial inclusion products.',
        ],
        link: 'https://strivecommunity.org/programs/SoBanHang',
      },
    ],
  },
  {
    name: 'Samoa',
    id: 'samoa',
    imgList: [mImgs[20].images[0]],
    partners: [
      {
        name: 'SkyEye',
        logo: [mImgs[20].images[0]],
        description:
          'Geospatial technology company using its AI-powered “Maua” e-commerce app to help small businesses overcome barriers such as limited digital payment options and difficulties in locating customers. Offers sales trend and cost analysis, enabling smarter decisions, greater efficiency, and access to new markets.',
        outcomes: [
          'Supports 150 active micro- and small businesses.',
          'Expected to increase sales and operational efficiencies.',
          'Provides business intelligence from combined data sources.',
        ],
        link: 'https://strivecommunity.org/programs/skyeye',
      },
    ],
  },
  {
    name: 'Bangladesh',
    id: 'bangladesh',
    imgList: [mImgs[1].images[0]],
    partners: [
      {
        name: 'ShopUp',
        logo: [mImgs[1].images[0]],
        description: `Built a network of digitally powered, women-led retailers in rural and semi-urban areas, supporting them to deliver essential household products at affordable prices to their local communities. Women entrepreneurs use ShopUp's B2B platform, Mokam, to offer a wide portfolio of goods, manage last-mile logistics, and create sustainable livelihoods.`,
        outcomes: [
          'Mastercard Strive and Gates Foundation are funding the pilot until 2026.',
          'Nearly 1,000 women small business owners were onboarded through June 2025.',
          '72% of adopters reported business growth as a result of the platform.',
          'Introducing cash-on-delivery for the first order served as an effective trust-building step before transitioning users to fully digital payments',
        ],
        link: 'https://www.strivecommunity.org/programs/porshi-bangladesh',
      },
    ],
  },
  {
    name: 'Kazakhstan',
    id: 'kazakhstan',
    imgList: [mImgs[11].images[0], mImgs[11].images[1]],
    partners: [
      {
        name: 'Beksar',
        logo: [mImgs[11].images[1]],
        description: `Embedded finance solution that supports small businesses with retail automation, digital financial services, and data-driven tools to boost efficiency and resilience. By integrating with local financial institutions, it leverages real-time data for credit-scoring and inclusive financing, enabling access to working capital for businesses—especially women-led enterprises—that often lack formal financial records.`,
        outcomes: [],
        link: 'https://www.strivecommunity.org/programs/Beksar-kazakhstan ',
      },
    ],
  },
  {
    name: 'Uzbekistan',
    id: 'uzbekistan',
    imgList: [mImgs[15].images[0], mImgs[15].images[1]],
    partners: [
      {
        name: 'Mayasoft',
        logo: [],
        description: `Mayasoft’s MARTA solution is a mobile point-of-sale system with no subscription or hardware costs that works on any NFC-enabled smartphone, even with poor internet connection. With MARTA, small businesses can accept digital payments and unlock working capital through instant merchant settlements and data trails for credit assessments.`,
        outcomes: [
          'Reached over 320,000 micro- and small businesses. Over 27,000 trialed the product and more than 14,000 adopted it for continued use.',
          'High touch support drove high trial-to-adoption rates.',
          'Instant settlements improved cash flow for small entrepreneurs.',
        ],
        link: 'https://strivecommunity.org/programs/mayasoft-uzbekistan',
      },
    ],
  },
  {
    name: 'Ethiopia',
    id: 'ethiopia',
    imgList: [mImgs[14].images[0]],
    partners: [
      {
        name: 'Africa 118',
        logo: [mImgs[14].images[0]],
        description: `Africa 118’s Digital Presence Pack supported small businesses to build and grow a strong online presence through Google listings, e-commerce tools, and digital training. With support from Mastercard Strive, it expanded its offering to include social media integration and a nationwide small business market intelligence database.`,
        outcomes: [
          '586 small businesses improved their digital skills (353% of target).',
          'US$144,000 incremental revenue generated by small businesses.',
          '185 new jobs were created, 54% of which were filled by women.',
          '56% of small businesses reported income increases.',
        ],
        link: 'https://strivecommunity.org/programs/africa-118',
      },
    ],
  },
  {
    name: 'Kenya',
    id: 'kenya',
    imgList: [
      mImgs[13].images[0],
      mImgs[13].images[1],
      mImgs[13].images[2],
      mImgs[13].images[3],
      mImgs[13].images[4],
    ],
    partners: [
      {
        name: 'MESH',
        logo: [mImgs[13].images[3]],
        description: `MESH is an online community for informal young entrepreneurs in Kenya. Mastercard Strive supported platform development and growth, the creation of training tools, and a pilot of a credit product for entrepreneurs using MESH's data and community approach to financial inclusion.`,
        outcomes: [
          'After joining MESH, 53% of surveyed users reported earning more than KES 6,000 per month, up from 27% before joining MESH.',
          '3 in 5 surveyed users who saw business or income improvements had benefited from a job or a partnership through another user.',
          'The credit pilot found that physical verification checks are a stumbling block for informal entrepreneurs in Kenya, and MESH made a strategic pivot to diagnose and build credit eligibility.',
        ],
        link: 'https://strivecommunity.org/programs/mesh',
      },
      {
        name: 'Novek',
        logo: [mImgs[13].images[1]],
        description: `Designs and builds tech-enabled vending machines that dispense household staples to increase sales for micro-retailers. With support from Mastercard Strive, their washing powder dispensers added a new revenue stream, reduced stockouts, and eliminated single-use plastics for micro- and small retailers.`,
        outcomes: [
          'Micro-retailers sold over 50 kg of product in four months.',
          'Novek’s technology attracted the interest of Unilever, who has signed an MOU to monitor the product in retail with a view to future scaling.',
          'Novek is using pilot learnings to develop a lower-cost, scalable machine, aiming to reach 10K to 20K small businesses long-term.',
        ],
        link: 'https://strivecommunity.org/programs/novek',
      },
      {
        name: 'XRGlobal',
        logo: [mImgs[13].images[2]],
        description: `XR Global, in partnership with Hello Tractor in Kenya, tested the potential of virtual reality (VR) for upskilling small businesses through an immersive multi-user learning environment.`,
        outcomes: [
          '200 small businesses reported increased knowledge and skill',
          'VR trainees reported a 20% higher gain in capabilities than the control group.',
          'The Hello Tractor app saw a 14% growth in active users after VR training.',
          'VR training was 86% faster than traditional training, saving time for businesses.',
        ],
        link: 'https://strivecommunity.org/programs/xr-global',
      },
      {
        name: 'Arifu',
        logo: [mImgs[13].images[0]],
        description: `Arifu is an edtech provider offering bite-sized, interactive training via a chatbot on popular messaging apps like WhatsApp. With support from Mastercard Strive, they supported small businesses to digitize and build resilience by improving operational efficiency, financial management, and online sales in collaboration with major players like MTN.`,
        outcomes: [
          `Through the MTN partnership, in Côte d'Ivoire, the content has reached over 988,000 MTN customers, merchants, and agents, with more than 72,000 actively engaging with the MoMo Coach app.`,
          'Gates Foundation used Arifu’s business content to extend reach to women entrepreneurs in Kenya.',
          'Some high-engagers were 19% more likely to report cost savings and 13% more likely to save business earnings.',
          'Digitally advanced users were 74% more likely to use new services.',
        ],
        link: 'https://strivecommunity.org/programs/arifu ',
      },
    ],
  },
  {
    name: 'Uganda',
    id: 'uganda',
    imgList: [mImgs[12].images[0], mImgs[12].images[1]],
    partners: [
      {
        name: 'Arifu',
        logo: [mImgs[12].images[0]],
        description: `Arifu is an edtech provider offering bite-sized, interactive training via a chatbot on popular messaging apps like WhatsApp. With support from Mastercard Strive, they supported small businesses to digitize and build resilience by improving operational efficiency, financial management, and online sales in collaboration with major players like MTN.`,
        outcomes: [
          `Through the MTN partnership, in Côte d'Ivoire, the content has reached over 988,000 MTN customers, merchants, and agents, with more than 72,000 actively engaging with the MoMo Coach app.`,
          'Gates Foundation used Arifu’s business content to extend reach to women entrepreneurs in Kenya.',
          'Some high-engagers were 19% more likely to report cost savings and 13% more likely to save business earnings.',
          'Digitally advanced users were 74% more likely to use new services.',
        ],
        link: 'https://strivecommunity.org/programs/arifu ',
      },
    ],
  },
  {
    name: 'Nigeria',
    id: 'nigeria',
    imgList: [mImgs[16].images[0], mImgs[16].images[1], mImgs[16].images[2]],
    partners: [
      {
        name: 'Arifu',
        logo: [mImgs[16].images[0]],
        description: `Arifu is an edtech provider offering bite-sized, interactive training via a chatbot on popular messaging apps like WhatsApp. With support from Mastercard Strive, they supported small businesses to digitize and build resilience by improving operational efficiency, financial management, and online sales in collaboration with major players like MTN.`,
        outcomes: [
          `Through the MTN partnership, in Côte d'Ivoire, the content has reached over 988,000 MTN customers, merchants, and agents, with more than 72,000 actively engaging with the MoMo Coach app.`,
          `Gates Foundation used Arifu’s business content to extend reach to women entrepreneurs in Kenya.`,
          `Some high-engagers were 19% more likely to report cost savings and 13% more likely to save business earnings.`,
          `Digitally advanced users were 74% more likely to use new services.`,
        ],
        link: 'https://strivecommunity.org/programs/arifu',
      },
      {
        name: 'Boost Technology',
        logo: [mImgs[16].images[2]],
        description: `A retailer-focused commerce platform powering growth for Africa’s women-led micro-businesses. Their program used transaction data to provide retailers with real-time insights to make more informed decisions and drive improved business outcomes, alongside credit and digital ordering.`,
        outcomes: [
          '84% of participating micro- and small retailers reported an increase in business revenue.',
          'Customers who took up credit products ordered 40% more stock than average.',
          '97% of retailers with access to both credit and insights reported revenue increases.',
        ],
        link: 'https://strivecommunity.org/programs/boost-tech',
      },
    ],
  },
  {
    name: `Côte d'Ivoire`,
    id: 'ivory-coast',
    imgList: [
      mImgs[16].images[0],
    ],
    partners: [
      {
        name: 'Arifu',
        logo: [mImgs[13].images[0]],
        description: `Arifu is an edtech provider offering bite-sized, interactive training via a chatbot on popular messaging apps like WhatsApp. With support from Mastercard Strive, they supported small businesses to digitize and build resilience by improving operational efficiency, financial management, and online sales in collaboration with major players like MTN.`,
        outcomes: [
          `Through the MTN partnership, in Côte d'Ivoire, the content has reached over 988,000 MTN customers, merchants, and agents, with more than 72,000 actively engaging with the MoMo Coach app.`,
          'Gates Foundation used Arifu’s business content to extend reach to women entrepreneurs in Kenya.',
          'Some high-engagers were 19% more likely to report cost savings and 13% more likely to save business earnings.',
          'Digitally advanced users were 74% more likely to use new services.',
        ],
        link: 'https://strivecommunity.org/programs/arifu ',
      },
    ],
  },
  {
    name: 'Poland',
    id: 'poland',
    imgList: [mImgs[9].images[0]],
    partners: [
      {
        name: 'Lady Business Club (LBC)',
        logo: [mImgs[9].images[0]],
        description: `From late 2023 to June 2025, LBC’s GO DIGITAL program enabled women-led small businesses to adopt and embed appropriate digital tools in their day-to-day operations, supporting them to grow and build business confidence.`,
        outcomes: [
          `Program reached 333,000 women-led small businesses.`,
          '57% reported saving time after adopting digital tools.',
          '49% saw customer or turnover growth within months.',
          '84% became more open to new technologies.',
          '62% reported improved digital skills.',
        ],
        link: 'https://strivecommunity.org/programs/go-digital',
      },
    ],
  },
  {
    name: 'Spain',
    id: 'spain',
    imgList: [mImgs[8].images[0]],
    partners: [
      {
        name: 'Connectycs',
        logo: [mImgs[8].images[0]],
        description: `Enabled small Spanish hotels to adopt tailored digital solutions that improve bookings, expand market reach, and boost efficiency. With support from Mastercard Strive, Connectycs enhanced its platform with new features and training content, supporting small hotels to access both digital tools and financial opportunities.`,
        outcomes: [
          `291 small hotels reached, exceeding target of 250.`,
          'Partnerships with major players like ITH, OpenRoom, and Altipla expanded to scale adoption.',
          'Hotels reported improved efficiency, better pricing strategies, and increased bookings.',
        ],
        link: 'https://strivecommunity.org/programs/connectycs-spain',
      },
    ],
  },
  {
    name: 'UK',
    id: 'uk',
    imgList: [mImgs[10].images[0], mImgs[10].images[1]],
    partners: [
      {
        name: 'Tern Eco',
        logo: [mImgs[10].images[0]],
        description: `Tern Eco (now Tern Circular LTD) supports UK retailers to recover products for reuse, resale, or repair, enabling new revenue streams and promoting circular retail practices. With support from Mastercard Strive, it developed a digital platform to simplify circular solutions, turning returns into valuable opportunities`,
        outcomes: [
          `Generated £400,000 in retailer revenue from trade-in and resale.`,
          'Forecasted to recapture 8,000 pre-owned items from landfill.',
        ],
        link: 'https://strivecommunity.org/programs/tern-eco',
      },
      {
        name: 'Vested Impact',
        logo: [mImgs[10].images[1]],
        description: `An award-winning platform that quantifies the effects of a company's activities on the planet. With Mastercard Strive, Vested Impact delivered an AI-powered portal for automated impact assessment, a tool for summarizing complex data, and a shareable sustainability reporting link for small businesses.`,
        outcomes: [
          `2.7 million small businesses were automatically assessed, proving the technology's scalability.`,
          'Secured £1.1 million in investment from HearstLab and Impact Shakers.',
          `Partnered with the Asian Development Bank and UBS Optimus Foundation to assess ESG/impact and further scale the solution.`,
        ],
        link: 'https://strivecommunity.org/programs/vested-impact',
      },
    ],
  },
  {
    name: 'Mexico',
    id: 'mexico',
    imgList: [mImgs[3].images[0], mImgs[3].images[1]],
    partners: [
      {
        name: 'FUNDES',
        logo: [mImgs[3].images[1]],
        description: `Redesigned “Pymental,” an online marketplace and learning app, to meet small business needs in Latin America and the Caribbean. The adapted platform offered tailored digital tools, micro-training opportunities, and improved user experience for artisans and craft merchants.`,
        outcomes: [
          `Reached over 44,000 micro- and small businesses.`,
          `Micro-entrepreneurs reported significant increases in how they scored their digital skills and confidence to adopt new digital tools (rated 9.2 out of 10) after trainings`,
          `2,153 micro-entrepreneurs adopted at least one digital tool promoted in Pymental’s capacity-building content.`,
        ],
        link: 'https://strivecommunity.org/programs/fundes-argidius',
      },
      {
        name: 'Nilus',
        logo: [mImgs[3].images[0]],
        description: `Provides women-led retailers in low-income communities with trade credit to extend flexible payment terms to their consumers and improve food security. With Mastercard Strive’s support, Nilus supported micro-retailers with a digital platform that enables aggregated ordering, short-term trade credit, financial literacy, and data-driven creditworthiness insights.`,
        outcomes: [
          `8,200 community retailers engaged, with 100 gaining first-time access to credit.`,
          `Embedded financial literacy training boosted confidence and business skills in women business owners.`,
          `71 retailers digitized operations, improving efficiency and resilience.`,
          `Retailers reported reduced stockouts and stronger capacity to serve low-income neighborhoods`,
        ],
        link: 'https://strivecommunity.org/programs/nilus',
      },
    ],
  },
  {
    name: 'Argentina',
    id: 'argentina',
    imgList: [mImgs[5].images[0]],
    partners: [
      {
        name: 'Nilus',
        logo: [mImgs[5].images[0]],
        description: `Provides women-led retailers in low-income communities with trade credit to extend flexible payment terms to their consumers and improve food security. With Mastercard Strive’s support, Nilus supported micro-retailers with a digital platform that enables aggregated ordering, short-term trade credit, financial literacy, and data-driven creditworthiness insights.`,
        outcomes: [
          `8,200 community retailers engaged, with 100 gaining first-time access to credit.`,
          `Embedded financial literacy training boosted confidence and business skills in women business owners.`,
          `71 retailers digitized operations, improving efficiency and resilience.`,
          `Retailers reported reduced stockouts and stronger capacity to serve low-income neighborhoods`,
        ],
        link: 'https://strivecommunity.org/programs/nilus',
      },
    ],
  },
  {
    name: 'Dominican Republic',
    id: 'dominican-republic',
    imgList: [mImgs[4].images[0]],
    partners: [
      {
        name: 'INCAE',
        logo: [mImgs[4].images[0]],
        description: `Mastercard Strive supported INCAE’s EMPRO program to enable women-led small businesses to expand market access, strengthen financial capacity, and adopt digital tools. As part of the program, INCAE collaborated with Banco BHD and PriceSmart to deliver training, mentorship, and new business opportunities to these micro- and small businesses`,
        outcomes: [
          `84% of small businesses improved digital channel use and 59% increased their digital adoption.`,
          `92% reported time or cost savings.`,
          `187 new jobs were created.`,
        ],
        link: 'https://strivecommunity.org/programs/empro-dominicanrepublic',
      },
    ],
  },
  {
    name: 'Colombia',
    id: 'colombia',
    imgList: [mImgs[6].images[0], mImgs[6].images[1]],
    partners: [
      {
        name: 'Open Contracting Partnership (OCP)',
        logo: [mImgs[6].images[1]],
        description: `OCP’s platform, CREDERE, piloted the use of open procurement data to expand access to finance to small businesses involved in public procurement. They connected small businesses to financial institutions and generated key insights and data to assess small business creditworthiness and unlock capital.`,
        outcomes: [
          `1,478 small businesses engaged with the platform within 2 months of its launch`,
          `464 credit applications were submitted, including 143 from women-led businesses.`,
          `Showed strong small business demand and readiness for digital procurement finance solutions.`,
        ],
        link: 'https://strivecommunity.org/programs/open-contracting-partnership',
      },
      {
        name: 'Datasketch',
        logo: [mImgs[6].images[0]],
        description: `Specializes in developing data analytics and AI solutions for small businesses. Through Mastercard Strive, they developed AI tools to help businesses use existing data for decision-making and improved operational efficiency.`,
        outcomes: [
          `10 pilot businesses engaged to test and improve the solution.`,
          `Launched AI-powered tools: chatbot and product recommender.`,
          `Secured a $50,000 JournalismAI grant from Polis.`,
          `Businesses shifted to more frequent, data-driven decisions.`,
        ],
        link: 'https://strivecommunity.org/programs/datasketch',
      },
    ],
  },
  {
    name: 'Brazil',
    id: 'brazil',
    imgList: [mImgs[2].images[0], mImgs[2].images[1], mImgs[2].images[2], mImgs[2].images[3]],
    partners: [
      {
        name: 'Flourish Fi',
        logo: [mImgs[2].images[1]],
        description:
          'Adapted its gamified financial wellness platform for small businesses in Brazil, using personalized nudges, games, and rewards to promote healthy financial habits and unlock access to responsible credit. They integrated financial trivia content into Brazilian financial service provider platforms, encouraging healthy financial habits among small business customers. Pilots showed gamification can have positive impacts on financial behaviors.',
        outcomes: [
          'Strong uptake—about 1,600 small businesses onboarded',
          'ChatGenie expanded its merchant incubation program, adding 151 new merchants and driving over $250,000 in gross sales',
          'Small businesses reported notable sales growth and higher conversion rates, with one achieving a remarkable 1,400% increase in sales.',
        ],
        link: 'https://strivecommunity.org/programs/flourish-fi',
      },
      {
        name: 'Cufa, Alianca, and Flourish Fi',
        logo: [mImgs[2].images[0], mImgs[2].images[1], mImgs[2].images[2]],
        description:
          "Aliança Empreendedora redeveloped the Tamo Junto digital learning platform, targeting 500,000 micro-businesses in Brazil's favelas. The gamified platform offers dual tracks for business digitization and financial literacy, featuring short videos and rewards to promote digital inclusion through accessible education.",
        outcomes: [
          'Reached over 900,000 micro- and small businesses.',
          'Over 6,000 small businesses completed training and accessed credit.',
          '90% of small businesses implemented new practices they learned on the platform.',
        ],
        link: 'https://strivecommunity.org/programs/supporting-the-digitization-of-micro-enterprises-in-brazils-favelas',
      },
      {
        name: 'Hoob Marketing',
        logo: [mImgs[2].images[3]],
        description:
          "Hoob's Strive for Growth Facebook campaign targeted women-owned and Black-owned small businesses across Brazil, Mexico, Argentina, and Colombia.",
        outcomes: [
          'Reached 240,000+ users with digital marketing resources and support to help them grow and digitize operations.',
          'Trusted community leaders with native content drive social media engagement',
          'Bundled training with platforms/tools for immediate application boosts impact.',
        ],
        link: 'https://strivecommunity.org/programs/strive-for-growth-ecommerce-training',
      },
    ],
  },
  {
    name: 'Ecuador',
    id: 'ecuador',
    imgList: [mImgs[7].images[0]],
    partners: [
      {
        name: 'IMPAQTO',
        logo: [mImgs[7].images[0]],
        description: `IMPAQTO’s VIQTORIA program trained women-led small businesses on digital solutions that accelerate their digital transformation and development. The program supported both local startups and women-led small businesses with training, mentorship, and seed capital, enabling tech startups to adapt their solutions to small business needs and small businesses to adopt digital solutions that truly work for them.
`,
        outcomes: [
          '13 startups supported to tailor their solutions to small businesses.',
          '58 small businesses enhanced their digital and business skills.',
          '7 networking events connected small businesses with digital solutions.',
        ],
        link: 'https://strivecommunity.org/programs/viqtoria',
      },
    ],
  },
];

console.log(mapContent.length);

function addingContent() {
  const popupWrapper = document.querySelector('.map_popup-wrap');
  const tagWrap = document.querySelector('.map-tag_holder');
  const hoverWrap = document.querySelector('.map-hover_holder');
  popupWrapper.innerHTML = mapContent
    .map((content) => {
      // console.log(listHtml);
      let isPartnersOnlyOne = false;
      // console.log(content.partners.length);
      const partnersContent = content.partners
        .map((partner) => {
          return `
                <div class="map_popup">
                    <div class="map_popup-inner">
                        <div class="map_popup-top">
                          ${partner.logo
                            .map((item) => {
                              return `
                              <div class="map_popup-top-img">
                                  <img src=${item} alt="" class="src">
                              </div>
                            `;
                            })
                            .join('')}
                        </div>
                        <div class="map_popup-bottom">
                            <div class="map_popup-bottm-header">
                                <div class="popup-heading">${partner.name}</div>
                            </div>
                            <div class="popup-body">${partner.description}</div>
                            <div class="popup-list-wrap">
                              ${partner.outcomes
                                .map((item) => {
                                  return `
                                    <div class="popup-list-item">
                                      <div class="popup-list-icon"></div>
                                      <div class="popup-list-txt"> ${item}</div>
                                      </div>
                                `;
                                })
                                .join('')}
                            </div>
                            <a class="popup_link" href="${
                              partner.link
                            }" target="_blank" rel="noopener noreferrer">Explore the program</a>
                        </div>
                    </div>
                </div>
        `;
        })
        .join('');

      // console.log(partnersContent);

      return `
      <div class="map_popup-items" hs-target-country="${content.id}">
      <div class="map_popup-items-inner">
        ${partnersContent}
      </div>
        <div class="popup-bottom-buttons">
            <div class="popup-arrow-wrap">
                <div class="popup-arrow is--prev">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8284 8.84025L3.64542 8.84025M10.3282 16.4883L2.82837 8.98841L10.4025 1.41429" stroke="white" stroke-width="4"/>
                </svg>
                </div>
                <div class="popup-nums_wrap"><span class="popup-curr">1</span>/<span class="popup-total">4</span></div>
                <div class="popup-arrow is--next">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9.06209L14.1829 9.06209M7.50013 1.41406L15 8.91393L7.42588 16.4881" stroke="white" stroke-width="4"/>
                </svg>
                </div>
            </div>
            <div class="popup-close-icon">
                <div>Back to map</div>
            </div>
        </div>
      </div>
      `;
    })
    .join('');

  //TAG CONTENT
  tagWrap.innerHTML = mapContent
    .map((content) => {
      return `
      <div class="map-tag" hs-target-country="${content.id}">
        <div class="map-tab_line"></div>
        <div class="map-tag-name">${content.name}</div>
      </div>
    `;
    })
    .join('');

  //HOVER CONTENT
  hoverWrap.innerHTML = mapContent
    .map((content) => {
      return `
        <div class="map-hover_item" hs-target-country="${content.id}">
            <div class="map-hover-country">
                ${content.name}
            </div>
            <div class="map-hover_grid">
               ${content.imgList
                 .map((img) => {
                   return `
                  <div class="map-hover_img">
                    <img src="${img}" alt="">
                  </div>
                `;
                 })
                 .join('')} 
            </div>
        </div>
    `;
    })
    .join('');
}

function mapClickFunc() {
  const mapWrap = document.querySelector('.map_wrap');
  const map = mapWrap.querySelector('.h_map');
  const svgTriggers = mapWrap.querySelectorAll('svg path[hs-target-country]');
  // ALSO capture all text map labels as triggers
  const mapTagTriggers = mapWrap.querySelectorAll('.map_hovered-wrap .map-tag[hs-target-country]');
  const allPopups = mapWrap.querySelectorAll(
    '.map_popup-wrap .map_popup-items'
  );
  const closeButn = mapWrap.querySelectorAll(
    '.map_popup-wrap .popup-close-icon'
  );
  const hoverItems = mapWrap.querySelectorAll('.map-hover_item');
  allPopups.forEach((popup) => {
    popup.classList.add('is--hide');
  });

  //adding extra class to map
  allPopups.forEach((item) => {
    const attr = item.getAttribute('hs-target-country');

    svgTriggers.forEach((svg) => {
      if (svg.getAttribute('hs-target-country') === attr) {
        svg.classList.add('is--active');
      }
    });
    mapTagTriggers.forEach((svg) => {
      if (svg.getAttribute('hs-target-country') === attr) {
        svg.classList.add('is--active');
      }
    });
  });

  const allActiveSvgTriggers = mapWrap.querySelectorAll(
    'svg path[hs-target-country].is--active'
  );

   const mapTagActiveTriggers = mapWrap.querySelectorAll('.map_hovered-wrap .map-tag[hs-target-country].is--active');


  const allTriggers = [...allActiveSvgTriggers, ...mapTagActiveTriggers];
  allTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const attr = trigger.getAttribute('hs-target-country');
      console.log(attr);

      const activePopup = document.querySelector(
        `.map_popup-wrap .map_popup-items[hs-target-country="${attr}"]`
      );

      allPopups.forEach((popup) => {
        popup.classList.add('is--hide');
        if (!popup.classList.contains('is--hide')) {
          popup.classList.add('is--hide');
        }
      });
      allTriggers.forEach((svg) => {
        if (svg.getAttribute('hs-target-country') !== attr) {
          svg.style.opacity = 0.3;
        }
      });

      if (activePopup) {
        activePopup.classList.remove('is--hide');
        map.style.pointerEvents = 'none';
        trigger.style.opacity = 1;
        //console.log(trigger.style.opacity);
        //add extra class to map_popup-wrap to handle tint overlay
        mapWrap.querySelector('.map_popup-wrap').classList.add('is--active-overlay');
      }
    });

    if (tabMediaQuery) return;
    trigger.addEventListener('mouseover', () => {
      const attr = trigger.getAttribute('hs-target-country');
      const activeHoverItem = mapWrap.querySelector(
        `.map-hover_item[hs-target-country="${attr}"]`
      );
      console.log(attr, activeHoverItem);
      hoverItems.forEach((hItem) => {
        if (hItem.classList.contains('is--active')) {
          hItem.classList.remove('is--active');
        }
      });
      allTriggers.forEach((svg) => {
        if (svg.getAttribute('hs-target-country') !== attr) {
          svg.style.opacity = 0.3;
        }
      });
      if (activeHoverItem) {
        activeHoverItem.classList.add('is--active');
        trigger.style.opacity = '';
        console.log(trigger);
      }
    });
    trigger.addEventListener('mouseout', () => {
      hoverItems.forEach((hItem) => {
        if (hItem.classList.contains('is--active')) {
          hItem.classList.remove('is--active');
        }
      });
      allTriggers.forEach((svg) => {
        svg.style.opacity = 1;
      });
    });
  });

  closeButn.forEach((butn) => {
    butn.addEventListener('click', () => {
      allPopups.forEach((popup) => {
        popup.classList.add('is--hide');
      });
      allTriggers.forEach((svg) => {
        svg.style.opacity = '';
        console.log(`svg color: ${svg.style.opacity} `);
      });
      map.style.pointerEvents = 'auto';
      //Remove extra class to map_popup-wrap to handle tint overlay
      mapWrap.querySelector('.map_popup-wrap').classList.remove('is--active-overlay');
    });
  });

    // CLICK OUTSIDE POPUP TO CLOSE
  mapWrap.addEventListener('click', (event) => {
    const popupWrap = mapWrap.querySelector('.map_popup-wrap');

    // Only run when popup is active
    if (!popupWrap.classList.contains('is--active-overlay')) return;

    // Ignore clicks inside actual popup content
    if (event.target.closest('.map_popup-items')) return;

    // ---- SAME LOGIC AS CLOSE BUTTON ---- //
    allPopups.forEach((popup) => popup.classList.add('is--hide'));

    allTriggers.forEach((svg) => (svg.style.opacity = ''));

    map.style.pointerEvents = 'auto';

    popupWrap.classList.remove('is--active-overlay');
  });
}

function sliderAnimation() {
  const allPopupItems = document.querySelectorAll('.map_wrap .map_popup-items');
  allPopupItems.forEach((item) => {
    let currentIndex = 0;
    const prevButton = item.querySelector('.popup-arrow.is--prev');
    const nextButton = item.querySelector('.popup-arrow.is--next');
    const allSlideItems = item.querySelectorAll('.map_popup');
    const currTxt = item.querySelector('.popup-curr');
    const totalTxt = item.querySelector('.popup-total');
    const arrowWrap = item.querySelector('.popup-arrow-wrap');
    console.log(allPopupItems.length);
    const totalSlides = allSlideItems.length;

    totalTxt.innerHTML = allSlideItems.length;

    // allSlideItems[currentIndex].classList.add('is--active');
    // 🔥 NEW: Hide entire arrow wrapper if only 1 slide
    // --------------------------------------
    if (totalSlides <= 1) {
      if (arrowWrap) arrowWrap.style.display = "none";
    } else {
      if (arrowWrap) arrowWrap.style.display = ""; // restore default
    }
    // --------------------------------------

    if (!prevButton || !nextButton) return;

    function handleIndexChange() {
      if (allSlideItems[currentIndex]) {
        allSlideItems.forEach((slide) => {
          slide.classList.remove('is--active');
        });
        allSlideItems[currentIndex].classList.add('is--active');
        currTxt.innerHTML = currentIndex + 1;
      }
    }

    //NEXT CLICK
    nextButton.addEventListener('click', () => {
      if (currentIndex === allSlideItems.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      console.log(currentIndex);
      handleIndexChange();
    });

    //PREVIOUS CLICK
    prevButton.addEventListener('click', () => {
      if (currentIndex === 0) {
        currentIndex = allSlideItems.length - 1;
      } else {
        currentIndex--;
      }
      handleIndexChange();
    });
    handleIndexChange();
  });
}

function mapTabDownSlider() {
  const mapComponent = document.querySelector('.map-component');
  const nextButn = document.querySelector(
    '[hs-outer-arrows] .popup-arrow.is--next'
  );
  const prevButn = document.querySelector(
    '[hs-outer-arrows] .popup-arrow.is--prev'
  );
  const windowWidth = window.innerWidth;
  const oneFold = windowWidth;
  let totalWidth = mapComponent.clientWidth - oneFold;
  let currMove = 0;
  let differenceMove = 0;

  let currentIndex = 0;

  // totalWidth = 350;

  console.log(totalWidth, window.innerWidth);

  function handleIndexChange() {
    if (currMove === 0) {
      prevButn.style.pointerEvents = 'none';
      prevButn.style.opacity= 0;
    } else {
      prevButn.style.pointerEvents = '';
      prevButn.style.opacity = '';
    }

    if (currMove === totalWidth) {
      nextButn.style.pointerEvents = 'none';
      nextButn.style.opacity = 0;
    } else {
      nextButn.style.pointerEvents = '';
      nextButn.style.opacity = '';
    }
  }

  // if total width > currentwidth  add by one fold
  //but if total width - currentWidth is less than one fold then add only subtracted num

  nextButn.addEventListener('click', () => {
    if (totalWidth > currMove) {
      differenceMove = totalWidth - currMove;
      if (differenceMove > oneFold) {
        currMove = currMove + oneFold;
        mapComponent.style.transform = `translateX(-${currMove}px)`;
        currentIndex++;
      } else {
        currMove = currMove + differenceMove;
        mapComponent.style.transform = `translateX(-${currMove}px)`;
        currentIndex++;
      }
    }
    console.log(totalWidth, currMove);

    handleIndexChange();
  });

  prevButn.addEventListener('click', () => {
    if (currMove > 0) {
      if (currMove === totalWidth) {
        currMove = currMove - differenceMove;
        mapComponent.style.transform = `translateX(-${currMove}px)`;
        currentIndex--;
      } else {
        currMove = currMove - oneFold;
        mapComponent.style.transform = `translateX(-${currMove}px)`;
        currentIndex--;
      }
    }
    handleIndexChange();
  });
  handleIndexChange();
}

addingContent();
mapClickFunc();
sliderAnimation();
mapTabDownSlider();
