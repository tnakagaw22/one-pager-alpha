import { OnePagerData, OnePagerPublicData } from '../model/model';
import * as founders from './founders';
import * as investors from './investors';
import * as faqs from './faqs';

/** An empty one pager, for initial React state */
export const EMPTY_ONE_PAGER: OnePagerData = {
  companyName: '',
  url: '',
  industryTags: [],
  briefDescription: '',
  founders: [],
  faqs: [],
  mapUrl: '',
};

const facebook: OnePagerData = {
  companyName: 'Facebook',
  url: 'facebook',
  industryTags: ['Social Media', 'Messaging', 'Mobile'],
  briefDescription:
    'Online social networking platform for users to connect with friends and family',
  detailDescription:
    'Users can create a profile, share images and other media, send and accept friend requests. Largest social media with more than 2B users worldwide',
  fundraisingStage: 'Seed',
  fundraisingStageGoal: 500000,
  fundsRaisedInStage: 100000,
  fundraisingDetails: 'To transform from a school network to a public website',
  founders: [founders.facebook1, founders.facebook2, founders.facebook3],
  pitchVideoLink: 'https://www.youtube.com/watch?v=WzgNAN3dW-I',
  investors: [investors.investor2],
  faqs: faqs.facebookFaqs,
  mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123674388541!2d-73.99044428255614!3d40.73730410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593ad569747f%3A0x3d6dc2d662404da2!2sFacebook!5e0!3m2!1sen!2sus!4v1605242752714!5m2!1sen!2sus',
};

const lendingClub: OnePagerData = {
  companyName: 'Lending Club',
  url: 'lending-club',
  industryTags: ['P2P', 'Consumer Lending', 'Finance'],
  briefDescription: 'P2P platform for creditworthy borrowers and lenders',
  detailDescription:
    'Peer lending network that brings together creditworthy borrowers and investors for simpler borrowing and investing at better rates',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 12000000,
  fundsRaisedInStage: 5000000,
  fundraisingDetails: 'Expand capabilities and accelerate customer growth',
  founders: [founders.lendingClub1, founders.lendingClub2],
  investors: [investors.investor1],
  faqs: faqs.lendingClubFaqs,
  mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23614.518988627573!2d-71.58866846044921!3d42.28247500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e38aaf4ae8f379%3A0xe16ce732919dc643!2sLendingClub%20Patient%20Solutions!5e0!3m2!1sen!2sus!4v1605243244267!5m2!1sen!2sus',
};

const spotify: OnePagerData = {
  companyName: 'Spotify',
  url: 'spotify',
  industryTags: ['music', 'streaming'],
  briefDescription: 'Ad-financed music streaming service	',
  detailDescription:
    'Commercial streaming service that provides digital content from a wide range of artists. Users can search music, create, share playlists, and integrate social media accounts. Can be access on computers or mobile devices.',
  fundraisingStage: 'Series A',
  fundraisingStageGoal: 21600000,
  fundsRaisedInStage: 500000,
  fundraisingDetails: 'Grow music library and licenses, developers salaries',
  founders: [founders.spotify1, founders.spotify2],
  pitchVideoLink: 'https://www.youtube.com/watch?v=ZDXETBfXSuc&t=166s',
  investors: [investors.investor1],
  faqs: faqs.spotifyFaqs,
  mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.346192684891!2d-74.01417808451104!3d40.710394845650555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a328bb5c7f%3A0xf14187fc45e4df26!2sSpotify!5e0!3m2!1sen!2sus!4v1605243187704!5m2!1sen!2sus',
};

const workday: OnePagerData = {
  companyName: 'Workday',
  url: 'workday',
  industryTags: ['SaaS', 'HR', 'Software'],
  briefDescription: 'SaaS provider for enterprises',
  detailDescription:
    'Provides human capital management, payroll, financial management software solutions for enterprises',
  fundraisingStage: 'Pre-Seed',
  fundraisingStageGoal: 15000000,
  fundsRaisedInStage: 1000000,
  fundraisingDetails: 'Develop software platform',
  founders: [founders.workday1, founders.workday2],
  investors: [investors.investor1, investors.investor2],
  faqs: faqs.workdayFaqs,
  mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.641828262384!2d-73.98693468451016!3d40.74790614335494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3eb05ad4b%3A0x2764b7a15c96caba!2sWorkday%20-%20New%20York!5e0!3m2!1sen!2sus!4v1605243154595!5m2!1sen!2sus',
};

const zynga: OnePagerData = {
  companyName: 'Zynga',
  url: 'zynga',
  industryTags: ['Gaming', 'Mobile'],
  briefDescription: 'Develops and operates social games',
  detailDescription:
    'Offers online social games such as Words With Friends, Zynga Poker and Farmville. Operates games on web, social networking sites and mobile platforms worldwide. Provides advertising services in its games.',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 29000000,
  fundsRaisedInStage: 10000000,
  fundraisingDetails: 'Game production, acquisition and marketing',
  founders: [founders.zynga1, founders.zynga2, founders.zynga3],
  pitchVideoLink: 'https://www.youtube.com/watch?v=HdVWHAPiqno',
  investors: [investors.investor1, investors.investor3],
  faqs: faqs.zyngaFaqs,
  mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068611.582659641!2d-78.9377756595379!3d41.31558531581875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb33ef38a049%3A0x732ca636effb6032!2sZynga!5e0!3m2!1sen!2sus!4v1605243111600!5m2!1sen!2sus',
};

/** Map of urls to full one pager data. */
export const ONE_PAGERS_ALL_DATA_MAP: Map<string, OnePagerData> = new Map([
  [facebook.url, facebook],
  [lendingClub.url, lendingClub],
  [spotify.url, spotify],
  [workday.url, workday],
  [zynga.url, zynga],
]);

/** Array of all public one pager data. */
export const ONE_PAGERS_PUBLIC_DATA_ARRAY: OnePagerPublicData[] = Array.from(
  ONE_PAGERS_ALL_DATA_MAP.values()
).map((onePager: OnePagerData) => {
  return {
    companyName: onePager.companyName,
    url: onePager.url,
    industryTags: onePager.industryTags,
    briefDescription: onePager.briefDescription,
  };
});
