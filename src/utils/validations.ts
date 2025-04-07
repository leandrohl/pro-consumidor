"use client"

import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  whatsapp: z.string().optional(),
  email: z.string().email("Insira um e-mail válido").optional().or(z.literal("")),
  socialMedia: z.string().min(1, "Insira a rede social"),
  problem: z.string().min(1, "Descreva seu problema"),
}).refine(data => data.email || data.whatsapp, {
  message: "Informe pelo menos um meio de contato: E-mail ou WhatsApp",
  path: ["email"],
});
