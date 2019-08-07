import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaypointsService {

  constructor( private firestore: AngularFirestore ) { }

  createWayPoint(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("wayPoints")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }

  getWayPoints() { 
    return this.firestore.collection("wayPoints").snapshotChanges();
  }
}
