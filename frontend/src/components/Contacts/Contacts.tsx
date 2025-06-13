import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2>Маєте запитання чи пропозиції?</h2>
        <p>Розкажіть, що вас цікавить — і ми подбаємо про решту.</p>

        <form className={styles.form} action="#" method="POST">
          <label className={styles.label} htmlFor="name">
            Ваше ім’я
          </label>
          <input type="text" id="name" placeholder="Христина" required />

          <label className={styles.label} htmlFor="contact">
            Контактні дані (email або телефон)
          </label>
          <input
            type="text"
            id="contact"
            placeholder="khrystyna22@gmail.com"
            required
          />

          <label className={styles.label} htmlFor="message">
            Залиште своє повідомлення (опційно)
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Маю запит щодо закупівлі. Напишіть, будь ласка, умови."
          ></textarea>

          <input className={styles.submit} type="submit" value="відправити" />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
