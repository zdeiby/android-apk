import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React,{useState} from 'react';
import {Person} from './../models/person.model';
import EmployeeItem from './../components/EmployeeItem';

const Tab2: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useIonViewDidEnter( () => {
    const result = [
      {
        name: 'carlos',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'1234'
        
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'345'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'324435'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'345342'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'345345'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'156'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'5674'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'456454'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'45645'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'456456'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'78556'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'12343'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'45645'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'7856'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'12234'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'1234'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'1234'
      },
      {
        name: 'juan',  
        email:'blablala',
        position: '1',
        photo: 'https://curul26.com/wp-content/uploads/2023/01/Foto-imagen.jpg',
        ficha:'1234'
      }
    ];
    const data = result;//await result.json();
    setPeople(data);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle slot="start">1 - IDENTIFICACION DEL EVENTO </IonTitle>  
        <IonTitle slot="end">FICHA SOCIAL: 40093 </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
        {people.map((person, idx) => <EmployeeItem key={idx} person={person} />)}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
