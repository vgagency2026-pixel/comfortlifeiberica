"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import type { Dictionary } from "@/lib/i18n/types";

type Status = "idle" | "submitting" | "sent";

const fieldClass =
  "peer w-full border-b border-ivory/25 bg-transparent py-4 font-body text-body text-ivory placeholder-transparent focus:border-gold-rose focus:outline-none ease-elegant transition-colors duration-500";

const labelClass =
  "font-ui text-caption uppercase tracking-[0.2em] text-ivory/50 peer-focus:text-gold-rose ease-elegant transition-colors duration-500 pointer-events-none";

export function ContactForm({
  dict,
}: {
  dict: Dictionary["contacto"]["form"];
}) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // Nota: sin backend conectado todavía. Simula el envío para validar
    // la experiencia de UI; sustituir por una ruta real antes de producción.
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-gold-rose/20 border py-16 text-center"
          >
            <p className="font-editorial text-heading-lg text-ivory">
              {dict.successTitle}
            </p>
            <p className="font-body text-body-sm text-ivory/60 mx-auto mt-4 max-w-sm">
              {dict.successText}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="relative">
                <input
                  id="name"
                  required
                  placeholder={dict.name}
                  className={fieldClass}
                />
                <label
                  htmlFor="name"
                  className={cn(labelClass, "absolute -top-4 left-0")}
                >
                  {dict.name}
                </label>
              </div>
              <div className="relative">
                <input
                  id="establishment"
                  required
                  placeholder={dict.establishment}
                  className={fieldClass}
                />
                <label
                  htmlFor="establishment"
                  className={cn(labelClass, "absolute -top-4 left-0")}
                >
                  {dict.establishment}
                </label>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="relative">
                <label
                  htmlFor="type"
                  className={cn(labelClass, "absolute -top-4 left-0")}
                >
                  {dict.type}
                </label>
                <select
                  id="type"
                  required
                  defaultValue=""
                  className={cn(
                    fieldClass,
                    "text-ivory/90 accent-gold-rose appearance-none bg-[right_0.125rem_center] bg-no-repeat pr-6",
                  )}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23C79A8B' stroke-width='1'%3E%3Cpath d='M3 6l5 5 5-5'/%3E%3C/svg%3E\")",
                  }}
                >
                  <option value="" disabled className="bg-chocolate text-ivory">
                    {dict.typePlaceholder}
                  </option>
                  {dict.typeOptions.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-chocolate text-ivory"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={dict.email}
                  className={fieldClass}
                />
                <label
                  htmlFor="email"
                  className={cn(labelClass, "absolute -top-4 left-0")}
                >
                  {dict.email}
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                required
                rows={4}
                placeholder={dict.message}
                className={cn(fieldClass, "resize-none")}
              />
              <label
                htmlFor="message"
                className={cn(labelClass, "absolute -top-4 left-0")}
              >
                {dict.message}
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group border-gold-rose text-ivory ease-elegant hover:text-chocolate relative inline-flex items-center gap-3 overflow-hidden border px-10 py-4 transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span
                aria-hidden
                className="bg-gold-rose ease-elegant absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="font-ui text-overline relative tracking-[0.25em] uppercase">
                {status === "submitting" ? dict.submitting : dict.submit}
              </span>
            </button>

            <p className="font-ui text-caption text-ivory/40">{dict.note}</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
