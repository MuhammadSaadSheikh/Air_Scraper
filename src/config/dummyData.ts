import {
  grandMarriotHotel,
  hiltonGardenInn,
  indiGoLogo,
  thePalmResort,
} from 'src/assets/Images';
import { BadgeType } from 'src/components/StatusBadge';
import { Colors } from 'src/themes';

export const flightBookings = [
  {
    origin: {
      code: 'DEL',
      city: 'New Delhi',
      terminal: '2',
      time: '16:30',
      delayedTime: '16:50',
    },
    destination: {
      code: 'SFO',
      city: 'San Fransisco',
      gate: 'G2',
      time: '22:10',
      delayedTime: '22:30',
    },
    date: 'Fri, 28 Feb 25',
    airline: 'IndiGo',
    flightNumber: 'IA2543',
    airlineLogo: indiGoLogo.uri,
    flightStatus: 'pending' as BadgeType,
    flightStatusDetails: 'Check-in Pending',
    flightCode: 'DBX',
    pnr: '5467DB',
    durations: {
      first: '2h 36m',
      layover: '6h 30m',
    },
    additionalInformation:
      'Possible change of planes\n1h 5m layover in BOM (Mumbai)',
  },
  {
    origin: {
      code: 'DEL',
      city: 'New Delhi',
      terminal: '2',
      time: '16:30',
    },
    destination: {
      code: 'SFO',
      city: 'San Fransisco',
      gate: 'G2',
      time: '22:10',
    },
    date: 'Fri, 28 Feb 25',
    airline: 'IndiGo',
    flightNumber: 'IA2543',
    airlineLogo: indiGoLogo.uri,
    flightStatus: 'delayed' as BadgeType,
    flightStatusDetails: 'Delayed',
    flightCode: 'DBX',
    pnr: '5467DB',
    durations: {
      first: '2h 36m',
      layover: '6h 30m',
    },
  },
  {
    origin: {
      code: 'DEL',
      city: 'New Delhi',
      terminal: '2',
      time: '16:30',
    },
    destination: {
      code: 'DBX',
      city: 'Dubai',
      gate: 'G2',
      time: '22:10',
    },
    date: 'Fri, 28 Feb 25',
    airline: 'IndiGo',
    flightNumber: 'IA2543',
    airlineLogo: indiGoLogo.uri,
    flightStatus: 'approved' as BadgeType,
    flightStatusDetails: 'Check-in Done',
    flightCode: 'DBX',
    pnr: '5467DB',
    durations: {
      first: '2h 36m',
    },
  },
];

export const hotelBookings = [
  {
    id: '1',
    imageUrl: grandMarriotHotel.uri,
    status: 'approved' as BadgeType,
    statusText: 'Upcoming',
    title: 'Grand Marriot Dubai Central',
    stars: 5,
    checkInDate: '25 Feb 2025, 12:30PM',
    guests: '3',
    nights: '4',
  },
  {
    id: '2',
    imageUrl: hiltonGardenInn.uri,
    status: 'rejected' as BadgeType,
    statusText: 'Cancelled',
    title: 'Hilton Garden Inn',
    stars: 4,
    checkInDate: '18 Jan 2025, 02:00PM',
    guests: '2',
    nights: '3',
  },
  {
    id: '3',
    imageUrl: thePalmResort.uri,
    status: 'pending' as BadgeType,
    statusText: 'Pending',
    title: 'The Palm Resort',
    stars: 3,
    checkInDate: '10 Dec 2024, 03:00PM',
    guests: '4',
    nights: '5',
  },
];

export const origin = {
  code: 'DEL',
  city: 'New Delhi',
  time: '16:30',
};

export const destination = {
  code: 'DBX',
  city: 'Dubai',
  time: '22:10',
};

export const boardingPasses = [
  {
    name: 'John Smith',
    age: '29',
    seatNo: '17F',
    flightClass: 'Economy',
    isEmpty: false,
  },
  {
    name: 'Kiara Devs',
    age: '32',
    seatNo: '20F',
    flightClass: 'Economy',
    isEmpty: true,
  },
  {
    name: 'Olivia Tiara',
    age: '24',
    seatNo: '30F',
    flightClass: 'Economy',
    isEmpty: false,
  },
];

export const mineStatsChart = [
  {
    stacks: [
      { value: 10, color: Colors.primary },
      { value: 5, color: Colors.errorBG },
    ],
    label: 'Jan',
  },
  {
    stacks: [{ value: 8, color: Colors.primary }],
    label: 'Feb',
  },
  {
    stacks: [
      { value: 8, color: Colors.primary },
      { value: 3, color: Colors.errorBG },
    ],
    label: 'Mar',
  },
  {
    stacks: [
      { value: 10, color: Colors.primary },
      { value: 5, color: Colors.errorBG },
    ],
    label: 'Apr',
  },
  {
    stacks: [{ value: 8, color: Colors.primary }],
    label: 'May',
  },
  {
    stacks: [
      { value: 8, color: Colors.primary },
      { value: 3, color: Colors.errorBG },
    ],
    label: 'Jun',
  },
  {
    stacks: [{ value: 10, color: Colors.primary }],
    label: 'Jul',
  },
  {
    stacks: [
      { value: 8, color: Colors.primary },
      { value: 3, color: Colors.errorBG },
    ],
    label: 'Aug',
  },
  {
    stacks: [
      { value: 8, color: Colors.primary },
      { value: 3, color: Colors.errorBG },
    ],
    label: 'Sep',
  },
  {
    stacks: [
      { value: 10, color: Colors.primary },
      { value: 5, color: Colors.errorBG },
    ],
    label: 'Oct',
  },
  {
    stacks: [
      { value: 8, color: Colors.primary },
      { value: 3, color: Colors.errorBG },
    ],
    label: 'Nov',
  },
  {
    stacks: [
      { value: 8, color: Colors.primary },
      { value: 3, color: Colors.errorBG },
    ],
    label: 'Dec',
  },
];

export const teamStatsChart = [
  { value: 50, color: Colors.error, label: 'Travel' },
  { value: 80, color: '#00B8D9', label: 'Food' },
  { value: 90, color: Colors.green, label: 'Food' },
  { value: 70, color: Colors.yellow, label: 'Misc' },
];
