import "../assets/styles/registries.sass";
import { filter, more, sort } from "../assets";
import { registriesItems } from "./data";

const Registries: React.FC = () => {
  return (
    <>
      <div className="registries__container">
        <div className="registries__header">
          <div>
            <h2>Реестры</h2>
          </div>
          <div className="registries__header_icons">
            <div className="registries__header_div_icon">
              <img src={filter} alt="filter" />
            </div>
            <div className="registries__header_div_icon">
              <img src={more} alt="more" />
            </div>
          </div>
        </div>

        <div className="registries__table">
          <table className="registries__table_contents">
            <thead className="registries__table_title">
              <tr className="registries__table_head">
                <th className="registries__table_th">
                  <div>
                    <img
                      className="registries__table_image"
                      src={sort}
                      alt="sort"
                    />
                  </div>
                  <div>
                    Регистрационный
                    <br />
                    номер
                  </div>
                </th>
                <th className="registries__table_th">
                  <div>
                    <img
                      className="registries__table_image"
                      src={sort}
                      alt="sort"
                    />
                  </div>
                  <div>
                    Наименование <br />
                    программного обеспечения
                  </div>
                </th>
                <th>
                  Код
                  <br />
                  класса
                </th>
                <th>
                  Класс программного <br />
                  обеспечения
                </th>
                <th>
                  Дата <br />
                  регистрации
                </th>
                <th>
                  Адрес <br />
                  сайта
                </th>
              </tr>
            </thead>
            <tbody className="registries__table_tbody">
              {registriesItems.map((item) => (
                <tr key={item.id} className="registries__table_line">
                  <td className="registries__table_id">
                    <div>#{item.id}</div>
                  </td>
                  <td className="registries__table_name">
                    <div>{item.name}</div>
                  </td>
                  <td className="registries__table_classID">
                    <div>{item.classID}</div>
                  </td>
                  <td className="registries__table_className">
                    <div>{item.className}</div>
                  </td>
                  <td className="registries__table_date">
                    <div>{item.date}</div>
                  </td>
                  <td className="registries__table_link">
                    <div>
                      <a href={item.link}>Ссылка</a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="registries__pagination">
          <div className="pagination">
            <a href="https://www.google.com/" className="inactive">
              &laquo;
            </a>
            <a href="https://www.google.com/">&lsaquo;</a>
            <a href="https://www.google.com/" className="active">
              1
            </a>
            <a href="https://www.google.com/">2</a>
            <a href="https://www.google.com/">3</a>
            <a href="https://www.google.com/">4</a>
            <a href="https://www.google.com/">5</a>
            <a href="https://www.google.com/">...</a>
            <a href="https://www.google.com/">112</a>
            <a href="https://www.google.com/">113</a>
            <a href="https://www.google.com/">&rsaquo;</a>
            <a href="https://www.google.com/">&raquo;</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registries;
