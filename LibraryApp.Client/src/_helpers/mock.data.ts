import { IAuthor } from '../app/shared/models/author';
import { IGenre } from '../app/shared/models/genre';
import { IRole } from '../app/shared/models/role';
import { IUser } from '../app/shared/models/user';
import { IBook } from '../app/shared/models/book';


// Authors
export const AUTHORS: IAuthor[] = [
    {
        id: 1,
        firstName: 'Кристин',
        lastName: 'Хана',
        biography: 'Кристин Хана е една од најпродаваните американски писатели која има освоено бројни награди, вкулучувајќи ја наградата Golden Heart, the Maggie и 1996 National Reader’s Choice award. ',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/kristin-hannah4.png',
        fullName: 'Кристин Хана'
    },
    {
        id: 2,
        firstName: 'Шеви',
        lastName: 'Ствивенс',
        biography: 'Шеви Стивенс е автор на трилери од Канада. Таа живее во Ванкувер Ајленд, Британска Колумбија. Кога ја добила идејата за нејзиниот прв трилер „Исчезната без трага“ таа и самата била агент за недвижнини како и главниот лик од приказната.  Тој трилер беше бестселер на Њујорк Тајмс.',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/Chevy_Stevens_3494-345x349.jpg',
        fullName: 'Шеви Стивенс'
    },
    {
        id: 3,
        firstName: 'Даниел',
        lastName: 'Грант',
        biography: 'Роден во Сент Албанс, Англија, учел англиски јазик и  политички студии. Работел како асистент за Newsdesk ITN, потоа за BBC, а сега работи како продуцент на телевизиски вести во Лондон. Живее во Годалминг во Сари со сопругата Алисон и нивниот црн лабрадор, Диги. Обожава да пишува, да пие вино и да патува.',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/110966_ad82d8f9b0c19e2ff21471a16a0ba9e4.jpg_srz_267_251_85_22_0.50_1.20_0.00.jpg',
        fullName: 'Даниел Грант'
    },
    {
        id: 4,
        firstName: 'Сара',
        lastName: 'Џио',
        biography: 'Сара Џио е автор на 8 бестселери според Њујорк Тајмс и USA Today. Таа воедно е новинарка која има пишувано за Glamour, The New York Times, Redbook, O: The Oprah Magazine. Живее во Сиетл со трите мали синчиња.',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2017/10/sarah-sidebar2-345x425.png',
        fullName: 'Сара Џио'
    },
    {
        id: 5,
        firstName: 'Јон',
        lastName: 'Грин',
        biography: 'Џон Грин е американски автор, видео блогер, писател, продуцент, актер и уредник. Тој е бр.1 најпродаван автор на Њујорк Тајмс за „Во потрага по Алјаска“, „Светот не е фабрика за исполнување желби“ и др',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/john-green-2.jpg',
        fullName: 'Јон Грин'
    }
];

