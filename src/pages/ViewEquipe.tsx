import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import Statistiques from "../components/Statistiques";

const ViewEquipe: React.FC = () => {
    return(
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
                <Statistiques />
            </IonContent>
        </IonPage>
    );
};
export default ViewEquipe;