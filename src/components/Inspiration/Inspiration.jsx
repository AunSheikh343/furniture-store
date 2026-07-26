import styles from "./Inspiration.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import room1 from "../../assets/image/room1.jpg";
import room2 from "../../assets/image/room2.jpg";
import room3 from "../../assets/image/room3.jpg";
import room4 from "../../assets/image/room4.jpg";

function Inspiration() {
  const rooms = [
    {
      id: 1,
      image: room1,
      title: "Bedroom",
      number: "01",
    },
    {
      id: 2,
      image: room2,
      title: "Living Room",
      number: "02",
    },
    {
      id: 3,
      image: room3,
      title: "Dining Room",
      number: "03",
    },
    {
      id: 4,
      image: room4,
      title: "Workspace",
      number: "04",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.wrapper}>

          <div className={styles.left}>

            <h2>
              Beautiful Rooms
              <br />
              Inspiration
            </h2>

            <p>
              Our designers have created beautiful living spaces
              that combine comfort, style, and functionality.
              Explore inspiring room ideas for your dream home.
            </p>

            <button>Explore More</button>

          </div>

          <div className={styles.right}>

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
            >

              {rooms.map((room) => (

                <SwiperSlide key={room.id}>

                  <div className={styles.slide}>

                    <img
                      src={room.image}
                      alt={room.title}
                    />

                    <div className={styles.info}>

                      <span>{room.number}</span>

                      <h3>{room.title}</h3>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Inspiration;