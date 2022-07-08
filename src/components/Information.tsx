import "../assets/styles/information.sass";
import { information } from "../assets";

const Information: React.FC = () => {
  return (
    <>
      <div className="information__container">
        <div className="information__about">
          <h1>
            РЕЕСТР
            <br /> ПРОГРАММНОГО
            <br /> ОБЕСПЕЧЕНИЯ
          </h1>
          <div className="information__content">
            <div>
              <p>
                Единый реестр программ для электронных
                <br />
                вычислительных машин и баз данных
              </p>
            </div>
            <div>
              <div className="information__reestr">
                <p>Включено ПО в реестр: </p>
                <p className="information__reestr__count"> 13 438 </p>
              </div>
              <div className="information__pravoobl">
                <p>Правообладателей: </p>
                <p className="information__pravoobl__count"> 4 272</p>
              </div>
            </div>
            <div className="information__searchInput">
              <input
                className="information__search"
                type="text"
                placeholder="Искать реестр..."
              />
              <input
                className="information__button"
                type="button"
                value="Искать"
              />
            </div>
          </div>
        </div>
        <div className="information__image">
          <img
            className="information__picture"
            src={information}
            alt="information"
          />
        </div>
      </div>
    </>
  );
};

export default Information;
