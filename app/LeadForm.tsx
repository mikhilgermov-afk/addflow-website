"use client";

import { FormEvent, useState } from "react";

export function LeadForm() {
  const [role, setRole] = useState("Рекламодатель");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Заявка AddFlow - ${role}`);
    const body = encodeURIComponent([
      `Имя / компания: ${data.get("name")}`,
      `Роль: ${role}`,
      `Контакт: ${data.get("contact")}`,
      `Задача: ${data.get("message") || "-"}`,
    ].join("\n"));
    setSent(true);
    window.location.href = `mailto:hello@addflow.ru?subject=${subject}&body=${body}`;
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="role-switch" aria-label="Выберите роль">
        {["Рекламодатель", "Стример"].map((item) => <button key={item} className={role === item ? "active" : ""} type="button" onClick={() => setRole(item)}>{item}</button>)}
      </div>
      <label><span>Как к вам обращаться</span><input name="name" required placeholder="Имя или компания" /></label>
      <label><span>Куда написать</span><input name="contact" required placeholder="Telegram или email" /></label>
      <label><span>Коротко о задаче</span><textarea name="message" rows={3} placeholder="Например: запуск игрового продукта" /></label>
      <button className="submit-button" type="submit">Отправить заявку <span>↗</span></button>
      <p className="form-note">{sent ? "Заявка открыта в вашем почтовом приложении." : "Нажимая кнопку, вы соглашаетесь на обработку данных."}</p>
    </form>
  );
}
