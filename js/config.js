var fantasy = fantasy || {};

var GOLFERS = {
    RORY_MCILROY: '3470',
    JORDAN_SPIETH: '5467',
    JIMMY_WALKER: '446',
    RICKIE_FOWLER: '3702',
    JB_HOLMES: '1067',
    PHIL_MICKELSON: '308',
    BUBBA_WATSON: '780',
    DUSTIN_JOHNSON: '3448',
    JASON_DAY: '168',
    TIGER_WOODS: '462',
    ADAM_SCOTT: '388',
    HENRIK_STENSON: '576',
    PATRICK_REED: '5579',
    MATT_KUCHAR: '257',
    BRANDT_SNEDEKER: '1222',
    JUSTIN_ROSE: '569',
    JASON_DUFNER: '110',
    SERGIO_GARCIA: '158',
    LEE_WESTWOOD: '455',
    LOUIS_OOSTHUIZEN: '1293',
    BILLY_HORSCHEL: '1651',
    HIDEKI_MATSUYAMA: '5860',
    ZACH_JOHNSON: '686',
    JIM_FURYK: '153',
    CHRIS_KIRK: '3449',
    COREY_CONNERS: '9126',
    CHARL_SHWARTZEL: '1097',
    DANNY_WILLET: '4304',
    BROOKS_KOEPKA: '6798',
    KEVIN_KISNER: '2552',
    JUSTIN_THOMAS: '4848',
    BILL_HAAS: '774',
    JON_RAHM: '9780',
    MARC_LEISHMAN: '3351',
    ALEX_NOREN: '3832',
    MARTIN_KAYMER: '3670',
    GARY_WOODLAND: '3550',
    NIEBRUGGE: '9402',
    THOMAS_PIETERS: '9031',
    BRYSON_DECHAMBEAU: '10046',
    FABRIZIO_ZANOTTI: '1770',
    TONY_FINAU: '2230',
    CHARLEY_HOFFMAN: '205',
    PAUL_CASEY: '72',
    DANIEL_BERGER: '9025',
    KEVIN_CHAPPELL: '3857',
    RUSSELL_HENLEY: '5409',
    TOMMY_FLEETWOOD: '5539',
    IAN_POULTER: '619',
    XANDER_SCHAUFFELE: '10140',
    KIRADECH_APHIBARNRAT: '5771',
    FRANCESCO_MOLINARI: '1483',
    PATRICK_CANTLAY: '6007',
    SUNGJAE_IM: '11382',
    COLLIN_MORIKAWA: '10592',
    MATTHEW_FITZPATRICK: '9037',
    WEBB_SIMPSON: '1614',
    MATTHEW_WOLFF: '4412121',
    CAMERON_SMITH: '9131',
    SHANE_LOWRY: '4587',
    CAMERON_CHAMP: '11098'
};


fantasy.config = {
    tournamentName: 'Masters -- 2020',
    tournamentId: 401219478,
    teams: [
        {
            name: 'Jack',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.PATRICK_CANTLAY,
                GOLFERS.BUBBA_WATSON,
                GOLFERS.TONY_FINAU,
                GOLFERS.MATTHEW_WOLFF
            ]
        },
        {
            name: 'Buzz',
            golfers: [
                GOLFERS.DUSTIN_JOHNSON,
                GOLFERS.JON_RAHM,
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.RORY_MCILROY,
                GOLFERS.COLLIN_MORIKAWA
            ]
        },
        {
            name: 'Garrett',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.DUSTIN_JOHNSON,
                GOLFERS.JON_RAHM,
                GOLFERS.XANDER_SCHAUFFELE,
                GOLFERS.PATRICK_CANTLAY
            ]
        },
        {
            name: 'JR',
            golfers: [
                GOLFERS.DUSTIN_JOHNSON,
                GOLFERS.HIDEKI_MATSUYAMA,
                GOLFERS.TONY_FINAU,
                GOLFERS.JASON_DAY,
                GOLFERS.LOUIS_OOSTHUIZEN
            ]
        },
        {
            name: 'Richard',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.DUSTIN_JOHNSON,
                GOLFERS.JON_RAHM,
                GOLFERS.XANDER_SCHAUFFELE,
                GOLFERS.MATTHEW_WOLFF
            ]
        },
        {
            name: 'Rich',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.RORY_MCILROY,
                GOLFERS.BROOKS_KOEPKA,
                GOLFERS.PHIL_MICKELSON
            ]
        },
        {
            name: 'JimW1',
            golfers: [
                GOLFERS.JON_RAHM,
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.XANDER_SCHAUFFELE,
                GOLFERS.BROOKS_KOEPKA,
                GOLFERS.COLLIN_MORIKAWA
            ]
        },
        {
            name: 'JimW2',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.XANDER_SCHAUFFELE,
                GOLFERS.PATRICK_CANTLAY,
                GOLFERS.WEBB_SIMPSON
            ]
        },
        {
            name: 'Grant',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.JON_RAHM,
                GOLFERS.RORY_MCILROY,
                GOLFERS.TONY_FINAU,
                GOLFERS.MATTHEW_WOLFF
            ]
        }, 
        {
            name: 'Meagan',
            golfers: [
                GOLFERS.RORY_MCILROY,
                GOLFERS.BROOKS_KOEPKA,
                GOLFERS.HIDEKI_MATSUYAMA,
                GOLFERS.ADAM_SCOTT,
                GOLFERS.RICKIE_FOWLER
            ]
        }, 
        {
            name: 'Adam',
            golfers: [
                GOLFERS.BROOKS_KOEPKA,
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.BUBBA_WATSON,
                GOLFERS.TONY_FINAU,
                GOLFERS.TIGER_WOODS
            ]
        },
        {
            name: 'Ted',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.RORY_MCILROY,
                GOLFERS.JASON_DAY,
                GOLFERS.TIGER_WOODS
            ]
        }, 
        {
            name: 'Jetta',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.JON_RAHM,
                GOLFERS.XANDER_SCHAUFFELE,
                GOLFERS.BROOKS_KOEPKA,
                GOLFERS.HIDEKI_MATSUYAMA
            ]
        },
        {
            name: 'John',
            golfers: [
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.RORY_MCILROY,
                GOLFERS.PATRICK_REED,
                GOLFERS.JASON_DAY,
                GOLFERS.TIGER_WOODS
            ]
        }, 
        {
            name: 'Dave',
            golfers: [
                GOLFERS.DUSTIN_JOHNSON,
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.HIDEKI_MATSUYAMA,
                GOLFERS.CAMERON_SMITH,
                GOLFERS.SHANE_LOWRY
            ]
        }, 
        {
            name: 'Laura',
            golfers: [
                GOLFERS.XANDER_SCHAUFFELE,
                GOLFERS.TONY_FINAU,
                GOLFERS.CAMERON_CHAMP,
                GOLFERS.LOUIS_OOSTHUIZEN,
                GOLFERS.FRANCESCO_MOLINARI
            ]
        }
    ],
    firstPlaceValue: 50,
    showCut: false,
    apiKey: '_____'
};