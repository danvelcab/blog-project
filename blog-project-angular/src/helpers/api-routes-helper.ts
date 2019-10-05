import { environment } from '../environments/environment';
/**
 * Created by Daniel on 29/09/2019.
 */
export class ApiRouteHelper {

  public static getGetURL(id: any): string {
    return this.getApiHost() + 'projects/' + id;
  }
  public static getListURL(): string {
    return this.getApiHost() + 'projects';
  }
  public static getStoreURL(): string {
    return this.getApiHost() + 'projects';
  }
  public static getUpdateURL(id: any): string {
    return this.getApiHost() + 'projects/' + id;
  }
  public static getDeleteURL(id: any): string {
    return this.getApiHost() + 'projects/' + id;
  }
  /**
   * Esta función nos devuelve la base de la ruta de la API del back
   * @returns {string}
   */
  private static getApiHost() {
    return environment.protocol + environment.host + environment.apiPrefix + environment.version;
  }
}
