import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootballBall, faBasketballBall, faBaseballBall, faGolfBall } from '@fortawesome/free-solid-svg-icons';

export const ppython = {
  0:{
    'title':'Top 14% Model In 2019 Kaggle ML March Madness Competition',
    'subtitle': 'Explored Ensembles, Timeseries, Regressions to predict NCAA Tournament',
    'icon':faBasketballBall,
    'skill1':'Feature Engineering',
    'skill2':'Data Aggregation',
    'skill3':'Feature Selection',
    'url':'https://github.com/btatkinson/march_madness'
  },
  1:{
    'title':'Python Season Simulator',
    'subtitle': 'Uses Random Walk to Simulate a Sports Season',
    'icon':faBaseballBall,
    'skill1':'Elo Rankings',
    'skill2':'Monte Carlo Simulation',
    'skill3':'Random Walk',
    'url':'https://github.com/btatkinson/sportsball-elo'
  },
  2:{
    'title':'Pro-Football-Reference.com Scraper',
    'subtitle': 'Scrapes roster data from pro-football-reference.',
    'icon':faFootballBall,
    'skill1':'Scrapy',
    'skill2':'Data Cleaning/Pipeline',
    'skill3':'Data Validation',
    'url':'https://github.com/btatkinson/pfr_scraper/tree/master/nflplayerattr'
  },
  3:{
    'title':'Golf Scraper',
    'subtitle': 'Scrapes golf tournament results from multiple websites.',
    'icon':faGolfBall,
    'skill1':'Scrapy/Scrapy Splash',
    'skill2':'Data Cleaning/Pipeline',
    'skill3':'Data Validation',
    'url':'https://github.com/btatkinson/golf_scraper'
  },
}
