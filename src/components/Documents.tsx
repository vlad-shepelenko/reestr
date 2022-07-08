import "../assets/styles/documents.sass";
import { documentsItems } from "./data";
import { documements, download } from "../assets";

const Documents: React.FC = () => {
  return (
    <div className="documents__container">
      <div className="documents__title">
        <h2>Документы</h2>
        <div className="documents__count">
          <p>Всего документов: </p>
          <p className="count__documents">&nbsp;5</p>
        </div>
      </div>

      <div className="documents__table">
        <table className="documents__table_contents">
          <thead className="documents__table_title">
            <tr className="documents__table_head">
              <th className="documents__table_category">Категория</th>
              <th className="documents__table_name">Наименование</th>
              <th className="documents__table_date">Дата</th>
              <th className="documents__table_number">Номер</th>
              <th className="documents__table_th">
                <div>
                  <img
                    className="documents__icon"
                    src={documements}
                    alt="document"
                  />
                </div>
                <div>Содержание</div>
              </th>
            </tr>
          </thead>
          <tbody className="documents__table_tbody">
            {documentsItems.map((item) => (
              <tr key={item.id} className="documents__table_line">
                <td className="documents__table_category">
                  <div>{item.category}</div>
                </td>
                <td className="documents__table_name">
                  <div>{item.name}</div>
                </td>
                <td className="documents__table_date">
                  <div>{item.date}</div>
                </td>
                <td className="documents__table_number">
                  <div>{item.number}</div>
                </td>
                <td className="documents__table_content">
                  <div className="documents__download_container">
                    <img
                      className="documents__download"
                      src={download}
                      alt="download"
                    />
                  </div>
                  <div>
                    Скачать
                    <br />
                    {item.content}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
