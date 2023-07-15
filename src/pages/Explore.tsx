import "swiper/css";
import "swiper/css/effect-cards";
import "./Explore.css";

import { Autoplay, Pagination, Thumbs } from "swiper/modules";
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { chevronUpCircle, colorPalette, globe, help } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";

import { EffectCards } from "swiper/modules";
import breakfastMeal from "../assets/breakfast-meal.png";
import brownIcedCoffee from "../assets/brown-iced-coffee.png";
import ensaymada from "../assets/ensaymada.png";
import tclPic1 from "../assets/outdoor-renders/TCL - PICTURE 1 (OUTSIDE).png";
// import tlcBanner from "../assets/tlc_banner.png";
import tclPic1Indoor1stFloor from "../assets/indoor-renders/TCL - PICTURE 1 (1ST FLOOR).png";
import tclPic1Indoor2ndFloor from "../assets/indoor-renders/TCL - PICTURE 1 (2ND FLOOR).png";
import tclPic2 from "../assets/outdoor-renders/TCL - PICTURE 2 (OUTSIDE).png";
import tclPic2Indoor1stFloor from "../assets/indoor-renders/TCL - PICTURE 2 (1ST FLOOR).png";
import tclPic2Indoor2ndFloor from "../assets/indoor-renders/TCL - PICTURE 2 (2ND FLOOR).png";
import tclPic3 from "../assets/outdoor-renders/the-coffee-lounge-2nd-floor-facing-from-the-outside-railing-day.png";
import tclPic3Indoor1stFloor from "../assets/indoor-renders/TCL - PICTURE 3 (1ST FLOOR).png";
import tclPic3Indoor2ndFloor from "../assets/indoor-renders/TCL - PICTURE 3 (2ND FLOOR).png";
import tclPic4Indoor1stFloor from "../assets/indoor-renders/TCL - PICTURE 4 (1ST FLOOR).png";
import tclPic4Indoor2ndFloor from "../assets/indoor-renders/TCL - PICTURE 4 (2ND FLOOR).png";
import tclPic5Indoor1stFloor from "../assets/indoor-renders/TCL - PICTURE 5 (1ST FLOOR).png";
import tclPic5Indoor2ndFloor from "../assets/indoor-renders/TCL - PICTURE 5 (2ND FLOOR).png";
import tclPic6Indoor2ndFloor from "../assets/indoor-renders/TCL - PICTURE 6 (2ND FLOOR).png";
import tclPic7Indoor1stFloor from "../assets/indoor-renders/the-coffee-lounge-ground-floor-realistic.png";
import { warningOutline } from "ionicons/icons";

