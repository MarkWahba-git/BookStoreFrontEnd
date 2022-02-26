import { BookAuthorEntity } from "./book-author-entity";
import { BookLanguageEntity } from "./book-language-entity";

export class BooksEntity {
  public bookAuth: Array<BookAuthorEntity> =[];
  // public bookLang?: Array<BookLanguageEntity> ;

  constructor(
    public bookID?:number,
public title?:string,
public publisherID?:number,
public publisherName?:string,
public publicationDate?:string,
public isbn?:string,
public isbN13?:string,
public numberPages?:number,
public avgRating?:number,
public ratingCount?:number,
    public textRreviewsCount?: number,
    public langID?: number,
public langName?:string,



  ) { }

}

