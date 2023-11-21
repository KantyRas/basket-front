import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import ListeEquipe from "../components/ListeEquipe";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NBA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NBA</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListeEquipe />
      </IonContent>
    </IonPage>
  );
};

export default Home;
