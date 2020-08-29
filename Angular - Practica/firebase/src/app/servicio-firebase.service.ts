import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Mascota { nombre: string, apodo: string, edad: number };

@Injectable({
  providedIn: 'root'
})

export class ServicioFirebaseService {
  private mascotasCollection: AngularFirestoreCollection<Mascota>;  // ACA TENGO LA COLECCION DE FIREBASE
  mascotas: Observable<Mascota[]>;  //  ACA TENGO TODAS LAS MASCOTAS CON SUS VALORES
  private mascotaDoc: AngularFirestoreDocument<Mascota>; // PARA MANEJO INDIVIDUAL
  
  constructor(private firestore: AngularFirestore) {
    // this.mascotas = firestore.collection('mascotas').valueChanges();
    this.mascotasCollection = firestore.collection<Mascota>("mascotas");
    this.mascotas = this.mascotasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Mascota;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  obtenerMascotas(){
    return this.mascotas;
  }

  agregarNueva(mascota: Mascota){
    this.mascotasCollection.add(mascota);
  }

  eliminar(mascota){
    // this.mascotasCollection
    this.mascotaDoc = this.firestore.doc<Mascota>(`mascotas/${mascota.id}`);  
    this.mascotaDoc.delete();
  }

  modificar(mascota){
    this.mascotaDoc = this.firestore.doc<Mascota>(`mascotas/${mascota.id}`);  
    this.mascotaDoc.update(mascota);
  }
}
