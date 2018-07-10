import { MovieGender } from './MovieGender';
import { Movie } from './Movie';

export class User {
  public constructor(
    private _id: number,
    private _name: string,
    private _lastName: string,
    private _password: string,
    private _email: string,
    private _movieGender: Array<MovieGender>,
    private _movie: Array<Movie>
  ) {}

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter lastName
   * @return {string}
   */
  public get lastName(): string {
    return this._lastName;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter movieGender
   * @return {Array<MovieGender>}
   */
  public get movieGender(): Array<MovieGender> {
    return this._movieGender;
  }

  /**
   * Getter movie
   * @return {Array<Movie>}
   */
  public get movie(): Array<Movie> {
    return this._movie;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter lastName
   * @param {string} value
   */
  public set lastName(value: string) {
    this._lastName = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter movieGender
   * @param {Array<MovieGender>} value
   */
  public set movieGender(value: Array<MovieGender>) {
    this._movieGender = value;
  }

  /**
   * Setter movie
   * @param {Array<Movie>} value
   */
  public set movie(value: Array<Movie>) {
    this._movie = value;
  }
  // }
}
