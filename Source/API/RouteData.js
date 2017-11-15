LocationDetails =[  
    { 
      "RouteId":"LC0001",
      "TITLE": "North Station MBTA",
      "LAT": 42.3657,
      "LONG": -71.061
    },
    { 
      "RouteId":"LC0002",
      "TITLE": "601 Congress",
      "LAT": 42.347404,
      "LONG": -71.040007
    },
    { 
      "RouteId":"LC0003",
      "TITLE": "State Street MBTA",
     "LAT": 42.3587,
      "LONG": -71.0578
    },
    {
      "RouteId":"LC0004",
      "TITLE": "Back Bay",
      "LAT": 42.350265,
      "LONG": -71.080976
    },   
 ]

const RouteDetails =[
   {
    "ROUTE_ID":"RT001",
    "ROUTE_TITLE": "North Station to 601 Congress",
    "ROUTE_SHUTTLE_TITLE": "AM Commuter Shuttles",
    "ESTIMATED_TIME": "15-20 minutes",
    "START_POINT": "North Station MBTA",
    "END_POINT": "601 Congress",
    "PICKUP_POINT": "LC0008",
    "DROP_OFF_POINT": "",
    "ROUTE_SERVICE": 
    [
      {
        time1:{Pick: '6:30 AM',Drop:'6:50 AM'},
        time2: {Pick: '8:30 AM',Drop:'8:50 AM'}
      },
      {
        time1: {Pick: '6:50 AM',Drop:'7:10 AM'},
        time2: {Pick: '8:50 AM',Drop:'9:10 AM'}
      },
      {
        time1: {Pick: '7:10 AM',Drop:'7:30 AM'},
        time2: {Pick: '9:10 AM',Drop:'9:30 AM'}
      },
      {
        time1: {Pick: '7:30 AM',Drop:'7:50 AM'},
        time2: {Pick: '9:30 PM',Drop:'9:50 AM'}
      },
      {
        time1: {Pick: '7:50 AM',Drop:'8:10 AM'},
        time2: {Pick: '9:50 AM',Drop:'10:10 AM'}
      },
      {
        time1: {Pick: '8:10 AM',Drop:'8:30 AM'},
        time2: {Pick: ' ',Drop:''}
      }
      
    ]
    ,
    "GENERAL_INFO": ""
  },
 {
    "ROUTE_ID":"RT002",
    "ROUTE_TITLE": "601 Congresss to North Station MBTA",
    "ROUTE_SHUTTLE_TITLE": "PM Commuter Shuttles",
    "ESTIMATED_TIME": "15-20 minutes",
    "START_POINT": "601 Congress",
    "END_POINT": "North Station MBTA",
    "PICKUP_POINT": "LC0005",
    "DROP_OFF_POINT": "",
    "ROUTE_SERVICE": 
    [
      {
        time1: {Pick: '4:10 PM',Drop:'4:30 PM'},
        time2: {Pick: '6:10 PM',Drop:'6:30 PM'}
      },
      {
        time1: {Pick: '4:30 PM',Drop:'4:50 PM'},
        time2: {Pick: '6:30 PM',Drop:'6:50 PM'}
      },
      {
        time1: {Pick: '4:50 PM',Drop:'5:10 PM'},
        time2: {Pick: '7:10 PM',Drop:'7:30 PM'}
      },
      {
        time1: {Pick: '5:10 PM',Drop:'6:50 AM'},
        time2: {Pick: '7:30 PM',Drop:'7:50 PM'}
      },
      {
        time1: {Pick: '5:30 PM',Drop:'6:50 PM'},
        time2: {Pick: '7:30 PM',Drop:'6:50 PM'}
      },
      {
        time1: {Pick: '5:50 PM',Drop:'6:50 PM'},
        time2: {Pick: ' ',Drop:''}
      }
          
    ]   
  },
  {
    "ROUTE_ID":"RT003",
    "ROUTE_TITLE": "State Street MBTA to 601 Congress",
    "ROUTE_SHUTTLE_TITLE": "AM Commuter Shuttles",
    "ESTIMATED_TIME": "15-20 minutes",
    "START_POINT": "State Street MBTA",
    "END_POINT": "601 Congress",
    "PICKUP_POINT": "LC0008",
    "DROP_OFF_POINT": "",
    "ROUTE_SERVICE": 
    [
      {
        time1: {Pick: '6:25 AM',Drop:'6:45 AM'},
        time2: {Pick: '8:25 AM',Drop:'8:45 AM'}
      },
      {
        time1: {Pick: '6:45 AM',Drop:'8:05 AM'},
        time2: {Pick: '8:45 AM',Drop:'9:05 AM'}
      },
      {
        time1: {Pick: '7:05 AM',Drop:'7:25 AM'},
        time2: {Pick: '9:05 AM',Drop:'9:25 AM'}
      },
      {
        time1: {Pick: '7:25 AM',Drop:'7:45 AM'},
        time2: {Pick: '9:25 PM',Drop:'9:45AM'}
      },
      {
        time1: {Pick: '7:45 AM',Drop:'8:05 AM'},
        time2: {Pick: '9:45 AM',Drop:'10:05 AM'}
      },
      {
        time1: {Pick: '8:05 AM',Drop:'8:25 AM'},
        time2: {Pick: ' ',Drop:''}
      },
      
    ]
    ,
    "GENERAL_INFO": ""
  },
  {
    "ROUTE_ID":"RT004",
    "ROUTE_TITLE": "601 Congresss to State Street MBTA",
    "ROUTE_SHUTTLE_TITLE": "PM Commuter Shuttles",
    "ESTIMATED_TIME": "15-20 minutes",
    "START_POINT": "601 Congress",
    "END_POINT": "State Street MBTA",
    "PICKUP_POINT": "LC0005",
    "DROP_OFF_POINT": "",
    "ROUTE_SERVICE": 
    [
      {
        time1: {Pick: '4:10 PM',Drop:'4:30 PM'},
        time2: {Pick:'6:10 PM',Drop:'6:30 PM'}
      },
      {
        time1: {Pick: '4:30 PM',Drop:'4:50 PM'},
        time2: {Pick: '6:30 PM',Drop:'6:50 PM'}
      },
      {
        time1: {Pick: '4:50 PM',Drop:'5:10 PM'},
        time2: {Pick: '6:50 PM',Drop:'7:10 PM'}
      },
      {
        time1: {Pick: '5:10 PM',Drop:'5:30 PM'},
        time2: {Pick: '7:10 PM',Drop:'7:30 PM'}
      },
      {
        time1: {Pick: '5:30 PM',Drop:'5:50 PM'},
        time2: {Pick: '7:30 PM',Drop:'7:50 PM'}
      },
      {
        time1: {Pick: '5:50 PM',Drop:'6:10 PM'},
        time2: {Pick: '',Drop:''}
      },
          
    ]   
  },
  {
    "ROUTE_ID":"RT005",
    "ROUTE_TITLE": "Back Bay to 601 Congress",
    "ROUTE_SHUTTLE_TITLE": "AM Commuter Shuttles",
    "ESTIMATED_TIME": "15-20 minutes",
    "START_POINT": "Back Bay",
    "END_POINT": "601 Congress",
    "PICKUP_POINT": "LC0008",
    "DROP_OFF_POINT": "",
    "ROUTE_SERVICE": 
    [
      {
        time1: {Pick: '7:35 AM',Drop:'7:55 AM'},
        time2: {Pick: '1:35 PM',Drop:'1:55 PM'}
      },
      {
        time1: {Pick: '8:35 AM',Drop:'8:55 AM'},
        time2: {Pick: '2:35 PM',Drop:'2:55 PM'}
      },
      {
        time1: {Pick: '9:35 AM',Drop:'9:55 AM'},
        time2: {Pick: '3:35 PM',Drop:'3:55 PM'}
      },
      {
        time1: {Pick: '10:35 AM',Drop:'10:55 AM'},
        time2: {Pick: '4:35 PM',Drop:'4:55 PM'}
      },
      {
        time1: {Pick: '11:35 AM',Drop:'11:55 AM'},
        time2: {Pick: ' ',Drop:''}
      },
      {
        time1: {Pick: '12:35 pm',Drop:'6:50 AM'},
        time2: {Pick: ' ',Drop:''}
      },
      
    ]
    ,
    "GENERAL_INFO": ""
  },
  {
    "ROUTE_ID":"RT006",
    "ROUTE_TITLE": "601 Congresss to Back Bay",
    "ROUTE_SHUTTLE_TITLE": "Day Time Shuttles",
    "ESTIMATED_TIME": "15-20 minutes",
    "START_POINT": "601 Congress",
    "END_POINT": "Back Bay",
    "PICKUP_POINT": "LC0005",
    "DROP_OFF_POINT": "",
    "ROUTE_SERVICE": 
    [
      {
        time1: {Pick: '8:05 AM',Drop:'8:20 AM'},
        time2: {Pick:'2:05 PM',Drop:'2:25 AM'}
      },
      {
        time1: {Pick: '9:05 AM',Drop:'9:25 AM'},
        time2: {Pick: '3:05 PM',Drop:'3:25 AM'}
      },
      {
        time1: {Pick: '10:05 AM',Drop:'10:25 AM'},
        time2: {Pick: '4:05 PM',Drop:'4:25 AM'}
      },
      {
        time1: {Pick: '11:05 AM',Drop:'11:25 AM'},
        time2: {Pick: '5:05 PM',Drop:'5:25 AM'}
      },
      {
        time1: {Pick: '12:05 PM',Drop:'12:25 AM'},
        time2: {Pick: '5:05 PM',Drop:'5:25 AM'}
      },
      {
        time1: {Pick: '1:05 PM',Drop:'1:25 AM'},
        time2: {Pick: ' ',Drop:''}
      },          
    ]   
  },
]

export default {
  RouteDetails,
  LocationDetails,
};