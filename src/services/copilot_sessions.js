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
    console.log("creando una sesion de asesoria ...");
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
};

export const sendInput = async ({
    sesion_asesoria_id,
    input,
}) => {
    console.log("enviando un input para obtener un output ...");
    const api = getAxiosClient();

    const data = {input};
    console.log(data);

    try {
        const response = await api.post(`/copilot/sessions/${sesion_asesoria_id}`, data);
        console.log(response);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};


