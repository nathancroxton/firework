import "./styles.css";

const items = [
  { id: "a", value: "apple" },
  { id: "b", value: "banana" },
  { id: "c", value: "carrot" }
];

const data = [
  {
    permit: "NFD00505441",
    type: "Theatrical/indoor fireworks",
    date: "05-06-2022 - 06-06-2022",
    time: "17:00:00 - 23:00:00",
    location: "Scenic Nsw Equine Centre 205 Campbelltown Rd Denham Court Nsw"
  },
  {
    permit: "NFD00505540",
    type: "Organised Public Display",
    date: "15-01-2022 - 15-01-2022",
    time: "20:00:00 - 23:00:00",
    location: "South Maroubra Surf Lifesaving Club 1R Marine Pde Maroubra Nsw"
  },
  {
    permit: "NFD00505564",
    type: "Organised Public Display",
    date: "05-02-2022 - 05-02-2022",
    time: "20:00:00 - 22:00:00",
    location: "Nowra Showground West Street Nowra Nsw"
  },
  {
    permit: "NFD00505569",
    type: "Organised Public Display",
    date: "15-01-2022 - 15-01-2022",
    time: "21:00:00 - 21:30:00",
    location: "25 Buller St Port Macquarie Nsw"
  },
  {
    permit: "NFD00505586",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "20:00:00 - 22:30:00",
    location: "Sports Oval Kioloa Street Huskisson Nsw"
  },
  {
    permit: "NFD00505587",
    type: "Organised Public Display",
    date: "15-01-2022 - 15-01-2022",
    time: "20:00:00 - 22:30:00",
    location: "Albion Park Showground Tongarra Road Albion Park Nsw"
  },
  {
    permit: "NFD00505648",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "21:00:00 - 21:30:00",
    location: "Governor Phillip Park Livington Street Windsor Nsw"
  },
  {
    permit: "NFD00505661",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "20:30:00 - 21:30:00",
    location: "Fishermans Wharf Woy Woy Nsw"
  },
  {
    permit: "NFD00505676",
    type: "Organised Public Display",
    date: "17-04-2022 - 17-04-2022",
    time: "20:00:00 - 23:00:00",
    location:
      "Pier One Sydney Harbour, Autograph Collection 11 Hickson Rd, Walsh Bay Sydney Nsw"
  },
  {
    permit: "NFD00505680",
    type: "Organised Public Display",
    date: "29-05-2022 - 29-05-2022",
    time: "20:00:00 - 23:00:00",
    location:
      "Voco Kirkton Park Hunter Valley, An Ihg Hotel 336 Oakey Creek Rd Pokolbin Nsw"
  },
  {
    permit: "NFD00505690",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "21:00:00 - 21:30:00",
    location: "Memorial Park The Entrance Nsw"
  },
  {
    permit: "NFD00505691",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "21:00:00 - 21:30:00",
    location: "Elizabeth Park Taree Nsw"
  },
  {
    permit: "NFD00505714",
    type: "Organised Public Display",
    date: "20-01-2022 - 20-01-2022",
    time: "19:30:00 - 21:30:00",
    location: "Tamburlaine 358 Mcdonalds Rd Pokolbin Nsw"
  },
  {
    permit: "NFD00505724",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:30:00 - 21:30:00",
    location: "The Esplanade Warners Bay Nsw"
  },
  {
    permit: "NFD00505724",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:30:00 - 21:30:00",
    location:
      "Jetty At Marmong Point Sailing Club George Street Marmong Point Nsw"
  },
  {
    permit: "NFD00505728",
    type: "Theatrical Display",
    date: "05-02-2022 - 05-02-2022",
    time: "20:30:00 - 20:36:00",
    location: "Tenterfield Showground 73 Manners St Tenterfield Nsw"
  },
  {
    permit: "NFD00505734",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "20:30:00 - 21:30:00",
    location: "Wollongong Harbour, Off Endeavour Dr Wollongong Nsw"
  },
  {
    permit: "NFD00505752",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:30:00 - 21:30:00",
    location: "263 Fishing Point Rd Rathmines Nsw"
  },
  {
    permit: "NFD00505753",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:30:00 - 21:30:00",
    location: "The Parade Belmont Nsw"
  },
  {
    permit: "NFD00505726",
    type: "Organised Public Display",
    date: "21-01-2022 - 22-01-2022",
    time: "17:00:00 - 23:00:00",
    location: "Wsid Ferrers Road Eastern Creek Nsw"
  },
  {
    permit: "NFD00505761",
    type: "Organised Public Display",
    date: "14-01-2022 - 16-01-2022",
    time: "18:00:00 - 21:30:00",
    location: "Sydney Opera House 2 Circular Quay East Sydney Nsw"
  },
  {
    permit: "NFD00505765",
    type: "Theatrical/indoor fireworks",
    date: "14-01-2022 - 16-01-2022",
    time: "19:00:00 - 23:00:00",
    location: "130 Edensor Rd Bonnyrigg Nsw"
  },
  {
    permit: "NFD00505784",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "20:30:00 - 21:30:00",
    location: "Walpole St Merrylands Nsw"
  },
  {
    permit: "NFD00505786",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "19:00:00 - 22:00:00",
    location: "Circular Quay & Sydney Opera House Sydney Nsw"
  },
  {
    permit: "NFD00505788",
    type: "Theatrical Display",
    date: "16-01-2022 - 16-01-2022",
    time: "11:00:00 - 12:00:00",
    location: "11 Tallawarra Av Padstow Nsw"
  },
  {
    permit: "NFD00505789",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "21:00:00 - 21:20:00",
    location: "Carysfield Park Cnr Hume Hwy & Johnston Rd Bass Hill Nsw"
  },
  {
    permit: "NFD00505790",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "21:00:00 - 21:20:00",
    location: "Panthers 123 Mulgoa Road Penrith Nsw"
  },
  {
    permit: "NFD00505791",
    type: "Organised Public Display",
    date: "29-01-2022 - 29-01-2022",
    time: "21:30:00 - 21:50:00",
    location: "Berry Showground 35 Alexandra St Berry Nsw"
  },
  {
    permit: "NFD00505792",
    type: "Organised Public Display",
    date: "23-01-2022 - 23-01-2022",
    time: "21:15:00 - 21:45:00",
    location: "Stage Compound The Crescent Parramatta Park Parramatta Nsw"
  },
  {
    permit: "NFD00505793",
    type: "Organised Public Display",
    date: "14-01-2022 - 14-01-2022",
    time: "21:00:00 - 22:00:00",
    location: "Oval Number 1 Bicentennial Park Kable Avenue Tamworth Nsw"
  },
  {
    permit: "NFD00505794",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:00:00 - 23:00:00",
    location: "Catalina Rose Bay Lyne Park, New South Head Rd Rose Bay Nsw"
  },
  {
    permit: "NFD00505795",
    type: "Organised Public Display",
    date: "15-01-2022 - 15-01-2022",
    time: "20:30:00 - 20:45:00",
    location: "Windemere 123 Fishers Lane Loomberah Nsw"
  },
  {
    permit: "NFD00505796",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:00:00 - 22:00:00",
    location: "2-8 Twin Creeks Dr Luddenham Nsw"
  },
  {
    permit: "NFD00505797",
    type: "Organised Public Display",
    date: "29-01-2022 - 29-01-2022",
    time: "20:30:00 - 21:30:00",
    location: "Riverside Oaks Golf Course 74 O'briens Rd Cattai Nsw"
  },
  {
    permit: "NFD00505798",
    type: "Theatrical/indoor fireworks",
    date: "22-01-2022 - 22-01-2022",
    time: "20:00:00 - 21:30:00",
    location: "694 Hermitage Rd Pokolbin Nsw"
  },
  {
    permit: "NFD00505799",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:00:00 - 23:00:00",
    location: "Kiama Showground 2 Bong Bong St Kiama Nsw"
  },
  {
    permit: "NFD00505801",
    type: "Organised Public Display",
    date: "25-01-2022 - 25-01-2022",
    time: "21:00:00 - 21:15:00",
    location: "219 Canley Vale Rd Canley Heights Nsw"
  },
  {
    permit: "NFD00505802",
    type: "Organised Public Display",
    date: "29-01-2022 - 29-01-2022",
    time: "21:00:00 - 21:30:00",
    location: "219 Canley Vale Rd Canley Heights Nsw"
  },
  {
    permit: "NFD00505803",
    type: "Organised Public Display",
    date: "31-01-2022 - 31-01-2022",
    time: "21:30:00 - 00:15:00",
    location: "2 Second Av Canley Vale Nsw"
  },
  {
    permit: "NFD00505804",
    type: "Theatrical Display",
    date: "31-01-2022 - 31-01-2022",
    time: "23:30:00 - 21:59:00",
    location: "61 Northam Av Bankstown Nsw"
  },
  {
    permit: "NFD00505805",
    type: "Organised Public Display",
    date: "31-01-2022 - 31-01-2022",
    time: "23:59:00 - 00:15:00",
    location: "Shop 10 124 Railway Pde Canley Vale Nsw"
  },
  {
    permit: "NFD00505806",
    type: "Organised Public Display",
    date: "31-01-2022 - 31-01-2022",
    time: "23:00:00 - 23:20:00",
    location: "101 Meadows Rd Mount Pritchard Nsw"
  },
  {
    permit: "NFD00505807",
    type: "Theatrical/indoor fireworks",
    date: "31-01-2022 - 01-02-2022",
    time: "23:45:00 - 23:59:00",
    location: "654-658 Cabramatta Rd West Bonnyrigg Nsw"
  },
  {
    permit: "NFD00505808",
    type: "Theatrical/indoor fireworks",
    date: "01-02-2022 - 01-02-2022",
    time: "11:00:00 - 11:30:00",
    location: "564 The Horsley Drive Smithfield Nsw"
  },
  {
    permit: "NFD00505809",
    type: "Theatrical/indoor fireworks",
    date: "01-02-2022 - 01-02-2022",
    time: "19:00:00 - 20:00:00",
    location: "121-133 Prairie Vale Rd Bossley Park Nsw"
  },
  {
    permit: "NFD00505810",
    type: "Organised Public Display",
    date: "16-01-2022 - 16-01-2022",
    time: "18:30:00 - 19:00:00",
    location: "11 O'connell St Parramatta Nsw"
  },
  {
    permit: "NFD00505811",
    type: "Theatrical Display",
    date: "03-02-2022 - 03-02-2022",
    time: "10:00:00 - 14:00:00",
    location: "Shops Henley Street And The Cresent Street Homebush West Nsw"
  },
  {
    permit: "NFD00505812",
    type: "Organised Public Display",
    date: "06-02-2022 - 06-02-2022",
    time: "11:00:00 - 11:30:00",
    location: "101 Meadows Rd Mount Pritchard Nsw"
  },
  {
    permit: "NFD00505813",
    type: "Theatrical/indoor fireworks",
    date: "14-01-2022 - 16-01-2022",
    time: "21:00:00 - 03:00:00",
    location: "123 Pitt St Sydney Nsw"
  },
  {
    permit: "NFD00505814",
    type: "Theatrical/indoor fireworks",
    date: "06-02-2022 - 06-02-2022",
    time: "10:30:00 - 11:10:00",
    location: "654-658 Cabramatta Rd West Bonnyrigg Nsw"
  },
  {
    permit: "NFD00505815",
    type: "Theatrical Display",
    date: "18-02-2022 - 18-02-2022",
    time: "17:00:00 - 21:00:00",
    location: "Mall Anzac Street Campsie Nsw"
  },
  {
    permit: "NFD00505816",
    type: "Theatrical Display",
    date: "20-02-2022 - 20-02-2022",
    time: "11:00:00 - 13:00:00",
    location: "Freedom Plaza John St Cabramatta Nsw"
  },
  {
    permit: "NFD00505817",
    type: "Organised Public Display",
    date: "19-02-2022 - 19-02-2022",
    time: "21:00:00 - 21:15:00",
    location: "193 Railway Pde Cabramatta Nsw"
  },
  {
    permit: "NFD00505818",
    type: "Theatrical/indoor fireworks",
    date: "21-01-2022 - 23-01-2022",
    time: "19:00:00 - 23:00:00",
    location: "130 Edensor Rd Bonnyrigg Nsw"
  },
  {
    permit: "NFD00505819",
    type: "Organised Public Display",
    date: "21-01-2022 - 21-01-2022",
    time: "20:50:00 - 21:30:00",
    location: "2457 Broke Rd Pokolbin Nsw"
  },
  {
    permit: "NFD00505820",
    type: "Organised Public Display",
    date: "06-02-2022 - 06-02-2022",
    time: "20:00:00 - 21:31:00",
    location: "69 Cooks Rd Glenworth Valley Nsw"
  },
  {
    permit: "NFD00505821",
    type: "Organised Public Display",
    date: "11-02-2022 - 11-02-2022",
    time: "21:00:00 - 21:15:00",
    location: "40 Parkes St Jugiong Nsw"
  },
  {
    permit: "NFD00505822",
    type: "Organised Public Display",
    date: "16-04-2022 - 16-04-2022",
    time: "20:00:00 - 23:00:00",
    location: "South Maroubra Surf Lifesaving Club 1R Marine Pde Maroubra Nsw"
  },
  {
    permit: "NFD00505823",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "19:00:00 - 21:30:00",
    location: "Lachlan Street Bridge Lachlan Street Forbes Nsw"
  },
  {
    permit: "NFD00505825",
    type: "Theatrical Display",
    date: "29-01-2022 - 29-01-2022",
    time: "11:00:00 - 12:00:00",
    location: "1183-1187 The Horsley Drive Wetherill Park Nsw"
  },
  {
    permit: "NFD00505826",
    type: "Theatrical Display",
    date: "23-01-2022 - 23-01-2022",
    time: "11:30:00 - 12:30:00",
    location: "Unit 17 24-32 Hughes St Cabramatta Nsw"
  },
  {
    permit: "NFD00505827",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "21:30:00 - 21:45:00",
    location: "26 Ward Rd Kanimbla Nsw"
  },
  {
    permit: "NFD00505828",
    type: "Organised Public Display",
    date: "25-01-2022 - 25-01-2022",
    time: "20:00:00 - 21:30:00",
    location: "3 Park Av Guyra Nsw"
  },
  {
    permit: "NFD00505829",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "20:00:00 - 21:30:00",
    location: "75 Marsh St Armidale Nsw"
  },
  {
    permit: "NFD00505830",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "14:00:00 - 20:00:00",
    location: "David Taylor Park 1 Deeks Rd Werris Creek Nsw"
  },
  {
    permit: "NFD208204",
    type: "Theatrical Display",
    date: "28-02-2022 - 28-02-2022",
    time: "14:00:00 - 17:00:00",
    location: "Rookwood Cemetery Lot 493 Hawthorne Av Rookwood Nsw"
  },
  {
    permit: "NFD208210",
    type: "Theatrical/indoor fireworks",
    date: "27-02-2022 - 27-02-2022",
    time: "16:00:00 - 23:59:00",
    location: "Part Leichhardt Park 38-42 Frazer St Lilyfield Nsw"
  },
  {
    permit: "NFD208300",
    type: "Theatrical Display",
    date: "31-01-2022 - 31-01-2022",
    time: "07:00:00 - 23:00:00",
    location: "38 Driver Av Moore Park Nsw"
  },
  {
    permit: "NFD208302",
    type: "Theatrical Display",
    date: "01-02-2022 - 01-02-2022",
    time: "07:00:00 - 23:00:00",
    location: "245 Picton Rd Razorback Nsw"
  },
  {
    permit: "NFD208367",
    type: "Organised Public Display",
    date: "22-01-2022 - 22-01-2022",
    time: "20:45:00 - 20:55:00",
    location: "Lismore Showgrounds Alexandra Parade Lismore Nsw"
  },
  {
    permit: "NFD208370",
    type: "Organised Public Display",
    date: "26-01-2022 - 26-01-2022",
    time: "21:00:00 - 21:20:00",
    location: "Brad Haddin Oval Lowe Street Queanbeyan Nsw"
  },
  {
    permit: "NFD208371",
    type: "Organised Public Display",
    date: "14-01-2022 - 14-01-2022",
    time: "16:00:00 - 00:00:00",
    location: "38 Frazer St Lilyfield Nsw"
  },
  {
    permit: "NFD208374",
    type: "Theatrical Display",
    date: "21-01-2022 - 21-01-2022",
    time: "17:00:00 - 20:00:00",
    location: "Dixon Sand Quarry Cnr Haerses & Wisemans Ferry Maroota Nsw"
  },
  {
    permit: "XFSU201943",
    type: "Organised Public Display",
    date: "15-01-2022 - 15-01-2022",
    time: "18:00:00 - 21:30:00",
    location: "143 Brett Rd Euston Nsw"
  }
];

