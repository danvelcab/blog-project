import { ProjectStatusHelper } from '../helpers/project-status-helper';
/**
 * Created by Daniel on 29/09/2019.
 */
export class Project {
  private _id: any;
  private _name: string;
  private _description: string;
  private _status: string;
  private _type: string;


  constructor(projects: any = null) {
    this._id = projects['id'] ? projects['id'] : null;
    this._name = projects['name'] ? projects['name'] : null;
    this._description = projects['description'] ? projects['description'] : null;
    this._type = projects['type'] ? projects['type'] : null;
    this._status = projects['status'] ? projects['status'] : ProjectStatusHelper.DRAFT_STATUS;
  }

  get id(): any {
    return this._id;
  }

  set id(value: any) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
