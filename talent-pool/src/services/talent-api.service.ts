import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { API_ENDPOINTS } from 'src/constants/api_endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalentApiService {
  talentApi = environment.url;
  serviceEndpoints = API_ENDPOINTS;

  constructor(private https: HttpClient) { }

  getAllProfiles() {
    console.log(this.serviceEndpoints.GET_ALL_PROFILES);
    return this.https.get(this.talentApi + this.serviceEndpoints.GET_ALL_PROFILES,
      { 
        observe: 'body'
      }).pipe(catchError(TalentApiService.ErrorHandler));
  }

  getOneProfile(email: String) {
    console.log(email);
    return this.https.get(this.talentApi + this.serviceEndpoints.GET_ONE_PROFILE + email, {
      observe: 'body'
    }).pipe(catchError(TalentApiService.ErrorHandler));
  }

  private static ErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //not connected to internet error
      alert(`Client not connected to a network ${error.status}`);
    } else {
      switch(error.status) {
        case 404:
          alert('No Data Found');
          console.error(`Server Returned: ${error.status}, Details => ${error.message}`)
          break;
        
        case 500:
          alert(`An Internal Server Error occurred, details=> ${error.message}`)
          console.error(`Server Returned: ${error.status}, Details => ${error.message}`)
          break;
        
        default:
          console.error(`Server Returned: ${error.status}, Details => ${error.message}`);
          alert('Cannot process your request at this time');
          break;
      }
    }
    return throwError('Could not process request at this time')
  }
}
