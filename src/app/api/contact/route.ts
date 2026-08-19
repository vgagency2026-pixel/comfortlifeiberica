import nodemailer from "nodemailer";
import type { ContactSubmission } from "@/types";

export const runtime = "nodejs";

const MAX_SHORT_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARS_PATTERN = /[\r\n\0]/;

function readRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta configurar la variable de entorno ${name}.`);
  }
  return value;
}

function requireField(
  record: Record<string, unknown>,
  field: keyof ContactSubmission,
  maxLength: number,
  { allowNewlines = false }: { allowNewlines?: boolean } = {},
): string {
  const raw = record[field];
  if (typeof raw !== "string") {
    throw new Error(`El campo "${field}" es obligatorio.`);
  }
  const value = raw.trim();
  if (!value || value.length > maxLength) {
    throw new Error(`El campo "${field}" no es válido.`);
  }
  if (!allowNewlines && CONTROL_CHARS_PATTERN.test(value)) {
    throw new Error(`El campo "${field}" no es válido.`);
  }
  return value;
}

function parseSubmission(body: unknown): ContactSubmission {
  if (typeof body !== "object" || body === null) {
    throw new Error("Cuerpo de la solicitud inválido.");
  }
  const record = body as Record<string, unknown>;

  const submission: ContactSubmission = {
    name: requireField(record, "name", MAX_SHORT_FIELD_LENGTH),
    establishment: requireField(
      record,
      "establishment",
      MAX_SHORT_FIELD_LENGTH,
    ),
    type: requireField(record, "type", MAX_SHORT_FIELD_LENGTH),
    email: requireField(record, "email", MAX_SHORT_FIELD_LENGTH),
    message: requireField(record, "message", MAX_MESSAGE_LENGTH, {
      allowNewlines: true,
    }),
  };

  if (!EMAIL_PATTERN.test(submission.email)) {
    throw new Error("El email no es válido.");
  }

  return submission;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailText(submission: ContactSubmission): string {
  return [
    `Nombre: ${submission.name}`,
    `Establecimiento: ${submission.establishment}`,
    `Tipo de establecimiento: ${submission.type}`,
    `Email: ${submission.email}`,
    "",
    "Mensaje:",
    submission.message,
  ].join("\n");
}

function buildEmailHtml(submission: ContactSubmission): string {
  return `
    <div style="font-family: Georgia, serif; color: #2a1c17; line-height: 1.6;">
      <h2 style="font-weight: 400; margin-bottom: 24px;">Nueva solicitud de contacto</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(submission.name)}</p>
      <p><strong>Establecimiento:</strong> ${escapeHtml(submission.establishment)}</p>
      <p><strong>Tipo de establecimiento:</strong> ${escapeHtml(submission.type)}</p>
      <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(submission.message)}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let submission: ContactSubmission;
  try {
    const body: unknown = await request.json();
    submission = parseSubmission(body);
  } catch {
    return Response.json(
      { ok: false, error: "Datos de formulario inválidos." },
      { status: 400 },
    );
  }

  try {
    const smtpUser = readRequiredEnv("SMTP_USER");
    const transporter = nodemailer.createTransport({
      host: readRequiredEnv("SMTP_HOST"),
      port: Number(readRequiredEnv("SMTP_PORT")),
      secure: readRequiredEnv("SMTP_SECURE") === "true",
      auth: {
        user: smtpUser,
        pass: readRequiredEnv("SMTP_PASSWORD"),
      },
    });

    await transporter.sendMail({
      from: `"Comfort Life Ibérica" <${smtpUser}>`,
      to: process.env.CONTACT_EMAIL_TO || smtpUser,
      replyTo: submission.email,
      subject: "Nueva solicitud de contacto - Comfort Life Ibérica",
      text: buildEmailText(submission),
      html: buildEmailHtml(submission),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar el email de contacto:", error);
    return Response.json(
      { ok: false, error: "No se ha podido enviar el mensaje." },
      { status: 502 },
    );
  }
}
