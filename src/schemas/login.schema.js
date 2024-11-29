import {z} from "zod";
import {toTypedSchema} from "@vee-validate/zod";

export const LoginFormSchema = toTypedSchema(z.object({
    email: z.string().min(1),
    password: z.string().min(1),
}));
