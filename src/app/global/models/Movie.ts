import { MovieGender } from './MovieGender';

export class Movie {
  public constructor(
    private _id: number,
    private _name: string,
    private _gender: Array<MovieGender>,
    private _summary: string,
    private _imagePath: string,
    private _videoPath: string
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
   * Getter gender
   * @return {Array<MovieGender>}
   */
  public get gender(): Array<MovieGender> {
    return this._gender;
  }

  /**
   * Getter summary
   * @return {string}
   */
  public get summary(): string {
    return this._summary;
  }

  /**
   * Getter imagePath
   * @return {string}
   */
  public get imagePath(): string {
    return this._imagePath;
  }

  /**
   * Getter videoPath
   * @return {string}
   */
  public get videoPath(): string {
    return this._videoPath;
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
   * Setter gender
   * @param {Array<MovieGender>} value
   */
  public set gender(value: Array<MovieGender>) {
    this._gender = value;
  }

  /**
   * Setter summary
   * @param {string} value
   */
  public set summary(value: string) {
    this._summary = value;
  }

  /**
   * Setter imagePath
   * @param {string} value
   */
  public set imagePath(value: string) {
    this._imagePath = value;
  }

  /**
   * Setter videoPath
   * @param {string} value
   */
  public set videoPath(value: string) {
    this._videoPath = value;
  }
}
