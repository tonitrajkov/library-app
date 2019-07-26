import { IAuthor } from './author';
import { IGenre } from './genre';

export interface IBook {

    id: number;
    title: string;
    originalTitle: string;
    author: IAuthor[];
    genre: IGenre[];
    publishingHouse: string;
    pagesNum: number;
    rating: number;
    imageUrl: string;
    description: string;
}