//Books
export const BOOKS: IBook[] = [
    {
        id: 1,
        title: "Славејот",
        originalTitle: "The Nightingale",
        authors: <IAuthor[]> [{
            id: 1,
            firstName: 'Кристин',
            lastName: 'Хана',
            biography: 'Кристин Хана е една од најпродаваните американски писатели која има освоено бројни награди, вкулучувајќи ја наградата Golden Heart, the Maggie и 1996 National Reader’s Choice award. ',
            imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/kristin-hannah4.png',
            fullName: 'Кристин Хана'
        }],
        genres: <IGenre[]>[{
            id: 1,
             title: 'Романса'
        }],
        publishingHouse: "Сакам Книги",
        pagesNum: 415,
        rating: 4.56,
        description: "Во тивко француско село, кротката и плашлива Вијан Моријак се збогува со својот сопруг, кој оди да војува. Таа не верува дека Германците ќе ја окупираат Франција, но тоа сепак се случува и ја принудува да прими непријател во сопствениот дом. Во ова време на војни, Вијан мора да научи да биде храбра. Храбра како сестра ѝ.",
        imageUrl: "http://sakamknigi.mk/wp-content/uploads/2015/09/11.jpg"
    },
    {
        id: 2,
        title: "Никогаш не се знае",
        originalTitle: "Never Knowing",
        authors: <IAuthor[]> [{
            id: 2,
            firstName: 'Шеви',
            lastName: 'Ствивенс',
            biography: 'Шеви Стивенс е автор на трилери од Канада. Таа живее во Ванкувер Ајленд, Британска Колумбија. Кога ја добила идејата за нејзиниот прв трилер „Исчезната без трага“ таа и самата била агент за недвижнини како и главниот лик од приказната.  Тој трилер беше бестселер на Њујорк Тајмс.',
            imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/Chevy_Stevens_3494-345x349.jpg',
            fullName: 'Шеви Стивенс'
        }],
        genres: <IGenre[]>[ {
            id: 2,
            title: 'Трилер'
        }, 
        {
            id: 4,
            title: 'Вестерн'
        }],
        publishingHouse: "Сакам Книги",
        pagesNum: 367,
        rating: 3.86,
        description: "На триесет и три години, Сара Галагер конечно е среќна. Нејзиниот бизнис за реставрација на мебел цвета и верена е со прекрасен човек. Но има едно големо прашање што сe уште ја прогонува – кои се нејзините биолошки родители? Сара конечно е подготвена да дознае, бидејќи одамна знае дека е посвоена и копнее да дознае нешто повеќе за вистинските родители.",
        imageUrl: "http://www.kniga.mk/media/catalog/product/cache/3/image/265x265/17f82f742ffe127f42dca9de82fb58b1/n/i/nikogas_ne_se_znae.jpg"
    },
    {
        id: 3,
        title: "И планините одекнаа",
        originalTitle: "And The Mountains Echoed",
        authors: <IAuthor[]> [{
            id: 3,
            firstName: 'Даниел',
            lastName: 'Грант',
            biography: 'Роден во Сент Албанс, Англија, учел англиски јазик и  политички студии. Работел како асистент за Newsdesk ITN, потоа за BBC, а сега работи како продуцент на телевизиски вести во Лондон. Живее во Годалминг во Сари со сопругата Алисон и нивниот црн лабрадор, Диги. Обожава да пишува, да пие вино и да патува.',
            imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/110966_ad82d8f9b0c19e2ff21471a16a0ba9e4.jpg_srz_267_251_85_22_0.50_1.20_0.00.jpg',
            fullName: 'Даниел Грант'
        }],
        genres: <IGenre[]>[ {
            id: 3,
            title: 'Мистерија'
        }],
        publishingHouse: "Матица",
        pagesNum: 393,
        rating: 4.04,
        description: "Сите кои го познаваат Џејмс Кенеди сметаат дека животот не можел да му подели подобри карти. Тој е згоден, паметен, млад, има одлично платена работа како банкар во центарот на Лондон, живее во огромен модерен стан во скапиот дел од градот, ги менува девојките како чорапи, има група фини пријатели… Навидум, тој навистина има совршен живот.",
        imageUrl: "http://sakamknigi.mk/portal/media/k2/items/cache/a4e782ff58c2efaa0c9218e717493fa6_S.jpg?t=-62169984000"
    },
    
];

// Genres
export const GENRES: IGenre[] = [
    {
        id: 1,
        title: 'Романса'
    },
    {
        id: 2,
        title: 'Трилер'
    },
    {
        id: 3,
        title: 'Мистерија'
    },
    {
        id: 4,
        title: 'Вестерн'
    }
];

// Roles
export const ROLES: IRole[] = [
    {
        id: 1,
        title: 'Администратор',
        tag: 'ADMIN'
    },
    {
        id: 2,
        title: 'Вработен',
        tag: 'EMPL'
    },
    {
        id: 1,
        title: 'Надворешен корисник',
        tag: 'READ'
    }
];

// Users
export const USERS: IUser[] = [
    {
        id: 1,
        firstName: 'Администратор',
        lastName: '',
        userName: 'admin',
        email: 'admin@email.com',
        isActive: true,
        imageUrl: '',
        roles: [
            {
                id: 1,
                title: 'Администратор',
                tag: 'ADMIN'
            },
            {
                id: 2,
                title: 'Вработен',
                tag: 'EMPL'
            }
        ],
        password: 'admin'
    },

    {
        id: 2,
        firstName: 'Ирена',
        lastName: 'Ристовска',
        userName: 'irena.ristovska',
        email: 'irena_ristovska@email.com',
        isActive: true,
        imageUrl: '',
        roles: [
            {
                id: 1,
                title: 'Администратор',
                tag: 'ADMIN'
            },
            {
                id: 2,
                title: 'Вработен',
                tag: 'EMPL'
            }
        ],
        password: '123456'
    }
];
