import { User } from './User';

export class MovieGender {
  public constructor(
    private _id: number,
    private _name: string,
    private _user: Array<User>
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
   * Getter user
   * @return {Array<User>}
   */
  public get user(): Array<User> {
    return this._user;
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
   * Setter user
   * @param {Array<User>} value
   */
  public set user(value: Array<User>) {
    this._user = value;
  }
}
