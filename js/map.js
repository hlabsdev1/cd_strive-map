const mapContent = [
  {
    name: 'Philippines',
    id: 'philippines',
    partners: [
      {
        name: 'ChatGenie',
        logo: '',
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
        logo: '',
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
    name: 'Brazil',
    id: 'brazil',
    partners: [
      {
        name: 'Flourish Fi',
        logo: '',
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
        logo: '',
        description:
          "Aliança Empreendedora redeveloped the Tamo Junto digital learning platform, targeting 500,000 micro-businesses in Brazil's favelas. The gamified platform offers dual tracks for business digitization and financial literacy, featuring short videos and rewards to promote digital inclusion through accessible education.",
        outcomes: [
          'Reached over 900,000 micro- and small businesses.',
          'Over 6,000 small businesses completed training and accessed credit.',
          '90% of small businesses implemented new practices they learned on the platform.',
        ],
        link: 'https://strivecommunity.org/programs/supporting-the-digitization-of-micro-enterprises-in-brazils-favelas',
      },
    ],
  },
];

function addingContent() {
  const popupWrapper = document.querySelector('.map_popup-wrap');
  popupWrapper.innerHTML = mapContent
    .map((content) => {
      const listItems = content.partners[0].outcomes;
      const listHtml = listItems
        .map((e) => {
          return `            
        <div class="popup-list-item">
          <div class="popup-list-icon"></div>
          <div class="popup-list-txt">
          ${e}
          </div>
      </div>`;
        })
        .join('');

      // console.log(listHtml);

      return `
      <div class="map_popup" hs-target-country="${content.id}">
      <div class="map_popup-inner">
        <div class="map_popup-top"></div>
        <div class="map_popup-bottom">
          <div class="map_popup-bottm-header">
            <div class="popup-heading">${content.partners[0].name}</div>
          </div>
          <div class="popup-body">${content.partners[0].description}</div>
          <div class="popup-list-wrap">
          ${listHtml}
          </div>
        </div>
      </div>
      <div class="popup-close-icon">Back to map</div>
    </div>
      `;
    })
    .join('');
}

function clickFunc() {
  const svgTriggers = document.querySelectorAll('svg [hs-target-country]');
  const allPopups = document.querySelectorAll('.map_popup-wrap .map_popup');
  const closeButn = document.querySelectorAll(
    '.map_popup-wrap .popup-close-icon'
  );
  allPopups.forEach((popup) => {
    popup.classList.add('is--hide');
  });
  svgTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const attr = trigger.getAttribute('hs-target-country');
      console.log(attr);

      const activePopup = document.querySelector(
        `.map_popup-wrap .map_popup[hs-target-country="${attr}"]`
      );

      allPopups.forEach((popup) => {
        popup.classList.add('is--hide');
        if (!popup.classList.contains('is--hide')) {
          popup.classList.add('is--hide');
        }
      });

      if (activePopup) {
        activePopup.classList.remove('is--hide');
      }
    });
  });

  closeButn.forEach((butn) => {
    butn.addEventListener('click', () => {
      allPopups.forEach((popup) => {
        popup.classList.add('is--hide');
      });
    });
  });
}

addingContent();
clickFunc();
