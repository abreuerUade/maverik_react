import { getAxiosClient, tokenName } from "@/services/shared/http_client";
import {
    handleError,
} from "@/services/shared/errors";

export const newCopilotSession = async ({
    proposito_sesion_id,
    objetivo_id,
    capital_inicial,
    horizonte_temporal,
    tolerancia_al_riesgo_id,
}) => {
    const api = getAxiosClient();

    const data = {
        proposito_sesion_id: Number(proposito_sesion_id),
        objetivo_id: Number(objetivo_id),
        capital_inicial: Number(capital_inicial),
        horizonte_temporal: Number(horizonte_temporal),
        tolerancia_al_riesgo_id: Number(tolerancia_al_riesgo_id),
    }
    console.log(data);

    try {
        const response = await api.post("copilot/sessions", data);
        console.log(response);
        return response.data;
      } catch (error) {
        handleError(error);
      }
} 