const Explore: React.FC = () => {
  // Online state
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  const contentRef = useRef<HTMLIonContentElement>(null);
  const scrollToTop = () => {
    contentRef.current && contentRef.current.scrollToTop(300);
  };

  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <IonPage>
      {!isOnline && (
        <IonHeader>
          <IonToolbar>
            <IonTitle>Explore</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}

      <IonContent fullscreen scrollEvents={true} ref={contentRef}>
        <div className="ion-padding">
          <div style={{ marginBottom: "50px" }}>
            <IonText>
              <h1>Welcome</h1>
            </IonText>
            <IonText>
              <p>
                The Coffee Lounge is a public, five-star coffee shop, located in
                the heart of Metro Manila.
              </p>
              <p>
                Serving exceptional coffee, partnered with our famous bread
                products, your experience in The Coffee Lounge will be nothing
                short of extravagant and relaxing.
              </p>
              <img src={tclPic2} style={{ borderRadius: "10px" }} />
            </IonText>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <IonText>
              <h1>About Us</h1>
            </IonText>
            <IonText>
              <p>
                Established in 2020, The Coffee Lounge first started as a simple
                experiment by its owner, Mr. Adriane James Puzon. Starting in a
                small apartment room hidden in the heart of Makati, the menu
                only consisted of 5 coffee drinks, and never consisted of any
                breakfast nor bread.
              </p>
            </IonText>
            <img src={tclPic3} style={{ borderRadius: "10px" }} />
            <IonText>
              <p>
                However, with more customers coming back to The Coffee Lounge,
                extensions were needed, and in 2021, The Coffee Lounge finally
                opened its new and improved shop, which became a 2-storey shop,
                where its customers can bring their colleagues to relax, while
                giving enough workspace to work on group projects.
              </p>
            </IonText>
            <img src={tclPic1} style={{ borderRadius: "10px" }} />
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <Swiper
            autoplay={{
              delay: 2500,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, EffectCards]}
            effect={"cards"}
          >
            <SwiperSlide>
              <IonCard>
                <img src={tclPic1Indoor1stFloor} />
                <IonCardHeader>
                  <IonCardTitle>Ground Floor Lounge</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Experience the luxurious and comfortable Ground Floor
                      Lounge, perfect for relaxation and socializing. Enjoy the
                      stylish decor and cozy ambiance.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic2Indoor1stFloor} />
                <IonCardHeader>
                  <IonCardTitle>Entrance</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Welcome to our stunning venue! Step through our
                      magnificent entrance and be greeted by a grand atmosphere
                      that sets the tone for an unforgettable experience.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic3Indoor1stFloor} />
                <IonCardHeader>
                  <IonCardTitle>Ground Floor VIP Area</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Indulge in the VIP treatment at our exquisite Ground Floor
                      VIP Area. Relax in utmost comfort while enjoying exclusive
                      services and amenities.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic7Indoor1stFloor} />
                <IonCardHeader>
                  <IonCardTitle>Ground Floor VIP Area</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Our Ground Floor VIP Area offers a private and
                      sophisticated space for distinguished guests. Enjoy
                      top-notch service and a lavish environment.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic4Indoor1stFloor} />
                <IonCardHeader>
                  <IonCardTitle>Ground Floor Bar</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Quench your thirst and savor delicious beverages at our
                      vibrant Ground Floor Bar. Immerse yourself in the
                      energetic ambiance and enjoy a wide selection of drinks.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic5Indoor1stFloor} />
                <IonCardHeader>
                  <IonCardTitle>Ground Floor Bar</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Experience the lively atmosphere and socialize with
                      friends at our Ground Floor Bar. Enjoy crafted cocktails,
                      fine wines, and a memorable night out.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic1Indoor2ndFloor} />
                <IonCardHeader>
                  <IonCardTitle>2nd Floor Balcony</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Step out onto our breathtaking 2nd Floor Balcony and enjoy
                      panoramic views of the surroundings. Take in the sights
                      and create lasting memories in this enchanting space.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic2Indoor2ndFloor} />
                <IonCardHeader>
                  <IonCardTitle>2nd Floor Lounge</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Relax and unwind in our elegant 2nd Floor Lounge. Whether
                      you're seeking a cozy corner or a social setting, this
                      space offers comfort and style.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic3Indoor2ndFloor} />
                <IonCardHeader>
                  <IonCardTitle>2nd Floor Bar</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Indulge in the finest beverages and enjoy a vibrant
                      atmosphere at our 2nd Floor Bar. Immerse yourself in the
                      energy and socialize with fellow patrons.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic4Indoor2ndFloor} />
                <IonCardHeader>
                  <IonCardTitle>2nd Floor VIP Area</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Experience true luxury in our exclusive 2nd Floor VIP
                      Area. Indulge in personalized service, privacy, and an
                      opulent environment designed for VIP guests.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic5Indoor2ndFloor} />
                <IonCardHeader>
                  <IonCardTitle>2nd Floor B Function Room</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Host your special events and gatherings in our versatile
                      2nd Floor B Function Room. Enjoy a spacious setting with
                      customizable features for a memorable occasion.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <img src={tclPic6Indoor2ndFloor} />
                <IonCardHeader>
                  <IonCardTitle>2nd Floor Function Rooms</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>
                      Discover our well-appointed 2nd Floor Function Rooms,
                      designed to accommodate various events. Whether it's a
                      conference, wedding, or party, we have the ideal space for
                      you.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
          </Swiper>
        </div>
        {isOnline && (
          <>
            <iframe
              width={window.innerWidth - 1}
              height={window.innerHeight}
              style={{
                backgroundColor: "#CCCCCC",
                border: "none",
                outline: "none",
                touchAction: "none",
              }}
              tabIndex={1}
              src="https://tcl-3dview-only.vercel.app"
            ></iframe>
            <IonFab slot="fixed" horizontal="end" vertical="bottom">
              <IonFabButton>
                <IonIcon src={chevronUpCircle}></IonIcon>
              </IonFabButton>
              <IonFabList side="top">
                <IonFabButton onClick={() => setHelpOpen(true)}>
                  <IonIcon icon={help}></IonIcon>
                </IonFabButton>
                <IonFabButton onClick={() => scrollToTop()}>
                  <IonIcon src={chevronUpCircle}></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>
            <IonAlert
              isOpen={helpOpen}
              header={"3D View Help"}
              buttons={["OK"]}
              message="Pinch to move forward, pinch in to move backward. Tap and hold
              change direction."
              onDidDismiss={() => setHelpOpen(false)}
            ></IonAlert>
          </>
        )}
        {!isOnline && (
          <IonCard>
            <IonCardHeader>
              <IonIcon src={warningOutline} size="large" />
            </IonCardHeader>
            <IonCardContent>
              <h2>Please connect to the internet to enable 3D View</h2>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Explore;
