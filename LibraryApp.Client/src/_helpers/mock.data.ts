import { IAuthor } from '../app/shared/models/author';
import { IGenre } from '../app/shared/models/genre';
import { IRole } from '../app/shared/models/role';
import { IUser } from '../app/shared/models/user';
import { IBook } from '../app/shared/models/book';


// Authors
export const AUTHORS: IAuthor[] = [
    {
        id: 1,
        firstName: 'Kristin',
        lastName: 'Hannah',
        biography: 'Kristin`s bio',
        imageUrl: '',
        fullName: 'Kristin Hannah'
    },
    {
        id: 2,
        firstName: 'Chevy',
        lastName: 'Stevens',
        biography: 'Stevens biography it is not available',
        imageUrl: '',
        fullName: 'Chevy Stevens'
    },
    {
        id: 3,
        firstName: 'Khaled',
        lastName: 'Hosseini',
        biography: '',
        imageUrl: '',
        fullName: 'Khaled Hosseini'
    },
    {
        id: 4,
        firstName: 'Sarah',
        lastName: 'Gio',
        biography: 'Sarah Gio is author of 8 best sellers',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2017/10/sarah-sidebar2-345x425.png',
        fullName: 'Sarah Gio'
    },
    {
        id: 5,
        firstName: 'Jonh',
        lastName: 'Green',
        biography: '',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/john-green-2.jpg',
        fullName: 'John Green'
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
            firstName: 'Kristin',
            lastName: 'Hannah',
            biography: 'Kristin`s bio',
            imageUrl: '',
            fullName: 'Kristin Hannah'
        }],
        genres: <IGenre[]>[{
            id: 1,
             title: 'Romance'
        }],
        publishingHouse: "Sakam Knigi",
        pagesNum: 415,
        rating: 4.56,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "http://sakamknigi.mk/wp-content/uploads/2015/09/11.jpg"
    },
    {
        id: 2,
        title: "Никогаш не се знае",
        originalTitle: "Never Knowing",
        authors: <IAuthor[]> [{
            id: 2,
            firstName: 'Chevy',
            lastName: 'Stevens',
            biography: 'Stevens biography it is not available',
            imageUrl: '',
            fullName: 'Chevy Stevens'
        }],
        genres: <IGenre[]>[ {
            id: 2,
            title: 'Thriller'
        }, 
        {
            id: 4,
            title: 'Western'
        }],
        publishingHouse: "Sakam Knigi",
        pagesNum: 367,
        rating: 3.86,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "http://www.kniga.mk/media/catalog/product/cache/3/image/265x265/17f82f742ffe127f42dca9de82fb58b1/n/i/nikogas_ne_se_znae.jpg"
    },
    {
        id: 3,
        title: "И планините одекнаа",
        originalTitle: "And The Mountains Echoed",
        authors: <IAuthor[]> [{
            id: 3,
            firstName: 'Khaled',
            lastName: 'Hosseini',
            biography: '',
            imageUrl: '',
            fullName: 'Khaled Hosseini'
        }],
        genres: <IGenre[]>[ {
            id: 3,
            title: 'Mystery'
        }],
        publishingHouse: "Matica",
        pagesNum: 393,
        rating: 4.04,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "http://sakamknigi.mk/portal/media/k2/items/cache/a4e782ff58c2efaa0c9218e717493fa6_S.jpg?t=-62169984000"
    },
    
];

// Genres
export const GENRES: IGenre[] = [
    {
        id: 1,
        title: 'Romance'
    },
    {
        id: 2,
        title: 'Thriller'
    },
    {
        id: 3,
        title: 'Mystery'
    },
    {
        id: 4,
        title: 'Western'
    }
];

// Roles
export const ROLES: IRole[] = [
    {
        id: 1,
        title: 'Administrator',
        tag: 'ADMIN'
    },
    {
        id: 2,
        title: 'Employee',
        tag: 'EMPL'
    },
    {
        id: 1,
        title: 'Reader',
        tag: 'READ'
    }
];

// Users
export const USERS: IUser[] = [
    {
        id: 1,
        firstName: 'Toni',
        lastName: 'Trajkov',
        userName: 'toni.trajkov',
        email: 'toni.trajkov@email.com',
        isActive: true,
        imageUrl: '',
        roles: [
            {
                id: 1,
                title: 'Administrator',
                tag: 'ADMIN'
            },
            {
                id: 2,
                title: 'Employee',
                tag: 'EMPL'
            }
        ]
    }
];
