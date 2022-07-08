import "../assets/styles/news.sass";
import { calendar } from "../assets";
import { newsItems } from "./data";

const News: React.FC = () => {
  return (
    <>
      <div className="news__container">
        <div className="news__title">
          <h2>Новости реестра</h2>
        </div>
        <div className="news__content">
          {newsItems.map((item) => (
            <div key={item.id} className="news__content_container">
              <div className="news__image_container">
                <img
                  className="news__image"
                  src={item.image}
                  alt={item.image}
                />
              </div>
              <div className="news__text_container">
                <div className="news__name_container">{item.name}</div>
                <div className="news__calendar_container">
                  <img
                    className="news__calendar_image"
                    src={calendar}
                    alt="calendar"
                  />
                  {item.date}
                </div>
                <div className="news__content_container">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
        <input className="news__button" type="button" value="Показать всё" />
      </div>
    </>
  );
};

export default News;
