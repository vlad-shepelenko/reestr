import { plus } from "../assets";
import "../assets/styles/questions.sass";
import { questionsItems } from "./data";

const Questions: React.FC = () => {
  return (
    <div className="questions__container_main">
      <div className="questions__title">
        <h2>Вопрос-ответ</h2>
      </div>
      <div className="questions__container_secondary">
        <div className="questions__opened_question">
          <div className="question__open_icon">
            <img src={plus} alt="plus" />
          </div>
          <div className="question__content">
            Для подачи заявления необходимо подготовить
          </div>
        </div>
        <ol>
          <li>Данные для авторизации в личном кабинете.</li>
          <li>
            Квалифицированный сертификат ключа проверки электронной подписи.
          </li>
          <li>
            Сведения, документы и материалы в соответствии с Методическими
            рекомендациями.
          </li>
          <li>
            Установить специализированное ПО для подписания документов
            электронной подписью. Подписание производится с использованием
            усиленной квалифицированной (отсоединяемой) электронной подписи.
          </li>
        </ol>
        {questionsItems.map((item) => (
          <div key={item.id} className="questions__closed_question">
            <div className="question__close_icon">
              <img src={plus} alt="plus" />
            </div>
            <div className="question__close_question">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
