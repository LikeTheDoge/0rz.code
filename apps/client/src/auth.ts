import { Auth } from 'e-auth'
import { ERequest } from "e-request";

const system = new ERequest('/eco-system-server-biz')
export const auth = new Auth(system)