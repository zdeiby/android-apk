import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle slot="start">2 - LOCALIZACION DEL EVENTO</IonTitle>  
          <IonTitle slot="end">FICHA SOCIAL: 40093 </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle slot="start">2 - LOCALIZACION DEL EVENTO</IonTitle>  
          <IonTitle slot="end">FICHA SOCIAL: 40093 </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
