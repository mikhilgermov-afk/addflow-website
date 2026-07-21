"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "./LanguageContext";

export function LeadForm() {
  const { t } = useLanguage();
  const [role, setRole] = useState<"advertiser" | "creatorRole">("advertiser");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${t("mailSubject")} - ${t(role)}`);
    const body = encodeURIComponent([
      `${t("mailName")}: ${data.get("name")}`,
      `${t("mailRole")}: ${t(role)}`,
      `${t("mailContact")}: ${data.get("contact")}`,
      `${t("mailTask")}: ${data.get("message") || "-"}`,
    ].join("\n"));
    setSent(true);
    window.location.href = `mailto:hello@addflow.ru?subject=${subject}&body=${body}`;
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="role-switch" aria-label={t("chooseRole")}>
        {(["advertiser", "creatorRole"] as const).map((item) => <button key={item} className={role === item ? "active" : ""} type="button" onClick={() => setRole(item)}>{t(item)}</button>)}
      </div>
      <label><span>{t("nameLabel")}</span><input name="name" required placeholder={t("namePlaceholder")} /></label>
      <label><span>{t("contactLabel")}</span><input name="contact" required placeholder={t("contactPlaceholder")} /></label>
      <label><span>{t("taskLabel")}</span><textarea name="message" rows={3} placeholder={t("taskPlaceholder")} /></label>
      <button className="submit-button" type="submit">{t("submit")} <span>↗</span></button>
      <p className="form-note">{sent ? t("sent") : t("privacy")}</p>
    </form>
  );
}
