import { IAuthor } from '../app/shared/models/author';
import { IGenre } from '../app/shared/models/genre';
import { IRole } from '../app/shared/models/role';
import { IUser } from '../app/shared/models/user';


// Authors
export const AUTHORS: IAuthor[] = [
    {
        id: 1,
        firstName: 'Kristin',
        lastName: 'Hannah',
        biography: 'Kristin`s bio',
        imageUrl: ''
    },
    {
        id: 2,
        firstName: 'Chevy',
        lastName: 'Stevens',
        biography: 'Stevens biography it is not available',
        imageUrl: ''
    },
    {
        id: 3,
        firstName: 'Khaled',
        lastName: 'Hosseini',
        biography: '',
        imageUrl: ''
    },
    {
        id: 4,
        firstName: 'Sarah',
        lastName: 'Gio',
        biography: 'Sarah Gio is author of 8 best sellers',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2017/10/sarah-sidebar2-345x425.png'
    },
    {
        id: 5,
        firstName: 'Jonh',
        lastName: 'Green',
        biography: '',
        imageUrl: 'http://sakamknigi.mk/wp-content/uploads/2015/08/john-green-2.jpg'
    }
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