const data1 = [
  {
    permit: "NFD00505554",
    type: "Organised Public Display",
    date: "31-12-2021 - 31-12-2021",
    time: "20:30:00 - 21:30:00",
    location: "1 Main St Black Head Nsw"
  },
  {
    permit: "NFD00505556",
    type: "Organised Public Display",
    date: "31-12-2021 - 31-12-2021",
    time: "20:45:00 - 21:30:00",
    location: "Brisbane Waters Gosford Nsw"
  },
  {
    permit: "NFD00505560",
    type: "Organised Public Display",
    date: "31-12-2021 - 31-12-2021",
    time: "20:30:00 - 21:30:00",
    location: "Griffiths Park Hunter St Stockton Nsw"
  },
  {
    permit: "NFD00505564",
    type: "Organised Public Display",
    date: "05-02-2022 - 05-02-2022",
    time: "20:00:00 - 22:00:00",
    location: "Nowra Showground West Street Nowra Nsw"
  },
  {
    permit: "NFD00505569",
    type: "Organised Public Display",
    date: "15-01-2022 - 15-01-2022",
    time: "21:00:00 - 21:30:00",
    location: "25 Buller St Port Macquarie Nsw"
  },
  {
    permit: "NFD00505573",
    type: "Organised Public Display",
    date: "31-12-2021 - 31-12-2021",
    time: "21:00:00 - 21:30:00",
    location: "1 East Esp Manly Nsw"
  },
  {
    permit: "NFD00505574",
    type: "Organised Public Display",
    date: "31-12-2021 - 31-12-2021",
    time: "21:00:00 - 21:30:00",
    location: "Dee Why Beach The Strand Dee Why Nsw"
  },
  {
    permit: "NFD00505575",
    type: "Organised Public Display",
    date: "31-12-2021 - 31-12-2021",
    time: "21:00:00 - 21:30:00",
    location: "275 Watkins Rd Wangi Wangi Nsw"
  },
  {
    permit: "NFD00505577",
    type: "Organised Public Display",
    date: "31-12-2021 - 31-12-2021",
    time: "21:00:00 - 21:15:00",
    location: "Little Beach Nelson Bay Nsw"
  },
  {
    permit: "NFD00505582",
    type: "Organised Public Display",
    date: "08-01-2022 - 08-01-2022",
    time: "19:30:00 - 21:30:00",
    location: "Tamburlaine 358 Mcdonalds Rd Pokolbin Nsw"
  }
];

function Test() {
  return data.map((item) => (
    <div className="card">
      <div className="container">
        <div className="datetime">
          <div className="date">{item.date.substr(0, 10)}</div>
          <div className="time">{item.time}</div>
        </div>
        <div className="location">
          {item.location.substr(0, item.location.length - 3)}
        </div>
        <div className="details">
          <div className="type">{item.type}</div>
          <div className="permit">{item.permit}</div>
        </div>
      </div>
    </div>
  ));
}

function Date({ date }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return <div>{monthNames[date]}</div>;
}

function Header() {
  return (
    <div style={{ fontFamily: "Comfortaa" }}>
      <h1 style={{ color: "white" }}> ✨ Sydney Fireworks ✨</h1>
      <h2 style={{ color: "white", fontSize: "10px", marginBottom: "30px" }}>
        @nathancrxtn
      </h2>
    </div>
  );
}

function Footer() {
  return <div className="footer">Data sourced from SafeWork NSW</div>;
}

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="cards">
        <Test></Test>
      </div>
      <Footer />
    </div>
  );
}
