let vaipadeKokku = 0;

const baasReisid = {
    "1111": [
        {
            koht: {
                id: "AAP",
                nimi: "Aasta Auto Pluss",
                aadress: "AaXXXXa XX1, Tartu",
                kontakt: "Kontor - +XXX XXXXXXXX",
                lisainfo: "Avatud 08:00-17:00",
                tarnekood: "101512",
                saateleht: "2917234"
            },
            vaibad: [
                {
                id : "AAP-001",
                artikkel: "10060",
                kirjeldus : "Classic PR 150X300",
                kogus: 1,
                asukoht: "Teine sissepääs"
                },
                {
                id : "AAP-002",
                artikkel: "10003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Enne töökoda - Müügi seljataga"
                },
                {
                id : "AAP-003",
                artikkel: "10005",
                kirjeldus : "Classic S 150X300",
                kogus: 2,
                asukoht: "Peaukse ette"
                },
                {
                id : "AAP-004",
                artikkel: "10001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Varuosade lao ette"
                },
                {
                id : "AAP-005",
                artikkel: "10002",
                kirjeldus : "Classic S 85X250",
                kogus: 2,
                asukoht: "Ooteruumis - tugitooli ees"
                }
            ]
        },
        { koht: {
                id: "HKM",
                nimi: "Kortermaja",
                aadress: "HXXX X, Tartu",
                kontakt: "Kontor - +XXX XXXXXXXX",
                lisainfo: "Uksekood - #XXXX",
                tarnekood: "112991",
                saateleht: "2917257"
            },
            vaibad: [
                {
                id : "AAP-006",
                artikkel: "100203",
                kirjeldus : "Liftivaip 110X140",
                kogus: 1,
                asukoht: "Lifti sisse"
                },
                {
                id : "AAP-007",
                artikkel: "400005",
                kirjeldus : "Microtech 115X200",
                kogus: 1,
                asukoht: "Tuulekojast edasi - teise ukse taha"
                },
                {
                id : "AAP-008",
                artikkel: "400006",
                kirjeldus : "Microtech 150X250",
                kogus: 1,
                asukoht: "Sissepääsu tuulekojas"
                }
            ]
        },
        {
         koht: {
                id: "SKM",
                nimi: "Kortermaja",
                aadress: "SaXXi XX, Tartu",
                kontakt: "TiXXXX RanXXXXXX - +XXX XXXXXXXX",
                lisainfo: "Uksekood - #XXXX",
                tarnekood: "110037",
                saateleht: "2917248"
            },
            vaibad: [
                {
                id : "AAP-009",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sissepääsu ette"
                }
            ]
        },
        { koht: {
                id: "KMS",
                nimi: "Kortermaja",
                aadress: "SXXX XX, Tartu",
                kontakt: "Info - +XXX XXXXXXXX",
                lisainfo: "Sissepääs võtmega",
                tarnekood: "114795",
                saateleht: "2917266"
            },
            vaibad: [
                {
                id : "AAP-010",
                artikkel: "100000",
                kirjeldus : "Classic S 85X85",
                kogus: 1,
                asukoht: "Lifti"
                },
                {
                id : "AAP-011",
                artikkel: "400005",
                kirjeldus : "Microtech 115X200",
                kogus: 1,
                asukoht: "Keldikorruse sissepääs"
                },
                {
                id : "AAP-012",
                artikkel: "400006",
                kirjeldus : "Microtech 150X250",
                kogus: 1,
                asukoht: "Sissepääsu ette"
                }
            ]
        },
        { koht: {
                id: "KKM",
                nimi: "Kortermaja",
                aadress: "KXXXi X, Tartu",
                lisainfo: "Sissepääs kiibiga",
                tarnekood: "105690",
                saateleht: "2917242"
            },
            vaibad: [
                {
                id : "AAP-013",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sissepääsu ees"
                },
                {
                id : "AAP-014",
                artikkel: "10001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Tagumine sissepääs"
                }
            ]
        },
        { koht: {
                id: "TRM",
                nimi: "TööriistaMarket",
                aadress: "Tammexxx, Tartu",
                lisainfo: "Avatud 08:00 - 19:00",
                tarnekood: "107060",
                saateleht: "2917234"
            },
            vaibad: [
                {
                id : "AAP-015",
                artikkel: "100081",
                kirjeldus : "Puuvill Plus 115X200",
                kogus: 2,
                asukoht: "Sissepääsu ette",
                },
                {
                id : "AAP-016",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 1,
                asukoht: "Sissepääsu ette (Talvel)"
                },
                {
                id : "AAP-017",
                artikkel: "110003",
                kirjeldus : "Logovaip (2959:X5-10) - 150X300",
                kogus: 2,
                asukoht: "Milwaukee tööriistaleti ette"
                }
            ]
        },
        { koht: {
                id: "AST",
                nimi: "Autospirit Tartu",
                aadress: "LäXXXXXXXX XX, Tartu",
                lisainfo: "Avatud 08:00 - 18:00",
                kontakt: "+XXX XXXXXXXX",
                tarnekood: "109138",
                saateleht: "2917245"
            },
            vaibad: [
                {
                id : "AAP-018",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Koridor",
                },
                {
                id : "AAP-019",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Hoolduskeskus - enne remonditöökoda"
                },
                {
                id : "AAP-020",
                artikkel: "100000",
                kirjeldus : "Classic S 85X85",
                kogus: 3,
                asukoht: "Remonditöökoda - uste taga"
                },
                {
                id : "AAP-021",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 4,
                asukoht: "Välisuste ees"
                }
            ]
        },
        { koht: {
                id: "BTO",
                nimi: "Baltem Tartu",
                aadress: "MXXXXX X, TXXtu",
                lisainfo: "Avatud 08:00 - 17:00",
                kontakt: "RXXXX sXXdXrX - +XXX XXXXXXXX",
                tarnekood: "113701",
                saateleht: "2917262"
            },
            vaibad: [
                {
                id : "AAP-022",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Peasissepääs",
                },
                {
                id : "AAP-023",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Töökoja ukse taha"
                },
                {
                id : "AAP-024",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Köögi ukse ette"
                }
            ]
        },
        { koht: {
                id: "EE",
                nimi: "Eesti Energia AS",
                aadress: "RXXXX XXXX X, Tartu",
                lisainfo: "Box X - sissepääs kaardiga",
                tarnekood: "115708",
                saateleht: "2917288"
            },
            vaibad: [
                {
                id : "AAP-025",
                artikkel: "100000",
                kirjeldus : "Classic S 85X85",
                kogus: 2,
                asukoht: "Sissepääs",
                }
            ]
        },
        { koht: {
                id: "TS",
                nimi: "Texas Service OÜ",
                aadress: "VXXXX X, Tartu",
                lisainfo: "Avatud 09:00 - 18:00",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "113337",
                saateleht: "2917261"
            },
            vaibad: [
                {
                id : "AAP-026",
                artikkel: "110001",
                kirjeldus : "Logovaip (3303:3223) - 115X200",
                kogus: 1,
                asukoht: "Sissepääsu ees",
                }
            ]
        },
        { koht: {
                id: "KLK",
                nimi: "Ladu X kontor, TÜ Kliinikum",
                aadress: "VXXXXX, Tartu",
                lisainfo: "Lase uksekella, kui uks on kinni",
                tarnekood: "114726",
                saateleht: "2917265"
            },
            vaibad: [
                {
                id : "AAP-027",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 2,
                asukoht: "Sissepääsu ees",
                },
                {
                id : "AAP-028",
                artikkel: "100000",
                kirjeldus : "Classic S 85X85",
                kogus: 2,
                asukoht: "Teine sissepääs/Riideruum"
                }
            ]
        },{ koht: {
                id: "KLA",
                nimi: "Ladu X arhiiv, TÜ Kliinikum",
                aadress: "VXXXXi X, Tartu",
                lisainfo: "Lase uksekella, kui uks on kinni",
                tarnekood: "115459",
                saateleht: "2917273"
            },
            vaibad: [
                {
                id : "AAP-029",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                }
            ]
        },{ koht: {
                id: "TR",
                nimi: "Tuglase Rimi",
                aadress: "TugXXXXX XX, Tartu",
                lisainfo: "Avatud 08:00 - 21:00",
                kontakt: "Info - +XXX XXXXXXXX",
                tarnekood: "108832",
                saateleht: "2917244"
            },
            vaibad: [
                {
                id : "AAP-030",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Turvavärava vahele",
                }
            ]
        },{ koht: {
                id: "RPI",
                nimi: "Rehvid Pluss Tartu",
                aadress: "AarXXX XXX, Tartu",
                lisainfo: "Avatud 09:00 - 18:00",
                kontakt: "JuXXXX OXXX - +XXX XXXXXXXX",
                tarnekood: "113128",
                saateleht: "2917258"
            },
            vaibad: [
                {
                id : "AAP-031",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                },
                {
                id : "AAP-032",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Töökoja ukse ette",
                },
                 {
                id : "AAP-033",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Teise sissepääsu ette",
                }
            ]
        },{ koht: {
                id: "KT",
                nimi: "Kaur Trade OÜ",
                aadress: "RXXXXXXi tXX XX, Tartu",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "111108",
                saateleht: "2917250"
            },
            vaibad: [
                {
                id : "AAP-034",
                artikkel: "300000",
                kirjeldus : "Köögirätikud 50X90(5Tk KMPL)",
                kogus: 2,
                asukoht: "X- ja X- korruse kööki(1 KMLP)",
                },
                {
                id : "AAP-035",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Tagumise sissepääsu ees",
                },
                 {
                id : "AAP-036",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 2,
                asukoht: "Trepi ette ja töökoja ukse taha",
                },
                {
                id : "AAP-037",
                artikkel: "100002",
                kirjeldus : "Classic S 85X250",
                kogus: 1,
                asukoht: "Küljeukse ette",
                },
                {
                id : "AAP-038",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 2,
                asukoht: "Peaukse ette (talvel)",
                },
                 {
                id : "AAP-039",
                artikkel: "100080",
                kirjeldus : "Puuvill Plus 85X150",
                kogus: 1,
                asukoht: "Tööriiete kapi kõrval, riietusruumi ette",
                }
            ]
        },{ koht: {
                id: "TTT",
                nimi: "Thermory Tõrvandi Tootmine",
                aadress: "TeXXXXX XXX X, Tõrvandi",
                tarnekood: "114681",
                saateleht: "2917264"
            },
            vaibad: [
                {
                id : "AAP-040",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 3,
                asukoht: "Iga sissepääsu ette",
                }
            ]
        },{ koht: {
                id: "TPT",
                nimi: "Talent Plastics Tartu AS",
                aadress: "Tõrvandi",
                kontakt: "+XXX XXXXXXXX",
                lisainfo: "Sisenda XXX XXXXX, kui uks suletud lase XXXXXXXX, avatud 08:00 - 17: 00",
                tarnekood: "102934",
                saateleht: "2917238"
            },
            vaibad: [
                {
                id : "AAP-041",
                artikkel: "100230",
                kirjeldus : "Comfort kummimatt 86X142",
                kogus: 2,
                asukoht: "Välisukse ette - õue",
                },
                {
                id : "AAP-042",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "2.korrusele viiva trepi ette",
                },
                 {
                id : "AAP-043",
                artikkel: "100005",
                kirjeldus : "Classic S 150X300",
                kogus: 1,
                asukoht: "Peaukse ette",
                },
                {
                id : "AAP-044",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Peale peaukse vaipa, kontoris ukse taga",
                },
                {
                id : "AAP-045",
                artikkel: "100002",
                kirjeldus : "Classic S 85X250",
                kogus: 1,
                asukoht: "1. ja teise 2. korruse trepi mademile",
                },
                 {
                id : "AAP-046",
                artikkel: "400004",
                kirjeldus : "Microtech 85X150",
                kogus: 2,
                asukoht: "Tootmise ukse ette ja taha",
                }
            ]
        },{ koht: {
                id: "RP",
                nimi: "Rõngu Pagar",
                aadress: "XXXX XX, TaXtu",
                lisainfo: "Avatud 09:00 - 20:00",
                tarnekood: "115220",
                saateleht: "2917269"
            },
            vaibad: [
                {
                id : "AAP-047",
                artikkel: "120180",
                kirjeldus : "Logovaip (5123:A140) - 115X170",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                },
                {
                id : "AAP-048",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Leti taha",
                }
            ]
        },{ koht: {
                id: "SKS",
                nimi: "Sepa keskus, sissepääsud",
                aadress: "Tartu",
                kontakt: "Haldur - +XXX XXXXXXXX",
                lisainfo: "Avatud 08:00 - 17:00",
                tarnekood: "100113",
                saateleht: "2917232"
            },
            vaibad: [
                {
                id : "AAP-049",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 2,
                asukoht: "Sissepääsu ette",
                }
            ]
        },
        { koht: {
                id: "CKK",
                nimi: "Kvissentali Coop",
                aadress: "Axxxxxxx xx, Tartu",
                kontakt: "Info - +XXX XXXXXXXX",
                lisainfo: "Avatud 09:00 - 22:00",
                tarnekood: "113326",
                saateleht: "2917260"
            },
            vaibad: [
                {
                id : "AAP-050",
                artikkel: "100081",
                kirjeldus : "Puuvill Plus 115X200",
                kogus: 1,
                asukoht: "Tagumise sissepääsu ette",
                },
                {
                id : "AAP-051",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 1,
                asukoht: "Peasissepääsu ette",
                },
                {
                id : "AAP-052",
                artikkel: "100083",
                kirjeldus : "Puuvill Plus 85X250",
                kogus: 1,
                asukoht: "Turvaväravate vahele",
                }
            ]
        },{ koht: {
                id: "VTE",
                nimi: "Vianor Tartu esindus",
                aadress: "XXXXXee XX, Tartu",
                kontakt: "+XXX XXXXXXXX",
                lisainfo: "Avatud 09:00 - 17:00",
                tarnekood: "115094",
                saateleht: "2917267"
            },
            vaibad: [
                {
                id : "AAP-053",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                },
                {
                id : "AAP-054",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Töökoja ukse taha",
                }
            ]
        },
        { koht: {
                id: "AK",
                nimi: "Alas-Kuul AS",
                aadress: "XXXXteeXX, Tartu",
                lisainfo: "Avatud 08:00 - 17:00",
                tarnekood: "111805",
                saateleht: "2917255"
            },
            vaibad: [
                {
                id : "AAP-055",
                artikkel: "100005",
                kirjeldus : "Classic S 150X300",
                kogus: 1,
                asukoht: "Peaukse ette",
                }
            ]
        },
        { koht: {
                id: "OET",
                nimi: "Onninen Express Tartu",
                aadress: "TehXXXX XX, XXXtu",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                lisainfo: "Avatud 07:30 - 17:30",
                tarnekood: "101592",
                saateleht: "2917235"
            },
            vaibad: [
                {
                id : "AAP-056",
                artikkel: "100005",
                kirjeldus : "Classic S 150X300",
                kogus: 1,
                asukoht: "Koridori",
                },
                {
                id : "AAP-057",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                }
            ]
        },
        { koht: {
                id: "ATL",
                nimi: "Autoremont T-Lab",
                aadress: "IXXXXXXX, Tartu",
                kontakt: "+XXX XXXXXXXX",
                lisainfo: "Avatud 08:30 - 17:00",
                tarnekood: "114561",
                saateleht: "2917263"
            },
            vaibad: [
                {
                id : "AAP-058",
                artikkel: "100230",
                kirjeldus : "Comfort Kummimatt 86X142",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                },
                {
                id : "AAP-059",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sissepääsust paremale kontorisse",
                }
            ]
        },
        { koht: {
                id: "JEH",
                nimi: "Keskonnaameti kontor",
                aadress: "AlXXXX xx, Tartu",
                lisainfo: "Sissepääs kaardiga, vaiba paigutus joonisel",
                tarnekood: "115593",
                saateleht: "2917284"
            },
            vaibad: [
                {
                id : "AAP-060",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Peasissepääsu ette",
                },
                {
                id : "AAP-061",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Peasissepääsus oleva ukse taha",
                },
                {
                id : "AAP-062",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Peasissepääsust vasakule ukse taga koridoris",
                },
                {
                id : "AAP-063",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Peasissepääsust vasakule ukse ees",
                },
                {
                id : "AAP-064",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Trepist alla, ukse ette",
                },
                {
                id : "AAP-065",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Teise sissepääsu ette",
                },
                {
                id : "AAP-066",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sisehoovi sissepääsu ette",
                },
                {
                id : "AAP-067",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Sisehoovi sissepääsust trepist üles, ukse ette",
                },
                {
                id : "AAP-068",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sisehoovi sissepääsust trepist alla , trepi ette",
                },
                {
                id : "AAP-069",
                artikkel: "100003",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Sisehoovi sissepääsust trepist alla, vasakule lifti ette",
                }   
            ]
        },
        { koht: {
                id: "TKM",
                nimi: "Tartu Kohtumaja",
                aadress: "KXXXX X, Tartu",
                kontakt: "Puhastusteenindaja - +XXX XXXXXXXX, kohal alates XX:00",
                lisainfo: "Puhastusteenindaja juhendab vahetamisel",
                tarnekood: "115497",
                saateleht: "2917274"
            },
            vaibad: [
                {
                id : "AAP-070",
                artikkel: "400010",
                kirjeldus : "Retech 150X250",
                kogus: 2,
                asukoht: "Riia tn sissepääsu ette",
                },
                {
                id : "AAP-071",
                artikkel: "400010",
                kirjeldus : "Retech 150X250",
                kogus: 2,
                asukoht: "Maja keskmise sissepääsu ette",
                },
                {
                id : "AAP-072",
                artikkel: "400010",
                kirjeldus : "Retech 150X250",
                kogus: 2,
                asukoht: "Maja keskmisest sissepääsust sisse, klaasuksest läbi, lifti ette",
                },
                {
                id : "AAP-073",
                artikkel: "400011",
                kirjeldus : "Retech 85X150",
                kogus: 2,
                asukoht: "Riia tn sissepääsust sisse, vasakule lifti sisse",
                },
                {
                id : "AAP-074",
                artikkel: "400010",
                kirjeldus : "Retech 150X250",
                kogus: 1,
                asukoht: "Riia tn sissepääsust sisse, vasakule lifti ette",
                },
                {
                id : "AAP-075",
                artikkel: "400001",
                kirjeldus : "Retech 150X250",
                kogus: 1,
                asukoht: "Riia tn sissepääsust sisse, 2. korrus - lifti ette",
                },
                {
                id : "AAP-076",
                artikkel: "400011",
                kirjeldus : "Retech 85X150",
                kogus: 2,
                asukoht: "Riia tn sissepääsust sisse, 4. korrus mõlema lifti ette",
                },
                {
                id : "AAP-077",
                artikkel: "400011",
                kirjeldus : "Retech 85X150",
                kogus: 2,
                asukoht: "Maja keskmisest sissepääsust, liftide sisse",
                },
                {
                id : "AAP-078",
                artikkel: "400012",
                kirjeldus : "Retech 115X200",
                kogus: 1,
                asukoht: "Maja keskmisest sissepääsust , läbi klaasuste tagumine sissepääs",
                },
                {
                id : "AAP-079",
                artikkel: "400010",
                kirjeldus : "Retech 150X250",
                kogus: 1,
                asukoht: "Maja keskmisest sissepääsust , läbi klaasuste tagumisest sissepääsust edasi paremale",
                },
                {
                id : "AAP-080",
                artikkel: "400011",
                kirjeldus : "Retech 85X150",
                kogus: 2,
                asukoht: "Konvodi liftidesse",
                },
                {
                id : "AAP-081",
                artikkel: "400011",
                kirjeldus : "Retech 85X150",
                kogus: 1,
                asukoht: "Tagumise trepikoja lifti",
                },
                {
                id : "AAP-082",
                artikkel: "400010",
                kirjeldus : "Retech 85X150",
                kogus: 1,
                asukoht: "Tagumise trepikoja puhkenurga terassile",
                }
            ]
        },
        { koht: {
                id: "JKM",
                nimi: "Kortermaja",
                aadress: "Tartu",
                kontakt: "+XXX XXXXXXXX",
                lisainfo: "Sissepääs kiibiga",
                tarnekood: "110822",
                saateleht: "2917249"
            },
            vaibad: [
                {
                id : "AAP-083",
                artikkel: "100236",
                kirjeldus : "CLS.S Erimõõt 110X140",
                kogus: 1,
                asukoht: "Lifti",
                },
                {
                id : "AAP-084",
                artikkel: "400005",
                kirjeldus : "Microtech 115X200",
                kogus: 3,
                asukoht: "Sissepääsu ette järjest",
                }
            ]
        },
        { koht: {
                id: "KLK",
                nimi: "Kivilinna Coop",
                aadress: "JXXXXX, Tartu",
                lisainfo: "Avatud 08:00 - 17:00",
                tarnekood: "110822",
                saateleht: "2917249"
            },
            vaibad: [
                {
                id : "AAP-085",
                artikkel: "100004",
                kirjeldus : "Classic S 150X250",
                kogus: 1,
                asukoht: "Linnapoolse ukse ees",
                },
                {
                id : "AAP-086",
                artikkel: "100005",
                kirjeldus : "Classic S 150X300",
                kogus: 1,
                asukoht: "Linnapoolse ukse ees",
                },
                {
                id : "AAP-087",
                artikkel: "100005",
                kirjeldus : "Classic S 150X300",
                kogus: 1,
                asukoht: "Tankla poolse ukse ees",
                }
            ]
        },
        { koht: {
                id: "JKM",
                nimi: "Kortermaja",
                aadress: "JaXXXXX, Tartu",
                lisainfo: "X. trepikoda #XXXX, X. trepikoda #XXXX",
                kontakt:"Haldur - +XXX XXXXXXXX",
                tarnekood: "109791",
                saateleht: "2917246"
            },
            vaibad: [
                {
                id : "AAP-088",
                artikkel: "100081",
                kirjeldus : "Puuvill Plus 115X200",
                kogus: 2,
                asukoht: "Trepikodades",
                }
            ]
        },
        { koht: {
                id: "MKM",
                nimi: "Kortermaja",
                aadress: "MõXXXXvahe XX, Tartu",
                lisainfo: "Sissepääs kiibiga",
                kontakt:"Puhastusteenindaja  - +XXX XXXXXXXX",
                tarnekood: "112590",
                saateleht: "2917256"
            },
            vaibad: [
                {
                id : "AAP-089",
                artikkel: "100081",
                kirjeldus : "Puuvill Plus 115X200",
                kogus: 4,
                asukoht: "Trepikodades",
                },
                {
                id : "AAP-090",
                artikkel: "100080",
                kirjeldus : "Puuvill Plus 85X150",
                kogus: 4,
                asukoht: "Trepikodades",
                }
            ]
        },
        { koht: {
                id: "PKM",
                nimi: "Kortermaja",
                aadress: "XXXX XX, Tartu",
                lisainfo: "Sissepääs kiibiga",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "115343",
                saateleht: "2917272"
            },
            vaibad: [
                {
                id : "AAP-091",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 3,
                asukoht: "Trepikodades",
                }
            ]
        },
        { koht: {
                id: "ABC",
                nimi: "Arihoone",
                aadress: "Tartu",
                tarnekood: "115100",
                saateleht: "2917268"
            },
            vaibad: [
                {
                id : "AAP-092",
                artikkel: "110073",
                kirjeldus : "Logovaip (5044:1014) - 115X180",
                kogus: 3,
                asukoht: "Liftide ette",
                }
            ]
        },
        { koht: {
                id: "JM",
                nimi: "JM Auto OÜ",
                aadress: "PXXXXXX X/X, Tartu",
                lisainfo: "Avatud 09:00 - 16:00",
                kontakt: "+XXX XXXXXXXX",
                tarnekood: "115309",
                saateleht: "2917271"
            },
            vaibad: [
                {
                id : "AAP-093",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                },
                {
                id : "AAP-094",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Töökoja ukse ette",
                },
            ]
        },
        { koht: {
                id: "AKM",
                nimi: "Kortermaja",
                aadress: "ArXXXXX XXXX X2, Tartu",
                lisainfo: "Sissepääs kiibiga",
                tarnekood: "115290",
                saateleht: "2917270"
            },
            vaibad: [
                {
                id : "AAP-095",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 2,
                asukoht: "Sissepääsude ette",
                }
            ]
        },
        { koht: {
                id: "PEA",
                nimi: "Euroapteek",
                aadress: "PipaXXXXX X, Tartu",
                lisainfo: "Avatud 08:00 - 17:00",
                tarnekood: "101406",
                saateleht: "2917233"
            },
            vaibad: [
                {
                id : "AAP-096",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Leti ette",
                }
            ]
        },
         { koht: {
                id: "NKM",
                nimi: "Kortermaja",
                aadress: "Xxxxxu XX, XXXtu",
                lisainfo: "X. - X#XXX, X. - XX#XX, X. - XX#XXXX",
                kontakt: "SXXXX Xxxxk - +XXX XXXXXXXX",
                tarnekood: "105527",
                saateleht: "2917241"
            },
            vaibad: [
                {
                id : "AAP-097",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 3,
                asukoht: "Trepikodades",
                }
            ]
        },
        { koht: {
                id: "PAKM",
                nimi: "Kortermaja",
                aadress: "Tartu",
                lisainfo: "Sissepääs võtmega",
                kontakt: "Info +XXX XXXXXXXX",
                tarnekood: "105472",
                saateleht: "2917240"
            },
            vaibad: [
                {
                id : "AAP-098",
                artikkel: "100009",
                kirjeldus : "Classic PR 115X200",
                kogus: 2,
                asukoht: "Trepikodades",
                }
            ]
        },
         { koht: {
                id: "RLH",
                nimi: "Raadi Lastehoid",
                aadress: "PXXa aXXXe X/X, Tartu",
                lisainfo: "Avatud 07:30 - 17:30",
                kontakt: "+XXX XXXXXXXX",
                tarnekood: "102677",
                saateleht: "2917240"
            },
            vaibad: [
                {
                id : "AAP-099",
                artikkel: "100003",
                kirjeldus : "Classic PR 115X200",
                kogus: 1,
                asukoht: "XXXXa XXXXe X parka poolse ukse ette",
                },
                 {
                id : "AAP-100",
                artikkel: "100003",
                kirjeldus : "Classic PR 115X200",
                kogus: 6,
                asukoht: "PXXXXa aXXXee X maja taga kaks sissepääsu, mõlemasse 3 vaipa, igale korrusele 1",
                },
                 {
                id : "AAP-101",
                artikkel: "100003",
                kirjeldus : "Classic PR 115X200",
                kogus: 1,
                asukoht: "PXXna XXlee X , maja tagant, ukse ette",
                }
            ]
        },
        { koht: {
                id: "ETKM",
                nimi: "Kortermaja",
                aadress: "Ermxxxx xxe XX, Tartu",
                lisainfo: "Sissepääs koodiga - #XXX",
                kontakt: "Kontor +XXX XXXXXXXX",
                tarnekood: "102677",
                saateleht: "2917240"
            },
            vaibad: [
                {
                id : "AAP-102",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 2,
                asukoht: "Sissepääsud",
                }
            ]
        },
        { koht: {
                id: "KLH",
                nimi: "Klar Home OÜ",
                aadress: "Vinnali, Tartu",
                lisainfo: "Avatud 08:00 - 16:30",
                kontakt: "Klienditeenindus +XXX XXXXXXXX",
                tarnekood: "109933",
                saateleht: "2917247"
            },
            vaibad: [
                {
                id : "AAP-103",
                artikkel: "100060",
                kirjeldus : "Classic PR 150X300",
                kogus: 1,
                asukoht: "Välisukse ette",
                },
                {
                id : "AAP-104",
                artikkel: "100007",
                kirjeldus : "Classic PR 85X150",
                kogus: 1,
                asukoht: "Kontori ukse ette",
                }
            ]
        },
        { koht: {
                id: "RKM",
                nimi: "Kortermaja",
                aadress: "Raaxxxxx X2X, Tartu",
                lisainfo: "Uksekood - #XXXX",
                kontakt: "Rxxxx Kxxxk - +XXX XXXXXXXX",
                tarnekood: "111158",
                saateleht: "2917251"
            },
            vaibad: [
                {
                id : "AAP-105",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Välisukse ette",
                },
                {
                id : "AAP-106",
                artikkel: "100000",
                kirjeldus : "Classic S 85X85",
                kogus: 1,
                asukoht: "Lifti",
                }
            ]
        },
        { koht: {
                id: "TKH",
                nimi: "Kortermaja",
                aadress: "Raaxxxxx X2X, Tartu",
                lisainfo: "Uksekood - #XXXX",
                kontakt: "Rxxxx Kxxxk - +XXX XXXXXXXX",
                tarnekood: "111159",
                saateleht: "2917252"
            },
            vaibad: [
                {
                id : "AAP-107",
                artikkel: "120165",
                kirjeldus : "Logovaip (2611:Käru) - 180X120",
                kogus: 1,
                asukoht: "Välisukse ette",
                },
                {
                id : "AAP-108",
                artikkel: "120253",
                kirjeldus : "Logovaip (3217:Käru) - 94X124",
                kogus: 1,
                asukoht: "Lifti",
                }
            ]
        },
        { koht: {
                id: "RRM",
                nimi: "Kortermaja",
                aadress: "Raaxxxxx X2X, Tartu",
                lisainfo: "Uksekood - #XXXX",
                kontakt: "Rxxxx Kxxxk - +XXX XXXXXXXX",
                tarnekood: "11623",
                saateleht: "2917253"
            },
            vaibad: [
                {
                id : "AAP-109",
                artikkel: "120253",
                kirjeldus : "Logovaip (3217:Käru) - 94X124",
                kogus: 1,
                asukoht: "Lifti",
                },
                {
                id : "AAP-110",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                }
            ]
        },
        { koht: {
                id: "KMRR",
                nimi: "Kortermaja",
                aadress: "Raaxxxxx X2X, Tartu",
                lisainfo: "Uksekood - #XXXX",
                kontakt: "Rxxxx Kxxxk - +XXX XXXXXXXX",
                tarnekood: "11624",
                saateleht: "2917254"
            },
            vaibad: [
                {
                id : "AAP-111",
                artikkel: "100003",
                kirjeldus : "Classic S 115X200",
                kogus: 1,
                asukoht: "Välisukse ette",
                },
                {
                id : "AAP-112",
                artikkel: "120253",
                kirjeldus : "Logovaip (3217:Käru) - 94X124",
                kogus: 1,
                asukoht: "Lifti",
                }
            ]
        },
{ koht: {
                id: "HTM",
                nimi: "Hilaris",
                aadress: "Tartu",
                lisainfo: "Lase alt kella",
                kontakt: "RoXXXX XXXi - +XXX XXXXXXXX",
                tarnekood: "103084",
                saateleht: "2917239"
            },
            vaibad: [
                {
                id : "AAP-113",
                artikkel: "100001",
                kirjeldus : "Classic S 85X150",
                kogus: 1,
                asukoht: "Välisukse ette",
                }
            ]
        }
    ],

    "1310": [
        { koht: {
                id: "LV",
                nimi: "Liistuvabrik OÜ",
                aadress: "Kambja",
                lisainfo: "Avatud 08:00 - 18:00",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "111850",
                saateleht: "2919397"
            },
            vaibad: [
                {
                id : "AAP-114",
                artikkel: "110320",
                kirjeldus : "Logovaip (3076:2156) - 95X260",
                kogus: 1,
                asukoht: "2. korruse ukse taha",
                },
                {
                id : "AAP-115",
                artikkel: "100080",
                kirjeldus : "Puuvill Plus 85X150",
                kogus: 1,
                asukoht: "2. korruse ukse ette",
                },
                {
                id : "AAP-116",
                artikkel: "100081",
                kirjeldus : "Puuvill Plus 115X200",
                kogus: 1,
                asukoht: "Sissepääsust suure vaiba järele",
                },
                {
                id : "AAP-117",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 1,
                asukoht: "Sissepääsu ette",
                }
            ],
            riided: [
                {
                id : "AAP-118",
                nimetus: "Mehed",
                },
                {
                id : "AAP-119",
                nimetus: "Naised"
                }
            ]
        },
        { koht: {
                id: "TRR",
                nimi: "Thermory Reola, AS - Reola 2",
                aadress: "Vilxxx xx ,xxxla",
                lisainfo: "Maja Nr X - tootmine üle tee",
                tarnekood: "111904"
            },
            riided: [
                {
                id : "AAP-120",
                nimetus: "Kõik",
                }
                
            ]
        },
        { koht: {
                id: "TRN",
                nimi: "Thermory Reola, AS - Naised",
                aadress: "Vxxxx xxxx xx,xxola",
                lisainfo: "Söögitoast edasi - vasakule - trepi all",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "110636"
            },
            riided: [
                {
                id : "AAP-121",
                nimetus: "Naised"
                }
            ]
        },
        { koht: {
                id: "TRM",
                nimi: "Thermory Reola",
                aadress: "Vilxxxxxx, xxxx",
                lisainfo: "Enne söögituba - uks vasakul",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "110633"
            },
            riided: [
                {
                id : "AAP-122",
                nimetus: "Mehed",
                },
            ]
        },
        { koht: {
                id: "TRLN",
                nimi: "Thermory Reola",
                aadress: "Reola",
                lisainfo: "Maja Nr X - X. korrusel",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "110638"
            },
            riided: [
                {
                id : "AAP-123",
                nimetus: "Naised"
                }
            ]
        },
        { koht: {
                id: "TRLM",
                nimi: "Thermory Reola,",
                aadress: "Reola",
                lisainfo: "Maja Nr X - X. korrusel - xxxxxxx kätt",
                tarnekood: "110637"
            },
            riided: [
                {
                id : "AAP-124",
                nimetus: "Mehed",
                }
            ]
        },
        { koht: {
                id: "TRT",
                nimi: "Thermory Reola",
                aadress: "Txxxx xxx x, xxand",
                lisainfo: "Üle tee maja - X. korrusel",
                tarnekood: "11637"
            },
            riided: [
                {
                id : "AAP-125",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "GBC",
                nimi: "2G Baltic Company OÜ",
                aadress: "Txxxx xxx x, xxand",
                lisainfo: "Avatud 08:00 - 18:00 - Kotiteenus",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "114404"
            },
            riided: [
                {
                id : "AAP-126",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "VPT",
                nimi: "VPT Grupp OÜ",
                aadress: "Txxxx xxx x, xxand",
                lisainfo: "Avatud 09:00 - 17:00 - Kotiteenus",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "114404"
            },
            riided: [
                {
                id : "AAP-127",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "OH",
                nimi: "O&H Servis OÜ",
                aadress: "Txxxx xxx x, xxandi",
                lisainfo: "Avatud 09:00 - 18:00 - Kotiteenus",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "112328"
            },
            riided: [
                {
                id : "AAP-128",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "TAÕ",
                nimi: "Thermory AS, Tõrvandi",
                aadress: "Tõrvandi",
                lisainfo: "Avatud 08:00 - 17:00",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "114623"
            },
            riided: [
                {
                id : "AAP-129",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "KTO",
                nimi: "Kaur Trade OÜ",
                aadress: "Soinaste",
                lisainfo: "Avatud 08:00 - 17:00 - mustad triiksärgid pane eraldi kotti",
                kontakt : "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "110928"
            },
            riided: [
                {
                id : "AAP-130",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "GZN",
                nimi: "Gaznet OÜ",
                aadress: "JXXXX, xxxtu",
                lisainfo: "Avatud 08:00 - 17:00 - Kotiteenus - kapid X. korrusel",
                kontakt : "Haldur - +XXX XXXXXXXX",
                tarnekood: "114374"
            },
            riided: [
                {
                id : "AAP-131",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "FDS",
                nimi: "Fulldrive Service OÜ",
                aadress: "Täxxx xx, xxxtu",
                lisainfo: "Avatud 08:30 - 17:00 - Kotiteenus",
                kontakt : "Martin Henrikson - +XXX XXXXXXXX",
                tarnekood: "113122"
            },
            riided: [
                {
                id : "AAP-132",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "AKT",
                nimi: "Alas-Kuul AS",
                aadress: "Rxxxx xx, xxtu",
                lisainfo: "Avatud 08:00 - 17:00 , Kotiteenus",
                tarnekood: "111870"
            },
            riided: [
                {
                id : "AAP-133",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "NTY",
                nimi: "Natty OÜ",
                aadress: "Txxx xxxxx, xxrtu",
                lisainfo: "Avatud 09:00 - 16:00 -  Uksel tel nr - helista +XXX XXXXXXXX ",
                kontakt : "+XXX XXXXXXXX",
                tarnekood: "112198"
            },
           vaibad: [
                {
                id : "AAP-134",
                artikkel: "300000",
                kirjeldus : "Köögirätikud Elis 50X90 (5Tk KMPL)",
                kogus: 1,
                asukoht: "Sissepääsu ees kapi peal",
                },
                {
                id : "AAP-135",
                artikkel: "100005",
                kirjeldus : "Classic S 150X300",
                kogus: 1,
                asukoht: "Sissepääsu ees",
                }
            ]
        },
        { koht: {
                id: "CRNK",
                nimi: "Crank OÜ",
                aadress: "Txxx xxx, xxxtu",
                lisainfo: "Avatud 08:00 - 17:00 - Kotiteenus",
                kontakt : "Kontor - +XXX XXXXXXXX",
                tarnekood: "114400"
            },
            riided: [
                {
                id : "AAP-136",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "MLS",
                nimi: "ML Service OÜ",
                aadress: "Txx xxx, Txxtu",
                lisainfo: "Avatud 09:00 - 18:00 , Kotiteenus",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "113125"
            },
            riided: [
                {
                id : "AAP-137",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "RPI",
                nimi: "Rehvid pluss, Inoks OÜ",
                aadress: "Tartu",
                lisainfo: "Avatud 09:00 - 18:00 - Kapid X. korrusel",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "113125"
            },
            riided: [
                {
                id : "AAP-138",
                nimetus: "KÕik",
                }
            ]
        },
        { koht: {
                id: "FRSS",
                nimi: "Tarfor, Forss",
                aadress: "Tartu",
                lisainfo: "Avatud 09:00 - 18:00",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "112996"
            },
            riided: [
                {
                id : "AAP-139",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "TMR",
                nimi: "Tomar Service OÜ",
                aadress: "Tartu",
                lisainfo: "Avatud 08:00 - 17:00",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "113274"
            },
            riided: [
                {
                id : "AAP-140",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "APD",
                nimi: "Autohospidal OÜ",
                aadress: "Axxxx xxx ,xxxtu",
                lisainfo: "Avatud 09:00 - 18:00 - Kotiteenus - X.korrusel",
                kontakt: "Tootmine - +XXX XXXXXXXX",
                tarnekood: "113200"
            },
            riided: [
                {
                id : "AAP-141",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "TAK",
                nimi: "Tak-Auto OÜ",
                aadress: "Võrxxx xx, xxxxu",
                lisainfo: "Avatud 08:00 - 17:00",
                kontakt: "Tootmine - +XXX XXXXXXXX",
                tarnekood: "113438"
            },
            riided: [
                {
                id : "AAP-142",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "KRB",
                nimi: "Kraba - Sepa Keskus",
                aadress: "Sxxx xx, Xxxxx",
                lisainfo: "Avatud 09:00 - 19:00",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "113330"
            },
            vaibad: [
                {
                id : "AAP-143",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 2,
                asukoht: "Sissepääsu ees",
                }
            ]
        },
        { koht: {
                id: "SPA",
                nimi: "Sepa Keskus - Sissepääsud",
                aadress: "Sxxx xx, Xxxxx",
                lisainfo: "Avatud 08:00 - 17:00",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "113330"
            },
            vaibad: [
                {
                id : "AAP-144",
                artikkel: "100082",
                kirjeldus : "Puuvill Plus 150X250",
                kogus: 2,
                asukoht: "Sissepääsu ees",
                }
            ]
        },
        { koht: {
                id: "SCD",
                nimi: "Scandicon OÜ",
                aadress: "XXXX xx , Xxxxu",
                lisainfo: "Avatud 08:30 - 16:30",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "114265"
            },
             riided: [
                {
                id : "AAP-145",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "ONN",
                nimi: "Onninen Tartu Express",
                aadress: "Txxxx xx, Xxxtu",
                lisainfo: "Avatud 07:30 - 17:30 - Riietusruumid X. korrusel",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "113886"
            },
             riided: [
                {
                id : "AAP-146",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "TLB",
                nimi: "T-Lab OÜ",
                aadress: "Ixxxxx , xxxtu",
                lisainfo: "Avatud 08:30 - 17:00 - Kapid X. korrusel",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "114265"
            },
             riided: [
                {
                id : "AAP-147",
                nimetus: "KÕik",
                }
            ]
        },
        { koht: {
                id: "VAS",
                nimi: "Veoautoring Service OÜ",
                aadress: "Ixxxxxx xx, Xxxxu",
                lisainfo: "Laouksest sisse - söögitoast paremale uksest läbi on kapid",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "110938"
            },
             riided: [
                {
                id : "AAP-148",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "ATL",
                nimi: "Atlante autoteenindus",
                aadress: "Jxxxx xxx, Xxxxu",
                lisainfo: "Avatud 08:00 - 17:00",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "113965"
            },
             riided: [
                {
                id : "AAP-149",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "TKM",
                nimi: "Thermory AS, Kastre",
                aadress: "Vxxx-xxxxx, Kasxxx-xxxd",
                lisainfo: "Värvanumber - +XXX XXXXXXXX - Garderoobid X. korrusel",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "110519"
            },
             riided: [
                {
                id : "AAP-150",
                nimetus: "Mehed",
                },
                {
                id : "AAP-151",
                nimetus: "Naised",
                }
            ]
        },
        { koht: {
                id: "AJM",
                nimi: "JM Auto OÜ",
                aadress: "PXXXXX x ,Xxxu",
                lisainfo: "Avatakse 08:00 - 17:00",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "114127"
            },
             riided: [
                {
                id : "AAP-152",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "THK",
                nimi: "Tartu hooldekodu",
                aadress: "Lxxxx xx, Txxxx",
                lisainfo: "Avatakse 08:00 - 17:00",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "114161"
            },
             riided: [
                {
                id : "AAP-153",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "IAC",
                nimi: "IAC - Kooste ja CNC",
                aadress: "Vxxx XXX, Xxxxu",
                lisainfo: "Avatakse 08:00 - 17:00",
                kontakt: "Klienditeenindus - +XXX XXXXXXXX",
                tarnekood: "110511"
            },
             riided: [
                {
                id : "AAP-154",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "PFG",
                nimi: "PFG OÜ",
                aadress: "Rxxx XXX, Xxxxu",
                lisainfo: "Avatakse 08:00 - 17:00 - kotiteenus",
                kontakt: "+XXX XXXXXXXX",
                tarnekood: "113126"
            },
             riided: [
                {
                id : "AAP-155",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "TXS",
                nimi: "Texas Service OÜ",
                aadress: "Vxxxxx , XXXtu",
                lisainfo: "Avatakse 09:00 - 18:00",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "112729"
            },
             riided: [
                {
                id : "AAP-156",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "EST",
                nimi: "EST-Trans Tartu",
                aadress: "Vxxxxx x, XXXtu",
                lisainfo: "Avatakse 08:00 - 17:00 - tõkkepuu xxxxxxxx",
                kontakt: "+XXX XXXXXXXX",
                tarnekood: "111214"
            },
             riided: [
                {
                id : "AAP-157",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "BLC",
                nimi: "Baltic Industrial",
                aadress: "Vilxxxxx xxx, XXu",
                lisainfo: "Sissepääs võtmega tagant uksest",
                kontakt: "Juht - +XXX XXXXXXXX",
                tarnekood: "112980"
            },
             riided: [
                {
                id : "AAP-158",
                nimetus: "Kõik",
                }
            ]
        },
        { koht: {
                id: "VKK",
                nimi: "Veokikeskus OÜ",
                aadress: "Kassixxx xx, Xxxi",
                lisainfo: "Avatakse 08:00 - 17:00",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "114127"
            },
             riided: [
                {
                id : "AAP-159",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        },
        { koht: {
                id: "SBE",
                nimi: "Sebe",
                aadress: "Kassixxxx 2x, Räni",
                lisainfo: "Pole vaja minna - pesevad riideid kodus",
                kontakt: "Haldur - +XXX XXXXXXXX",
                tarnekood: "113224"
            },
             riided: [
                {
                id : "AAP-160",
                nimetus: "Kotiteenus",
                showKotid: true,
                showMustad: false
                }
            ]
        }
    ]
}

const nädalaplaan = {
    1: "1111",
    2: "1203",
    3: "1310",
    4: "1405",
    5: "1502"
}

const loginKoodid = {
  "MO95": { nimi: "Martti Orav", lubatudReisid: ["1111", "1310"] },
  "BBB": { nimi: "Mati Maasikas", lubatudReisid: ["1502"] },
  "CCC": { nimi: "Kati Kask", lubatudReisid: ["1405"] }
};

const DEMO_MODE = true; //demo sees true -- demo väljas - false


// --- Salvestus ---
const TODAY = new Date().toISOString().split("T")[0];
let appData = JSON.parse(localStorage.getItem("vaibaAppData")) || {};
function salvesta() { localStorage.setItem("vaibaAppData", JSON.stringify(appData)); }

// --- Staatus ---
function setStatus(reis, kohtId, index, value, rowEl = null, kohtBtn = null) {

  if (!appData[TODAY])  appData[TODAY] = {};
  if (!appData[TODAY][reis]) appData[TODAY][reis] = {};
  if (!appData[TODAY][reis][kohtId]) appData[TODAY][reis][kohtId] = {};

  const prev = appData[TODAY][reis][kohtId][index] || {};

    appData[TODAY][reis][kohtId][index] = {
        ...prev,
        ...value
    };


     // --- vaiba / rea värv ---
  uuendaRiideVarv(rowEl, value.status);

 if (kohtBtn) {
    const itemData = baasReisid[reis].find(k => k.koht.id === kohtId);
    const vaipadeArv =
      (itemData?.vaibad?.length || 0) +
      (itemData?.riided?.length || 0);

    uuendaPealkiri(kohtBtn, reis, kohtId, vaipadeArv);
  }

  // --- progress ---
  uuendaProgress(reis);
  uuendaRiieteKokkuvote(reis);

  // --- salvesta KORRA ---
  salvesta();
}

// --- Pealkiri ---
function uuendaPealkiri(btn, reis, kohtId, vaipadeArv = 0) {
    const values = Object.values(appData[TODAY]?.[reis][kohtId] || {})
    .filter (v => v?.status);

    //restart
    btn.style.color = "black";
    btn.style.opacity = "1";
    const old = btn.querySelector(".marker");
    if (old) old.remove();

    //midagi pole märgitud
        if (values.length === 0) return;


        //pooleli
        if (values.length < vaipadeArv) {
            btn.style.opacity = 0.6;
            return;
        }

        //kui fail
    if (values.some(v => v.status === "fail")) {
        btn.style.color = "red";
        const m = document.createElement("span");
        m.textContent = " (!)"; // Märgi veateade
        m.className = "marker";
        btn.appendChild(m);
        return;
    }
    btn.style.color = "green";
}

// --- Progress ---
function uuendaProgress(reis) {
  const dayData = appData[TODAY]?.[reis] || {};
  const kohad = baasReisid[reis] || [];

  let tehtud = 0;

  kohad.forEach(item => {
    const kohtId = item.koht.id;
    const kohtData = dayData[kohtId] || {};

    let koikTehtud = true;

    // --- VAIBAD ---
    item.vaibad?.forEach((_, i) => {
      if (!kohtData[i]?.status) {
        koikTehtud = false;
      }
    });

    // --- RIIDED ---
    item.riided?.forEach((_, i) => {
      if (!kohtData["riided_" + i]?.status) {
        koikTehtud = false;
      }
    });

    if (koikTehtud) tehtud++;
  });

  const kohtadeArv = kohad.length;
  const percent =
    kohtadeArv === 0 ? 0 : Math.round((tehtud / kohtadeArv) * 100);

  document.getElementById("progress-text").textContent =
    `Progress: ${tehtud} / ${kohtadeArv} (${percent}%)`;

  document.getElementById("progress-bar").style.width = percent + "%";
}


// --- Laadi reis ---
function uuendaRiideVarv(el, status) {
    if (!el) return;

    el.style.color = "black";

    if (status === "done") el.style.color = "green";
    if (status === "fail") el.style.color = "red";
}
function uuendaRiieteKokkuvote(reis) {
const kohad = baasReisid[reis] || [];

  const reisilOnRiideid = kohad.some(item =>
    Array.isArray(item.riided) && item.riided.length > 0
  ); 
  const box = document.getElementById("riiete-kokkuvote");

  if (!reisilOnRiideid) {
    box.style.display = "none";
    return;
  }

    box.style.display = "block";

  let kotidKokku = 0;
  let mustadKokku = 0;

  const dayData = appData[TODAY]?.[reis] || {};

  Object.values(dayData).forEach(kohtData => {
    Object.keys(kohtData).forEach(key => {
      if (!key.startsWith("riided_")) return;

      const r = kohtData[key];
      if (typeof r !== "object") return;

      kotidKokku += r.kogus || 0;
      mustadKokku += r.mustad || 0;
    });
  });

  document.getElementById("riiete-kokkuvote").textContent =
    `Kotid kokku: ${kotidKokku} | Mustad kokku: ${mustadKokku}`;
}

function initAllkiri(reis) {
  const box = document.getElementById("allkirja-box");
  const nimiInput = document.getElementById("allkiri-nimi");
  const btn = document.getElementById("kinnita-paev");

  const olemas = appData[TODAY]?.[reis]?.allkiri;

  box.style.display = "block";

  // Kui juba kinnitatud
  if (olemas) {
    nimiInput.value = olemas.nimi;
    nimiInput.disabled = true;
    btn.style.display = "none";

    let info = box.querySelector(".allkirja-info");

    if (!info) {
        info = document.createElement("div");
        info.className = "allkirja-info"
    box.appendChild(info);
    }
    info.textContent =
  `✅ Kõik tehtud, aitäh! ${new Date(olemas.aeg).toLocaleString("et-EE")}`;

    lukustaReis();
    return;
  }

  // Kinnitamine
  btn.onclick = () => {
    const nimi = nimiInput.value.trim();
    if (!nimi) {
      alert("Palun sisesta allkiri");
      return;
    }

    const ok = confirm(
      `Kinnitan päeva\n\nAllkiri: ${nimi}\n\nPärast kinnitamist ei saa andmeid muuta.`
    );

    if (!ok) return;

    appData[TODAY][reis].allkiri = {
      nimi,
      aeg: new Date().toISOString()
    };
uuendaExcelNupp(reis)
    salvesta();
    initAllkiri(reis);
    ; // uuenda vaade
  };
}
function lukustaReis() {
    if (DEMO_MODE) return;
  document
    .querySelectorAll("input, .done-btn, .fail-btn, .reset-btn, .reset-koht-btn")
    .forEach(el => el.disabled = true);
}
function uuendaExcelNupp(reis) {
  const btn = document.querySelector(".nupud .nupp");
  if (!btn) return;

  if (DEMO_MODE) {
    btn.disabled = false;
    return;
  }

  const kinnitatud = !!appData[TODAY]?.[reis]?.allkiri;
  btn.disabled = !kinnitatud;
}

function laadiReis() {
    vaipadeKokku = 0;
    const reis = document.querySelector(".number").value.trim();
    const juhtInput = document.querySelector(".juht");
    const loginKood = juhtInput.value.trim().toUpperCase();
    const kasutaja = loginKoodid[loginKood];

    if(!reis) {
        alert("Palun sisesta reisinumber");
        return;
    }

if (!kasutaja) {
  alert("Vale sisselogimise kood");
  return;
}

if (
    kasutaja.lubatudReisid.length &&
    !kasutaja.lubatudReisid.includes(reis)
  ) {
    alert("Sul ei ole õigust sellele reisile");
    return;
  }

  if (!baasReisid[reis]) {
    alert("Reisinumbrit ei leitud");
    return;
  }

// ✅ automaatselt õige nimi
if (!appData[TODAY]) appData[TODAY] = {};
  if (!appData[TODAY][reis]) appData[TODAY][reis] = {};
  
appData[TODAY][reis].juht = kasutaja.nimi;
salvesta();

    const list = document.getElementById("reis-list");
    list.innerHTML = "";

    baasReisid[reis].forEach(item => {
        const kohtDiv = document.createElement("div");
        kohtDiv.className = "koht";

        const kohtBtn = document.createElement("button");
        kohtBtn.className = "koht-btn";
        console.log("KOHT:", item.koht.id);

        kohtBtn.innerHTML = `
  <div class="koht-title">
    <span>${item.koht.nimi}</span>
    <span class="arrow">▼</span>
  </div>
  ${item.koht.aadress ? `<div class="koht-meta">${item.koht.aadress}</div>` : ""}
  ${item.koht.kontakt ? `<div class="koht-meta">${item.koht.kontakt}</div>` : ""}
  ${item.koht.lisainfo ? `<div class="koht-meta">${item.koht.lisainfo}</div>` : ""}
`;

        const kohtInfo = document.createElement("div");
        kohtInfo.className = "koht-info";
        kohtInfo.style.display = "none";

        const vaibadDiv = document.createElement("div");
        vaibadDiv.className = "vaibad";
        vaibadDiv.style.display = "none";

        const resetKoht = document.createElement("button");
        resetKoht.textContent = "↺ Kogu koht";
    resetKoht.className = "reset-koht-btn";

resetKoht.onclick = () => {
  const kohtId = item.koht.id;

  if (appData[TODAY]?.[reis]?.[kohtId]) {
    delete appData[TODAY][reis][kohtId]; // ⬅️ OLULINE
  }

  vaibadDiv
    .querySelectorAll(".vaip, .riideRow, .riidePealkiri")
    .forEach(el => el.style.color = "black");

    vaibadDiv
    .querySelectorAll("input")
    .forEach(input => input.value = "");

  salvesta();

  uuendaPealkiri(
    kohtBtn,
    reis,
    kohtId,
    (item.vaibad?.length || 0) + (item.riided?.length || 0)
  );

  uuendaProgress(reis);
  uuendaRiieteKokkuvote(reis)
};

        document.getElementById("vaipade-info").textContent =
  `Vaibad kokku: ${vaipadeKokku} tk`;

        // --- Vaibad ---
        item.vaibad?.forEach((v, i) => {
            vaipadeKokku += v.kogus || 1;
            const vaipRow = document.createElement("div");
            vaipRow.className = "vaip";
            vaipRow.style.display = "flex";
            vaipRow.style.alignItems = "center";
            vaipRow.style.justifyContent = "space-between";
            vaipRow.style.marginBottom = "4px";

            const nimetusDiv = document.createElement("div");
            nimetusDiv.textContent = `${v.kirjeldus} (${v.kogus} tk) – ${v.asukoht}`;
            vaipRow.appendChild(nimetusDiv);

            const vaibaNupudDiv = document.createElement("div");
            vaibaNupudDiv.style.display = "flex";
            vaibaNupudDiv.style.gap = "5px";

            const doneBtn = document.createElement("button");
            doneBtn.textContent = "+";
            doneBtn.className = "done-btn";
            doneBtn.onclick = () => setStatus(reis, item.koht.id, i, {status: "done"}, vaipRow, kohtBtn);

            const failBtn = document.createElement("button");
            failBtn.textContent = "x";
            failBtn.className = "fail-btn";
            failBtn.onclick = () => {
                const põhjus = prompt("Miks ei saanud tehtud?");
                if (!põhjus) return;
                setStatus(reis, item.koht.id, i, {status: "fail", põhjus}, vaipRow, kohtBtn);
            };

            const resetBtn = document.createElement("button");
            resetBtn.textContent = "↺";
            resetBtn.className = "reset-btn";
            resetBtn.onclick = () => {
                if (appData[TODAY]?.[reis]?.[item.koht.id]) {
                delete appData[TODAY][reis][item.koht.id][i];
            }
               vaipRow.style.color = "black";

                 
                salvesta();
            const vaipadeArv =
    (item.vaibad?.length || 0) + (item.riided?.length || 0);

                
                uuendaPealkiri(kohtBtn, reis, item.koht.id, (item.vaibad?.length || 0) + (item.riided?.length || 0));
                uuendaProgress(reis);
            };

            vaibaNupudDiv.appendChild(doneBtn);
            vaibaNupudDiv.appendChild(failBtn);
            vaibaNupudDiv.appendChild(resetBtn);
            vaipRow.appendChild(vaibaNupudDiv);

            // Staatus värv
            const status = appData[TODAY][reis][item.koht.id]?.[i]?.status;
            uuendaRiideVarv(vaipRow, status);

            vaibadDiv.appendChild(vaipRow);
        });

        // --- Riided ---
        item.riided?.forEach((r, i) => {
            // Pealkiri eraldi
            let riidePealkiri = null;
             {
                riidePealkiri = document.createElement("div");
                riidePealkiri.className = "riidePealkiri";
                riidePealkiri.textContent = r.nimetus;
                riidePealkiri.style.fontWeight = "bold";
                riidePealkiri.style.marginTop = "10px";
                vaibadDiv.appendChild(riidePealkiri);

                // Algne värv salvestatud staatusest
                const status = appData[TODAY][reis][item.koht.id]?.["riided_" + i]?.status;
                uuendaRiideVarv(riidePealkiri, status);
            }

            const riideRow = document.createElement("div");
            riideRow.className = "riideRow";
            riideRow.style.display = "flex";
            riideRow.style.alignItems = "center";
            riideRow.style.marginBottom = "4px";
            riideRow.style.justifyContent = "space-between";

            const vasakPool = document.createElement("div");
            vasakPool.style.display = "flex";
            vasakPool.style.gap = "5px";

            const kogusInput = document.createElement("input");
            kogusInput.type = "number";
            kogusInput.value = appData[TODAY][reis][item.koht.id]?.["riided_" + i]?.kogus ?? "";
            kogusInput.placeholder = "Kotid";
            kogusInput.style.width = "60px";
            kogusInput.onchange = () => {
                if (!appData[TODAY][reis][item.koht.id]) appData[TODAY][reis][item.koht.id] = {};
                if (!appData[TODAY][reis][item.koht.id]["riided_" + i]) appData[TODAY][reis][item.koht.id]["riided_" + i] = {};
                appData[TODAY][reis][item.koht.id]["riided_" + i].kogus = parseInt(kogusInput.value) || 0;
                salvesta();
                uuendaRiieteKokkuvote(reis);
            };

            const mustadInput = document.createElement("input");
            mustadInput.type = "number";
            mustadInput.value = appData[TODAY][reis][item.koht.id]?.["riided_" + i]?.mustad ?? "";
            mustadInput.placeholder = "Mustad";
            mustadInput.style.width = "60px";
            mustadInput.onchange = () => {
                if (!appData[TODAY][reis][item.koht.id]) appData[TODAY][reis][item.koht.id] = {};
                if (!appData[TODAY][reis][item.koht.id]["riided_" + i]) appData[TODAY][reis][item.koht.id]["riided_" + i] = {};
                appData[TODAY][reis][item.koht.id]["riided_" + i].mustad = parseInt(mustadInput.value) || 0;
                salvesta();
                uuendaRiieteKokkuvote(reis);
            };

            if (r.showKotid !== false) {
            vasakPool.appendChild(kogusInput);
                }

            if (r.showMustad !== false) {
            vasakPool.appendChild(mustadInput);
            }

            riideRow.appendChild(vasakPool);

            const nuppudePool = document.createElement("div");
            nuppudePool.style.display = "flex";
            nuppudePool.style.gap = "5px";

            const doneBtn = document.createElement("button");
            doneBtn.textContent = "+";
            doneBtn.className = "done-btn";
            doneBtn.onclick = () =>
                setStatus(reis, item.koht.id, "riided_" + i, {status:"done"}, riidePealkiri, kohtBtn);

            const failBtn = document.createElement("button");
            failBtn.textContent = "x";
            failBtn.className = "fail-btn";
            failBtn.onclick = () => {
                const põhjus = prompt("Miks ei saanud tehtud?");
                if (!põhjus) return;
                setStatus(reis, item.koht.id, "riided_" + i, {status:"fail", põhjus}, riidePealkiri, kohtBtn);
            };

            const resetBtn = document.createElement("button");
            resetBtn.textContent = "↺";
            resetBtn.className = "reset-btn";
            resetBtn.onclick = () => {
                if(appData[TODAY][reis][item.koht.id]) delete appData[TODAY][reis][item.koht.id]["riided_" + i];
                riideRow
                .querySelectorAll("input")
                .forEach(input => input.value = "");
                if (riidePealkiri) riidePealkiri.style.color = "black";
                salvesta();
                const vaipadeArv = (item.vaibad?.length || 0) + (item.riided?.length || 0);
                uuendaPealkiri(kohtBtn, reis, item.koht.id, vaipadeArv);
                uuendaProgress(reis);
                uuendaRiieteKokkuvote(reis);
            };

            nuppudePool.appendChild(doneBtn);
            nuppudePool.appendChild(failBtn);
            nuppudePool.appendChild(resetBtn);
            riideRow.appendChild(nuppudePool);

            vaibadDiv.appendChild(riideRow);
        });

        if (appData[TODAY][reis][item.koht.id] && Object.keys(appData[TODAY][reis][item.koht.id]).length)
            vaibadDiv.style.display = "block";

        kohtBtn.onclick = () => {
        const open = vaibadDiv.style.display === "block";
        vaibadDiv.style.display = open ? "none" : "block";
        kohtInfo.style.display = open ? "none" : "block";
        };

        kohtDiv.appendChild(resetKoht);
        kohtDiv.appendChild(kohtBtn);
        kohtDiv.appendChild(kohtInfo);
        kohtDiv.appendChild(vaibadDiv);
        list.appendChild(kohtDiv);
        

        const vaipadeArv = (item.vaibad?.length || 0) + (item.riided?.length || 0);
        uuendaPealkiri(kohtBtn, reis, item.koht.id, vaipadeArv);

        
    });

    uuendaProgress(reis);
    uuendaRiieteKokkuvote(reis);
    uuendaExcelNupp(reis);
  salvesta();



    initAllkiri(reis);
    document.getElementById("reis-list-modal").style.display = "block";
}


// --- Modal ---
function sulgeModal() {
    salvesta();
    document.getElementById("reis-list-modal").style.display = "none";
}

// --- Excel eksport ---
    function ekspordiExcel(reis) {

  if (!DEMO_MODE && !appData[TODAY]?.[reis]?.allkiri) {
    alert("Päev ei ole veel kinnitatud. Palun kinnita päev enne saatmist.");
    return;
  }

  if (!appData[TODAY]?.[reis]) {
    alert("Selle päeva või reisi andmeid ei leitud.");
    return;
  }
   


  const dayData = appData[TODAY][reis];
  const juht = dayData.juht || "Määramata";
  const allkiri = dayData.allkiri;

  const sheetData = [];

  // --- ÜLDINFO ---
  sheetData.push(["Kuupäev:", TODAY]);
  sheetData.push(["Reis:", reis]);
  sheetData.push(["Juht:", juht]);
  sheetData.push(["Kinnitatud:", allkiri ? "Jah" : "Ei"]);
  sheetData.push(["Allkiri:", allkiri?.nimi || "-"]);
  sheetData.push([
    "Kinnitamise aeg:",
    allkiri ? new Date(allkiri.aeg).toLocaleString("et-EE") : "-"
  ]);
  sheetData.push([]);

  // --- TABELI PÄIS ---
  sheetData.push([
    "Koht ID",
    "Koha nimi",
    "Tüüp",
    "Nimetus",
    "Staatus",
    "Mustad",
    "Kotid",
    "Põhjus"
  ]);

  let kotidKokku = 0;
  let mustadKokku = 0;
  let tehtud = 0;
  let tegemata = 0;

  baasReisid[reis].forEach(item => {
    const kohtId = item.koht.id;
    const kohtNimi = item.koht.nimi;

    // --- VAIBAD ---
    item.vaibad?.forEach((v, i) => {
      const data = dayData[kohtId]?.[i] || {};
      let staatus = "-";

      if (data.status === "done") {
        staatus = "Tehtud";
        tehtud++;
      } else if (data.status === "fail") {
        staatus = "Tegemata";
        tegemata++;
      }

      sheetData.push([
        kohtId,
        kohtNimi,
        "Vaip",
        v.kirjeldus,
        staatus,
        "",
        "",
        data.põhjus || ""
      ]);
    });

    // --- RIIDED ---
    item.riided?.forEach((r, i) => {
      const data = dayData[kohtId]?.["riided_" + i] || {};
      let staatus = "-";

      if (data.status === "done") {
        staatus = "Tehtud";
        tehtud++;
      } else if (data.status === "fail") {
        staatus = "Tegemata";
        tegemata++;
      }

      const kotid = data.kogus ?? 0;
      const mustad = data.mustad ?? 0;

      kotidKokku += kotid;
      mustadKokku += mustad;

      sheetData.push([
        kohtId,
        kohtNimi,
        "Riie",
        r.nimetus,
        staatus,
        mustad,
        kotid,
        data.põhjus || ""
      ]);
    });
  });

  // --- KOKKUVÕTE ---
  sheetData.push([]);
  sheetData.push(["Kokkuvõte"]);
  sheetData.push(["Tehtud:", tehtud]);
  sheetData.push(["Tegemata:", tegemata]);
  sheetData.push(["Kotid kokku:", kotidKokku]);
  sheetData.push(["Mustad kokku:", mustadKokku]);

  // --- EXCEL ---
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(sheetData);

  ws["!cols"] = [
    { wch: 10 },
    { wch: 20 },
    { wch: 8 },
    { wch: 25 },
    { wch: 10 },
    { wch: 7 },
    { wch: 7 },
    { wch: 40 }
  ];

  XLSX.utils.book_append_sheet(wb, ws, "Raport");
  XLSX.writeFile(wb, `Raport_${reis}_${TODAY}.xlsx`);
}
