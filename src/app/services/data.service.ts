import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City, NewCity } from '../interfaces/city';
import { NewPointOfInterest, PointOfInterest, UpdatePointOfInterest } from '../interfaces/point-of-interest';
import { PatchDocument } from '../interfaces/patch-document';

const ENDPOINT = environment.api

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  /*** Cities ***/
  getCities() {
    return this.http.get<City[]>(`${ENDPOINT}/cities`)
  }

  getCity(cityId: number, includePointsOfInterest: boolean = false) {
    return this.http.get<City>(`${ENDPOINT}/cities/${cityId}?includePointsOfInterest=${includePointsOfInterest}`)
  }

  addCity(city: NewCity) {
    return this.http.post<City>(`${ENDPOINT}/cities`, city)
  }

  /*** Points of Interest ***/
  addPointOfInterest(cityId: number, pointOfInterest: NewPointOfInterest) {
    return this.http.post<PointOfInterest>(`${ENDPOINT}/cities/${cityId}/pointsOfInterest`, pointOfInterest)
  }

  /***
   * @description There is a function called from the DataService called **constructPatchDocumentForUpdate()** that needs to be called to form the patchDocument
   ***/
  updatePointOfInterest(cityId: number, pointOfInterestId: number, pointOfInterestPatchDocument: PatchDocument[]) {
    return this.http.patch<void>(`${ENDPOINT}/cities/${cityId}/pointsOfInterest/${pointOfInterestId}`, pointOfInterestPatchDocument)
  }

  deletePointOfInterest(cityId: number, pointOfInterestId: number) {
    return this.http.delete<void>(`${ENDPOINT}/cities/${cityId}/pointsOfInterest/${pointOfInterestId}`)
  }

  /*** Other Utilites ***/

  /*** The only reason that I'm just creating the patch document myself and not using a third party is there are only two fields that can be updated ***/
  constructPatchDocumentForUpdate(name?: string, description?: string) {
    let patchDoc: PatchDocument[] = []

    if (name && name.length) {
      const updateName: PatchDocument = { op: '/replace', path: '/name', value: name }

      patchDoc.push(updateName)
    }

    if (description && description.length) {
      const updateDesc: PatchDocument = { op: '/replace', path: '/description', value: description}

      patchDoc.push(updateDesc)
    }

    return patchDoc
  }
}
