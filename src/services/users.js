import { getAxiosClient, tokenName } from "@/services/shared/http_client";
import {
  handleError,
} from "@/services/shared/errors";
import storage from "@/services/shared/storage";

export const signUp = async ({
  email,
  fecha_nacimiento,
  nivel_educativo,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
}) => {
  console.log("autenticando el usuario ...");
  const api = getAxiosClient();
  const data = { 
    email: email,
    fecha_nacimiento: fecha_nacimiento,
    nivel_educativo_id: nivel_educativo,
    conocimiento_alt_inversion_id: q1,
    experiencia_invirtiendo_id: q2,
    porcentaje_ahorro_mensual_id: q3,
    porcentaje_ahorro_invertir_id: q4,
    tiempo_mantener_inversion_id: q5,
    busca_invertir_en_id: q6,
    proporcion_inversion_mantener_id: q7,
  };

  try {
    const response = await api.post("user/signup", data);
    console.log(response);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};