import { environment } from '../environments/environment';
/**
 * Created by Daniel on 29/09/2019.
 */
export class ApiRouteHelper {

  // Ruta de la API para obtener un proyecto
  public static getGetURL(id: any): string {
    return this.getApiHost() + 'projects/' + id;
  }
  // Ruta de la API pata obtener el listado de proyectos
  public static getListURL(): string {
    return this.getApiHost() + 'projects';
  }
  // Ruta de la API para guardar un proyecto
  public static getStoreURL(): string {
    return this.getApiHost() + 'projects';
  }
  // Ruta de la API para actualizar un proyecto
  public static getUpdateURL(id: any): string {
    return this.getApiHost() + 'projects/' + id;
  }
  // Ruta de la API para borrar un proyecto
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
