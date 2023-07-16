import {
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonIcon,
  IonText,
} from "@ionic/react";

import { Product } from "../types";
import { bagAddOutline } from "ionicons/icons";
import { phpString } from "../phpString";

export default function ProductCard(props: Product) {
  return (
    <IonCol size="6">
      <IonCard className="ion-padding" routerLink={`/product?id=${props.id}`}>
        <div style={{ backgroundColor: "gray", borderRadius: "5px" }}>
          <img
            src={props.image}
            alt={props.name}
            style={{ height: "6rem", width: "100%" }}
          />
        </div>
        <IonCardTitle style={{ fontSize: "1rem" }} className="ion-margin-top">
          {props.name}
        </IonCardTitle>
        <IonCardSubtitle>{props.description}</IonCardSubtitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <IonText>{phpString.format(props.price)}</IonText>
          <IonIcon src={bagAddOutline} size="large"></IonIcon>
        </div>
      </IonCard>
    </IonCol>
  );
}
