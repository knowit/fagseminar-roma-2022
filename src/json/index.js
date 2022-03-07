export const villages = [];

const year = '2022';
const season = {
  short: 'vår',
  shortCapitalized: 'Vår',
  long: 'våren',
  longCapitalized: 'Våren',
};
const startDate = '25. mars';
const endDate = '26. mars';

export const eventData = {
  date: `${startDate} - ${endDate} ${year}`,
  longDate: `${startDate} - ${endDate} ${year}`,
  venue: 'Quality Hotel Fredrikstad',
  adress: 'Nygata 2-6, 1607 Fredrikstad, Norge',
  city: 'Fredrikstad',
  country: 'Norge',
  year,
  monthNumber: 3,
  season,
  startDate,
  endDate,
  cities: [
    'Berlin',
    'Istanbul',
    'Madrid',
    'Dublin',
    'Svalbard',
    'Reykjavik',
    'Palma',
    'Ljubljana',
    'Strømstad',
    'Praha',
  ],
};

const viewmodel = {
  title: `Fagseminar ${eventData.season.longCapitalized} ${eventData.year}`,
  event: {
    ...eventData,
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021.142645477965!2d10.939104470308866!3d59.21124606173108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46440327712c850d%3A0x242977c411e3527a!2sQuality%20Hotel%20Fredrikstad!5e0!3m2!1sno!2sno!4v1646648599179!5m2!1sno!2sno',
  },
  meta: {
    title: `Knowit Objectnet Fagseminar ${eventData.year}`,
    description: `Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. ${season.longCapitalized} ${year} vil den bli avholdt ${eventData.date} på ${eventData.city}, ${eventData.country}.`,
    keywords: `Fagseminar, ${eventData.city}, ${eventData.country}, Fag, Foredrag`,
  },
  days: [
    {
      date: '25',
      label: 'Fredag 25.03',
    },
    {
      date: '26',
      label: 'Lørdag 26.03',
    },
  ],
  schedules: [],
  talks: {},
  villages: [],
};

export default viewmodel;
